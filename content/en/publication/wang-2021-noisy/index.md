---
title: 'Noisy-LSTM: Improving temporal awareness for video semantic segmentation'
authors:
- Bowen Wang
- Liangzhi Li
- Yuta Nakashima
- Ryo Kawasaki
- Hajime Nagahara
- Yasushi Yagi
date: '2021-03-01'
publishDate: '2024-01-15T05:00:59.392659Z'
publication_types:
- article-journal
publication: '*IEEE Access*'
doi: https://doi.org/10.1109/ACCESS.2021.3067928
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
links:
- name: URL
  url: https://doi.org/10.1109/ACCESS.2021.3067928
---
