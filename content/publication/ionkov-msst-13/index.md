---
title: "DRepl: Optimizing Access to Application Data for Analysis and Visualization"
date: 2013-05-01
publishDate: 2020-01-05T12:39:43.023100Z
authors: ["Latchesar Ionkov", "Mike Lang", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Until recently most scientific applications produced data that is saved, analyzed and visualized at later time. In recent years, with the large increase in the amount of data and computational power available there is demand for applications to support data access in-situ, or close-to simulation to provide application steering, analytics and visualization. Data access patterns required for these activities are usually different than the data layout produced by the application. In most of the large HPC clusters scientific data is stored in parallel file systems instead of locally on the cluster nodes. To increase reliability, the data is replicated, usually using some of the standard RAID schemes. Parallel file server nodes usually have more processing power than they need, so it is feasible to offload some of the data intensive processing to them. DRepl project replaces the standard methods of data replication with replicas having different layouts, optimized for the most commonly used access patterns. Replicas can be complete (i.e. any other replica can be reconstructed from it), or incomplete. DRepl consists of a language to describe the dataset and the necessary data layouts and tools to create a user-space file server that provides and keeps the data consistent and up to date in all optimized layouts."
featured: false
publication: "*MSST '13*"
tags: ["papers", "redundancy", "layout", "hpc", "storage", "storagemedium", "languages"]
---

