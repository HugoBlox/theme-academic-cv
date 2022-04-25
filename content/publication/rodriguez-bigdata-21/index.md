---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Zero-Cost, Arrow-Enabled Data Interface for Apache Spark
subtitle: ''
summary: ''
authors:
- Sebastiaan Alvarez Rodriguez
- Jayjeet Chakraborty
- Aaron Chu
- Ivo Jimenez
- Jeff LeFevre
- Carlos Maltzahn
- Alexandru Uta
tags:
- papers
- spark
- arrow
- performance
- nsf1836650
categories: []
date: '2021-12-01'
lastmod: 2022-04-25T15:07:59-07:00
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
publishDate: '2022-04-25T22:07:59.443656Z'
publication_types:
- '1'
abstract: 'Distributed data processing ecosystems are widespread and their components
  are highly specialized, such that efficient interoperability is urgent. Recently,
  Apache Arrow was chosen by the community to serve as a format mediator, providing
  efficient in-memory data representation. Arrow enables efficient data movement between
  data processing and storage engines, significantly improving interoperability and
  overall performance. In this work, we design a new zero-cost data interoperability
  layer between Apache Spark and Arrow-based data sources through the Arrow Dataset
  API. Our novel data interface helps separate the computation (Spark) and data (Arrow)
  layers. This enables practitioners to seamlessly use Spark to access data from all
  Arrow Dataset API-enabled data sources and frameworks. To benefit our community,
  we open-source our work and show that consuming data through Apache Arrow is zero-cost:
  our novel data interface is either on-par or more performant than native Spark.'
publication: '*2021 IEEE International Conference on Big Data (IEEE BigData 2021)*'
---
