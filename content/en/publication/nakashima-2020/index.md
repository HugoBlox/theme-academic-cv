---
title: Speech-driven face reenactment for a video sequence
authors:
- Yuta Nakashima
- Takaaki Yasui
- Leon Nguyen
- Noboru Babaguchi
date: '2020-01-01'
publishDate: '2024-01-15T05:00:59.894447Z'
publication_types:
- article-journal
publication: '*ITE Transactions on Media Technology and Applications*'
doi: 10.3169/mta.8.60
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
tags:
- 3D geometry
- Face reenactment
- Speech-driven
- Talking head
- speech-driven
- talking head
---
