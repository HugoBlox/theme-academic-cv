---
title: Depthwise spatio-temporal STFT convolutional neural networks for human action
  recognition
_build:
  render: never
  list: never
  publishResources: false
date: '2022-01-01'
publishDate: '2023-02-15T06:27:33.338445Z'
authors:
- Sudhakar Kumawat
- Manisha Verma
- Yuta Nakashima
- Shanmuganathan Raman
publication_types:
- '2'
abstract: Conventional 3D convolutional neural networks (CNNs) are computationally
  expensive, memory intensive, prone to overfitting, and most importantly, there is
  a need to improve their feature learning capabilities. To address these issues,
  we propose spatio-temporal short-term Fourier transform (STFT) blocks, a new class
  of convolutional blocks that can serve as an alternative to the 3D convolutional
  layer and its variants in 3D CNNs. An STFT block consists of non-trainable convolution
  layers that capture spatially and/or temporally local Fourier information using
  an STFT kernel at multiple low frequency points, followed by a set of trainable
  linear weights for learning channel correlations. The STFT blocks significantly
  reduce the space-time complexity in 3D CNNs. In general, they use 3.5 to 4.5 times
  less parameters and 1.5 to 1.8 times less computational costs when compared to the
  state-of-the-art methods. Furthermore, their feature learning capabilities are significantly
  better than the conventional 3D convolutional layer and its variants. Our extensive
  evaluation on seven action recognition datasets, including Something-Something v1
  and v2, Jester, Diving-48, Kinetics-400, UCF 101, and HMDB 51, demonstrate that
  STFT blocks based 3D CNNs achieve on par or even better performance compared to
  the state-of-the-art methods.
featured: false
publication: '*IEEE Trans.~Pattern Analysis and Machine Intelligence*'
doi: https://doi.org/10.1109/TPAMI.2021.3076522
links:
- name: URL
  url: https://doi.ieeecomputersociety.org/10.1109/TPAMI.2021.3076522
---

