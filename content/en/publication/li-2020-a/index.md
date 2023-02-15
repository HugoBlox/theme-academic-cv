---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Joint learning of vessel segmentation and artery/vein classification with post-processing
subtitle: ''
summary: ''
authors:
- Liangzhi Li
- Manisha Verma
- Yuta Nakashima
- Ryo Kawasaki
- Hajime Nagahara
tags:
- Medical imaging
- Computer vision
- Deep learning
- Retina images
- Vessel classification
- Vessel segmentation
categories: []
date: '2020-01-01'
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
publishDate: '2023-02-15T06:27:44.864970Z'
publication_types:
- '1'
abstract: Retinal imaging serves as a valuable tool for diagnosis of various diseases.
  However, reading retinal images is a difficult and time-consuming task even for
  experienced specialists. The fundamental step towards automated retinal image analysis
  is vessel segmentation and artery/vein classification, which provide various information
  on potential disorders. To improve the performance of the existing automated methods
  for retinal image analysis, we propose a two-step vessel classification. We adopt
  a UNet-based model, SeqNet, to accurately segment vessels from the background and
  make prediction on the vessel type. Our model does segmentation and classification
  sequentially, which alleviates the problem of label distribution bias and facilitates
  training. To further refine classification results, we post-process them considering
  the structural information among vessels to propagate highly confident prediction
  to surrounding vessels. Our experiments show that our method improves AUC to 0.98
  for segmentation and the accuracy to 0.92 in classification over DRIVE dataset.
publication: '*Medical Imaging with Deep Learning (MIDL)*'
links:
- name: arXiv
  url: https://arxiv.org/abs/2005.13337
- name: URL
  url: https://www.liangzhili.com/publication/li-2020-joint/
---
