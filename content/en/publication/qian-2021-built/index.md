---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Built year prediction from Buddha face with heterogeneous labels
subtitle: ''
summary: ''
authors:
- Yiming Qian
- Cheikh Brahim El Vaigh
- Yuta Nakashima
- Benjamin Renoust
- Hajime Nagahara
- Yutaka Fujioka
tags: []
categories: []
date: '2021-10-01'
lastmod: 2023-02-15T15:27:34+09:00
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
publishDate: '2023-08-20T08:43:21.126055Z'
publication_types:
- '1'
abstract: 'Buddha statues are a part of human culture, especially of the Asia area,
  and they have been alongside human civilisation for more than 2,000 years. As history
  goes by, due to wars, natural disasters, and other reasons, the records that show
  the built years of Buddha statues went missing, which makes it an immense work for
  historians to estimate the built years. In this paper, we pursue the idea of building
  a neural network model that automatically estimates the built years of Buddha statues
  based only on their face images. Our model uses a loss function that consists of
  three terms: an MSE loss that provides the basis for built year estimation; a KL
  divergence-based loss that handles the samples with both an exact built year and
  a possible range of built years (e.g., dynasty or centuries) estimated by historians;
  finally a regularisation that utilises both labelled and unlabelled samples based
  on manifold assumption. By combining those three terms in the training process,
  we show that our method is able to estimate built years for given images with 37.5
  years of a mean absolute error on the test set.'
publication: '*Proc.~Workshop on Structuring and Understanding of Multimedia Heritage
  Contents (SUMAC)*'
links:
- name: URL
  url: https://dl.acm.org/doi/abs/10.1145/3475720.3484441
---
