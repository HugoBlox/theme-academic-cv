---
title: "Opportunistic Query Execution on SmartNICs for Analyzing In-Transit Data"
date: 2023-09-01
publishDate: 2023-08-30T03:43:54.396498Z
authors: ["Jianshen Liu", "Carlos Maltzahn", "Craig Ulmer"]
publication_types: ["1"]
abstract: High-performance computing (HPC) systems researchers have proposed using current, programmable network interface cards (or SmartNICs) to offload data management services that would otherwise consume host processor cycles in a platform. While this work has successfully mapped data pipelines to a collection of SmartNICs, users require a flexible means of inspecting in-transit data to assess the live state of the system. In this paper, we explore SmartNIC-driven opportunistic query execution, i.e., enabling the SmartNIC to make a decision about whether to execute a query operation locally (i.e., "offload") or defer execution to the client (i.e., "push-back"). Characterizations of different parts of the end-to-end query path allow the decision engine to make complexity predictions that would not be feasible by the client alone.
featured: false
publication: "*HPEC '23*"
tags: ["papers", "smartnics", "querying", "queryprocessing", "streaming", "streamprocessing", "analysis"]
projects:
  - eusocial-storage
  - smartnic
  - skyhook
---

