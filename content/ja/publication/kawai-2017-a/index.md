---
title: Augmented reality marker hiding with texture deformation
_build:
  render: never
  list: never
  publishResources: false
date: '2017-10-01'
publishDate: '2023-02-15T06:28:47.499229Z'
authors:
- Norihiko Kawai
- Tomokazu Sato
- Yuta Nakashima
- Naokazu Yokoya
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
featured: false
publication: '*IEEE Transactions on Visualization and Computer Graphics*'
tags:
- Marker hiding
- Diminished reality
- Texture deformation
doi: 10.1109/TVCG.2016.2617325
---

