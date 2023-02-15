---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Novel view synthesis with light-weight view-dependent texture mapping for a
  stereoscopic HMD
subtitle: ''
summary: ''
authors:
- Thiwat Rongsirigul
- Yuta Nakashima
- Tomokazu Sato
- Naokazu Yokoya
tags:
- Head-mounted displays
- Image-based rendering
- Novel view synthesis
categories: []
date: '2017-08-01'
lastmod: 2023-02-15T15:27:45+09:00
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
publishDate: '2023-02-15T06:27:45.164477Z'
publication_types:
- '1'
abstract: The proliferation of off-the-shelf head-mounted displays (HMDs) let end-users
  enjoy virtual reality applications, some of which render a real-world scene using
  a novel view synthesis (NVS) technique. View-dependent texture mapping (VDTM) has
  been studied for NVS due to its photo-realistic quality. The VDTM technique renders
  a novel view by adaptively selecting textures from the most appropriate images.
  However, this process is computationally expensive because VDTM scans every captured
  image. For stereoscopic HMDs, the situation is much worse because we need to render
  novel views once for each eye, almost doubling the cost. This paper proposes light-weight
  VDTM tailored for an HMD. In order to reduce the computational cost in VDTM, our
  method leverages the overlapping fields of view between a stereoscopic pair of HMD
  images and pruning the images to be scanned. We show that the proposed method drastically
  accelerates the VDTM process without spoiling the image quality through a user study.
publication: '*Proceedings - IEEE International Conference on Multimedia and Expo*'
doi: 10.1109/ICME.2017.8019417
---
