---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Cross-language font style transfer
subtitle: ''
summary: ''
authors:
- Chenhao Li
- Yuta Taniguchi
- Min Lu
- Shin'ichi Konomi
- Hajime Nagahara
tags: []
categories: []
date: '2023-01-01'
lastmod: 2023-02-15T15:27:31+09:00
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
publishDate: '2023-02-15T06:27:31.491586Z'
publication_types:
- '2'
abstract: In this paper, we propose a cross-language font style transfer system that
  can synthesize a new font by observing only a few samples from another language.
  Automatic font synthesis is a challenging task and has attracted much research interest.
  Most previous works addressed this problem by transferring the style of the given
  subset to the content of unseen ones. Nevertheless, they only focused on the font
  style transfer in the same language. In many cases, we need to learn font style
  from one language and then apply it to other languages. Existing methods make this
  difficult to accomplish because of the abstraction of style and language differences.
  To address this problem, we specifically designed the network into a multi-level
  attention form to capture both local and global features of the font style. To validate
  the generative ability of our model, we constructed an experimental font dataset
  of 847 fonts, each containing English and Chinese characters with the same style.
  Results show that our model generates 80.3% of users’ preferred images compared
  with state-of-the-art models.
publication: '*Applied Intelligence*'
---
