---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Acquiring a Dynamic Light Field Through a Single-Shot Coded Image
subtitle: ''
summary: ''
authors:
- Ryoya Mizuno
- Keita Takahashi
- Michitaka Yoshida
- Chihiro Tsutake
- Toshiaki Fujii
- Hajime Nagahara
tags: []
categories: []
date: '2022-06-01'
lastmod: 2023-02-15T15:27:31+09:00
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
publishDate: '2023-08-20T08:43:19.167150Z'
publication_types:
- '1'
abstract: We propose a method for compressively acquiring a dynamic light field (a
  5-D volume) through a single-shot coded image (a 2-D measurement). We designed an
  imaging model that synchronously applies aperture coding and pixel-wise exposure
  coding within a single exposure time. This coding scheme enables us to effectively
  embed the original information into a single observed image. The observed image
  is then fed to a convolutional neural network (CNN) for light-field reconstruction,
  which is jointly trained with the camera-side coding patterns. We also developed
  a hardware prototype to capture a real 3-D scene moving over time. We succeeded
  in acquiring a dynamic light field with 5x5 viewpoints over 4 temporal sub-frames
  (100 views in total) from a single observed image. Repeating capture and reconstruction
  processes over time, we can acquire a dynamic light field at 4x the frame rate of
  the camera. To our knowledge, our method is the first to achieve a finer temporal
  resolution than the camera itself in compressive light-field acquisition. Our software
  is available from our project webpage.
publication: '*Proc.~IEEE/CVF Conference on Computer Vision and Pattern Recognition
  (CVPR)*'
url_pdf: https://openaccess.thecvf.com/content/CVPR2022/papers/Mizuno_Acquiring_a_Dynamic_Light_Field_Through_a_Single-Shot_Coded_Image_CVPR_2022_paper.pdf
---
