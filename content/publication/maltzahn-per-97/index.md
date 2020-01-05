---
title: "Performance Issues of Enterprise Level Web Proxies"
date: 1997-06-01
publishDate: 2020-01-05T13:33:06.012417Z
authors: ["Carlos Maltzahn", "Kathy Richardson", "Dirk Grunwald"]
publication_types: ["2"]
abstract: "Enterprise level web proxies relay world-wide web traffic between private networks and the Internet. They improve security, save network bandwidth, and reduce network latency. While the performance of web proxies has been analyzed based on synthetic workloads, little is known about their performance on real workloads. In this paper we present a study of two web proxies (CERN and Squid) executing real workloads on Digital's Palo Alto Gateway. We demonstrate that the simple CERN proxy architecture outperforms all but the latest version of Squid and continues to outperform cacheless configurations. For the measured load levels the Squid proxy used at least as many CPU, memory, and disk resources as CERN, in some configurations significantly more resources. At higher load levels the resource utilization requirements will cross and Squid will be the one using fewer resources. Lastly we found that cache hit rates of around 30% had very little effect on the requests service time."
featured: false
publication: "*ACM SIGMETRICS Performance Evaluation Review*"
tags: ["papers", "performance", "webcaching", "networking", "intermediary"]
---

