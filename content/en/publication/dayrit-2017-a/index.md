---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Increasing pose comprehension through augmented reality reenactment
subtitle: ''
summary: ''
authors:
- Fabian Lorenzo Dayrit
- Yuta Nakashima
- Tomokazu Sato
- Naokazu Yokoya
tags:
- Augmented reality
- Mobile
- Novel view synthesis
- Reenactment
categories: []
date: '2017-01-01'
lastmod: 2023-02-15T15:27:44+09:00
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
publishDate: '2023-02-15T06:27:44.122169Z'
publication_types:
- '2'
abstract: Standard video does not capture the 3D aspect of human motion, which is
  important for comprehension of motion that may be ambiguous. In this paper, we apply
  augmented reality (AR) techniques to give viewers insight into 3D motion by allowing
  them to manipulate the viewpoint of a motion sequence of a human actor using a handheld
  mobile device. The motion sequence is captured using a single RGB-D sensor, which
  is easier for a general user, but presents the unique challenge of synthesizing
  novel views using images captured from a single viewpoint. To address this challenge,
  our proposed system reconstructs a 3D model of the actor, then uses a combination
  of the actor's pose and viewpoint similarity to find appropriate images to texture
  it. The system then renders the 3D model on the mobile device using visual SLAM
  to create a map in order to use it to estimate the mobile device's camera pose relative
  to the original capturing environment. We call this novel view of a moving human
  actor a reenactment, and evaluate its usefulness and quality with an experiment
  and a survey.
publication: '*Multimedia Tools and Applications*'
doi: 10.1007/s11042-015-3116-1
---
