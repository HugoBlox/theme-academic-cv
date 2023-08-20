---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Multi-modal humor segment prediction in video
subtitle: ''
summary: ''
authors:
- Zekun Yang
- n̆derlineYuta Nakashima
- Haruo Takemura
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
publishDate: '2023-08-20T08:43:17.962121Z'
publication_types:
- '2'
abstract: Humor can be induced by various signals in the visual, linguistic, and vocal
  modalities emitted by humans. Finding humor in videos is an interesting but challenging
  task for an intelligent system. Previous methods predict humor in the sentence level
  given some text (e.g., speech transcript), sometimes together with other modalities,
  such as videos and speech. Such methods ignore humor caused by the visual modality
  in their design, since their prediction is made for a sentence. In this work, we
  first give new annotations to humor based on a sitcom by setting up temporal segments
  of ground truth humor derived from the laughter track. Then, we propose a method
  to find these temporal segments of humor. We adopt an approach based on sliding
  window, where the visual modality is described by pose and facial features along
  with the linguistic modality given as subtitles in each sliding window. We use long
  short-term memory networks to encode the temporal dependency in poses and facial
  features and pre-trained BERT to handle subtitles. Experimental results show that
  our method improves the performance of humor prediction.
publication: '*Multimedia Systems*'
doi: https://doi.org/10.1007/s00530-023-01105-x
links:
- name: URL
  url: https://link.springer.com/article/10.1007/s00530-023-01105-x
---
