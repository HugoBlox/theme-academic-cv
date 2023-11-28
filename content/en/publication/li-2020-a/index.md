---
title: Joint learning of vessel segmentation and artery/vein classification with post-processing
authors:
- Liangzhi Li
- Manisha Verma
- Yuta Nakashima
- Ryo Kawasaki
- Hajime Nagahara
date: '2020-01-01'
publishDate: '2023-11-28T10:16:25.455139Z'
publication_types:
- paper-conference
publication: '*Medical Imaging with Deep Learning (MIDL)*'
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
tags:
- Medical imaging
- computer vision
- deep learning
- retina images
- vessel classification
- vessel segmentation
links:
- name: arXiv
  url: https://arxiv.org/abs/2005.13337
- name: URL
  url: https://www.liangzhili.com/publication/li-2020-joint/
---
