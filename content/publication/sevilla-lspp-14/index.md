---
title: "SupMR: Circumventing Disk and Memory Bandwidth Bottlenecks for Scale-up MapReduce"
date: 2014-05-01
publishDate: 2020-01-05T06:43:50.485521Z
authors: ["Michael Sevilla", "Ike Nassi", "Kleoni Ioannidou", "Scott Brandt", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Reading input from primary storage (i.e. the ingest phase) and aggregating results (i.e. the merge phase) are important pre- and post-processing steps in large batch computations. Unfortunately, today's data sets are so large that the ingest and merge job phases are now performance bottlenecks. In this paper, we mitigate the ingest and merge bottlenecks by leveraging the scale-up MapReduce model. We introduce an ingest chunk pipeline and a merge optimization that increases CPU utilization (50 - 100%) and job phase speedups (1.16x - 3.13x) for the ingest and merge phases. Our techniques are based on well-known algorithms and scale-out MapReduce optimizations, but applying them to a scale-up computation framework to mitigate the ingest and merge bottlenecks is novel."
featured: false
publication: "*LSPP at IPDPS 2014*"
tags: ["papers", "mapreduce", "sharedmemory", "performance"]
---

