---
title: "Paper accepted at OSDI"
summary: "Congratulations to everyone: two of Ryan Stutsman and Robert Ricci’s (University of Utah) OSDI submissions got accepted, one of which we co-authored."
authors:
- carlosm
tags:
- Publication
categories:
- News
date: "2018-07-20"
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  placement: 2
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
- practical-reproducibility
---
Congratulations to everyone:  two of Ryan Stutsman and Robert Ricci’s (University of Utah) OSDI  submissions got accepted, one of which we co-authored:

Aleksander Maricq, Dmitry Duplyakin, Ivo Jimenez, Carlos Maltzahn, Ryan Stutsman, and Robert Ricci, “Taming  performance variability,” *OSDI’18* (Carlsbad, CA), October 8-10 2018.

**Abstract:**  The performance of compute hardware varies: software run repeatedly on  the same server (or a different server with supposedly identical parts)  can produce performance results that differ with each execution. This  variation has important effects on the reproducibility of systems  research and ability to quantitatively compare the performance of  different systems. It also has implications for commercial computing,  where agreements are often made conditioned on meeting specific  performance targets.

Over a period of 10 months, we conducted a large-scale study capturing performance samples from 835 servers  comprising nearly 900,000 data points. We examine this data from two  perspectives: that of a service provider wishing to offer a consistent  environment, and that of a systems researcher who must understand how  variability impacts experimental results. From this examination, we draw a number of lessons about the types and magnitudes of performance  variability and the effects on confidence in experiment results. We also create a statistical model that can be used to understand how  representative an individual server is of the general population. The  full dataset and our analysis tools are publicly available, and we have  built a system to interactively explore the data and make  recommendations for experiment parameters based on rigorous statistics.
