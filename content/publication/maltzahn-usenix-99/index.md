---
title: "Reducing the Disk I/O of Web Proxy Server Caches"
date: 1999-06-01
publishDate: 2020-01-05T13:33:06.016512Z
authors: ["Carlos Maltzahn", "Kathy Richardson", "Dirk Grunwald"]
publication_types: ["1"]
abstract: "The dramatic increase of HTTP traffic on the Internet has resulted in wide-spread use of large caching proxy servers as critical Internet infrastructure components. With continued growth the demand for larger caches and higher performance proxies grows as well. The common bottleneck of large caching proxy servers is disk I/O. In this paper we evaluate ways to reduce the amount of required disk I/O. First we compare the file system interactions of two existing web proxy servers, CERN and SQUID. Then we show how design adjustments to the current SQUID cache architecture can dramatically reduce disk I/O. Our findings suggest two that strategies can significantly reduce disk I/O: (1) preserve locality of the HTTP reference stream while translating these references into cache references, and (2) use virtual memory instead of the file system for objects smaller than the system page size. The evaluated techniques reduced disk I/O by 50% to 70%."
featured: false
publication: "*USENIX ATC '99*"
tags: ["papers", "networking", "intermediary", "storage", "webcaching"]
---

