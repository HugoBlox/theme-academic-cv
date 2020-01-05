---
title: "CRUSH: Controlled, Scalable, Decentralized Placement of Replicated Data"
date: 2006-11-01
publishDate: 2020-01-05T13:33:06.000596Z
authors: ["Sage A. Weil", "Scott A. Brandt", "Ethan L. Miller", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Emerging large-scale distributed storage systems are faced with the task of distributing petabytes of data among tens or hundreds of thousands of storage devices. Such systems must evenly distribute data and workload to efficiently utilize available resources and maximize system performance, while facilitating system growth and managing hardware failures. We have developed CRUSH, a scalable pseudo-random data distribution function designed for distributed object-based storage systems that efficiently maps data objects to storage devices without relying on a central directory. Because large systems are inherently dynamic, CRUSH is designed to facilitate the addition and removal of storage while minimizing unnecessary data movement. The algorithm accommodates a wide variety of data replication and reliability mechanisms and distributes data in terms of user-defined policies that enforce separation of replicas across failure domains."
featured: false
publication: "*SC '06*"
tags: ["papers", "hashing", "parallel", "filesystems", "placement", "related:ceph", "obsd"]
---

