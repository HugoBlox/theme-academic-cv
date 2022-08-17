---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Mapping Out the HPC Dependency Chaos
subtitle: ''
summary: ''
authors:
- Farid Zakaria
- Thomas R. W. Scogland
- Todd Gamblin
- Carlos Maltzahn
tags:
- linking
- packaging
- softwareengineering
- oss
- reproducibility
- compiler
categories: []
date: '2022-11-01'
lastmod: 2022-08-09T12:58:40-07:00
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
- practical-reproducibility
publishDate: '2022-08-09T19:58:38.331246Z'
publication_types:
- '1'
abstract: "High Performance Computing (HPC) software stacks have become complex, with the dependencies of some applications numbering in the hundreds. Packaging, distributing, and administering software stacks of that scale is a complex undertaking anywhere. HPC systems deal with esoteric compilers, hardware, and a panoply of uncommon combinations. In this paper, we explore the mechanisms available for packaging software to find its own dependencies in the context of a taxonomy of software distribution, and discuss their benefits and pitfalls. We discuss workarounds for some common problems caused by using these composed stacks and introduce Shrinkwrap: A solution to producing binaries that directly load their dependencies from precise locations and in a precise order. Beyond simplifying the use of the binaries, this approach also speeds up loading as much as 7× for a large dynamically-linked MPI application in our evaluation."
publication: '*SC22*'
---
