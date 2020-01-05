---
title: "Compressing Intermediate Keys between Mappers and Reducers in SciHadoop"
date: 2012-11-01
publishDate: 2020-01-05T13:33:05.959334Z
authors: ["Adam Crume", "Joe Buck", "Carlos Maltzahn", "Scott Brandt"]
publication_types: ["1"]
abstract: "In Hadoop mappers send data to reducers in the form of key/value pairs. The default design of Hadoop's process for transmitting this intermediate data can cause a very high overhead, especially for scientific data containing multiple variables in a multi-dimensional space. For example, for a 3D scalar field of a variable ``windspeed1'' the size of keys was 6.75 times the size of values. Much of the disk and network bandwidth of ``shuffling'' this intermediate data is consumed by repeatedly transmitting the variable name for each value. This significant waste of resources is due to an assumption fundamental to Hadoop's design that all key/values are independent. This assumption is inadequate for scientific data which is often organized in regular grids, a structure that can be described in small, constant size. Earlier we presented SciHadoop, a slightly modified version of Hadoop designed for processing scientific data. We reported on experiments with SciHadoop which confirm that the size of intermediate data has a significant impact on overall performance. Here we show preliminary designs of multiple lossless approaches to compressing intermediate data, one of which results in up to five orders of magnitude reduction the original key/value ratio."
featured: false
publication: "*PDSW'12*"
tags: ["papers", "mapreduce", "compression", "array"]
---

