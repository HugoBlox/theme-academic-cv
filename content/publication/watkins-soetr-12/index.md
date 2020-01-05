---
title: "DataMods: Programmable File System Services"
date: 2012-07-01
publishDate: 2020-01-05T13:33:05.966641Z
authors: ["Noah Watkins", "Carlos Maltzahn", "Scott A. Brandt", "Adam Manzanares"]
publication_types: ["4"]
abstract: "Cloud-based services have become an attractive alternative to in-house data centers because of their flexible, on-demand availability of compute and storage resources. This is also true for scientific high-performance computing (HPC) applications that are currently being run on expensive, dedicated hardware. One important challenge of HPC applications is their need to perform periodic global checkpoints of execution state to stable storage in order to recover from failures, but the checkpoint process can dominate the total run-time of HPC applications even in the failure-free case! In HPC architectures, dedicated stable storage is highly tuned for this type of workload using locality and physical layout policies, which are generally unknown in typical cloud environments. In this paper we introduce DataMods, an extended version of the Ceph file system and associated distributed object store RADOS, which are widely used in open source cloud stacks. DataMods extends object-based storage with extended services take advantage of common cloud data center node hardware configurations (i.e. CPU and local storage resources), and that can be used to construct efficient, scalable middleware services that span the entire storage stack and utilize asynchronous services for offline data management services."
featured: false
publication: ""
tags: ["papers", "filesystems", "programming", "datamanagement"]
---

