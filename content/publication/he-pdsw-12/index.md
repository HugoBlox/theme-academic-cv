---
title: "Discovering Structure in Unstructured I/O"
date: 2012-11-01
publishDate: 2020-01-05T13:33:05.965659Z
authors: ["Jun He", "John Bent", "Aaron Torres", "Gary Grider", "Garth Gibson", "Carlos Maltzahn", "Xian-He Sun"]
publication_types: ["1"]
abstract: "Checkpointing is the predominant storage driver in today's petascale supercomputers and is expected to remain as such in tomorrow's exascale supercomputers. Users typically prefer to checkpoint into a shared file yet parallel file systems often perform poorly for shared file writing. A powerful technique to address this problem is to transparently transform shared file writing into many exclusively written as is done in ADIOS and PLFS. Unfortunately, the metadata to reconstruct the fragments into the original file grows with the number of writers. As such, the current approach cannot scale to exaflop supercomputers due to the large overhead of creating and reassembling the metadata. In this paper, we develop and evaluate algorithms by which patterns in the PLFS metadata can be discovered and then used to replace the current metadata. Our evaluation shows that these patterns reduce the size of the metadata by several orders of magnitude, increase the performance of writes by up to 40 percent, and the performance of reads by up to 480 percent. This contribution therefore can allow current checkpointing models to survive the transition from peta- to exascale."
featured: false
publication: "*PDSW'12*"
tags: ["papers", "compression", "indexing", "plfs", "patterndetection", "checkpointing"]
---

