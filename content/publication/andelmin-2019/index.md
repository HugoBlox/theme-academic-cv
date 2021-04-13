---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: A multi-start local search heuristic for the Green Vehicle Routing Problem based on a multigraph reformulation
subtitle: ''
summary: ''
authors:
- Juho Andelmin
- Enrico Bartolini
tags: [Logistics management]
categories: [Production systems & supply chain management, Efficient formulations and solution methods]
keywords: 
- '"Vehicle routing"'
- '"Alternative fuel vehicles"'
- '"Matheuristic"'
- '"Decomposition"'
- '"Multigraph"'
date: '2019-09-01'
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
abstract: We consider the Green Vehicle Routing Problem (G-VRP) which is an extension of the classical vehicle routing problem for alternative fuel vehicles. In the G-VRP, vehicles’ driving autonomy and possible refueling stops en-route are explicitly modeled. We propose a multi-start local search algorithm that consists of three phases. The first two phases iteratively construct new solutions, improve them by local search, and store all vehicle routes forming these solutions in a route pool. Phase three optimally combines vehicle routes in the route pool by solving a set partitioning problem and improves the final solution by local search. The algorithm is based on a multigraph reformulation of the G-VRP in which nodes correspond to customers and a depot, and arcs correspond to possible sequences of refueling stops for vehicles traveling between two nodes. All local search operators used by our algorithm are tailored to exploit this reformulation and do not explicitly deal with refueling stations. We report computational results on benchmark instances with up to  ∼ 470 customers, showing that the algorithm is competitive with state-of-the-art heuristics.
publication: '*Computers & Operations Research*'
url_pdf: https://www.sciencedirect.com/science/article/abs/pii/S0305054819301017
doi: https://doi.org/10.1016/j.cor.2019.04.018
---

