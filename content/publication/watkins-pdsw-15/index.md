---
title: "Automatic and transparent I/O optimization with storage integrated application runtime support"
date: 2015-11-01
publishDate: 2020-01-05T06:43:50.457995Z
authors: ["Noah Watkins", "Zhihao Jia", "Galen Shipman", "Carlos Maltzahn", "Alex Aiken", "Pat McCormick"]
publication_types: ["1"]
abstract: "Traditionally storage has not been part of a programming model's semantics and is added only as an I/O library interface. As a result, programming models, languages, and storage systems are limited in the optimizations they can perform for I/O operations, as the semantics of the I/O library is typically at the level of transfers of blocks of uninterpreted bits, with no accompanying knowledge of how those bits are used by the application. For many HPC applications where I/O operations for analyzing and checkpointing large data sets are a non-negligible portion of the overall execution time, such a ``know nothing'' I/O design has negative performance implications. We propose an alternative design where the I/O semantics are integrated as part of the programming model, and a common data model is used throughout the entire memory and storage hierarchy enabling storage and application level co-optimizations. We demonstrate these ideas through the integration of storage services within the Legion [2] runtime and present preliminary results demonstrating the integration."
featured: false
publication: "*PDSW'15*"
tags: ["papers", "storage", "systems", "optimization", "parallel", "distributed", "runtime"]
projects:
- programmable-storage
---

