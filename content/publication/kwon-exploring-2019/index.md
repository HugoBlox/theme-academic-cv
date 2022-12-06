---
title: Exploring the Utility of Machine Learning-Based Passive Microwave Brightness
  Temperature Data Assimilation over Terrestrial Snow in High Mountain Asia
date: '2019-01-01'
publishDate: '2022-12-05T20:14:04.490992Z'
authors:
- Yonghwan Kwon
- Barton A. Forman
- Jawairia A. Ahmad
- Sujay V. Kumar
- Yeosang Yoon
publication_types:
- '2'
abstract: This study explores the use of a support vector machine (SVM) as the observation
  operator within a passive microwave brightness temperature data assimilation framework
  (herein SVM-DA) to enhance the characterization of snow water equivalent (SWE) over
  High Mountain Asia (HMA). A series of synthetic twin experiments were conducted
  with the NASA Land Information System (LIS) at a number of locations across HMA.
  Overall, the SVM-DA framework is effective at improving SWE estimates (~70% reduction
  in RMSE relative to the Open Loop) for SWE depths less than 200 mm during dry snowpack
  conditions. The SVM-DA framework also improves SWE estimates in deep, wet snow (~45%
  reduction in RMSE) when snow liquid water is well estimated by the land surface
  model, but can lead to model degradation when snow liquid water estimates diverge
  from values used during SVM training. In particular, two key challenges of using
  the SVM-DA framework were observed over deep, wet snowpacks. First, variations in
  snow liquid water content dominate the brightness temperature spectral difference
  (&Delta;TB) signal associated with emission from a wet snowpack, which can lead
  to abrupt changes in SWE during the analysis update. Second, the ensemble of SVM-based
  predictions can collapse (i.e., yield a near-zero standard deviation across the
  ensemble) when prior estimates of snow are outside the range of snow inputs used
  during the SVM training procedure. Such a scenario can lead to the presence of spurious
  error correlations between SWE and &Delta;TB, and as a consequence, can result in
  degraded SWE estimates from the analysis update. These degraded analysis updates
  can be largely mitigated by applying rule-based approaches. For example, restricting
  the SWE update when the standard deviation of the predicted &Delta;TB is greater
  than 0.05 K helps prevent the occurrence of filter divergence. Similarly, adding
  a thin layer (i.e., 5 mm) of SWE when the synthetic &Delta;TB is larger than 5 K
  can improve SVM-DA performance in the presence of a precipitation dry bias. The
  study demonstrates that a carefully constructed SVM-DA framework cognizant of the
  inherent limitations of passive microwave-based SWE estimation holds promise for
  snow mass data assimilation.
featured: false
publication: '*Remote Sensing*'
tags:
- '"High Mountain Asia"'
- '"data assimilation"'
- '"NASA Land Information System"'
- '"passive microwave brightness temperature"'
- '"snow water equivalent"'
- '"support vector machine"'
- '"synthetic twin experiment"'
url_pdf: https://www.mdpi.com/2072-4292/11/19/2265
doi: 10.3390/rs11192265
---

