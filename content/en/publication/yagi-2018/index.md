---
title: Designing coded aperture camera based on PCA and NMF for light field acquisition
authors:
- Yusuke Yagi
- Keita Takahashi
- Toshiaki Fujii
- Toshiki Sonoda
- Hajime Nagahara
date: '2018-09-01'
publishDate: '2023-11-28T13:40:04.306228Z'
publication_types:
- article-journal
publication: '*IEICE Transactions on Information and Systems*'
doi: 10.1587/transinf.2017PCP0007
abstract: A light field, which is often understood as a set of dense multi-view images,
  has been utilized in various 2D/3D applications. Efficient light field acquisition
  using a coded aperture camera is the target problem considered in this paper. Specifically,
  the entire light field, which consists of many images, should be reconstructed from
  only a few images that are captured through different aperture patterns. In previous
  work, this problem has often been discussed from the context of compressed sensing
  (CS), where sparse representations on a pre-trained dictionary or basis are explored
  to reconstruct the light field. In contrast, we formulated this problem from the
  perspective of principal component analysis (PCA) and non-negative matrix factorization
  (NMF), where only a small number of basis vectors are selected in advance based
  on the analysis of the training dataset. From this formulation, we derived optimal
  non-negative aperture patterns and a straight-forward reconstruction algorithm.
  Even though our method is based on conventional techniques, it has proven to be
  more accurate and much faster than a state-of-the-art CS-based method.
tags:
- Coded aperture
- Light field
- Nonnegative matrix factorization
- Principal component analysis
---
