---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Processing Particle Data Flows with SmartNICs
subtitle: ''
summary: ''
authors:
- Jianshen Liu
- Carlos Maltzahn
- Matthew L. Curry
- Craig Ulmer
tags:
- smartnics
- offloading
- datamanagement
- hpc
categories: []
date: '2022-09-01'
lastmod: 2022-08-16T18:23:05-07:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
  - eusocial-storage
  - smartnic
  - skyhook
publishDate: '2022-08-17T01:23:04.962887Z'
publication_types:
- '1'
abstract: "Many distributed applications implement complex data flows and need a flexible mechanism for routing data between producers and consumers. Recent advances in programmable network interface cards, or SmartNICs, represent an opportunity to offload data-flow tasks into the network fabric, thereby freeing the hosts to perform other work. System architects in this space face multiple questions about the best way to leverage SmartNICs as processing elements in data flows. In this paper, we advocate the use of Apache Arrow as a foundation to implement data flow tasks on SmartNICs. We report on our experience adapting a partitioning algorithm for particle data to Apache Arrow and measure the on-card processing performance for the BlueField-2 SmartNIC. Our experiments confirm that the BlueField-2's (de)compression hardware can have a significant impact on in-transit workflows where data must be unpacked, processed, and repacked."
publication: '*2022 IEEE High Performance Extreme Computing Conference (IEEE HPEC
  2022)*'
---
