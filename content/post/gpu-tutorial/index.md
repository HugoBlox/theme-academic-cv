---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "GPU Tutorial"
subtitle: ""
summary: ""
authors: []
tags: ["GSOC", "Econ-Ark"]
categories: []
date: 2020-06-02T11:55:40-04:00
lastmod: 2020-06-02T11:55:40-04:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

Today I started covering a [tutorial](https://github.com/ContinuumIO/pydata-amsterdam2019-numba) on GPU computing. This repository contains a number of Jupyter notebooks with examples covering basic usage of numba and cupy on the gpu.

Since I don't have a GPU, I followed the following steps to run the examples:

1. Clone the repository into my local Google Drive directory.
2. Using Google Colab, open any of the notebooks to interact with the code online.
3. If the notebook necessitates the use of a GPU, go to 'Runtime', 'Change Runtime', and on 'Hardware accelerator' select 'GPU'.

[Google Colab](https://colab.research.google.com/) is an online resource that allows interactive python execution through a hosted Jupyter notebook service. In particular, Google Colab provides a virtual machine with resources including CPU, GPU, and TPU for research and experimentation. This is particularly useful for students and researchers who do not have these resources locally.
