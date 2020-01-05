---
title: "Abstract Storage: Moving file format-specific abstractions into petabyte-scale storage systems"
date: 2009-06-01
publishDate: 2020-01-05T13:33:05.993353Z
authors: ["Joe Buck", "Noah Watkins", "Carlos Maltzahn", "Scott A. Brandt"]
publication_types: ["1"]
abstract: "High-end computing is increasingly I/O bound as computations become more data-intensive, and data transport technologies struggle to keep pace with the demands of large-scale, distributed computations. One approach to avoiding unnecessary I/O is to move the processing to the data, as seen in Google's successful, but relatively specialized, MapReduce system. This paper discusses our investigation towards a general solution for enabling in-situ computation in a peta-scale storage system. We believe our work with flexible, application-specific structured storage is the key to addressing the I/O overhead caused by data partitioning across storage nodes. In order to manage competing workloads on storage nodes, our research in system performance management is leveraged. Our ultimate goal is a general framework for in-situ data-intensive processing, indexing, and searching, which we expect to provide orders of magnitude performance increases for data-intensive workloads."
featured: false
publication: "*2nd International Workshop on Data-Aware Distributed Computing (in conjunction with HPDC-18)*"
tags: ["papers", "filesystems", "programmable"]
---

