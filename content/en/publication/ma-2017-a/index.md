---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Adapting local features for face detection in thermal image
subtitle: ''
summary: ''
authors:
- Chao Ma
- Ngo Thanh Trung
- Hideaki Uchiyama
- Hajime Nagahara
- Atsushi Shimada
- Rin Ichiro Taniguchi
tags:
- Adaboost
- Face detection
- Haar-like
- Histogram of oriented gradient
- Local binary pattern
- Local ternary pattern
- Mixed features
- Thermal image
categories: []
date: '2017-12-01'
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
publishDate: '2023-08-20T08:43:27.506412Z'
publication_types:
- '2'
abstract: A thermal camera captures the temperature distribution of a scene as a thermal
  image. In thermal images, facial appearances of different people under different
  lighting conditions are similar. This is because facial temperature distribution
  is generally constant and not affected by lighting condition. This similarity in
  face appearances is advantageous for face detection. To detect faces in thermal
  images, cascade classifiers with Haar-like features are generally used. However,
  there are few studies exploring the local features for face detection in thermal
  images. In this paper, we introduce two approaches relying on local features for
  face detection in thermal images. First, we create new feature types by extending
  Multi-Block LBP. We consider a margin around the reference and the generally constant
  distribution of facial temperature. In this way, we make the features more robust
  to image noise and more effective for face detection in thermal images. Second,
  we propose an AdaBoost-based training method to get cascade classifiers with multiple
  types of local features. These feature types have different advantages. In this
  way we enhance the description power of local features. We did a hold-out validation
  experiment and a field experiment. In the hold-out validation experiment, we captured
  a dataset from 20 participants, comprising 14 males and 6 females. For each participant,
  we captured 420 images with 10 variations in camera distance, 21 poses, and 2 appearances
  (participant with/without glasses). We compared the performance of cascade classifiers
  trained by different sets of the features. The experiment results showed that the
  proposed approaches effectively improve the performance of face detection in thermal
  images. In the field experiment, we compared the face detection performance in realistic
  scenes using thermal and RGB images, and gave discussion based on the results.
publication: '*Sensors (Switzerland)*'
doi: 10.3390/s17122741
---
