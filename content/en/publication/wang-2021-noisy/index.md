---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Noisy-LSTM: Improving temporal awareness for video semantic segmentation'
subtitle: ''
summary: ''
authors:
- Bowen Wang
- Liangzhi Li
- Yuta Nakashima
- Ryo Kawasaki
- Hajime Nagahara
- Yasushi Yagi
tags: []
categories: []
date: '2021-03-01'
lastmod: 2023-02-15T15:27:33+09:00
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
publishDate: '2023-02-15T06:27:33.493693Z'
publication_types:
- '2'
abstract: Semantic video segmentation is a key challenge for various applications.
  This paper presents a new model named Noisy-LSTM, which is trainable in an end-to-end
  manner, with convolutional LSTMs (ConvLSTMs) to leverage the temporal coherence
  in video frames, together with a simple yet effective training strategy that replaces
  a frame in a given video sequence with noises. Our training strategy spoils the
  temporal coherence in video frames and thus makes the temporal links in ConvLSTMs
  unreliable; this may consequently improve the ability of the model to extract features
  from video frames and serve as a regularizer to avoid overfitting, without requiring
  extra data annotations or computational costs. Experimental results demonstrate
  that the proposed model can achieve state-of-the-art performances on both the CityScapes
  and EndoVis2018 datasets. The code for the proposed method is available at https://github.com/wbw520/NoisyLSTM.
publication: '*IEEE Access*'
doi: https://doi.org/10.1109/ACCESS.2021.3067928
links:
- name: URL
  url: https://doi.org/10.1109/ACCESS.2021.3067928
---
