---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Water balance model (WBM) v.1.0.0: a scalable gridded global hydrologic model
  with water-tracking functionality'
subtitle: ''
summary: ''
authors:
- Danielle S. Grogan
- Shan Zuidema
- Alex Prusevich
- Wilfred M. Wollheim
- Stanley Glidden
- Richard B. Lammers
tags: []
categories: []
date: '2022-10-01'
lastmod: 2022-12-05T11:59:39-05:00
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
projects: []
publishDate: '2022-12-05T20:14:12.950176Z'
publication_types:
- '2'
abstract: 'This paper describes the University of New Hampshire Water Balance Model,
  WBM, a process-based gridded global hydrologic model that simulates the land surface
  components of the global water cycle and includes water extraction for use in agriculture
  and domestic sectors. The WBM was first published in 1989; here, we describe the
  first fully open-source WBM version (v.1.0.0). Earlier descriptions of WBM methods
  provide the foundation for the most recent model version that is detailed here.
  We present an overview of the model functionality, utility, and evaluation of simulated
  global river discharge and irrigation water use. This new version adds a novel suite
  of water source tracking modules that enable the analysis of flow-path histories
  on water supply. A key feature of WBM v.1.0.0 is the ability to identify the partitioning
  of sources for each stock or flux within the model. Three different categories of
  tracking are available: (1) primary inputs of water to the surface of the terrestrial
  hydrologic cycle (liquid precipitation, snowmelt, glacier melt, and unsustainable
  groundwater); (2) water that has been extracted for human use and returned to the
  terrestrial hydrologic system; and (3) runoff originating from user-defined spatial
  land units. Such component tracking provides a more fully transparent model in that
  users can identify the underlying mechanisms generating the simulated behavior.
  We find that WBM v.1.0.0 simulates global river discharge and irrigation water withdrawals
  well, even with default parameter settings, and for the first time, we are able
  to show how the simulation arrives at these fluxes by using the novel tracking functions.textless/ptextgreater'
publication: '*Geoscientific Model Development*'
url_pdf: https://gmd.copernicus.org/articles/15/7287/2022/
doi: 10.5194/gmd-15-7287-2022
---
