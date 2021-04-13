---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: An Exact Algorithm for the Green Vehicle Routing Problem
subtitle: ''
summary: ''
authors:
- Juho Andelmin
- Enrico Bartolini
tags: [Logistics management, Cutting planes & column generation]
categories: [Production systems & supply chain management, Efficient formulations and solution methods]
keywords: 
- '"Dual ascent"'
- '"Lagrangian duality"'
- '"Subgradient optimization"'
- '"Column generation"'
- '"Cutting planes"'
date: '2017-09-01'
lastmod: 2020-08-27T16:01:38+03:00
featured: true
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
publishDate: '2020-08-27T13:01:38.258729Z'
publication_types:
- 2
abstract: We propose an exact algorithm for solving the green vehicle routing problem (G-VRP). The G-VRP models the optimal routing of an alternative fuel vehicle fleet to serve a set of geographically scattered customers. Vehicles’ fuel autonomy and possible refueling stops en route are explicitly modeled and maximum duration constraints are imposed on each vehicle route. We model the G-VRP as a set partitioning problem in which columns represent feasible routes corresponding to simple circuits in a multigraph. Each node in the multigraph represents one customer and each arc between two customers represents a nondominated path through a set of refueling stations visited by a vehicle when traveling directly between the two customers. We strengthen the set partitioning formulation by adding valid inequalities including k-path cuts and describe a method for separating them. We provide computational results on benchmark instances showing that the algorithm can optimally solve instances with up to ∼110 customers.
publication: '*Transportation Science*'
url_pdf: https://pubsonline.informs.org/doi/pdf/10.1287/trsc.2016.0734
doi: https://doi.org/10.1287/trsc.2016.0734
---

