---
title: Metric for automatic machine translation evaluation based on pre-trained sentence
  embeddings
_build:
  render: never
  list: never
  publishResources: false
date: '2019-09-01'
publishDate: '2023-08-20T08:45:18.192547Z'
authors:
- Hiroki Shimanaka
- Tomoyuki Kajiwara
- Mamoru Komachi
publication_types:
- '2'
abstract: This study describes a segment-level metric for automatic machine translation
  evaluation (MTE). Although various MTE metrics have been proposed, most MTE metrics,
  including the current de facto standard BLEU, can handle only limited information
  for segment-level MTE. Therefore, we propose an MTE metric using pre-trained sentence
  embeddings in order to evaluate MT translation considering global information. In
  our proposed method, we obtain sentence embeddings of MT translation and reference
  translation using a sentence encoder pre-trained on a large corpus. Then, we estimate
  the translation quality by a regression model based on sentence embeddings of MT
  translation and reference translation as input. Our metric achieved state-of-the-art
  performance in segment-level metrics tasks for all to-English language pairs on
  the WMT dataset with human evaluation score.
featured: false
publication: '*Journal of Natural Language Processing*'
doi: 10.5715/jnlp.26.613
links:
- name: URL
  url: https://www.jstage.jst.go.jp/article/jnlp/26/3/26_613/_article/-char/ja/
---

