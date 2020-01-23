---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Matrices operations with Golang"
subtitle: "Common operations for neural networks"
summary: "Let's build a simple matrix library which supports common operations for neural networks"
authors: []
tags: 
- AI
- maths
categories: []
date: 2020-01-23T17:42:27+01:00
lastmod: 2020-01-23T17:42:27+01:00
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
projects: ['neural']
---


Let's build a dead simple matrix library supporting common operations. The operations this library will provide is : 
- Scalar Addition/Multiplication/Substraction
- Matrices element-wise Addition/Multiplication/Substraction
- Transpotion
- Matrices Multiplication


Let's start with how will we represent our matrix. The mathematical representation is often a 2 dimensions array, like the image on top. It is pretty easy to use the same representation in any programming language : a 2 dimensions array of integer (or float). Let us start with that simple representation using a Golang struct :

