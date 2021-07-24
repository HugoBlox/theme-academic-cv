---
title: "Performance Characteristics of the BlueField-2 SmartNIC"
date: 2021-05-01
publishDate: 2021-07-23T18:52:38.470006Z
authors: ["Jianshen Liu", "Carlos Maltzahn", "Craig Ulmer", "Matthew Leon Curry"]
publication_types: ["3"]
abstract: "High-performance computing (HPC) researchers have long envisioned scenarios where application workflows could be improved through the use of programmable processing elements embedded in the network fabric. Recently, vendors have introduced programmable Smart Network Interface Cards (SmartNICs) that enable computations to be offloaded to the edge of the network. There is great interest in both the HPC and high-performance data analytics communities in understanding the roles these devices may play in the data paths of upcoming systems.

This paper focuses on characterizing both the networking and computing aspects of NVIDIA's new BlueField-2 SmartNIC when used in an Ethernet environment. For the networking evaluation we conducted multiple transfer experiments between processors located at the host, the SmartNIC, and a remote host. These tests illuminate how much processing headroom is available on the SmartNIC during transfers. For the computing evaluation we used the stress-ng benchmark to compare the BlueField-2 to other servers and place realistic bounds on the types of offload operations that are appropriate for the hardware.

Our findings from this work indicate that while the BlueField-2 provides a flexible means of processing data at the network's edge, great care must be taken to not overwhelm the hardware. While the host can easily saturate the network link, the SmartNIC's embedded processors may not have enough computing resources to sustain more than half the expected bandwidth when using kernel-space packet processing. From a computational perspective, encryption operations, memory operations under contention, and on-card IPC operations on the SmartNIC perform significantly better than the general-purpose servers used for comparisons in our experiments. Therefore, applications that mainly focus on these operations may be good candidates for offloading to the SmartNIC. "
featured: false
publication: "arXiv:2105.06619 [cs.NI]"
tags: ["papers", "smartnics", "performance"]
projects:
- programmable-storage
- eusocial-storage
- declstore
- smartnic
---
