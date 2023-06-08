---
title: "Extending Composable Data Services into SmartNICS (Best Paper Award)"
date: 2023-05-01
publishDate: 2023-06-08T01:20:50.634899Z
authors: ["Craig Ulmer", "Jianshen Liu", "Carlos Maltzahn", "Matthew L. Curry"]
publication_types: ["1"]
abstract: "Advanced scientific-computing workflows rely on composable data services to migrate data between simulation and analysis jobs that run in parallel on high-performance computing (HPC) platforms. Unfortunately, these services consume compute-node memory and processing resources that could otherwise be used to complete the workflow’s tasks. The emergence of programmable network interface cards, or SmartNICs, presents an opportunity to host data services in an isolated space within a compute node that does not impact host resources. In this paper we explore extending data services into SmartNICs and describe a software stack for services that uses Faodel and Apache Arrow. To illustrate how this stack operates, we present a case study that implements a distributed, particle-sifting service for reorganizing simulation results. Performance experiments from a 100-node cluster equipped with 100Gb/s BlueField-2 SmartNICs indicate that current SmartNICs can perform useful data management tasks, albeit at a lower throughput than hosts."
featured: false
publication: "*2nd Workshop on Composable Systems (COMPSYS 2023, co-located with IPDPS 2023)*"
tags: ["smartnics", "composability", "datamanagement"]
projects: 
  - smartnic
  - eusocial-storage
  - skyhook
---

