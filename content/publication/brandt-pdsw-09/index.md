---
title: "Fusing Data Management Services with File Systems"
date: 2009-11-01
publishDate: 2020-01-05T13:33:05.989862Z
authors: ["Scott A. Brandt", "Carlos Maltzahn", "Neoklis Polyzotis", "Wang-Chiew Tan"]
publication_types: ["1"]
abstract: "File systems are the backbone of large-scale data processing for scientific applications. Motivated by the need to provide an extensible and flexible framework beyond the abstractions provided by API libraries for files to manage and analyze large-scale data, we are developing Damasc, an enhanced file system where rich data management services for scientific computing are provided as a native part of the file system. This paper presents our vision for Damasc, a performant file system that would allow scientists or even casual users to pose declarative queries and updates over views of underlying files that are stored in their native bytestream format. In Damasc, a configurable layer is added on top of the file system to expose the contents of files in a logical data model through which views can be defined and used for queries and updates. The logical data model and views are leveraged to optimize access to files through caching and self-organizing indexing. In addition, provenance capture and analysis to file access is also built into Damasc. We describe the salient features of our proposal and discuss how it can benefit the development of scientific code."
featured: false
publication: "*Proceedings of the 2009 ACM Petascale Data Storage Workshop (PDSW 09)*"
tags: ["papers", "datamanagement", "filesystems"]
projects:
- programmable-storage
---

