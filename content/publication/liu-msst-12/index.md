---
title: "On the Role of Burst Buffers in Leadership-class Storage Systems"
date: 2012-04-01
publishDate: 2020-01-05T13:33:05.974919Z
authors: ["Ning Liu", "Jason Cope", "Philip Carns", "Christopher Carothers", "Robert Ross", "Gary Grider", "Adam Crume", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "The largest-scale high-performance (HPC) systems are stretching parallel file systems to their limits in terms of aggregate bandwidth and numbers of clients. To further sustain the scalability of these file systems, researchers and HPC storage architects are exploring various storage system designs. One proposed storage system design integrates a tier of solid-state burst buffers into the storage system to absorb application I/O requests. In this paper, we simulate and explore this storage system design for use by large-scale HPC systems. First, we examine application I/O patterns on an existing large-scale HPC system to identify common burst patterns. Next, we describe enhancements to the CODES storage system simulator to enable our burst buffer simulations. These enhancements include the integration of a burst buffer model into the I/O forwarding layer of the simulator, the development of an I/O kernel description language and interpreter, the development of a suite of I/O kernels that are derived from observed I/O patterns, and fidelity improvements to the CODES models. We evaluate the I/O performance for a set of multiapplication I/O workloads and burst buffer configurations. We show that burst buffers can accelerate the application perceived throughput to the external storage system and can reduce the amount of external storage bandwidth required to meet a desired application perceived throughput goal."
featured: false
publication: "*MSST/SNAPI 2012*"
tags: ["papers", "burstbuffer", "simulation", "hpc", "distributed"]
projects:
- storage-simulation
---

