---
title: "QMDS: a file system metadata management service supporting a graph data model-based query language"
date: 2012-01-01
publishDate: 2020-01-05T13:33:05.977930Z
authors: ["Sasha Ames", "Maya Gokhale", "Carlos Maltzahn"]
publication_types: ["2"]
abstract: "File system metadata management has become a bottleneck for many data-intensive applications that rely on high-performance file systems. Part of the bottleneck is due to the limitations of an almost 50-year-old interface standard with metadata abstractions that were designed at a time when high-end file systems managed less than 100MB. Today's high-performance file systems store 7--9 orders of magnitude more data, resulting in a number of data items for which these metadata abstractions are inadequate, such as directory hierarchies unable to handle complex relationships among data. Users of file systems have attempted to work around these inadequacies by moving application-specific metadata management to relational databases to make metadata searchable. Splitting file system metadata management into two separate systems introduces inefficiencies and systems management problems. To address this problem, we propose QMDS: a file system metadata management service that integrates all file system metadata and uses a graph data model with attributes on nodes and edges. Our service uses a query language interface for file identification and attribute retrieval. We present our metadata management service design and architecture and study its performance using a text analysis benchmark application. Results from our QMDS prototype show the effectiveness of this approach. Compared to the use of a file system and relational database, the QMDS prototype shows superior performance for both ingest and query workloads."
featured: false
publication: "*International Journal of Parallel, Emergent and Distributed Systems*"
tags: ["papers", "metadata", "management", "graphs", "filesystems", "datamanagement"]
projects:
- metadata-rich
---

