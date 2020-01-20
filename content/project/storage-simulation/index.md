---
title: "Scalable Storage System Simulation"
summary: "Making storage system models."
tags:
- simulation
date: "2016-04-19T00:00:00Z"

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
{{% alert note %}}
**Students:** Adam Crume, Esteban Molina-Estolano  
**Collaborators:** Matthew Curry (SNL), Thomas Kroeger (SNL), Lee Ward (SNL), Rob Ross (ANL), Christopher Carothers (RPI), John Bent (LANL), Gary Grider (LANL), James Nunez (LANL), Scott Brandt (UCSC), Kleoni Ioannidou (UCSC) 
**Funding:** DOE, PDSI, ISSDM, GAANN 
{{% /alert %}}

This project, a LANL/UCSC  collaboration, has already created strong interest at labs and  universities: the goal is to create a simulator for parallel file  systems. Such a simulator will 

1. enable file system designers and researchers to try out innovative data  placement strategies and other novel subsystems at scale,
2. facilitate file system deployment by providing a low-cost platform for "what-if" workload and file system tuning scenarios,
3. empower scientist to quickly tune existing file systems for specific workloads,
4. aid instructors by providing a platform for class room experiments.

In the first phase we started with building the simulator based on a  very simple model of parallel file systems and a set of placement  strategies from commonly used systems (so far: PVFS, PanFS, and Ceph).  We are in the process of validating the simulator by replaying traces  collected by the PDSI, LLNL, and at industry. The validation involves a  careful and disciplined process of adding and removing features to the  simulator's file system model to arrive at the minimal set of features  necessary to reproduce real system's behavior. 