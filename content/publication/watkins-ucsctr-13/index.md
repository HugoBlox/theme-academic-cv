---
title: "In-Vivo Storage System Development"
date: 2013-03-01
publishDate: 2020-01-05T06:43:50.545312Z
authors: ["Noah Watkins", "Carlos Maltzahn", "Scott Brandt", "Ian Pye", "Adam Manzanares"]
publication_types: ["4"]
abstract: "The emergence of high-performance open-source storage systems is allowing application and middleware developers to consider non-standard storage system interfaces. In contrast to the common practice of translating all I/O access onto the POSIX file interface, it will soon be common for application development to include the co-design of storage system interfaces. In order for developers to evolve a co-design in high-availability clusters, services are needed for in-vivo interface evolution that allows the development of interfaces in the context of a live system. Current clustered storage systems that provide interface customizability expose primitive services for managing static interfaces. For maximum utility, creating, evolving, and deploying dynamic storage interfaces is needed. However, in large-scale clusters, dynamic interface instantiation will require system-level support that ensures interface version consistency among storage nodes and clients. We propose that storage systems should provide services that fully manage the life-cycle of dynamic interfaces that are aligned with the common branch-and-merge form of software maintenance, including isolated development workspaces that can be combined into existing production views of the system."
featured: false
publication: ""
tags: ["papers", "datamodel", "scripting", "storage", "systems", "software-defined"]
---

