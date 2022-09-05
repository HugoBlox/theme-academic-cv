---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Integration of gesture generation system using gesture library with DIY robot
  design kit
subtitle: ''
summary: ''
authors:
- Hitoshi Teshima
- Naoki Wake
- Diego Thomas
- Yuta Nakashima
- David Baumert
- Hiroshi Kawasaki
- Katsushi Ikeuchi
tags: []
categories: []
date: '2022-01-01'
lastmod: 2022-09-05T16:51:45+09:00
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
publishDate: '2022-09-05T07:51:45.598674Z'
publication_types:
- '1'
abstract: Conversational agents are expected to improve the quality of communication
  by adding gestures to the speech, and are considered to be a promising tool. Recent
  data-driven methods are capable of attaching gestures to arbitrary speech, but the
  output is still not in line with human intuition. Therefore, we propose a gesture
  transformation system that utilizes gesture types as intermediate information, based
  on the theory of psycholinguistics. We employ the gesture-first principle to create
  gesture clusters based on gesture similarities among imagistic gestures, one type
  of gesture to represent image-like motions, which are considered to represent important
  concepts in conversations. Since this system explicitly takes into account the gesture
  types recognized by a deep neural network (DNN) and the semantics of the sentence
  to select gestures, it is expected to output gestures that are more in line with
  human intuition than existing end-to-end systems that do not place these intermediate
  states. We prepared a DIY robot kit consisting of cheap parts so that conversational
  agents at home become available to ordinary users, and implemented the proposed
  gesture generation system on this robot. In order to evaluate the effectiveness
  of the conversational agent, we evaluated user impression when using various media
  for conversation and confirmed the advantage of using our agent.
publication: '*Proc.~IEEE/SICE International Symposium on System Integration (SII)*'
links:
- name: URL
  url: https://ieeexplore.ieee.org/document/9708837
---
