---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Acquiring dynamic light fields through coded aperture camera
subtitle: ''
summary: ''
authors:
- Kohei Sakai
- Keita Takahashi
- Toshiaki Fujii
- Hajime Nagahara
tags: []
categories: []
date: '2020-08-01'
lastmod: 2023-02-15T15:27:37+09:00
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
publishDate: '2023-08-20T08:43:22.785760Z'
publication_types:
- '1'
abstract: We investigate the problem of compressive acquisition of a dynamic light
  field. A promising solution for compressive light field acquisition is to use a
  coded aperture camera, with which an entire light field can be computationally reconstructed
  from several images captured through differently-coded aperture patterns. With this
  method, it was assumed that the scene should not move throughout the complete acquisition
  process, which restricted real applications. In this study, however, we assume that
  the target scene may change over time, and propose a method for acquiring a dynamic
  light field (a moving scene) using a coded aperture camera and a convolutional neural
  network (CNN). To successfully handle scene motions, we develop a new configuration
  of image observation, called V-shape observation, and train the CNN using a dynamic-light-field
  dataset with pseudo motions. Our method is validated through experiments using both
  a computer-generated scene and a real camera.
publication: '*Proceedings - European Conference on Computer Vision*'
doi: ''
url_pdf: https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123640358.pdf
---
