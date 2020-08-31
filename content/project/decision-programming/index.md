---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Decision Programming"
subtitle: ""
summary: "DecisionProgramming.jl is a Julia package for solving multi-stage decision problems under uncertainty, modeled using (limited memory) influence diagrams, and formulated using mixed-integer linear programming."

authors: [fabricio-oliveira, juho-andelmin, olli-herrala, jaan-tollander]
tags: []
categories: []
weight: 7
featured: false
draft: false

external_link: "https://github.com/gamma-opt/DecisionProgramming.jl"

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

Multi-stage decision problems under uncertainty can be represented as influence diagrams (ID) consisting of decision, chance and value nodes connected by arcs. The discrete variables associated with decision nodes represent choices among alternatives while those associated with chance nodes represent realizations of uncertainties. The strategy maximizing the expected utility at the value node can be derived by solving the equivalent decision tree with dynamic programming.

This solution approach assumes that earlier decisions are known when making later ones (the so-called no-forgetting assumption), which may not hold in distributed decision problems. Moreover, dynamic programming is restrictive, because the optimal strategy in a given branch of the decision tree cannot depend on the decisions in other, non-overlapping branches. Thus, the objective function cannot include risk measures or probabilistic chance constraints, which would capture the variability of consequences over all branches.

To overcome these limitations, we have begun the development of the Decision Programming framework to address problems that can be represented as IDs without necessitating the no-forgetting assumption and that require accounting for multiple objectives and several kinds of uncertainties and constraints. In this framework, the ID and associated constraints are translated to equivalent deterministic mixed-integer programming (MIP) representations which can be solved efficiently with the advanced capabilities of MIP solvers.

In this project, we will consolidate Decision Programming as a comprehensive modeling framework through significant contributions to decision modeling and the development of computational approaches. Specifically, we will investigate how to accommodate multiple objectives, risk preferences and chance constraints; how to account for incomplete information; how to model continuous decision variables and chance events; and how to compute solutions efficiently with parallelizable solution methods based on decomposition techniques.

The project builds the methodological foundation for solving challenging decision problems which have not been amenable to earlier approaches. Its results will be deployed to solve real-life problems, such as diagnostic testing in healthcare, selection of risk mitigation actions for safety-critical systems and cost-benefit analyses for climate change mitigation strategies, among others.

Additionally, a Julia package named DecisionProgramming.jl is developed for implementation of Decision Programming problems. 

_The project is funded by the Academy of Finland grant number 332180 (Decision Programming: A Stochastic Optimization Framework for Multi-Stage Decision Problems)._
