---
title: Iterative applications of image completion with CNN-based failure detection
authors:
- Takahiro Tanaka
- Norihiko Kawai
- Yuta Nakashima
- Tomokazu Sato
- Naokazu Yokoya
date: '2018-08-01'
publishDate: '2024-01-15T05:01:01.690909Z'
publication_types:
- article-journal
publication: '*Journal of Visual Communication and Image Representation*'
doi: 10.1016/j.jvcir.2018.05.015
abstract: Image completion is a technique to fill missing regions in a damaged or
  redacted image. A patch-based approach is one of major approaches, which solves
  an optimization problem that involves pixel values in missing regions and similar
  image patch search. One major problem of this approach is that it sometimes duplicates
  implausible texture in the image or overly smooths down a missing region when the
  algorithm cannot find better patches. As a practical remedy, the user may provide
  an interaction to identify such regions and re-apply image completion iteratively
  until she/he gets a desirable result. In this work, inspired by this idea, we propose
  a framework of human-in-the-loop style image completion with automatic failure detection
  using a deep neural network instead of human interaction. Our neural network takes
  small patches extracted from multiple feature maps obtained from the completion
  process as input for the automated interaction process, which is iterated several
  times. We experimentally show that our neural network outperforms a conventional
  linear support vector machine. Our subjective evaluation demonstrates that our method
  drastically improves the visual quality of resulting images compared to non-iterative
  application.
tags:
- Convolutional neural network
- Failure detection
- Image completion
- Image inpainting
---
