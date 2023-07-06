---
title: "Offloading Data Management Services to Smart NICs"
summary: "Making Smart NICs manage data."
tags:
- programmable
- eusocial
- smartnics
- skyhook
date: "2021-01-20T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: ""
  focal_point: Smart

links: []
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: []
---

**Funding:** DOE ASCR DE-NA0003525 (FWP 20-023266): UCSC subcontractor of Sandia National Labs.  
**Press Coverage:** [The Next Platform (5/24/21)](https://www.nextplatform.com/2021/05/24/testing-the-limits-of-the-bluefield-2-smartnic/)   

The responsibilities of the I/O subsystem in high-performance computing (HPC) platforms have grown significantly over the last decade. In addition to delivering high-bandwidth, high-volume storage for results and checkpoints, the platform is expected to provide a variety of data management and storage services (DMSSes) that have become an essential part of users’ workflows. These services include lightweight key/value stores for aggregating state, in-memory object stores for data handoffs between workflow applications, I/O libraries that manage shared state for complex structured data, and programmable storage frameworks that generate live annotations of simulations.

The importance of these DMSSes has driven the scalable I/O community to re-evaluate how services are architected and deployed in modern HPC platforms. Rather than build fixed, system-level services (e.g., burst buffers), many researchers embrace flexible, user-level services that are co-scheduled with simulations. Current research advocates a “composable service” model where a small number of communication components are used to create services that are highly customized to a workflow’s requirements. This approach provides users with freedom to specify when and where their DMSSes run on a platform. A valid criticism of this work is that current architectures lack an optimal location for hosting these services. Researchers have explored hosting services in the simulation’s compute nodes, supplemental compute nodes, the storage system, and “bump-in-the-wire” network hardware. These approaches either steal resources from the simulation, increase network congestion, or are impractical due to security or cost.

In this project we advocate an alternative approach: embed DMSSes in Smart Network Interface Cards (Smart NICs) located in the compute nodes. Emerging Smart NICs such as the Mellanox BlueField card supplement a traditional NIC with processing and memory resources that are user programmable. Transitioning a composable service library to function on these Smart NICs places services in close proximity to simulations without consuming host resources. The proposed work seeks to resolve fundamental challenges that arise from this architectural change and evaluate how well DMSSes perform in an environment that mixes compute nodes and Smart NICs.
