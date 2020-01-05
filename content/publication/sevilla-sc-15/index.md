---
title: "Mantle: A Programmable Metadata Load Balancer for the Ceph File System"
date: 2015-11-01
publishDate: 2020-01-05T06:43:50.468579Z
authors: ["Michael Sevilla", "Noah Watkins", "Carlos Maltzahn", "Ike Nassi", "Scott Brandt", "Sage Weil", "Greg Farnum", "Sam Fineberg"]
publication_types: ["1"]
abstract: "Migrating resources is a useful tool for balancing load in a distributed system, but it is difficult to determine when to move resources, where to move resources, and how much of them to move. We look at resource migration for file system metadata and show how CephFS's dynamic subtree partitioning approach can exploit varying degrees of locality and balance because it can partition the namespace into variable sized units. Unfortunately, the current metadata balancer is complicated and difficult to control because it struggles to address many of the general resource migration challenges inherent to the metadata management problem. To help decouple policy from mechanism, we introduce a programmable storage system that lets the designer inject custom balancing logic. We show the flexibility and transparency of this approach by replicating the strategy of a state-of-the-art metadata balancer and conclude by comparing this strategy to other custom balancers on the same system."
featured: false
publication: "*SC '15*"
tags: ["papers", "metadata", "management", "loadbalancing", "programmable", "distributed", "systems"]
---

