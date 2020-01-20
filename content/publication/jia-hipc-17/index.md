---
title: "Integrating External Resources with a Task-Based Programming Model"
date: 2017-12-01
publishDate: 2020-01-05T06:43:50.437903Z
authors: ["Zhihao Jia", "Sean Treichler", "Galen Shipman", "Michael Bauer", "Noah Watkins", "Carlos Maltzahn", "Pat McCormick", "Alex Aiken"]
publication_types: ["1"]
abstract: "Accessing external resources (e.g., loading input data, checkpointing snapshots, and out-of-core processing) can have a significant impact on the performance of applications. However, no existing programming systems for high-performance computing directly manage and optimize external accesses. As a result, users must explicitly manage external accesses alongside their computation at the application level, which can result in both correctness and performance issues. We address this limitation by introducing Iris, a task-based programming model with semantics for external resources. Iris allows applications to describe their access requirements to external resources and the relationship of those accesses to the computation. Iris incorporates external I/O into a deferred execution model, reschedules external I/O to overlap I/O with computation, and reduces external I/O when possible. We evaluate Iris on three microbenchmarks representative of important workloads in HPC and a full combustion simulation, S3D. We demonstrate that the Iris implementation of S3D reduces the external I/O overhead by up to 20x, compared to the Legion and the Fortran implementations."
featured: false
publication: "*HiPC 2017*"
tags: ["papers", "runtime", "distributed", "programming", "storage"]
projects:
- programmable-storage
---

