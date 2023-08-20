---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Augmented reality marker hiding with texture deformation
subtitle: ''
summary: ''
authors:
- Norihiko Kawai
- Tomokazu Sato
- Yuta Nakashima
- Naokazu Yokoya
tags:
- Marker hiding
- Diminished reality
- Texture deformation
categories: []
date: '2017-10-01'
lastmod: 2023-02-15T15:27:42+09:00
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
publishDate: '2023-08-20T08:43:26.650807Z'
publication_types:
- '2'
abstract: Augmented reality (AR) marker hiding is a technique to visually remove AR
  markers in a real-time video stream. A conventional approach transforms a background
  image with a homography matrix calculated on the basis of a camera pose and overlays
  the transformed image on an AR marker region in a real-time frame, assuming that
  the AR marker is on a planar surface. However, this approach may cause discontinuities
  in textures around the boundary between the marker and its surrounding area when
  the planar surface assumption is not satisfied. This paper proposes a method for
  AR marker hiding without discontinuities around texture boundaries even under nonplanar
  background geometry without measuring it. For doing this, our method estimates the
  dense motion in the marker's background by analyzing the motion of sparse feature
  points around it, together with a smooth motion assumption, and deforms the background
  image according to it. Our experiments demonstrate the effectiveness of the proposed
  method in various environments with different background geometries and textures.
publication: '*IEEE Transactions on Visualization and Computer Graphics*'
doi: 10.1109/TVCG.2016.2617325
---
