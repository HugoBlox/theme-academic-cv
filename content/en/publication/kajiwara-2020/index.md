---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Negative lexically constrained decoding for paraphrase generation
subtitle: ''
summary: ''
authors:
- Tomoyuki Kajiwara
tags: []
categories: []
date: '2019-01-01'
lastmod: 2023-02-15T15:27:45+09:00
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
publishDate: '2023-02-15T06:27:45.457496Z'
publication_types:
- '1'
abstract: Paraphrase generation can be regarded as monolingual translation. Unlike
  bilingual machine translation, paraphrase generation rewrites only a limited portion
  of an input sentence. Hence, previous methods based on machine translation often
  perform conservatively to fail to make necessary rewrites. To solve this problem,
  we propose a neural model for paraphrase generation that first identifies words
  in the source sentence that should be paraphrased. Then, these words are paraphrased
  by the negative lexically constrained decoding that avoids outputting these words
  as they are. Experiments on text simplification and formality transfer show that
  our model improves the quality of paraphrasing by making necessary rewrites to an
  input sentence.
publication: '*Proceedings of the 57th Annual Meeting of the Association for Computational
  Linguistics (ACL 2019)*'
doi: 10.18653/v1/P19-1607
links:
- name: URL
  url: https://www.aclweb.org/anthology/P19-1607/
---
