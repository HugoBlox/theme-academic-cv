---
title: "quiho: Automated Performance Regression Testing Using Inferred Resource Utilization Profiles"
date: 2018-04-01
publishDate: 2020-01-05T06:43:50.407189Z
authors: ["Ivo Jimenez", "Noah Watkins", "Michael Sevilla", "Jay Lofstead", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "We introduce quiho, a framework for profiling application performance that can be used in automated performance regression tests. quiho profiles an application by applying sensitivity analysis, in particular statistical regression analysis (SRA), using application-independent performance feature vectors that characterize the performance of machines. The result of the SRA, feature importance specifically, is used as a proxy to identify hardware and low-level system software behavior. The relative importance of these features serve as a performance profile of an application (termed inferred resource utilization profile or IRUP), which is used to automatically validate performance behavior across multiple revisions of an application's code base without having to instrument code or obtain performance counters. We demonstrate that quiho can successfully discover performance regressions by showing its effectiveness in profiling application performance for synthetically introduced regressions as well as those found in real-world applications."
featured: false
publication: "*9th ACM/SPEC International Conference on Performance Engineering (ICPE 2018)*"
tags: ["papers", "reproducibility", "performance", "testing"]
projects:
- practical-reproducibility
---

