---
title: Learning to capture light fields through a coded aperture camera
authors:
- Yasutaka Inagaki
- Yuto Kobayashi
- Keita Takahashi
- Toshiaki Fujii
- Hajime Nagahara
date: '2018-01-01'
publishDate: '2024-01-15T05:01:01.431141Z'
publication_types:
- paper-conference
publication: '*Lecture Notes in Computer Science (including subseries Lecture Notes
  in Artificial Intelligence and Lecture Notes in Bioinformatics)*'
doi: 10.1007/978-3-030-01234-2_26
abstract: We propose a learning-based framework for acquiring a light field through
  a coded aperture camera. Acquiring a light field is a challenging task due to the
  amount of data. To make the acquisition process efficient, coded aperture cameras
  were successfully adopted; using these cameras, a light field is computationally
  reconstructed from several images that are acquirToshiakied with different aperture
  patterns. However, it is still difficult to reconstruct a high-quality light field
  from only a few acquired images. To tackle this limitation, we formulated the entire
  pipeline of light field acquisition from the perspective of an auto-encoder. This
  auto-encoder was implemented as a stack of fully convolutional layers and was trained
  end-to-end by using a collection of training samples. We experimentally show that
  our method can successfully learn good image-acquisition and reconstruction strategies.
  With our method, light fields consisting of 5 × 5 or 8 × 8 images can be successfully
  reconstructed only from a few acquired images. Moreover, our method achieved superior
  performance over several state-of-the-art methods. We also applied our method to
  a real prototype camera to show that it is capable of capturing a real 3-D scene.
tags:
- CNN
- Coded aperture
- Light field
---
