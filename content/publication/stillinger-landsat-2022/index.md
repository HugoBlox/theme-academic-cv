---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Landsat, MODIS, and VIIRS snow cover mapping algorithm performance as validated
  by airborne lidar datasets
subtitle: ''
summary: ''
authors:
- Timbo Stillinger
- Karl Rittger
- Mark S. Raleigh
- Alex Michell
- Robert E. Davis
- Edward H. Bair
tags: []
categories: []
date: '2022-08-01'
lastmod: 2022-12-05T11:59:38-05:00
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
publishDate: '2022-12-05T16:59:38.752918Z'
publication_types:
- '2'
abstract: 'textlessptextgreatertextlessstrong class=\"journal-contentHeaderColor\"textgreaterAbstract.textless/strongtextgreater
  Snow cover mapping algorithms utilizing multispectral satellite data at various
  spatial resolutions are available, each treating subpixel variation differently.
  Past evaluations of snow mapping accuracy typically relied on satellite data collected
  at a higher spatial resolution than the data in question. However, these optical
  data cannot characterize snow cover mapping performance under forest canopies or
  at the meter scale. Here, we use 3 m spatial resolution snow depth maps collected
  on 116 days by an aerial laser scanner to validate band ratio and spectral mixture
  snow cover mapping algorithms. Such a comprehensive evaluation of sub-canopy snow
  mapping performance has not been undertaken previously. The following standard (produced
  operationally by an agency) products are evaluated: NASA gap-filled Moderate-resolution
  Imaging Spectroradiometer (MODIS) MOD10A1F, NASA gap-filled Visible Infrared Imaging
  Radiometer Suite (VIIRS) VNP10A1F, and USGS Landsat 8 Level-3 Fractional Snow Covered
  Area. Two spectral unmixing approaches are also evaluated: Snow Covered Area and
  Grain size (SCAG) and Snow Property Inversion from Remote Sensing (SPIReS), both
  of which are gap-filled MODIS products and are also run on Landsat 8. We assess
  subpixel snow mapping performance while considering the fractional snow covered
  area (fSCA), canopy cover, sensor zenith angle, and other variables within six global
  seasonal snow classes. Metrics are calculated at the pixel and basin scales, including
  the root-mean-square error (RMSE), bias, and F statistic (a detection measure).
  The newer MOD10A1F Version 61 and VNP10A1F Version 1 product biases (-7.1 %, -9.5
  %) improve significantly when linear equations developed for older products are
  applied (2.8 %, -2.7 %) to convert band ratios to fSCA. The F statistics are unchanged
  (94.4 %, 93.1 %) and the VNP10A1F RMSE improves (18.6 % to 15.7 %) while the MOD10A1F
  RMSE worsens (12.7 % to 13.7 %). Consistent with previous studies, spectral mixture
  approaches (SCAG, SPIReS) show lower biases (-0.1 %, -0.1 %) and RMSE (12.1 %,12.0
  %), with higher F statistics (95.6 %, 96.1 %) relative to the band ratio approaches
  for MODIS. Landsat 8 products are all spectral mixture methods with low biases (-0.4
  to 0.3 %), low RMSE (11.4 to 15.8 %), and high F statistics (97.3 to 99.1 %). Spectral
  unmixing methods can improve snow cover mapping at the global scale.textless/ptextgreater'
publication: '*The Cryosphere Discussions*'
url_pdf: https://tc.copernicus.org/preprints/tc-2022-159/
doi: 10.5194/tc-2022-159
---
