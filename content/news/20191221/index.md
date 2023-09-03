---
title: "Paper accepted at NSDI ’20"
summary: "Our paper ([arxiv](https://arxiv.org/abs/1912.09256)) led by Alexandru Uta at Vrije Universiteit Amsterdam was accepted at [NSDI ’20](https://www.usenix.org/conference/nsdi20). The final version of the paper is going to be available on 2/7/20."
authors:
- carlosm
tags:
- Publication
categories:
- News
date: "2019-12-21"
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  placement: 2
  caption: "Image credit: [USENIX NSDI '20](https://www.usenix.org/conference/nsdi20)"
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
Our paper ([arxiv](https://arxiv.org/abs/1912.09256)) led by Alexandru Uta at Vrije Universiteit Amsterdam was accepted at [NSDI ’20](https://www.usenix.org/conference/nsdi20). The final version of the paper is going to be available on 2/7/20.

**Abstract:** Performance variability has been acknowledged as a problem for over a decade by cloud practitioners and performance engineers. Yet, our survey of top systems conferences reveals that the research community regularly disregards variability when running experiments in the cloud. Focusing on networks, we assess the impact of variability on cloud-based big-data workloads by gathering traces from mainstream commercial clouds and private research clouds. Our data collection consists of millions of datapoints gathered while transferring over 9 petabytes of data. We characterize the network variability present in our data and show that, even though commercial cloud providers implement mechanisms for quality-of-service enforcement, variability still occurs, and is even exacerbated by such mechanisms and service provider policies. We show how big-data workloads suffer from significant slowdowns and lack predictability and replicability, even when state-of-the-art experimentation techniques are used. We provide guidelines for practitioners to reduce the volatility of big data performance, making experiments more repeatable. 