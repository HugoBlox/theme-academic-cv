---
title: "Skyhook: Programmable storage for databases"
date: 2019-02-01
publishDate: 2020-01-05T06:43:50.416084Z
authors: ["Jeff LeFevre", "Noah Watkins", "Michael Sevilla", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Ceph is an open source distributed storage system that is object-based and massively scalable. Ceph provides developers with the capability to create data interfaces that can take advantage of local CPU and memory on the storage nodes (Ceph Object Storage Devices). These interfaces are powerful for application developers and can be created in C, C++, and Lua.

Skyhook is an open source storage and database project in the Center for Research in Open Source Software at UC Santa Cruz. Skyhook uses these capabilities in Ceph to create specialized read/write interfaces that leverage IO and CPU within the storage layer toward database processing and management. Specifically, we develop methods to apply predicates locally as well as additional metadata and indexing capabilities using Ceph's internal indexing mechanism built on top of RocksDB.

Skyhook's approach helps to enable scale-out of a single node database system by scaling out the storage layer. Our results show the performance benefits for some queries indeed scale well as the storage layer scales out."
featured: false
publication: "*2019 Linux Storage and Filesystems (Vault'19, co-located with FAST'19)*"
tags: ["papers", "programmable", "storage", "database"]
projects:
- programmable-storage
- declstore
- eusocial-storage
- skyhook
links:
- name: Abstract
  url: https://www.usenix.org/conference/vault19/presentation/lefevre
url_video: https://www.youtube.com/watch?v=D8ByGa1-_E8
---
