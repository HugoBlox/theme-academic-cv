---
title: "Tintenfisch: File System Namespace Schemas and Generators"
date: 2018-07-01
publishDate: 2020-01-05T06:43:50.427099Z
authors: ["Michael A. Sevilla", "Reza Nasirigerdeh", "Carlos Maltzahn", "Jeff LeFevre", "Noah Watkins", "Peter Alvaro", "Margaret Lawson", "Jay Lofstead", "Jim Pivarski"]
publication_types: ["1"]
abstract: "The file system metadata service is the scalability bottleneck for many of today’s workloads. Common approaches for attacking this “metadata scaling wall” include: caching inodes on clients and servers, caching parent inodes for path traversal, and dynamic caching policies that exploit workload locality. These caches reduce the number of remote procedure calls (RPCs) but the effectiveness is dependent on the overhead of maintaining cache coherence and the administrator’s ability to select the best cache size for the given workloads. Recent work reduces the number of metadata RPCs to 1 without using a cache at all, by letting clients “decouple” the subtrees from the global namespace so that they can do metadata operations locally. Even with this technique, we show that file system metadata is still a bottleneck because namespaces for today’s workloads can be very large. The size is problematic for reads because metadata needs to be transferred and materialized. 

The management techniques for file system metadata assume that namespaces have no structure but we observe that this is not the case for all workloads. We propose Tintenfisch, a file system that allows users to succinctly express the structure of the metadata they intend to create. If a user can express the structure of the namespace, Tintenfisch clients and servers can (1) compact metadata, (2) modify large namespaces more quickly, and (3) generate only relevant parts of the namespace. This reduces network traffic, storage footprints, and the number of overall metadata operations needed to complete a job."
featured: false
publication: "*HotStorage '18*"
tags: ["papers", "metadata", "filesystems", "scalable", "naming"]
projects:
- programmable-storage
---

