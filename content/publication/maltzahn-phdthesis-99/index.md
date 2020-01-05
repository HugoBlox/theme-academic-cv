---
title: "Improving Resource Utilization of Enterprise-Level World-Wide Web Proxy Servers"
date: 1999-01-01
publishDate: 2020-01-05T12:39:43.035343Z
authors: ["Carlos Maltzahn"]
publication_types: ["7"]
abstract: "The resource utilization of enterprise-level Web proxy servers is primarily dependent on network and disk I/O latencies and is highly variable due to a diurnal workload pattern with very predictable peak and off-peak periods. Often, the cost of resources depends on the purchased resource capacity instead of the actual utilization. This motivates the use of off-peak periods to perform speculative work in the hope that this work will later reduce resource utilization during peak periods. We take two approaches to improve resource utilization. In the first approach we reduce disk I/O by cache compaction during off-peak periods and by carefully designing the way a cache architecture utilizes operating system services such as the file system buffer cache and the virtual memory system. Evaluating our designs with workload generators on standard file systems we achieve disk I/O savings of over 70% compared to existing Web proxy server architectures. In the second approach we reduce peak bandwidth levels by prefetching bandwidth dur- ing off-peak periods. Our analysis reveals that 40% of the cacheable miss bandwidth is prefetch- able. We found that 99% of this prefetchable bandwidth is based on objects that the Web proxy server under study has not accessed before. However, these objects originate from servers which the Web proxy server under study has accessed before. Using machine learning techniques we are able to automatically generate prefetch strategies of high accuracy and medium coverage. A test of these prefetch strategies on real workloads achieves a peak-level reduction of up to 12%."
featured: false
publication: ""
tags: ["papers", "prefetching", "networking", "intermediary", "caching", "performance", "machinelearning"]
---

