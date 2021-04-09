---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: A parallelizable augmented Lagrangian method applied to large-scale non-convex-constrained
  optimization problems
subtitle: ''
summary: ''
authors:
- Natashia Boland
- Jeffrey Christiansen
- Brian Dandurand
- Andrew Eberhard
- Fabricio Oliveira
tags: [Lagrangian-based decomposition methods, Stochastic programming]
categories: [Efficient formulations and solution methods, Decision making under uncertainty]
keywords: 
- '"Augmented Lagrangian method"'
- '"Nonlinear block Gauss–Seidel method"'
- '"Parallel computing"'
- '"Proximal bundle method"'
- '"Simplicial decomposition method"'
date: '2019-05-01'
lastmod: 2020-08-27T16:01:38+03:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2020-08-27T13:01:38.582624Z'
publication_types:
- 2
abstract: We contribute improvements to a Lagrangian dual solution approach applied
  to large-scale optimization problems whose objective functions are convex, continuously
  differentiable and possibly nonlinear, while the non-relaxed constraint set is compact
  but not necessarily convex. Such problems arise, for example, in the split-variable
  deterministic reformulation of stochastic mixed-integer optimization problems. The
  dual solution approach needs to address the nonconvexity of the non-relaxed constraint
  set while being efficiently implementable in parallel. We adapt the augmented Lagrangian
  method framework to address the presence of nonconvexity in the non-relaxed constraint
  set and the need for efficient parallelization. The development of our approach
  is most naturally compared with the development of proximal bundle methods and especially
  with their use of serious step conditions. However, deviations from these developments
  allow for an improvement in efficiency with which parallelization can be utilized.
  Pivotal in our modification to the augmented Lagrangian method is the use of an
  integration of approaches based on the simplicial decomposition method (SDM) and
  the nonlinear block Gauss-Seidel (GS) method. An adaptation of a serious step condition
  associated with proximal bundle methods allows for the approximation tolerance to
  be automatically adjusted. Under mild conditions optimal dual convergence is proven,
  and we report computational results on test instances from the stochastic optimization
  literature. We demonstrate improvement in parallel speedup over a baseline parallel
  approach.
publication: '*Mathematical Programming*'
url_pdf: http://link.springer.com/10.1007/s10107-018-1253-9
doi: 10.1007/s10107-018-1253-9
---
