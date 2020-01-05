---
title: "In-Vivo Storage System Development"
date: 2013-08-01
publishDate: 2020-01-05T06:43:50.530355Z
authors: ["Noah Watkins", "Carlos Maltzahn", "Scott Brandt", "Ian Pye", "Adam Manzanares"]
publication_types: ["1"]
abstract: "The emergence of high-performance open-source storage systems is allowing application and middleware developers to consider non-standard storage system interfaces. In contrast to the practice of virtually always designing for file-like byte-stream interfaces, co-designed domain-specific storage system interfaces are becoming increasingly common. However, in order for developers to evolve interfaces in high-availability storage systems, services are needed for in-vivo interface evolution that allows the development of interfaces in the context of a live system. Current clustered storage systems that provide interface customizability expose primitive services for managing ad-hoc interfaces. For maximum utility, the ability to create, evolve, and deploy dynamic storage interfaces is needed. However, in large-scale clusters, dynamic interface instantiation will require system-level support that ensures interface version consistency among storage nodes and client applications. We propose that storage systems should provide services that fully manage the life-cycle of dynamic interfaces that are aligned with the common branch-and-merge form of software maintenance, including isolated development workspaces that can be combined into existing production views of the system."
featured: false
publication: "*BigDataCloud '13 (in conjunction with EuroPar 2013)*"
tags: ["papers", "datamodel", "scripting", "storage", "systems", "software-defined"]
---

