---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Automated Dynamic Mascon Generation for GRACE and GRACE-FO Harmonic Processing
subtitle: ''
summary: ''
authors:
- Yara Mohajerani
- David Shean
- Anthony Arendt
- Tyler C. Sutterley
tags:
- '"glacier"'
- '"geodesy"'
- '"GRACE"'
- '"gravity"'
- '"harmonics"'
- '"mascons"'
categories: []
date: '2021-01-01'
lastmod: 2022-10-03T19:28:51-04:00
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
publishDate: '2022-12-05T16:59:37.379609Z'
publication_types:
- '2'
abstract: Commonly used mass-concentration (mascon) solutions estimated from Level-1B
  Gravity Recovery and Climate Experiment (GRACE) and GRACE Follow-On data, provided
  by processing centers such as the Jet Propulsion Laboratory (JPL) or the Goddard
  Space Flight Center (GSFC), do not give users control over the placement of mascons
  or inversion assumptions, such as regularization. While a few studies have focused
  on regional or global mascon optimization from spherical harmonics data, a global
  optimization based on the geometry of geophysical signal as a standardized product
  with user-defined points has not been addressed. Finding the optimal configuration
  with enough coverage to account for far-field leakage is not a trivial task and
  is often approached in an ad-hoc manner, if at all. Here, we present an automated
  approach to defining non-uniform, global mascon solutions that focus on a region
  of interest specified by the user, while maintaining few global degrees of freedom
  to minimize noise and leakage. We showcase our approach in High Mountain Asia (HMA)
  and Alaska, and compare the results with global uniform mascon solutions from range-rate
  data. We show that the custom mascon solutions can lead to improved regional trends
  due to a more careful sampling of geophysically distinct regions. In addition, the
  custom mascon solutions exhibit different seasonal variation compared to the regularized
  solutions. Our open-source pipeline will allow the community to quickly and efficiently
  develop optimized global mascon solutions for an arbitrary point or polygon anywhere
  on the surface of the Earth.
publication: '*Remote Sensing*'
url_pdf: https://www.mdpi.com/2072-4292/13/16/3134
doi: 10.3390/rs13163134
---
