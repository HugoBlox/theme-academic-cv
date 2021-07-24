---
title: "Mapping Scientific Datasets to Programmable Storage"
date: 2020-11-01
publishDate: 2021-02-21T00:24:01.226701Z
authors: ["Aaron Chu", "Jeff LeFevre", "Carlos Maltzahn", "Aldrin Montana", "Peter Alvaro", "Dana Robinson", "Quincey Koziol"]
publication_types: ["2"]
abstract: "Access libraries such as ROOT and HDF5 allow users to interact with datasets using high level abstractions, like coordinate systems and associated slicing operations. Unfortunately, the implementations of access libraries are based on outdated assumptions about storage systems interfaces and are generally unable to fully benefit from modern fast storage devices. For example, access libraries often implement buffering and data layout that assume that large, single-threaded sequential access patterns are causing less overall latency than small parallel random access: while this is true for spinning media, it is not true for flash media. The situation is getting worse with rapidly evolving storage devices such as non-volatile memory and ever larger datasets. Our Skyhook Dataset Mapping project explores distributed dataset mapping infrastructures that can integrate and scale out existing access libraries using Ceph's extensible object model, avoiding reimplementation or even modifications of these access libraries as much as possible. These programmable storage extensions coupled with our distributed dataset mapping techniques enable: 1) access library operations to be offloaded to storage system servers, 2) the independent evolution of access libraries and storage systems and 3) fully leveraging of the existing load balancing, elasticity, and failure management of distributed storage systems like Ceph. They also create more opportunities to conduct storage server-local optimizations specific to storage servers. For example, storage servers might include local key/value stores combined with chunk stores that require different optimizations than a local file system. As storage servers evolve to support new storage devices like non-volatile memory, these server-local optimizations can be implemented while minimizing disruptions to applications. We will report progress on the means by which distributed dataset mapping can be abstracted over particular access libraries, including access libraries for ROOT data, and how we address some of the challenges revolving around data partitioning and composability of access operations."
featured: false
publication: "*EPJ Web Conf.*"
tags: ["papers", "programmable", "declarative", "objectstorage", "nsf1836650"]
projects:
- declstore
- programmable-storage
- eusocial-storage
- skyhook
---
