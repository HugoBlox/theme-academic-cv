---
title: "Gdev: First-Class GPU Resource Management in the Operating System"
date: 2012-01-01
publishDate: 2020-01-05T13:33:05.973549Z
authors: ["Shinpei Kato", "Michael McThrow", "Carlos Maltzahn", "Scott A. Brandt"]
publication_types: ["1"]
abstract: "Graphics processing units (GPUs) have become a very powerful platform embracing a concept of heterogeneous many-core computing. However, application domains of GPUs are currently limited to specific systems, largely due to a lack of ``first-class'' GPU resource management for general-purpose multi-tasking systems. We present Gdev, a new ecosystem of GPU resource management in the operating system (OS). It allows the user space as well as the OS itself to use GPUs as first-class computing resources. Specifically, Gdev's virtual memory manager supports data swapping for excessive memory resource demands, and also provides a shared device memory functionality that allows GPU contexts to communicate with other contexts. Gdev further provides a GPU scheduling scheme to virtualize a physical GPU into multiple logical GPUs, enhancing isolation among working sets of multi-tasking systems. Our evaluation conducted on Linux and the NVIDIA GPU shows that the basic performance of our prototype implementation is reliable even compared to proprietary software. Further detailed experiments demonstrate that Gdev achieves a 2x speedup for an encrypted file system using the GPU in the OS. Gdev can also improve the makespan of dataflow programs by up to 49% exploiting shared device memory, while an error in the utilization of virtualized GPUs can be limited within only 7%."
featured: false
publication: "*USENIX ATC '12*"
tags: ["papers", "gpgpu", "kernel", "linux", "scheduling"]
---

