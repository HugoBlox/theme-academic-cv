---
title: "Automatic Generation of Behavioral Hard Disk Drive Access Time Models"
date: 2014-06-01
publishDate: 2020-01-05T06:43:50.505679Z
authors: ["Adam Crume", "Carlos Maltzahn", "Lee Ward", "Thomas Kroeger", "Matthew Curry"]
publication_types: ["1"]
abstract: "Predicting access times is a crucial part of predicting hard disk drive performance. Existing approaches use white-box modeling and require intimate knowledge of the internal layout of the drive, which can take months to extract. Automatically learning this behavior is a much more desirable approach, requiring less expert knowledge, fewer assumptions, and less time. While previous research has created black-box models of hard disk drive performance, none have shown low per-request errors. A barrier to machine learning of access times has been the existence of periodic behavior with high, unknown frequencies. We identify these high frequencies with Fourier analysis and include them explicitly as input to the model. In this paper we focus on the simulation of access times for random read workloads within a single zone. We are able to automatically generate and tune request-level access time models with mean absolute error less than 0.15 ms. To our knowledge this is the first time such a fidelity has been achieved with modern disk drives using machine learning. We are confident that our approach forms the core for automatic generation of access time models that include other workloads and span across entire disk drives, but more work remains."
featured: false
publication: "*MSST '14*"
tags: ["papers", "machinelearning", "modeling", "simulation", "storagemedium", "autotuning"]
projects:
- storage-simulation
---

