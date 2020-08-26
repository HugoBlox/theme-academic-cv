---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "ConsIndShockFastModel"
subtitle: ""
summary: ""
authors: []
tags: ["GSOC", "Econ-Ark"]
categories: []
date: 2020-07-27T14:17:50-04:00
lastmod: 2020-07-27T14:17:50-04:00
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

In this post I will go over my latest PR on econ-ark/HARK.

The goal of this PR is to create a mirror to `ConsIndShockModel.py`, but that implements faster solutions using `numba` just-in-time compiling and optimization.

### `PerfForesightSolution`

The first step is to create a solution object called `PerfForesightSolution` that contains only python primitives and `numba` arrays. This object takes the place of `ConsumerSolution`, which creates additional HARK objects and can lead to unnecessary time overhead in the solution iteration. The `distance_criteria` for this solution is `["cNrm", "mNrm"]`, which is identical to the `distance_criteria` for `ConsumerSolution` but more straight forward. This `ConsumerSolution` replacement is faster because instead of having to create HARK objects such as `cFunc`, `vFunc`, etc. as `LinearInterpolator`s for every solution iteration, the solution method or algorithm only really needs the primitives that compose these objects. Below I will describe in more detail how this object is used in the solver.

### `ConsPerfForesightFastSolver`

The next step is to create a solver that replaces `ConsPerfForesightSolver`, aptly called `ConsPerfForesightFastSolver`. The object uses a `numba`-optimized helper function called `solveConsPerfForesightNumba`. In this implementation, the outputs of this helper method are packaged into a `PerfForesightSolution` object instead of a `ConsumerSolution` object. As I mentioned, this avoids the needless creation of other HARK objects in the iteration, leaving the creation of a proper HARK solution to the end of the iteration. An additional feature that has been removed from the solution iteration is the searching of steady-state normalized market resources with `addSSmNrm()`. As the iteration does not depend on this result as an intermediate input, this can be safely moved to the end of the solution method, or rather to `postSolve()`.

### `PerfForesightFastConsumerType`

Finally, I create an agent that can use the above solution method called `PerfForesightFastConsumerType`. Since now the solution iteration uses `PerfForesightSolution`, I first override `solution_terminal_ = PerfForesightSolution()`. Then, on `__init__`, I override `solveOnePeriod` to `ConsPerfForesightFastSolver`. Since I am overriding the solution_terminal_, I might still need a `ConsumerSolution` terminal in the case of a non-infinite problem. So, I override the method `updateSolutionTerminal()` to save an internal `ConsumerSolution` version of the `solution_terminal`. The final step is to implement a `postSolve()` method to wrap every `PerfForesightSolution` parameter into a HARK object and to run `addSSmNrmNumba()` only on the final solution. As I had mentioned, there is no need to create these objects at every iteration step of the solution, and it is thus more efficient to leave them to `postSolve()`. Now, ideally, the output of `solve()` is the same between the standard HARK approach and the fast approach, a list of `ConsumerSolution` objects with `cFunc`, `vFunc`, etc. as HARK `LinearInterpolator`s.

### Checking for Equality

Having proposed a new agent type and solution that should be equivalent, or ideally identical, I then focus on implementing `__eq__` methods for `==` comparison. In the class definition of `ConsumerSolution` in `ConsIndShockModel.py`, I add this method. The logic is that if the solution is a subclass of a `HARKobject` (which I presume all solutions should be), and if one of the solutions is a subclass of the other (for the two solutions being compared), and if the other solution has an attribute called `"tolerance"`, then if the `distance` between both solutions is smaller than the `tolerance` of both solutions, then the solutions are `equal`, otherwise they are not. For this, I had to create a dummy attribute for `ConsumerSolution` as `tolerance = 0.000001`, although I argue that the solution should inherit "solution method parameters" such as `tolerance`, `solution_distance`, and `completed_cycles`. Although this works for comparing standard HARK approach and fast approach, there might be other cases where this should be revised.

For comparing whether two models are the same, I added an `__eq__` method to `PerfForesightConsumerType`. The logic is that if the corresponding agent being compared to is a subclass of `AgentType`, and if one of the models is a subclass of the other (for the two models being compared), and if the other agent has an attribute called `"params"`, then the models are equal if the `params` dictionaries are the same, where equality between dictionaries is built in. For this, I had to make `params` an attribute of `PerfForesightConsumerType`, and additionally I had to add cycles to `params`, to differentiate between finite and infinite horizon models with otherwise identical parameters.
