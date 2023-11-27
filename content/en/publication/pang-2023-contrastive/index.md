---
title: Contrastive Losses Are Natural Criteria for Unsupervised Video Summarization
authors:
- Zongshang Pang
- Yuta Nakashima
- Mayu Otani
- Hajime Nagahara
date: '2023-01-01'
publishDate: '2023-11-27T07:32:33.258936Z'
publication_types:
- paper-conference
publication: '*Proceedings of the IEEE/CVF Winter Conference on Applications of Computer
  Vision*'
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
---
