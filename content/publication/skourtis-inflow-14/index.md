---
title: "Erasure Coding & Read/Write Separation in Flash Storage"
date: 2014-10-01
publishDate: 2020-01-05T06:43:50.476810Z
authors: ["Dimitris Skourtis", "Dimitris Achlioptas", "Noah Watkins", "Carlos Maltzahn", "Scott Brandt"]
publication_types: ["1"]
abstract: "We want to create a scalable flash storage system that provides read/write separation and uses erasure coding to provide reliability without the storage cost of replication. Flash on Rails [19] is a system for enabling consistent performance in flash storage by physically separating reads from writes through redundancy. In principle, Rails supports erasure codes. However, it has only been evaluated using replication in small arrays, so it is currently uncertain how it would scale with erasure coding. In this work we consider the applicability of erasure coding in Rails, in a new system called eRails. We consider the effects of computation due to encoding/decoding on the raw performance, as well as its effect on performance consistency. We demonstrate that up to a certain number of drives the performance remains unaffected while the computation cost remains modest. After that point, the computational cost grows quickly due to coding itself making further scaling inefficient. To support an arbitrary number of drives we present a design allowing us to scale eRails by constructing overlapping erasure coding groups that preserve read/write separation. Finally, through benchmarks we demonstrate that eRails achieves read/write separation and consistent read performance under read/write workloads."
featured: false
publication: "*INFLOW '14 (at OSDI'14)*"
tags: ["papers", "erasurecodes", "performance", "flash", "garbagecollection", "predictable"]
---

