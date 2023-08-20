---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: BERT representations for video question answering
subtitle: ''
summary: ''
authors:
- Zekun Yang
- Noa Garcia
- Chenhui Chu
- Mayu Otani
- Yuta Nakashima
- Haruo Takemura
tags:
- Kvqa
categories: []
date: '2020-01-01'
lastmod: 2023-02-15T15:27:44+09:00
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
publishDate: '2023-08-20T08:43:27.799573Z'
publication_types:
- '1'
abstract: 'Visual question answering (VQA) aims at answering questions about the visual
  content of an image or a video. Currently, most work on VQA is focused on image-based
  question answering, and less attention has been paid into answering questions about
  videos. However, VQA in video presents some unique challenges that are worth studying:
  it not only requires to model a sequence of visual features over time, but often
  it also needs to reason about associated subtitles. In this work, we propose to
  use BERT, a sequential modelling technique based on Transformers, to encode the
  complex semantics from video clips. Our proposed model jointly captures the visual
  and language information of a video scene by encoding not only the subtitles but
  also a sequence of visual concepts with a pretrained language-based Transformer.
  In our experiments, we exhaustively study the performance of our model by taking
  different input arrangements, showing outstanding improvements when compared against
  previous work on two well-known video VQA datasets: TVQA and Pororo.'
publication: '*Proceedings - 2020 IEEE Winter Conference on Applications of Computer
  Vision, WACV 2020*'
doi: 10.1109/WACV45572.2020.9093596
---
