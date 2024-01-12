---
title: Enhancing Fake News Detection in Social Media via Label Propagation on Cross-modal
  Tweet Graph
authors:
- Wanqing Zhao
- Yuta Nakashima
- Haiyuan Chen
- Noboru Babaguchi
date: '2023-01-01'
publishDate: '2024-01-12T12:26:49.202920Z'
publication_types:
- paper-conference
publication: '*Proc. ACM International Conference on Multimedia*'
doi: https://doi.org/10.1145/3581783.3612086
abstract: Fake news detection in social media has become increasingly important due
  to the rapid proliferation of personal media channels and the consequential dissemination
  of misleading information. Existing methods, which primarily rely on multimodal
  features and graph-based techniques, have shown promising performance in detecting
  fake news. However, they still face a limitation, i.e., sparsity in graph connections,
  which hinders capturing possible interactions among tweets. This challenge has motivated
  us to explore a novel method that densifies the graph's connectivity to capture
  denser interaction better. Our method constructs a cross-modal tweet graph using
  CLIP, which encodes images and text into a unified space, allowing us to extract
  potential connections based on similarities in text and images. We then design a
  Feature Contextualization Network with Label Propagation (FCN-LP) to model the interaction
  among tweets as well as positive or negative correlations between predicted labels
  of connected tweets. The propagated labels from the graph are weighted and aggregated
  for the final detection. To enhance the model's generalization ability to unseen
  events, we introduce a domain generalization loss that ensures consistent features
  between tweets on seen and unseen events. We use three publicly available fake news
  datasets, Twitter, PHEME, and Weibo, for evaluation. Our method consistently improves
  the performance over the state-of-the-art methods on all benchmark datasets and
  effectively demonstrates its aptitude for generalizing fake news detection in social
  media.
links:
- name: URL
  url: https://dl.acm.org/doi/abs/10.1145/3581783.3612086
---
