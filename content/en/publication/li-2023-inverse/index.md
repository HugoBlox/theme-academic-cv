---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Inverse Rendering of Translucent Objects using Physical and Neural Renderers
subtitle: ''
summary: ''
authors:
- Chenhao Li
- Trung Thanh Ngo
- Hajime Nagahara
tags: []
categories: []
date: '2023-01-01'
lastmod: 2023-08-20T17:36:12+09:00
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
publishDate: '2023-08-20T08:43:19.094825Z'
publication_types:
- '1'
abstract: In this work, we propose an inverse rendering model that estimates 3D shape,
  spatially-varying reflectance, homogeneous subsurface scattering parameters, and
  an environment illumination jointly from only a pair of captured images of a translucent
  object. In order to solve the ambiguity problem of inverse rendering, we use a physically-based
  renderer and a neural renderer for scene reconstruction and material editing. Because
  two renderers are differentiable, we can compute a reconstruction loss to assist
  parameter estimation. To enhance the supervision of the proposed neural renderer,
  we also propose an augmented loss. In addition, we use a flash and no-flash image
  pair as the input. To supervise the training, we constructed a large-scale synthetic
  dataset of translucent objects, which consists of 117K scenes. Qualitative and quantitative
  results on both synthetic and real-world datasets demonstrated the effectiveness
  of the proposed model.
publication: '*Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern
  Recognition*'
---
