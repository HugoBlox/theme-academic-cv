---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Contextualized multi-sense word embedding
subtitle: ''
summary: ''
authors:
- Kazuki Ashihara
- Tomoyuki Kajiwara
- Yuki Arase
- Satoru Uchida
tags: []
categories: []
date: '2019-12-01'
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
publishDate: '2023-02-15T06:27:45.310872Z'
publication_types:
- '2'
abstract: Currently, distributed word representations are employed in many natural
  language processing tasks. However, when generating one representation for each
  word, the meanings of a polysemous word cannot be differentiated because the meanings
  are integrated into one representation. Therefore, several attempts have been made
  to generate different representations per meaning based on parts of speech or the
  topic of a sentence. However, these methods are too unrefined to deal with polysemy.
  In this paper, we proposed two methods to generate more subtle multiple word representations.
  The first method involves generating multiple word representations using the word
  in a dependency relationship as a clue. The second approach involves employing a
  bi-directional language model in which a word representation that considers all
  the words in the context is generated. The results of the extensive evaluation of
  the Lexical Substitution task and Context-Aware Word Similarity task confirmed the
  effectiveness of our approaches to generate more subtle multiple word representations.
publication: '*Journal of Natural Language Processing*'
doi: 10.5715/jnlp.26.689
links:
- name: URL
  url: https://www.jstage.jst.go.jp/article/jnlp/26/4/26_689/_article/-char/ja/
---
