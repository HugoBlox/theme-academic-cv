---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Just-in-time Compiling with Numba"
subtitle: ""
summary: ""
authors: []
tags: ["GSOC", "Econ-Ark"]
categories: []
date: 2020-06-14T12:05:07-04:00
lastmod: 2020-06-14T12:05:07-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

This week I worked on implementing a [numba](https://numba.pydata.org/) version of `PerfForesightConsumerType` in [ConsIndShockNumba.py](https://github.com/alanlujan91/HARK/blob/GPUHARK/HARK/ConsumptionSaving/ConsIndShockNumba.py). The class [`PerfForesightConsumerTypeNumba`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L544-L548) is a child class of `PerfForesightConsumerType`, inheriting most of the existing structure but changing the solver to a `numba` implementation called [`ConsPerfForesightSolverNumba`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L321).

The class [`ConsPerfForesightSolverNumba`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L321) itself inherits from the standard `ConsPerfForesightSolver` class, but modifies certain methods to allow for `numba` just-in-time compiling. In particular, the methods [`makePFcFunc`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L327-L361) and [`addSSmNrm`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L363-L390) are computationally intensive and would benefit most from jit-compiling.

First, I created an global jitted function called [`makePFcFuncNumba`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L44-L146) that takes only primitives and (`numpy`) arrays. While most of the code can stay as in `makePFcFunc`, `numba` implementations of `numpy` ufuncs can only take `numpy` arrays, and not lists. This is easily adaptable by replacing any `[x,y]` with `np.array([x,y])` , as in [this instance](https://github.com/alanlujan91/HARK/blob/GPUHARK/HARK/ConsumptionSaving/ConsIndShockNumba.py#L107-L110). Any assignments to objects or code that can not be implemented in `numba` are left to the class function to take care of, such as creating a `LinearInterp` instance for `cfunc` [here](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L361).

Implementing [`addSSmNrmNumba`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L159-L174)took a bit more work. This method uses calls to `cfunc`, which is an instance of `LinearInterp`, to find roots using `scipy.optimize.newton`. Again, `numba` does not (yet) support user defined classes (although there is `@jitclass`, which could be interesting to look into) or non-jitted functions such as those from `scipy`, so we need alternatives to both. As a replacement to `LinearInterp`, I used interpolation.py from [EconForge](https://github.com/EconForge). This replacement is straightforward; instead of cfunc(m), I take the parameters that created `cfunc` and use [`interp(mNrmNow, cNrmNow, m)`](https://github.com/alanlujan91/HARK/blob/GPUHARK/HARK/ConsumptionSaving/ConsIndShockNumba.py#L154) which returns the interpolated value of the consumption function at `m`.

In the standard (non-`numba`) implementation of `ConsPerfForesightSolver`,  `scipy`'s newton takes 2 parameters, `func` and `x0`. This means, according to the documentation, that without `fprime`, `scipy` will default to a newton secant algorithm. Fortunately, I know just the library that has jitted optimization functions, [QuantEcon](https://quantecon.org/). I thus use [`quantecon.optimize.newton_secant`](https://github.com/QuantEcon/QuantEcon.py/blob/ca8fb06b52b3cb9b5a53702fbd1090eb7a6dcbd5/quantecon/optimize/root_finding.py#L196-L274) in place of `scipy`'s newton for root-finding. Another shortcoming of `numba` is that lambda functions can not be passed as arguments to jitted functions, such as quantecon's `newton_secant`. Thus I create an additional [`searchSSfuncNumba`](https://github.com/alanlujan91/HARK/blob/f9927820d0d9d972e27be1689dbbc8acc9cb64e0/HARK/ConsumptionSaving/ConsIndShockNumba.py#L149-L156) to be used by `newton_secant`.

These small changes create significant gains in speed, even while I haven't parallelized or used gpu computing, only just-in-time compiling. For some basic benchmarks on my system (`Intel Core i7-8565U CPU @ 1.80GHz, 1992 Mhz, 4 Cores, 8 Logical Processors, 16.0 GB RAM`), see [`PerfForesightConsumerType.ipynb`](https://github.com/alanlujan91/HARK/blob/GPUHARK/examples/ConsIndShockModel/PerfForesightConsumerType.ipynb) and [`PerfForesightConsumerTypeNumba.ipynb`](https://github.com/alanlujan91/HARK/blob/GPUHARK/examples/ConsIndShockModel/PerfForesightConsumerTypeNumba.ipynb) for a comparison. Using `%timeit`, the standard solution reports `234 ms ± 82 ms per loop (mean ± std. dev. of 7 runs, 1 loop each)`, while the numba-fied solution comes in at `63.1 ms ± 1.36 ms per loop (mean ± std. dev. of 7 runs, 10 loops each)`, meaning the numba version is almost 4 times faster. It is important to note, however, that `%timeit` runs several loops of the same command and reports averages, but with numba implementations the first call always takes significantly more time, as it performs just-in-time compiling. So if we were to compare first run to first run, the numba implementation would be significantly slower. Nevertheless, `PerfForesightConsumerType` is a simple model, and as a proof of concept this exercise was instructive.

I will next work on implementing a numba version of `IndShockConsumerType`. Perhaps with a more complex model the gains from using numba will be more apparent, even at first run.
