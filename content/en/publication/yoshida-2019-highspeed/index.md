---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: High-Speed Imaging Using CMOS Image Sensor With Quasi Pixel-Wise Exposure
subtitle: ''
summary: ''
authors:
- Michitaka Yoshida
- Toshiki Sonoda
- Hajime Nagahara
- Kenta Endo
- Yukinobu Sugiyama
- Rin-ichiro Taniguchi
tags: []
categories: []
date: '2019-01-01'
lastmod: 2023-02-15T15:27:31+09:00
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
publishDate: '2023-08-20T08:43:19.241433Z'
publication_types:
- '2'
abstract: Several recent studies on compressive video sensing realized scene capture
  beyond the fundamental trade-off limit between spatial resolution and temporal resolution
  using random space-time sampling. However, most of these studies obtained results
  for higher-frame-rate video that was produced in simulation experiments or using
  an optically simulated random sampling camera, because there are currently no commercially
  available image sensors with random exposure or sampling capabilities. We fabricated
  a prototype complementary metal-oxide-semiconductor (CMOS) image sensor with quasi
  pixel-wise exposure timing that can realize nonuniform space-time sampling. The
  prototype sensor resets exposures independently by columns and fixes these exposures
  by rows for each 8 × 8-pixel block. This CMOS sensor is not fully controllable the
  pixels and has line-dependent control, but offers greater flexibility when compared
  with regular CMOS or charge-coupled device sensors with global or rolling shutters.
  We propose a method of realizing pseudo-random sampling for high-speed video acquisition
  that uses the flexibility of the CMOS sensor. We reconstruct the high-speed video
  sequence from images produced in pseudo-random sampling using a pre-learned decoder.
publication: '*IEEE Transactions on Computational Imaging*'
doi: 10.1109/TCI.2019.2956885
links:
- name: URL
  url: https://ieeexplore.ieee.org/abstract/document/8918110
---
