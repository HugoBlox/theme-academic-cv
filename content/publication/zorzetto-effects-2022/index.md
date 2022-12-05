---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: 'Effects of complex terrain on the shortwave radiative balance: A sub&ndash;grid
  scale parameterization for the GFDL Land Model version 4.2'
subtitle: ''
summary: ''
authors:
- Enrico Zorzetto
- Sergey Malyshev
- Nathaniel Chaney
- David Paynter
- Raymond Menzel
- Elena Shevliakova
tags: []
categories: []
date: '2022-09-01'
lastmod: 2022-12-05T11:59:39-05:00
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
publishDate: '2022-12-05T16:59:39.629196Z'
publication_types:
- '2'
abstract: textlessptextgreatertextlessstrong class=\"journal-contentHeaderColor\"textgreaterAbstract.textless/strongtextgreater
  Parameterizing incident solar radiation over complex topography regions in Earth
  System Models (ESMs) remains a challenging task. In ESMs, downward solar radiative
  fluxes at the surface are typically computed using plane parallel radiative transfer
  schemes, which do not explicitly account for the effects of a three-dimensional
  topography, such as shading and reflections. To improve the representation of these
  processes, we introduce and test a parameterization of radiation-topography interactions
  tailored to the Geophysical Fluid Dynamics Laboratory (GFDL) ESM land model. The
  approach presented here builds on an existing correction scheme for direct, diffuse
  and reflected solar irradiance terms over three-dimensional terrain. Here we combine
  this correction with a novel hierarchical multivariate clustering algorithm which
  explicitly describes the spatially varying downward irradiance over mountainous
  terrain. Based on a high-resolution digital elevation model, this combined method
  first defines a set of sub&ndash;grid land units (\"tiles\") by clustering together
  sites characterized by similar terrain-radiation interactions (e.g., areas with
  similar slope orientation, terrain and sky view factors). Then, based on terrain
  parameters characteristic for each tile, correction terms are computed to account
  for the effects of local 3-D topography on shortwave radiation over each land unit.
  We develop and test this procedure based on a set of Monte Carlo ray tracing simulations
  approximating the true radiative transfer process over three dimensional topography.
  Domains located in three distinct geographic regions (Alps, Andes, and Himalaya)
  are included in this study to allow for independent testing of the methodology over
  surfaces with differing topographic features. We find that accounting for the sub&ndash;grid
  spatial variability of solar irradiance originating from interactions with complex
  topography is important as these effects lead to significant local differences with
  respect to the plane-parallel case, as well as with respect to grid&ndash;cell scale
  average topographic corrections. Finally, we quantify the importance of the topographic
  correction for a varying number of terrain clusters and for different radiation
  terms (direct, diffuse, and reflected radiative fluxes) in order to inform the application
  of this methodology in different ESMs with varying sub-grid tile structure.textless/ptextgreater
publication: '*EGUsphere*'
url_pdf: https://egusphere.copernicus.org/preprints/2022/egusphere-2022-770/
doi: 10.5194/egusphere-2022-770
---
