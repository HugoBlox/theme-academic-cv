---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Future energy systems modelling"
subtitle: ""
summary: "Generation and Transmission Expansion Planning (GTEP) stochastic models incorporating temporal reduction via clustering algorithms."
authors: [fabricio-oliveira, lucas-condeixa, jaan-tollander]
tags: [Renewable energy generation, Data aggregation]
categories: [Supply chain management & production planning, Decision making under uncertainty]
weight: 102
featured: false
draft: false

external_link: https://github.com/gamma-opt/EnergySystemModeling.jl

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: "Smart"
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
Data handling in power systems modelling has recently played a pivotal role in power grid assets transformation. Computational challenges unfold as a result of the incorporation of highly variable system states (following recent trends such as intermittent generation, flexible demand, and energy storage dynamics) and the embedded consequences of that into long-term decision making. Naturally, a fast-paced growth in data reduction techniques applied to power systems optimization models has taken place recently following the need of a better incorporation of operational uncertainty.

The aggregation of uncertainties that are timely inter-related to both generation and transmission expansion plan (GTEP) became vital to achieve a better outcome from energy systems optimization. Besides this, some policies aiming renewable generation investments can be geographically spread, thus the co-optimization of GTEP presents itself as a convenient solution for centralized planners.

We explore how data aggregation methods can influence decision making considering GTEP optimization models under uncertainty. Therefore, we analyse and discuss the relevance and impact of different clustering techniques in stochastic optimization models. We ally the best practices in data aggregation to optimization models adapted to uncertainties coming from modern applications within power systems such as: intermittent renewable generation, demand response mechanisms, electrical vehicles integration, energy storage technologies development, among others.

The project brings a mathematical view over the trendy discussion of data handling and applications inside energy systems optimization under uncertainty models.

_The project is funded by the Aalto Institue of Science (Advanced analytics for planning future energy systems)._