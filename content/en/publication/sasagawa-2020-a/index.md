---
title: YOLO in the Dark - Domain adaptation method for merging multiple models -
_build:
  render: never
  list: never
  publishResources: false
date: '2020-08-01'
publishDate: '2023-02-15T06:27:37.213477Z'
authors:
- Yukihiro Sasagawa
- Hajime Nagahara
publication_types:
- '1'
abstract: Generating models to handle new visual tasks requires additional datasets,
  which take considerable effort to create. We propose a method of domain adaptation
  for merging multiple models with less effort than creating an additional dataset.
  This method merges pre-trained models in different domains using glue layers and
  a generative model, which feeds latent features to the glue layers to train them
  without an additional dataset. We also propose a generative model that is created
  by distilling knowledge from pre-trained models. This enables the dataset to be
  reused to create latent features for training the glue layers. We apply this method
  to object detection in a low-light situation. The YOLO- in-the-Dark model comprises
  two models, Learning-to-See-in-the-Dark model and YOLO. We present the proposed
  method and report the result of domain adaptation to detect objects from RAW short-exposure
  low-light images. The YOLO-in-the-Dark model uses fewer computing resources than
  the naive approach.
featured: false
publication: '*Proceedings - European Conference on Computer Vision*'
doi: ''
url_pdf: https://www.ecva.net/papers/eccv_2020/papers_ECCV/papers/123660341.pdf
---

