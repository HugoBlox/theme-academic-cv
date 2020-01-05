---
title: "High Performance & Low Latency in Solid-State Drives Through Redundancy"
date: 2013-11-01
publishDate: 2020-01-05T06:43:50.527783Z
authors: ["Dimitris Skourtis", "Dimitris Achlioptas", "Carlos Maltzahn", "Scott Brandt"]
publication_types: ["1"]
abstract: "Solid-state drives are becoming increasingly popular in enterprise storage systems, playing the role of large caches and permanent storage. Although SSDs provide faster random access than hard-drives, their performance under read/write workloads is highly variable often exceeding that of harddrives (e.g., taking 100ms for a single read). Many systems with mixed workloads have low latency requirements, or require predictable performance and guarantees. In such cases, the performance variance of SSDs becomes a problem for both predictability and raw performance. In this paper, we propose a design based on redundancy, which provides high performance and low latency for reads under read/write workloads by physically separating reads from writes. More specifically, reads achieve read-only performance while writes perform at least as good as before. We evaluate our design using micro-benchmarks and real traces, illustrating the performance benefits of read/write separation in solid-state drives."
featured: false
publication: "*INFLOW '13*"
tags: ["papers", "flash", "erasurecodes", "redundancy", "storage", "distributed", "systems"]
---

