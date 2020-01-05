---
title: "The Case for Programmable Object Storage Systems"
date: 2016-06-01
publishDate: 2020-01-05T06:43:50.460442Z
authors: ["Noah Watkins", "Michael Sevilla", "Carlos Maltzahn"]
publication_types: ["4"]
abstract: "As applications scale to new levels and migrate into cloud environments, there has been a significant departure from the exclusive reliance on the POSIX file I/O interface. However in doing so, application often discover a lack of services, forcing them to use bolt-on features or take on the responsibility of critical data management tasks. This often results in duplication of complex software with extreme correctness requirements. Instead, wouldn't it be nice if an application could just convey what it wanted out of a storage system, and have the storage system understand? The central question we address in this paper is whether or not the design delta between two storage systems can be expressed in a form such that one system becomes little more than a configuration of the other. Storage systems should expose their useful services in a way that separates performance from correctness, allowing for their safe reuse. After all, hardened code in storage systems protects countless value, and its correctness is only as good as the stress we place on it. We demonstrate these concepts by synthesizing the CORFU high-performance shared-log abstraction in Ceph through minor modifications of existing sub-systems that are orthogonal to correctness."
featured: false
publication: ""
tags: ["papers", "programmable", "storage", "systems"]
---

