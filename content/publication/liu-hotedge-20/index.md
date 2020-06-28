---
title: "Scale-out Edge Storage Systems with Embedded Storage Nodes to Get Better Availability and Cost-Efficiency At the Same Time"
date: 2020-07-01
publishDate: 2020-04-19T19:42:33.148866Z
authors: ["Jianshen Liu", "Matthew Leon Curry", "Carlos Maltzahn", "Philip Kufeldt"]
publication_types: ["1"]
url_slides: https://www.usenix.org/sites/default/files/conference/protected-files/hotedge20-paper163-slides-liu-jianshen.pdf
abstract: "In the resource-rich environment of data centers most failures can quickly failover to redundant resources. In contrast, failure in edge infrastructures with limited resources might require maintenance personnel to drive to the location in order to fix the problem. The operational cost of these 'truck rolls' to locations at the edge infrastructure competes with the operational cost incurred by extra space and power needed for redundant resources at the edge. Computational storage devices with network interfaces can act as network-attached storage servers and offer a new design point for storage systems at the edge. In this paper we hypothesize that a system consisting of a larger number of such small 'embedded' storage nodes provides higher availability due to a larger number of failure domains while also saving operational cost in terms of space and power. As evidence for our hypothesis, we compared the possibility of data loss between two different types of storage systems: one is constructed with general-purpose servers, and the other one is constructed with embedded storage nodes. Our results show that the storage system constructed with general-purpose servers has 7 to 20 times higher risk of losing data over the storage system constructed with embedded storage devices. We also compare the two alternatives in terms of power and space using the Media-Based Working Unit (MBWU) that we developed in an earlier paper as a reference point."
featured: false
publication: "*HotEdge'20*"
tags: ["papers", "edge", "reliability", "disaggregation", "embedded", "failures"]
projects:
- eusocial-storage
---
