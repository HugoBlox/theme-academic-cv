---
title: "Ceph: A Scalable, High-Performance Distributed File System"
date: 2006-11-01
publishDate: 2020-01-05T13:33:05.998495Z
authors: ["Sage A. Weil", "Scott A. Brandt", "Ethan L. Miller", "Darrell D. E. Long", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "provides excellent performance, reliability, and scalability. Ceph maximizes the separation between data and metadata management by replacing allocation tables with a pseudo-random data distribution function (CRUSH) designed for heterogeneous and dynamic clusters of unreliable object storage devices (OSDs). We leverage device intelligence by distributing data replication, failure detection and recovery to semi-autonomous OSDs running a specialized local object file system. A dynamic distributed metadata cluster provides extremely efficient metadata management and seamlessly adapts to a wide range of general purpose and scientific computing file system workloads. Performance measurements under a variety of workloads show that Ceph has excellent I/O performance and scalable metadata management, supporting more than 250,000 metadata operations per second."
featured: false
publication: "*OSDI'06*"
tags: ["papers", "parallel", "filesystems", "distributed", "storage", "systems", "obsd", "p2p"]
---

