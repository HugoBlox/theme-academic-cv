---
# Documentation: https://wowchemy.com/docs/managing-content/

title: Testing and recommending methods for fitting size spectra to data
subtitle: ''
summary: ''
authors:
- Andrew M. Edwards
- James P. W. Robinson
- Michael J. Plank
- Julia K. Baum
- Julia L. Blanchard
tags:
- abundance size spectrum
- biomass size spectrum
- bounded power-law distribution
- ecosystem approach to fisheries
- ecosystem indicators
- individual size distribution
- truncated Pareto distribution
categories: []
date: '2017-01-01'
lastmod: 2022-06-13T15:29:44+02:00
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
publishDate: '2022-06-13T13:29:43.648432Z'
publication_types:
- '2'
abstract: The size spectrum of an ecological community characterizes how a property,
  such as abundance or biomass, varies with body size. Size spectra are often used
  as ecosystem indicators of marine systems. They have been fitted to data from various
  sources, including groundfish trawl surveys, visual surveys of fish in kelp forests
  and coral reefs, sediment samples of benthic invertebrates and satellite remote
  sensing of chlorophyll. Over the past decades, several methods have been used to
  fit size spectra to data. We document eight such methods, demonstrating their commonalities
  and differences. Seven methods use linear regression (of which six require binning
  of data), while the eighth uses maximum likelihood estimation. We test the accuracy
  of the methods on simulated data. We demonstrate that estimated size-spectrum slopes
  are not always comparable between the seven regression-based methods because such
  methods are not estimating the same parameter. We find that four of the eight tested
  methods can sometimes give reasonably accurate estimates of the exponent of the
  individual size distribution (which is related to the slope of the size spectrum).
  However, sensitivity analyses find that maximum likelihood estimation is the only
  method that is consistently accurate, and the only one that yields reliable confidence
  intervals for the exponent. We therefore recommend the use of maximum likelihood
  estimation when fitting size spectra. To facilitate this, we provide documented
  R code for fitting and plotting results. This should provide consistency in future
  studies and improve the quality of any resulting advice to ecosystem managers. In
  particular, the calculation of reliable confidence intervals will allow proper consideration
  of uncertainty when making management decisions.
publication: '*Methods in Ecology and Evolution*'
doi: 10.1111/2041-210X.12641
links:
- name: URL
  url: https://onlinelibrary.wiley.com/doi/abs/10.1111/2041-210X.12641
---
