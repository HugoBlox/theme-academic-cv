---
title: Finding important people in a video using deep neural networks with conditional
  random fields
_build:
  render: never
  list: never
  publishResources: false
date: '2018-10-01'
publishDate: '2023-02-15T06:27:39.742360Z'
authors:
- Mayu Otani
- Atsushi Nishida
- Yuta Nakashima
- Tomokazu Sato
- Naokazu Yokoya
publication_types:
- '2'
abstract: Finding important regions is essential for applications, such as content-aware
  video compression and video retargeting to automatically crop a region in a video
  for small screens. Since people are one of main subjects when taking a video, some
  methods for finding important regions use a visual attention model based on face/pedestrian
  detection to incorporate the knowledge that people are important. However, such
  methods usually do not distinguish important people from passers-by and bystanders,
  which results in false positives. In this paper, we propose a deep neural network
  (DNN)-based method, which classifies a person into important or unimportant, given
  a video containing multiple people in a single frame and captured with a hand-held
  camera. Intuitively, important/ unimportant labels are highly correlated given that
  corresponding people's spatial motions are similar. Based on this assumption, we
  propose to boost the performance of our important/unimportant classification by
  using conditional random fields (CRFs) built upon the DNN, which can be trained
  in an end-to-end manner. Our experimental results show that our method successfully
  classifies important people and the use of a DNN with CRFs improves the accuracy.
featured: false
publication: '*IEICE Transactions on Information and Systems*'
tags:
- Conditional random field
- Important people classification
- Neural network
doi: 10.1587/transinf.2018EDP7029
---

