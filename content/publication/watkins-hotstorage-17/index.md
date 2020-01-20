---
title: "DeclStore: Layering is for the Faint of Heart"
date: 2017-07-01
publishDate: 2020-01-05T06:43:50.446394Z
authors: ["Noah Watkins", "Michael A. Sevilla", "Ivo Jimenez", "Kathryn Dahlgren", "Peter Alvaro", "Shel Finkelstein", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "Popular storage systems support diverse storage abstractions by providing important disaggregation benefits. Instead of maintaining a separate system for each abstraction, unified storage systems, in particular, support standard file, block, and object abstractions so the same hardware can be used for a wider range and a more flexible mix of applications. As large-scale unified storage systems continue to evolve to meet the requirements of an increasingly diverse set of applications and next-generation hardware, de jure approaches of the past—based on standardized interfaces—are giving way to domain-specific interfaces and optimizations. While promising, the ad-hoc strategies characteristic of current approaches to co-design are untenable.


The standardization of the POSIX I/O interface has been a major success. General adoption has allowed application developers to avoid vendor lock-in and encourages storage system designers to innovate independently. However, large-scale storage systems are generally dominated by proprietary offerings, preventing exploration of alternative interfaces when the need has presented itself. An increase in the number of special-purpose storage systems characterizes recent history in the field, including the emergence of high-performance, and highly modifiable, open-source storage systems, which enable system changes without fear of vendor lock-in. Unfortunately, evolving storage system interfaces is a challenging task requiring domain expertise, and is predicated on the willingness of programmers to forfeit the protection from change afforded by narrow interfaces."
featured: false
publication: "*HotStorage '17*"
tags: ["papers", "storage", "systems", "declarative", "distributed", "programmable"]
url_slides: https://drive.google.com/file/d/0B5rZ7hI6vXv3b1Y0bGdMaDNXRFk/view?usp=sharing
projects:
- declstore
- programmable-storage
---

