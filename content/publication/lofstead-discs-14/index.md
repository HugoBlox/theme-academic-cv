---
title: "Efficient, Failure Resilient Transactions for Parallel and Distributed Computing"
date: 2014-11-01
publishDate: 2020-01-05T06:43:50.403341Z
authors: ["Jay Lofstead", "Jai Dayal", "Ivo Jimenez", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Scientific simulations are moving away from using centralized persistent storage for intermediate data between workflow steps towards an all online model. This shift is motivated by the relatively slow IO bandwidth growth compared with compute speed increases. The challenges presented by this shift to Integrated Application Workflows are motivated by the loss of persistent storage semantics for node-to-node communication. One step towards addressing this semantics gap is using transac- tions to logically delineate a data set from 100,000s of processes to 1000s of servers as an atomic unit. Our previously demonstrated Doubly Distributed Transac- tions (D2T) protocol showed a high-performance solution, but had not explored how to detect and recover from faults. Instead, the focus was on demonstrating high-performance typical case performance. The research presented here addresses fault detec- tion and recovery based on the enhanced protocol design. The total overhead for a full transaction with multiple operations at 65,536 processes is on average 0.055 seconds. Fault detection and recovery mechanisms demonstrate similar performance to the success case with only the addition of appropriate timeouts for the system. This paper explores the challenges in designing a recoverable protocol for doubly distributed transactions, partic- ularly for parallel computing environments."
featured: false
publication: "*The 2014 International Workshop on Data-Intensive Scalable Computing Systems (DISCS-2014) (Workshop co-located with Supercomputing 2014)*"
tags: ["papers", "datamanagement", "hpc"]
---

