---
title: "Virtualizing Disk Performance"
date: 2008-04-01
publishDate: 2020-01-05T13:33:06.023046Z
authors: ["Tim Kaldewey", "Anna Povzner", "Theodore Wong", "Richard Golding", "Scott A. Brandt", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Large- and small-scale storage systems frequently serve a mixture of workloads, an increasing number of which require some form of performance guarantee. Providing guaranteed disk performance---the equivalent of a ``virtual disk''---is challenging because disk requests are non-preemptible and their execution times are stateful, partially non-deterministic, and can vary by orders of magnitude. Guaranteeing throughput, the standard measure of disk performance, requires worst-case I/O time assumptions orders of magnitude greater than average I/O times, with correspondingly low performance and poor control of the resource allocation. We show that disk time utilization--- analogous to CPU utilization in CPU scheduling and the only fully provisionable aspect of disk performance---yields greater control, more efficient use of disk resources, and better isolation between request streams than bandwidth or I/O rate when used as the basis for disk reservation and scheduling."
featured: false
publication: "*RTAS 2008*"
tags: ["papers", "performance", "management", "storage", "systems", "fahrrad", "rbed", "qos"]
---

