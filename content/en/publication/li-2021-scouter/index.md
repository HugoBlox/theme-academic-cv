---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'SCOUTER: Slot attention-based classifier for explainable image recognition'
subtitle: ''
summary: ''
authors:
- Liangzhi Li
- Bowen Wang
- Manisha Verma
- Yuta Nakashima
- Ryo Kawasaki
- Hajime Nagahara
tags: []
categories: []
date: '2021-11-01'
lastmod: 2023-02-15T15:27:34+09:00
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
publishDate: '2023-08-20T08:43:21.271341Z'
publication_types:
- '1'
abstract: "Explainable artificial intelligence has been gaining attention in the past\
  \ few years. However, most existing methods are based on gradients or intermediate\
  \ features, which are not directly involved in the decision-making process of the\
  \ classifier. In this paper, we propose a slot attention-based classifier called\
  \ SCOUTER for transparent yet accurate classification. Two major differences from\
  \ other attention-based methods include: (a) SCOUTER's explanation is involved in\
  \ the final confidence for each category, offering more intuitive interpretation,\
  \ and (b) all the categories have their corresponding positive or negative explanation,\
  \ which tells \\\"why the image is of a certain category\\\" or \\\"why the image\
  \ is not of a certain category.\\\" We design a new loss tailored for SCOUTER that\
  \ controls the model's behavior to switch between positive and negative explanations,\
  \ as well as the size of explanatory regions. Experimental results show that SCOUTER\
  \ can give better visual explanations in terms of various metrics while keeping\
  \ good accuracy on small and medium-sized datasets."
publication: '*Proc.~IEEE/CVF International Conference on Computer Vision (ICCV)*'
url_pdf: https://openaccess.thecvf.com/content/ICCV2021/papers/Li_SCOUTER_Slot_Attention-Based_Classifier_for_Explainable_Image_Recognition_ICCV_2021_paper.pdf
---
