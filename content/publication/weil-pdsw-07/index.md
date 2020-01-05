---
title: "RADOS: A Fast, Scalable, and Reliable Storage Service for Petabyte-scale Storage Clusters"
date: 2007-11-01
publishDate: 2020-01-05T13:33:06.014350Z
authors: ["Sage A. Weil", "Andrew Leung", "Scott A. Brandt", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Brick and object-based storage architectures have emerged as a means of improving the scalability of storage clusters. However, existing systems continue to treat storage nodes as passive devices, despite their ability to exhibit significant intelligence and autonomy. We present the design and implementation of RADOS, a reliable object storage service that can scales to many thousands of devices by leveraging the intelligence present in individual storage nodes. RADOS preserves consistent data access and strong safety semantics while allowing nodes to act semi-autonomously to self-manage replication, failure detection, and failure recovery through the use of a small cluster map. Our implementation offers excellent performance, reliability, and scalability while providing clients with the illusion of a single logical object store."
featured: false
publication: "*Proceedings of the 2007 ACM Petascale Data Storage Workshop (PDSW 07)*"
tags: ["papers", "obsd", "distributed", "storage", "systems", "related:x10"]
---

