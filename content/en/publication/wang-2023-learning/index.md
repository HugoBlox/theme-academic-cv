---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Learning bottleneck concepts in image classification
subtitle: ''
summary: ''
authors:
- Bowen Wang
- Liangzhi Li
- Yuta Nakashima
- Hajime Nagahara
tags: []
categories: []
date: '2023-06-01'
lastmod: 2023-08-20T17:43:18+09:00
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
publishDate: '2023-08-20T08:43:18.448964Z'
publication_types:
- '1'
abstract: Interpreting and explaining the behavior of deep neural networks is critical
  for many tasks. Explainable AI provides a way to address this challenge, mostly
  by providing per-pixel relevance to the decision. Yet, interpreting such explanations
  may require expert knowledge. Some recent attempts toward interpretability adopt
  a concept-based framework, giving a higher-level relationship between some concepts
  and model decisions. This paper proposes Bottleneck Concept Learner (BotCL), which
  represents an image solely by the presence/absence of concepts learned through training
  over the target task without explicit supervision over the concepts. It uses self-supervision
  and tailored regularizers so that learned concepts can be human-understandable.
  Using some image classification tasks as our testbed, we demonstrate BotCL's potential
  to rebuild neural networks for better interpretability.
publication: '*Proc.~IEEE/CVF Conference on Computer Vision and Pattern Recognition
  (CVPR)*'
links:
- name: URL
  url: https://openaccess.thecvf.com/content/CVPR2023/html/Wang_Learning_Bottleneck_Concepts_in_Image_Classification_CVPR_2023_paper.html
---
