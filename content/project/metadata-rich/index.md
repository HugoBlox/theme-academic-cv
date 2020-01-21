---
title: "Metadata-Rich File Systems"
summary: "Making file systems queryable."
tags:
- metadata
date: "2016-04-20T00:00:00Z"

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
**Student:** Sasha Ames  
**Collaborator:** Maya Gokhale (LLNL)  
**Funding:** PDSI, LLNL 

This project is a LLNL/UCSC  collaboration: the goal is to design a scalable metadata-rich file  system with database-like data management services. With such a file  system scientist will be able to perform time-critical analysis over  continually evolving, very large data sets. 

In the first phase we  designed and implemented QUASAR, a path-based query language using the  POSIX IO data model extended by relational links. We conducted a couple  of data mining case studies where we compared the baseline architecture  consisting of a database and a file system with our MRFS prototype. The  QUASAR interface via its query language provides much easier access to  large data sets than POSIX IO. MRFS' querying performance is  significantly better than the baseline system due to QUASAR's  hierarchical scoping. 

Challenges remain and we are in the process of addressing them: we are  working on a scalable physical data model of QUASAR's logical data  model, and we are designing a rich-metadata client cache to address  small update overheads and metadata coherence.
