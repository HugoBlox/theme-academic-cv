---
title: "I/O Acceleration with Pattern Detection"
date: 2013-06-01
publishDate: 2020-01-05T12:39:43.027980Z
authors: ["Jun He", "John Bent", "Aaron Torres", "Gary Grider", "Garth Gibson", "Carlos Maltzahn", "Xian-He Sun"]
publication_types: ["1"]
abstract: "The I/O bottleneck in high-performance computing is becoming worse as application data continues to grow. In this work, we explore how patterns of I/O within these applications can significantly affect the effectiveness of the underlying storage systems and how these same patterns can be utilized to improve many aspects of the I/O stack and mitigate the I/O bottleneck. We offer three main contributions in this paper. First, we develop and evaluate algorithms by which I/O patterns can be efficiently discovered and described. Second, we implement one such algorithm to reduce the metadata quantity in a virtual parallel file system by up to several orders of magnitude, thereby increasing the performance of writes and reads by up to 40 and 480 percent respectively. Third, we build a prototype file system with pattern-aware prefetching and evaluate it to show a 46 percent reduction in I/O latency. Finally, we believe that efficient pattern discovery and description, coupled with the observed predictability of complex patterns within many high-performance applications, offers significant potential to enable many additional I/O optimizations."
featured: false
publication: "*HPDC '13*"
tags: ["papers", "compression", "plfs", "indexing", "checkpointing", "patterndetection"]
---

