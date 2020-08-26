---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "ConsIndShockSolverNumba"
subtitle: ""
summary: ""
authors: []
tags: ["GSOC", "Econ-Ark"]
categories: []
date: 2020-07-13T14:12:49-04:00
lastmod: 2020-07-13T14:12:49-04:00
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

Over the last few weeks I've worked on a `numba` version of [`ConsIndShockSolver`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/ConsumptionSaving/IndShockNumbaModel.py#L757) in `IndShockNumbaModel.py`. For this, I created two `numba` helper functions, [`solveConsIndShockCubicNumba`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/ConsumptionSaving/IndShockNumbaModel.py#L255) for solving using a cubic approximation for the consumption policy function, and [`addvFuncNumba`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/ConsumptionSaving/IndShockNumbaModel.py#L366) for calculating the value function during the solution.

### `solveConsIndShockCubicNumba`

In the previous post, I described the process of linearly interpolating the value function using `interp` from i`nterpolation.py`. For the cubic version, I needed to use a similar cubic interpolator that worked with `numba`, but using tools from `interpolation.py` did not seem straightforward. However, I had created a basic `numba` cubic interpolator for my own purposes previously, and added these functions to [`HARK.numba`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/numba.py#L371). A more thorough overview of what these do is [presented here](https://gist.github.com/alanlujan91/21975ca59f866eed10b759e0d5cab79e), but below I briefly explain.

The function [`splrep`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/numba.py#L371-L402) taxes 1-d vectors `x` and `y`, where `y=f(x)` for some function `f`, and creates interpolating coefficients using a complete cubic spline method. The function returns a 1-d vector of coefficients, which we can call `z`. The function [`splevec`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/numba.py#L407-L438) then takes 1-d vectors `x0`, `x`, `y`, and `z`, where `y=f(x)`, `z` are interpolating coefficients, and `x0` contains values where we need an approximation for f, and returns an approximation `y0=g(x0)`, where `g` is the cubic spline approximation. The [final code](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/ConsumptionSaving/IndShockNumbaModel.py#L314-L318) looks like this:

```python
cFuncCoeffs = splrep(sn_cFunc_x_list, sn_cFunc_y_list)
cFuncNext = splevec(mNrmNext.flatten(), sn_cFunc_x_list, sn_cFunc_y_list, cFuncCoeffs)
vPfuncNext = (cFuncNext ** -CRRA).reshape(mNrmNext.shape)
```

The same process is used to calculate [`vPPfuncNext`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/ConsumptionSaving/IndShockNumbaModel.py#L335-L339).

### `addvFuncNumba`

This section uses the same process above to calculate a cubic approximation of [`vfuncNext`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/ConsumptionSaving/IndShockNumbaModel.py#L391-L394) on current resources. The only novel part of this section is the use of `@vectorize` on the different kind of utility functions. Instead of importing utilities from `HARK.utilities`, I have created basic `numba` implementations of utilities by simply adding `@vectorize` decorators in [`HARK.numba`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/numba.py#L18). In the future, these vectorized functions could be easily adaptable to GPU processing by adding [`target="cuda"`](https://numba.pydata.org/numba-doc/latest/cuda/ufunc.html) as a parameter. Instead of creating lambda functions with a set CRRA parameter, however, I use the full call [`f(c,crra)`](https://github.com/alanlujan91/HARK/blob/e2486f3da3dde8707ca4f8af0a3177e6ccc1e2ef/HARK/ConsumptionSaving/IndShockNumbaModel.py#L429) for all `f` in utilities, which is used to reduce overhead and prevent `numba` recompiling. The solver appears to work, although there will be numerical differences given different interpolators that need to be explored further.
