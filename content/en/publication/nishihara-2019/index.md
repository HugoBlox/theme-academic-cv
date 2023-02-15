---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Controllable text simplification with lexical constraint loss
subtitle: ''
summary: ''
authors:
- Daiki. Nishihara
- Tomoyuki. Kajiwara
- Yuki. Arase
tags: []
categories: []
date: '2019-01-01'
lastmod: 2023-02-15T15:27:40+09:00
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
publishDate: '2023-02-15T06:27:40.561174Z'
publication_types:
- '1'
abstract: We propose a method to control the level of a sentence in a text simplification
  task. Text simplification is a monolingual translation task translating a complex
  sentence into a simpler and easier to understand the alternative. In this study,
  we use the grade level of the US education system as the level of the sentence.
  Our text simplification method succeeds in translating an input into a specific
  grade level by considering levels of both sentences and words. Sentence level is
  considered by adding the target grade level as input. By contrast, the word level
  is considered by adding weights to the training loss based on words that frequently
  appear in sentences of the desired grade level. Although existing models that consider
  only the sentence level may control the syntactic complexity, they tend to generate
  words beyond the target level. Our approach can control both the lexical and syntactic
  complexity and achieve an aggressive rewriting. Experiment results indicate that
  the proposed method improves the metrics of both BLEU and SARI.
publication: '*Proceedings of the ACL 2019 Student Research Workshop (ACL 2019 SRW)*'
doi: 10.18653/v1/P19-2036
links:
- name: URL
  url: https://www.aclweb.org/anthology/P19-2036/
---
