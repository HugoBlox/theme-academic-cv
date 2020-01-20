---
title: "Optimized Scatter/Gather Data Operations for Parallel Storage"
date: 2017-11-01
publishDate: 2020-01-05T06:43:50.440696Z
authors: ["Latchesar Ionkov", "Carlos Maltzahn", "Michael Lang"]
publication_types: ["1"]
abstract: "Scientific workflows contain an increasing number of interacting applications, often with big disparity between the formats of data being produced and consumed by different applications. This mismatch can result in performance degradation as data retrieval causes multiple read operations (often to a remote storage system) in order to convert the data. Although some parallel filesystems and middleware libraries attempt to identify access patterns and optimize data retrieval, they frequently fail if the patterns are complex. The goal of ASGARD is to replace I/O operations issued to a file by the processes with a single operation that passes enough semantic information to the storage system, so it can combine (and eventually optimize) the data movement. ASGARD allows application developers to define their application's abstract dataset as well as the subsets of the data (fragments) that are created and used by the HPC codes. It uses the semantic information to generate and execute transformation rules that convert the data between the the memory layouts of the producer and consumer applications, as well as the layout on nonvolatile storage. The transformation engine implements functionality similar to the scatter/gather support available in some file systems. Since data subsets are defined during the initialization phase, i.e., well in advance from the time they are used to store and retrieve data, the storage system has multiple opportunities to optimize both the data layout and the transformation rules in order to increase the overall I/O performance. In order to evaluate ASGARD's performance, we added support for ASGARD's transformation rules to Ceph's object store RADOS. We created Ceph data objects that allow custom data striping based on ASGARD's fragment definitions. Our tests with the extended RADOS show up to 5 times performance improvements for writes and 10 times performance improvements for reads over collective MPI I/O."
featured: false
publication: "*PDSW-DISCS 2017 at SC17*"
tags: ["papers", "replication", "layout", "language"]
projects:
- programmable-storage
---

