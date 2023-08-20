---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Contrastive Losses Are Natural Criteria for Unsupervised Video Summarization
subtitle: ''
summary: ''
authors:
- Zongshang Pang
- Yuta Nakashima
- Mayu Otani
- Hajime Nagahara
tags: []
categories: []
date: '2023-01-01'
lastmod: 2023-02-15T15:27:32+09:00
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
publishDate: '2023-08-20T08:43:19.897844Z'
publication_types:
- '1'
abstract: 'Video summarization aims to select a most informative subset of frames
  in a video to facilitate efficient video browsing. Unsupervised methods usually
  rely on heuristic training objectives such as diversity and representativeness.
  However, such methods need to bootstrap the online-generated summaries to compute
  the objectives for importance score regression. We consider such a pipeline inefficient
  and seek to directly quantify the frame-level importance with the help of contrastive
  losses in the representation learning literature. Leveraging the contrastive losses,
  we propose three metrics featuring a desirable key frame: local dissimilarity, global
  consistency, and uniqueness. With features pre-trained on an image classification
  task, the metrics can already yield high-quality importance scores, demonstrating
  better or competitive performance compared with past heavily-trained methods. We
  show that by refining the pre-trained features with contrastive learning, the frame-level
  importance scores can be further improved, and the model can learn from random videos
  and generalize to test videos with decent performance.'
publication: '*Proceedings of the IEEE/CVF Winter Conference on Applications of Computer
  Vision*'
---
