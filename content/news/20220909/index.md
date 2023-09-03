---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "NSF will fund design of a support infrastructure for CROSS incubator project"
subtitle: ""
summary: "With the support of a one-year, $300,000 grant from the NSF, PI Carlos Maltzahn and co-PI Stephanie Lieggi will explore sustainable support infrastructures for the Skyhook Data Management project."
authors: [carlosm]
tags: []
categories: [News]
date: 2022-09-09T19:15:56-07:00
lastmod: 2022-09-09T19:15:56-07:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: [ospo, skyhook]
---

I am delighted to be one of the inaugural Phase 1 awardees of the [NSF/TIP](https://beta.nsf.gov/tip/latest) [Pathways to Enable Open Source Ecosystems (POSE) program](https://beta.nsf.gov/funding/opportunities/pathways-enable-open-source-ecosystems-pose), with [Stephanie Lieggi]({{< relref "/authors/slieggi" >}}) as co-PI. The goal of this 1-year, $300,000 project is to explore support infrastructures for [Skyhook Data Management]({{< relref "/project/skyhook" >}}), a graduated CROSS incubator project. 
 
**Title:** POSE: Phase I: Scoping the Ecosystem of Skyhook Data Management  

**Abstract:** New, well-funded, and fast-moving open source ecosystems around big data and data science have emerged due to the successful business models in hyperscale computing industries. These include the Apache Arrow ecosystem for processing structured data and the Ceph distributed storage ecosystem. Skyhook Data Management embeds Apache Arrow in Ceph and is a result of years of storage systems research at UC Santa Cruz where Ceph originated. Embedding processing of data into storage can dramatically reduce data movement, a major cost center in datacenters. This Phase 1 project explores sustainable and effective pathways for establishing open source as an alternative translation for technologies using Skyhook as a pilot project. The project’s novelties are a series of workshops which are convening open source experts and community leaders with diverse backgrounds to figure out governance, staffing and staff retention strategies for Skyhook while also building out expertise for open tech transfer within the university. As co-founder of the Ceph project, as founder and leader of the UC Santa Cruz Center for Research in Open Source Software and the Open Source Program Office UC Santa Cruz the investigators are well-positioned to convene these workshops due to their professional network of open source experts in industry and foundations. An important focus in these workshops is inclusiveness to foster a diverse community and encourage participation from historically excluded communities. The project’s impacts are the adoption of Skyhook technology for production, for reproducible research prototyping, and as a teaching tool in classrooms, and the establishment of open source as a viable translation path of technologies for research universities.

Apache Arrow is a representation of columnar data in memory which has created a wide-ranging and rapidly growing open source ecosystem of efficient data processing with many different programming language bindings (so far C, C++, C#, Go, Java, JavaScript, Julia, MATLAB, Python, R, Ruby, and Rust). Due to the common representation, data can move efficiently without conversion between the ecosystem's processing engines running on different systems. Data processing and exchange can be implemented with a number of building blocks that includes the Parquet file format, the Flight framework for efficient data interchange between processes, the Gandiva LLVM-based JIT computation for executing analytical expressions by leveraging modern CPU SIMD instructions to process Arrow data, the Acero streaming execution engine for query plans, and Awkward Array for restructuring computation on columnar and nested data. On top of these building blocks exist a number of Arrow integration frameworks, including the Fletcher framework that integrates FPGAs with Apache Arrow, Nvidia’s RAPIDS cuDF framework that integrates GPUs with Apache Arrow, the Plasma high-performance shared-memory object store, and the Substrait open format for query plans between query optimizers and processing engines. Skyhook integrates Ceph with Arrow by embedding Arrow processing engines within Ceph storage objects such that objects can be accessed via Apache Arrow API calls that are executed on a storage server. API calls are atomic and, in case of failures, Ceph automatically remaps the call to another server where the object is available due to storage redundancy. Skyhook aims to become a research prototyping ecosystem and a blueprint for efficiently embedding data processing libraries in storage systems and computational storage devices while enabling processing and storage ecosystems to evolve independently.