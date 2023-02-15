---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Fall detection using optical level anonymous image sensing system
subtitle: ''
summary: ''
authors:
- Chao Ma
- Atsushi Shimada
- Hideaki Uchiyama
- Hajime Nagahara
- Rin ichiro Taniguchi
tags:
- 3d convolutional neural network
- Computational imaging
- Fall detection
- Optical level anonymous
- Privacy protection
categories: []
date: '2019-02-01'
lastmod: 2023-02-15T15:27:39+09:00
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
publishDate: '2023-02-15T06:27:39.146228Z'
publication_types:
- '2'
abstract: Fall is one of the leading causes of injury for the elderly individuals.
  Systems that automatically detect falls can significantly reduce the delay of assistance.
  Most of commercialized fall detection systems are based on wearable devices, which
  elderly individuals tend to forget wearing. Using surveillance cameras to detect
  falls based on computer vision is ideal, because anyone in the monitoring scopes
  can be under protection. However, the privacy protection issue using surveillance
  cameras has been bothering people. To effectively protect the privacy, we proposed
  an optical level anonymous image sensing system, which can protect the privacy by
  hiding the facial regions optically at the video capturing phase. We apply the system
  to fall detection. In detecting falls, we propose a neural network by combining
  a 3D convolutional neural network for feature extraction and an autoencoder for
  modelling the normal behaviors. The learned autoencoder reconstructs the features
  extracted from videos with normal behaviors with smaller average errors than those
  extracted from videos with falls. We evaluated our neural network by a hold-out
  validation experiment, and showed its effectiveness. In field tests, we showed and
  discussed the applicability of the optical level anonymous image sensing system
  for privacy protection and fall detection.
publication: '*Optics and Laser Technology*'
doi: 10.1016/j.optlastec.2018.07.013
---
