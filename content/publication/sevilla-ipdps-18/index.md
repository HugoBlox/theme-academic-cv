---
title: "Cudele: An API and Framework for Programmable Consistency and Durability in a Global Namespace"
date: 2018-05-01
publishDate: 2020-01-05T06:43:50.439396Z
authors: ["Michael A. Sevilla", "Ivo Jimenez", "Noah Watkins", "Jeff LeFevre", "Peter Alvaro", "Shel Finkelstein", "Patrick Donnelly", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "HPC and data center scale application developers are abandoning POSIX IO because file system metadata synchronization and serialization overheads of providing strong consistency and durability are too costly -- and often unnecessary -- for their applications. Unfortunately, designing file systems with weaker consistency or durability semantics excludes applications that rely on stronger guarantees, forcing developers to re-write their applications or deploy them on a different system. We present a framework and API that lets administrators specify their consistency/durability requirements and dynamically assign them to subtrees in the same namespace, allowing administrators to optimize subtrees over time and space for different workloads. We show similar speedups to related work but more importantly, we show performance improvements when we custom fit subtree semantics to applications such as checkpoint-restart (91.7x speedup), user home directories (0.03 standard deviation from optimal), and users checking for partial results (2% overhead)."
featured: false
publication: "*IPDPS 2018*"
tags: ["papers", "metadata", "datamanagement", "programmable", "filesystems", "storage", "systems"]
---

