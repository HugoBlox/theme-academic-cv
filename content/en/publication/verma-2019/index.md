---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Facial expression recognition with skip-connection to leverage low-level features
subtitle: ''
summary: ''
authors:
- Manisha Verma
- Hirokazu Kobori
- Yuta Nakashima
- Noriko Takemura
- Hajime Nagahara
tags: []
categories: []
date: '2019-01-01'
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
publishDate: '2023-02-15T06:27:42.493178Z'
publication_types:
- '1'
abstract: Deep convolutional neural networks (CNNs) have established their feet in
  the ground of computer vision and machine learning, used in various applications.
  In this work, an attempt is made to learn a CNN for a task of facial expression
  recognition (FER). Our network has convolutional layers linked with an FC layer
  with a skip-connection to the classification layer. Motivation behind this design
  is that lower layers of a CNN are responsible for lower level features, and facial
  expressions can be mainly encoded in low-to-mid level features. Hence, in order
  to leverage the responses from lower layers, all convo-lutional layers are integrated
  via FC layers. Moreover, a network with shared parameters is used to extract landmark
  motion trajectory features. These visual and landmark features are fused to improve
  the performance. Our method is evaluated on the CK+ and Oulu-CASIA facial expression
  datasets.
publication: '*Proceedings - IEEE International Conference on Image Processing (ICIP)*'
doi: 10.1109/ICIP.2019.8803396
links:
- name: URL
  url: https://ieeexplore.ieee.org/abstract/document/8803396
---
