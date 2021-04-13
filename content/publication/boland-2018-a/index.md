---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Combining Progressive Hedging with a Frank--Wolfe Method to Compute Lagrangian
  Dual Bounds in Stochastic Mixed-Integer Programming
subtitle: ''
summary: ''
authors:
- Natashia Boland
- Jeffrey Christiansen
- Brian Dandurand
- Andrew Eberhard
- Jeff Linderoth
- James Luedtke
- Fabricio Oliveira
tags: [Lagrangian-based decomposition methods]
categories: [Efficient formulations and solution methods]
keywords: 
- '"Frank–Wolfe method"'
- '"Lagrangian duality"'
- '"Mixed-integer stochastic programming"'
- '"Progressive hedging"'
date: '2018-01-01'
lastmod: 2020-08-27T16:11:43+03:00
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
publishDate: '2020-08-27T13:11:43.676326Z'
publication_types:
- 2
abstract: We present a new primal-dual algorithm for computing the value of the Lagrangian
  dual of a stochastic mixed-integer program (SMIP) formed by relaxing its nonanticipativity
  constraints. This dual is widely used in decomposition methods for the solution
  of SMIPs. The algorithm relies on the well-known progressive hedging method, but
  unlike previous progressive hedging approaches for SMIP, our algorithm can be shown
  to converge to the optimal Lagrangian dual value. The key improvement in the new
  algorithm is an inner loop of optimized linearization steps, similar to those taken
  in the classical Frank–Wolfe method. Numerical results demonstrate that our new
  algorithm empirically outperforms the standard implementation of progressive hedging
  for obtaining bounds in SMIP.
publication: '*SIAM Journal on Optimization*'
url_pdf: https://epubs.siam.org/doi/10.1137/16M1076290
doi: 10.1137/16M1076290
---
