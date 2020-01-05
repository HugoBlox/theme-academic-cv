---
title: "Malacology: A Programmable Storage System"
date: 2017-04-01
publishDate: 2020-01-05T06:43:50.448168Z
authors: ["Michael A. Sevilla", "Noah Watkins", "Ivo Jimenez", "Peter Alvaro", "Shel Finkelstein", "Jeff LeFevre", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Storage systems need to support high-performance for special-purpose data processing applications that run on an evolving storage device technology landscape. This puts tremendous pressure on storage systems to support rapid change both in terms of their interfaces and their performance. But adapting storage systems can be difficult because unprincipled changes might jeopardize years of code-hardening and performance optimization efforts that were necessary for users to entrust their data to the storage system. We introduce the programmable storage approach, which exposes internal services and abstractions of the storage stack as building blocks for higher-level services. We also build a prototype to explore how existing abstractions of common storage system services can be leveraged to adapt to the needs of new data processing systems and the increasing variety of storage devices. We illustrate the advantages and challenges of this approach by composing existing internal abstractions into two new higher-level services: a file system metadata load balancer and a high-performance distributed shared-log. The evaluation demonstrates that our services inherit desirable qualities of the back-end storage system, including the ability to balance load, efficiently propagate service metadata, recover from failure, and navigate trade-offs between latency and throughput using leases."
featured: false
publication: "*EuroSys '17*"
tags: ["papers", "storage", "systems", "programmable", "abstraction"]
---

