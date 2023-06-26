---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Soil moisture estimation in South Asia via assimilation of SMAP retrievals
subtitle: ''
summary: ''
authors:
- Jawairia A. Ahmad
- Barton A. Forman
- Sujay V. Kumar
tags: []
categories: []
date: '2022-04-01'
lastmod: 2023-06-26T12:33:51-04:00
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
publishDate: '2023-06-26T16:33:50.853668Z'
publication_types:
- '2'
abstract: A soil moisture retrieval assimilation framework is implemented across South
  Asia in an attempt to improve regional soil moisture estimation as well as to provide
  a consistent regional soil moisture dataset. This study aims to improve the spatiotemporal
  variability of soil moisture estimates by assimilating Soil Moisture Active Passive
  (SMAP) near-surface soil moisture retrievals into a land surface model. The Noah-MP
  (v4.0.1) land surface model is run within the NASA Land Information System software
  framework to model regional land surface processes. NASA Modern-Era Retrospective
  Analysis for Research and Applications (MERRA2) and Global Precipitation Measurement
  (GPM) Integrated Multi-satellitE Retrievals (IMERG) provide the meteorological boundary
  conditions to the land surface model. Assimilation is carried out using both cumulative
  distribution function (CDF)-corrected (DA-CDF) and uncorrected SMAP retrievals (DA-NoCDF).
  CDF matching is applied to correct the statistical moments of the SMAP soil moisture
  retrieval relative to the land surface model. Comparison of assimilated and model-only
  soil moisture estimates with publicly available in situ measurements highlights
  the relative improvement in soil moisture estimates by assimilating SMAP retrievals.
  Across the Tibetan Plateau, DA-NoCDF reduced the mean bias and RMSE by 8.4 % and
  9.4 %, even though assimilation only occurred during less than 10 % of the study
  period due to frozen (or partially frozen) soil conditions. The best goodness-of-fit
  statistics were achieved for the IMERG DA-NoCDF soil moisture experiment. The general
  lack of publicly available in situ measurements across irrigated areas limited a
  domain-wide direct model validation. However, comparison with regional irrigation
  patterns suggested correction of biases associated with an unmodeled hydrologic
  phenomenon (i.e., anthropogenic influence via irrigation) as a result of SMAP soil
  moisture retrieval assimilation. The greatest sensitivity to assimilation was observed
  in cropland areas. Improvements in soil moisture potentially translate into improved
  spatiotemporal patterns of modeled evapotranspiration, although limited influence
  from soil moisture assimilation was observed on modeled processes within the carbon
  cycle such as gross primary production. Improvement in fine-scale modeled estimates
  by assimilating coarse-scale retrievals highlights the potential of this approach
  for soil moisture estimation over data-scarce regions.
publication: '*Hydrology and Earth System Sciences*'
url_pdf: https://hess.copernicus.org/articles/26/2221/2022/
doi: 10.5194/hess-26-2221-2022
---
