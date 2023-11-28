---
title: 'IterNet: retinal image segmentation utilizing structural redundancy in vessel
  networks'
authors:
- Liangzhi Li
- Manisha Verma
- Yuta Nakashima
- Hajime Nagahara
- Ryo Kawasaki
date: '2020-01-01'
publishDate: '2023-11-28T13:40:04.076708Z'
publication_types:
- paper-conference
publication: '*Proceedings - The IEEE Winter Conference on Applications of Computer
  Vision (WACV)*'
doi: 10.1109/wacv45572.2020.9093621
abstract: Retinal vessel segmentation is of great interest for diagnosis of retinal
  vascular diseases. To further improve the performance of vessel segmentation, we
  propose IterNet, a new model based on UNet, with the ability to find obscured details
  of the vessel from the segmented vessel image itself, rather than the raw input
  image. IterNet consists of multiple iterations of a mini-UNet, which can be 4$backslashtimes$
  deeper than the common UNet. IterNet also adopts the weight-sharing and skip-connection
  features to facilitate training; therefore, even with such a large architecture,
  IterNet can still learn from merely 10$backslashsim$20 labeled images, without pre-training
  or any prior knowledge. IterNet achieves AUCs of 0.9816, 0.9851, and 0.9881 on three
  mainstream datasets, namely DRIVE, CHASE-DB1, and STARE, respectively, which currently
  are the best scores in the literature. The source code is available.
links:
- name: arXiv
  url: https://arxiv.org/abs/1912.05763
- name: URL
  url: https://www.liangzhili.com/publication/li-2020-iternet/
---
