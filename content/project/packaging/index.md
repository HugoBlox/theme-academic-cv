---
title: "Reproducible Dependency Management"
summary: "Making builds reproducible."
tags:
- reproducibility
date: "2022-05-09T00:00:00Z"

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


**Overview:** [SC'22 paper]({{< ref "/publication/zakaria-sc-22" >}})  
**Important Links:** [Farid Zakaria's blog](https://fzakaria.com/), [LLNL's BUILD project](https://computing.llnl.gov/projects/build)  
**Outside collaborators:** Todd Gamblin (LLNL), Tom Scogland (LLNL)

Software stacks have become complex, with the dependencies of some applications numbering in the hundreds. Packaging, distributing, and administering software stacks of that scale is a complex undertaking anywhere. In increasingly heterogenous architectures today's systems deal with esoteric compilers, hardware, and a panoply of uncommon combinations. We explore the mechanisms available for packaging software to find its own dependencies in the context of a taxonomy of software distribution, and discuss their benefits and pitfalls. A goal of this project is to make builds reproducible *and* portable *and* performance-optimized, removing a key barrier to entry for the next generation of computer experimentalists in class rooms and in research labs.