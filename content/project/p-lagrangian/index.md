---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "p-Lagrangian relaxation"
subtitle: ""
summary: "Efficient decomposition methods for MIQCQPs using Lagrangian decomposition and parallelisation"
authors: [nikita-belyak, fabricio-oliveira]
tags: [Convexification techniques, Lagrangian-based decomposition methods]
categories: [Efficient formulations and solution methods]
weight: 7
featured: false
draft: false

external_link: http://www.optimization-online.org/DB_FILE/2020/07/7877.pdf

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

_p_-Lagrangian relaxation is a novel technique to solve nonconvex mixed-integer
quadratically constrained quadratic programming (MIQCQP) with separable structures, such as those arising in deterministic equivalent representations of two-stage
stochastic programming problems. In general, the nonconvex nature of these models still poses a challenge for available solvers, which do not consistently perform
well for larger-scale instances. Therefore, we propose an appealing alternative algorithm that allows for overcoming computational performance issues. Our novel
technique, named the p-Lagrangian relaxation, is a primal-dual decomposition
method that combines a bundle-method inspired Lagrangian decomposition with
mixed-integer programming-based relaxations. These relaxations are obtained using the reformulated normalised multiparametric disaggregation technique (RNMDT) and can be made arbitrarily precise by means of a precision parameter p.
We provide a technical analysis showing the convergent behaviour of the approach
as the approximation is made increasingly precise. We observe that, in addition
to demonstrating superior performance in terms of convergence behaviour, the
proposed method presents significant reductions in computational time.
