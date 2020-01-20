---
title: "Declarative Programmable Storage"
summary: "Making programmable storage manageable."
tags:
- programmable
- declarative
date: "2016-04-27T00:00:00Z"

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

**Funding:** [NSF CNS-1764102](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1764102)  
**Vision:** [USENIX HotStorage '17]({{< ref "/publication/watkins-hotstorage-17" >}})  

Large-scale storage systems are caught between a rock and a hard place. Below them, the hardware and software stacks are rapidly evolving, as new media such as solid-state drives and non-volatile memory disrupt traditional performance assumptions. It is more important than ever to future-proof applications and storage interfaces from dynamism and heterogeneity in the storage infrastructure. Meanwhile, above them, emerging classes of data-intensive applications continually demand new storage abstractions beyond the narrow waist of the POSIX IO API. Recent efforts have shown the promise of programmable storage –the principled reuse of existing subsystems exposed by the distributed infrastructure to enable new storage abstraction via composition. Unfortunately, in order to enable rapid application evolution, programmable storage forfeits protection from infrastructure evolution. This is because the composition of subsystems is a low-level task that couples (and hence obscures) a variety of orthogonal concerns, including functional correctness and performance. Building an interface by wiring together a collection of components typically requires thousands of lines of carefully-written C++ code, an effort that must be repeated whenever device or subsystem characteristics change.


In this project, we explore a declarative approach to programmable storage. We observe that, much as was the case in the early days of relational databases, the rate of change of the application logic defining storage interfaces is dwarfed by the rate of change of the hardware and software infrastructure. We pose choosing an implementation that is consistent with the declarative functional specification as a search problem over the space of semantically-identical implementations, which can be reevaluated whenever device characteristics, software or workloads change. 