---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Model-agnostic gender debiased image captioning
subtitle: ''
summary: ''
authors:
- Yusuke Hirota
- Yuta Nakashima
- Noa Garcia
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
publishDate: '2023-08-20T08:43:18.608981Z'
publication_types:
- '1'
abstract: 'Image captioning models are known to perpetuate and amplify harmful societal
  bias in the training set. In this work, we aim to mitigate such gender bias in image
  captioning models. While prior work has addressed this problem by forcing models
  to focus on people to reduce gender misclassification, it conversely generates gender-stereotypical
  words at the expense of predicting the correct gender. From this observation, we
  hypothesize that there are two types of gender bias affecting image captioning models:
  1) bias that exploits context to predict gender, and 2) bias in the probability
  of generating certain (often stereotypical) words because of gender. To mitigate
  both types of gender biases, we propose a framework, called LIBRA, that learns from
  synthetically biased samples to decrease both types of biases, correcting gender
  misclassification and changing gender-stereotypical words to more neutral ones.'
publication: '*Proc.~IEEE/CVF Conference on Computer Vision and Pattern Recognition
  (CVPR)*'
links:
- name: URL
  url: https://openaccess.thecvf.com/content/CVPR2023/html/Hirota_Model-Agnostic_Gender_Debiased_Image_Captioning_CVPR_2023_paper.html
---
