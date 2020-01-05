---
title: "SciHadoop: Array-based Query Processing in Hadoop"
date: 2011-11-01
publishDate: 2020-01-05T13:33:05.981084Z
authors: ["Joe Buck", "Noah Watkins", "Jeff LeFevre", "Kleoni Ioannidou", "Carlos Maltzahn", "Neoklis Polyzotis", "Scott A. Brandt"]
publication_types: ["1"]
abstract: "Hadoop has become the de facto platform for large-scale data analysis in commercial applications, and increasingly so in scientific applications. However, Hadoop's byte stream data model causes inefficiencies when used to process scientific data that is commonly stored in highly-structured, array-based binary file formats resulting in limited scalability of Hadoop applications in science. We introduce SciHadoop, a Hadoop plugin allowing scientists to specify logical queries over array-based data models. SciHadoop executes queries as map/reduce programs defined over the logical data model. We describe the implementation of a SciHadoop prototype for NetCDF data sets and quantify the performance of five separate optimizations that address the following goals for several representative aggregate queries: reduce total data transfers, reduce remote reads, and reduce unnecessary reads. Two optimizations allow holistic aggregate queries to be evaluated opportunistically during the map phase; two additional optimizations intelligently partition input data to increase read locality, and one optimization avoids block scans by examining the data dependencies of an executing query to prune input partitions. Experiments involving a holistic function show run-time improvements of up to 8x, with drastic reductions of IO, both locally and over the network."
featured: false
publication: "*SC '11*"
tags: ["papers", "mapreduce", "datamanagement", "hpc", "structured", "netcdf"]
---

