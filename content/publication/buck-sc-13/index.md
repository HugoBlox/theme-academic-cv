---
title: "SIDR: Structure-Aware Intelligent Data Routing in Hadoop"
date: 2013-11-01
publishDate: 2020-01-05T06:43:50.532572Z
authors: ["Joe Buck", "Noah Watkins", "Greg Levin", "Adam Crume", "Kleoni Ioannidou", "Scott Brandt", "Carlos Maltzahn", "Neoklis Polyzotis", "Aaron Torres"]
publication_types: ["1"]
abstract: "The MapReduce framework is being extended for domains quite different from the web applications for which it was designed, including the processing of big structured data, e.g., scientific and financial data. Previous work using MapReduce to process scientific data ignores existing structure when assigning intermediate data and scheduling tasks. In this paper, we present a method for incorporating knowledge of the structure of scientific data and executing query into the MapReduce communication model. Built in SciHadoop, a version of the Hadoop MapReduce framework for scientific data, SIDR intelligently partitions and routes intermediate data, allowing it to: remove Hadoop's global barrier and execute Reduce tasks prior to all Map tasks completing; minimize intermediate key skew; and produce early, correct results. SIDR executes queries up to 2.5 times faster than Hadoop and 37% faster than SciHadoop; produces initial results with only 6% of the query completed; and produces dense, contiguous output."
featured: false
publication: "*SC '13*"
tags: ["papers", "mapreduce", "structured", "datamanagement", "routing", "hpc"]
projects:
- programmable-storage
---

