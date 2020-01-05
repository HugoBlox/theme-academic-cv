---
title: "Flash on Rails: Consistent Flash Performance through Redundancy"
date: 2014-06-01
publishDate: 2020-01-05T06:43:50.500438Z
authors: ["Dimitris Skourtis", "Dimitris Achlioptas", "Noah Watkins", "Carlos Maltzahn", "Scott Brandt"]
publication_types: ["1"]
abstract: "Modern applications and virtualization require fast and predictable storage. Hard-drives have low and unpredictable performance, while keeping everything in DRAM is still prohibitively expensive or unnecessary in many cases. Solid-state drives offer a balance between performance and cost and are becoming increasingly popular in storage systems, playing the role of large caches and permanent storage. Although their read performance is high and predictable, SSDs frequently block in the presence of writes, exceeding hard-drive latency and leading to unpredictable performance. Many systems with mixed workloads have low latency requirements or require predictable performance and guarantees. In such cases the performance variance of SSDs becomes a problem for both predictability and raw performance. In this paper, we propose Rails, a design based on redundancy, which provides predictable performance and low latency for reads under read/write workloads by physically separating reads from writes. More specifically, reads achieve read-only performance while writes perform at least as well as before. We evaluate our design using micro-benchmarks and real traces, illustrating the performance benefits of Rails and read/write separation in solid-state drives."
featured: false
publication: "*USENIX ATC '14*"
tags: ["papers", "flash", "performance", "redundancy", "qos"]
---

