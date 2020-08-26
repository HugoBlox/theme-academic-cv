---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "IndShockConsumerTypeNumba"
subtitle: ""
summary: ""
authors: []
tags: ["GSOC", "Econ-Ark"]
categories: []
date: 2020-06-28T13:48:08-04:00
lastmod: 2020-06-28T13:48:08-04:00
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

Since the last post I've worked on a `numba` version of `IndShockConsumerType` in [IndShockNumbaModel.py](https://github.com/alanlujan91/HARK/blob/GPUHARK/HARK/ConsumptionSaving/IndShockNumbaModel.py). The class [`IndShockConsumerTypeNumba`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L935) is the same as `IndShockConsumerType`, but now I use a "flat" `numba` optimized solvers called [`ConsIndShockNumbaSolverBasic`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L451) and [`ConsIndSchockSolverNumba`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L757).

### `ConsIndShockNumbaSolverBasic`

The method [`prepareToSolve`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L628) implements the machinery of `ConsIndShockSetup`. Beyond the steps that have been described before to translate code from standard python to `numba`, this method didn't need much alteration.

#### `solveConsIndShockNumba` in `ConsIndShockNumbaSolverBasic`

The method [`solve`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L686) implements the machinery of `ConsIndShockSolverBasic`. I will describe the few modifications that were needed in detail.

The first hurdle was due to the fact that `numba` does not yet have optimized implementations of [`np.tile`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L40-L54) and [`np.insert`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L57-L73). With the hopes that these methods are implemented in the future, I wrote two basic 'placeholders' that take the same parameters in the exact same format, and instead uses a combination of other `numpy` methods that `numba` does support. For example, the way `np.insert` is being used is to insert `values` into `array` before index 0, which can be done instead by converting `values` to an array, then appending `array` at the end. If and when `numba` implements these two methods, the code can be changed by adding `np.-` back to the call.

The next big hurdle was to replace the call to [`vPfuncNext`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L221-L223), a HARK object, in `calcEndOfPrdvP`. After inspection, it appears that `vPfuncNext` is a `MargValueFunc`, which is itself an instance of `LowerEnvelope`. What `MargValueFunc` does is take a `cFunc` and apply the function `c**-gam`, so I can just do that myself, assuming I can calculate `c` first. This is where `LowerEnvelope `comes into place, since `cFunc` is an instance of `LowerEnvelope` and thus composed of several functions. Assuming I can get `cFunc.x_list` and `cFunc.y_list` (for now, will touch on this later), I can linearly interpolate `cFuncNext` given `mNrmNext`, using `interp` from interpolation.py.

Doing this, however, was not as easy as expected. I may have found a bug (or perhaps a feature request) on the method `interp`. Calling `interp(x_list,y_list,values)` where `values` is an `ndarray` (more than 1 dimension), returned only an array output (1 dimension) which appeared to only interpolate along the first value of axis 0. More clearly, if `values.shape = (x,y)`, then `output.shape = (x,)`. Clearly, this is not what I need, so to fix this issue, I flatten `values`, then `reshape` the output. The final code looks like this:

```python
cFuncNext = interp(sn_cFunc_x_list, sn_cFunc_y_list, mNrmNext.flatten())
vPfuncNext = (cFuncNext ** -CRRA).reshape(mNrmNext.shape)
```

As I mentioned before, I assumed the existence of `cFunc.x_list` and `cFunc.y_list`, which are inputs to the `solveConsIndShockNumba` method. Since `cFunc` is an instance of `LowerEnvelope`, these attributes do not exist directly, therefore, I need to create them. For `cFunc.x_list`, I simply used `self.aXtraGrid`, which is the resource grid. For `cFunc.y_list` I unfortunately need to call [`cFunc(cFunc_x_list)`](https://github.com/alanlujan91/HARK/blob/31fe021a58746d0156842d4b6fd2b3f47b46c3c2/HARK/ConsumptionSaving/IndShockNumbaModel.py#L700-L701), which uses the internals of `LowerEnvelope` to linearly interpolate over `cFunc_x_list`. This linear interpolation is not `numba` optimized, and may be a bottleneck to the code.
