---
title: Representing a partially observed non-rigid 3D human using eigen-texture and
  eigen-deformation
authors:
- Ryosuke Kimura
- Akihiko Sayo
- Fabian Lorenzo Dayrit
- Yuta Nakashima
- Hiroshi Kawasaki
- Ambrosio Blanco
- Katsushi Ikeuchi
date: '2018-11-01'
publishDate: '2023-11-27T07:32:33.653931Z'
publication_types:
- paper-conference
publication: '*Proceedings - International Conference on Pattern Recognition (ICPR)*'
doi: 10.1109/ICPR.2018.8545658
abstract: Reconstruction of the shape and motion of humans from RGB-D is a challenging
  problem, receiving much attention in recent years. Recent approaches for full-body
  reconstruction use a statistic shape model, which is built upon accurate full-body
  scans of people in skin-tight clothes, to complete invisible parts due to occlusion.
  Such a statistic model may still be fit to an RGB-D measurement with loose clothes
  but cannot describe its deformations, such as clothing wrinkles. Observed surfaces
  may be reconstructed precisely from actual measurements, while we have no cues for
  unobserved surfaces. For full-body reconstruction with loose clothes, we propose
  to use lower dimensional embeddings of texture and deformation referred to as eigen-texturing
  and eigen-deformation, to reproduce views of even unobserved surfaces. Provided
  a full-body reconstruction from a sequence of partial measurements as 3D meshes,
  the texture and deformation of each triangle are then embedded using eigen-decomposition.
  Combined with neural-network-based coefficient regression, our method synthesizes
  the texture and deformation from arbitrary viewpoints. We evaluate our method using
  simulated data and visually demonstrate how our method works on real data.
tags:
- Non-rigid 3D deformation
- eigen-deformation
- eigen-texture
- human motion capture
- sensing
links:
- name: arXiv
  url: https://arxiv.org/abs/1807.02632
---
