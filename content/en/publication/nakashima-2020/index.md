---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Speech-driven face reenactment for a video sequence
subtitle: ''
summary: ''
authors:
- Yuta Nakashima
- Takaaki Yasui
- Leon Nguyen
- Noboru Babaguchi
tags:
- 3d geometry
- Face reenactment
- Speech-driven
- Talking head
- Speech-driven
- Talking head
categories: []
date: '2020-01-01'
lastmod: 2023-02-15T15:27:41+09:00
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
publishDate: '2023-08-20T08:43:25.574204Z'
publication_types:
- '2'
abstract: We present a system for reenacting a person's face driven by speech. Given
  a video sequence with the corresponding audio track of a person giving a speech
  and another audio track containing different speech from the same person, we reconstruct
  a 3D mesh of the face in each frame of the video sequence to match the speech in
  the second audio track. Audio features are extracted from such two audio tracks.
  Assuming that the appearance of the mouth is highly correlated to these speech features,
  we extract the mouth region of the face's 3D mesh from the video sequence when speech
  features from the second audio track are close to those of the video's audio track.
  While retaining temporal consistency, these extracted mouth regions then replace
  the original mouth regions in the video sequence, synthesizing a reenactment video
  where the person seemingly gives the speech from the second audio track. Our system,
  coined S2TH (speech to talking head), does not require any special hardware to capture
  the 3D geometry of faces but uses the state-of-the-art method for facial geometry
  regression. We visually and subjectively demonstrate reenactment quality.
publication: '*ITE Transactions on Media Technology and Applications*'
doi: 10.3169/mta.8.60
---
