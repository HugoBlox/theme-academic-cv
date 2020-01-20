---
title: "Characterizing and Reducing Cross-Platform Performance Variability Using OS-level Virtualization"
date: 2016-05-01
publishDate: 2020-01-05T06:43:50.466138Z
authors: ["Ivo Jimenez", "Carlos Maltzahn", "Jay Lofstead", "Adam Moody", "Kathryn Mohror", "Remzi Arpaci-Dusseau", "Andrea Arpaci-Dusseau"]
publication_types: ["1"]
abstract: "Independent validation of experimental results in the field of parallel and distributed systems research is a challenging task, mainly due to changes and differences in software and hardware in computational environments. In particular, when an experiment runs on different hardware than the one where it originally executed, predicting the differences in results is difficult. In this paper, we introduce an architecture-independent method for characterizing the performance of a machine by obtaining a profile (a vector of microbenchark results) that we use to quantify the variability between two hardware platforms. We propose the use of isolation features that OS-level virtualization offers to reduce the variability observed when validating application performance across multiple machines. Our results show that, using our variability characterization methodology, we can correctly predict the variability bounds of CPU-intensive applications, as well as reduce it by up to 2.8x if we make use of CPU bandwidth limitations, depending on the opcode mix of an application, as well as generational and architectural differences between two hardware platforms."
featured: false
publication: "*VarSys'16*"
tags: ["papers", "reproducibility", ""]
projects:
- practical-reproducibility
---

