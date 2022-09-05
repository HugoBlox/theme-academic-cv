---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'PoseRN: A 2D pose refinement network for bias-free multi-view 3D human pose
  estimation'
subtitle: ''
summary: ''
authors:
- Akihiko Sayo
- Diego Thomas
- Hiroshi Kawasaki
- Yuta Nakashima
- Katsushi Ikeuchi
tags: []
categories: []
date: '2021-09-01'
lastmod: 2022-09-05T16:51:46+09:00
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
publishDate: '2022-09-05T07:51:46.664767Z'
publication_types:
- '1'
abstract: We propose a new 2D pose refinement network that learns to predict the human
  bias in the estimated 2D pose. There are biases in 2D pose estimations that are
  due to differences between annotations of 2D joint locations based on annotators'
  perception and those defined by motion capture (MoCap) systems. These biases are
  crafted into publicly available 2D pose datasets and cannot be removed with existing
  error reduction approaches. Our proposed pose refinement network allows us to efficiently
  remove the human bias in the estimated 2D poses and achieve highly accurate multi-view
  3D human pose estimation.
publication: '*Proc.~International Conference on Image Processing (ICIP)*'
url_pdf: https://arxiv.org/pdf/2107.03000.pdf
---
