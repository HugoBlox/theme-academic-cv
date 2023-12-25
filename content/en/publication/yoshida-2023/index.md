---
title: Deep Sensing for Compressive Video Acquisition
authors:
- Michitaka Yoshida
- Akihiko Torii
- Masatoshi Okutomi
- Rin-ichiro Taniguchi
- Hajime Nagahara
- Yasushi Yagi
date: '2023-01-01'
publishDate: '2023-12-25T01:39:58.455022Z'
publication_types:
- article-journal
publication: '*MDPI Sensors*'
abstract: A camera captures multidimensional information of the real world by convolving
  it into two dimensions using a sensing matrix. The original multidimensional information
  is then reconstructed from captured images. Traditionally, multidimensional information
  has been captured by uniform sampling, but by optimizing the sensing matrix, we
  can capture images more efficiently and reconstruct multidimensional information
  with high quality. Although compressive video sensing requires random sampling as
  a theoretical optimum, when designing the sensing matrix in practice, there are
  many hardware limitations (such as exposure and color filter patterns). Existing
  studies have found random sampling is not always the best solution for compressive
  sensing because the optimal sampling pattern is related to the scene context, and
  it is hard to manually design a sampling pattern and reconstruction algorithm. In
  this paper, we propose an end-to-end learning approach that jointly optimizes the
  sampling pattern as well as the reconstruction decoder. We applied this deep sensing
  approach to the video compressive sensing problem. We modeled the spatio–temporal
  sampling and color filter pattern using a convolutional neural network constrained
  by hardware limitations during network training. We demonstrated that the proposed
  method performs better than the manually designed method in gray-scale video and
  color video acquisitions.
links:
- name: URL
  url: https://www.mdpi.com/1424-8220/23/17/7535
---
