---
title: "Taming Performance Variability"
date: 2018-10-01
publishDate: 2020-01-05T06:43:50.428157Z
authors: ["Aleksander Maricq", "Dmitry Duplyakin", "Ivo Jimenez", "Carlos Maltzahn", "Ryan Stutsman", "Robert Ricci"]
publication_types: ["1"]
abstract: "The performance of compute hardware varies: software run repeatedly on the same server (or a different server with supposedly identical parts) can produce performance results that differ with each execution. This variation has important effects on the reproducibility of systems research and ability to quantitatively compare the performance of different systems. It also has implications for commercial computing, where agreements are often made conditioned on meeting specific performance targets. Over a period of 10 months, we conducted a large-scale study capturing nearly 900,000 data points from 835 servers. We examine this data from two perspectives: that of a service provider wishing to offer a consistent environment, and that of a systems researcher who must understand how variability impacts experimental results. From this examination, we draw a number of lessons about the types and magnitudes of performance variability and the effects on confidence in experiment results. We also create a statistical model that can be used to understand how representative an individual server is of the general population. The full dataset and our analysis tools are publicly available, and we have built a system to interactively explore the data and make recommendations for experiment parameters based on statistical analysis of historical data."
featured: false
url_slides: https://docs.google.com/presentation/d/1cFQ3jNLC2WsW8eqV74lX89ZMzGkIUuXwQKD1b4w81L8/edit#slide=id.p
publication: "*13th USENIX Symposium on Operating Systems Design and Implementation (OSDI'18)*"
tags: ["papers", "performance", "statistics", "cloud", "reproducibility", "systems"]
projects:
- practical-reproducibility
---

