---
# Course title, summary, and position.
linktitle: Data products
summary: A list of data products published by HiMAT
weight: 1

# Page metadata.
title: Data Products related to High Mountain Asia
date: "2022-11-30T00:00:00Z"
lastmod: "2022-11-30T00:00:00Z"
draft: false  # Is this a draft? true/false
toc: true  # Show table of contents? true/false
type: docs  # Do not modify.

# Add menu entry to sidebar.
# - name: Declare this menu item as a parent with ID `name`.
# - weight: Position of link in menu.
menu:
  example:
    name: Data Products
    weight: 1
---

The following tables list data products that have been produced or will soon be released by the HiMAT teams (both HMA-1 and -2). Datasets are hosted by the
[National Snow and Ice Data Center (NSIDC)](https://nsidc.org/data/highmountainasia).


## Digital Elevation Models

|Title                                                                                                                        |Tags     |Temporal Coverage  |Geographic Coverage  |PI             | Notes/References
|-----------------------------------------------------------------------------------------------------------------------------|---------|-------------------|---------------------|---------------|------------
|[8-meter DEM Mosaics](https://nsidc.org/data/HMA_DEM8m_MOS/versions/1)                                                       |DEM      |2002 to 2016       |HMA                  |Arendt (HMA-1)  |[Shean et al, 2020](/publication/shean-systematic-2020/)
|[8-meter DEMs, cross-track](https://nsidc.org/data/HMA_DEM8m_CT/versions/1)                                                  |DEM      |2002 to 2016       |HMA                  |Arendt (HMA-1)  |[Shean et al, 2020](/publication/shean-systematic-2020/)
|[8-meter DEMs, along-track](https://nsidc.org/data/HMA_DEM8m_AT/versions/1)                                                  |DEM      |2002 to 2016       |HMA                  |Arendt (HMA-1)  |[Shean et al, 2020](/publication/shean-systematic-2020/)
|[Chamoli Disaster Pre-event 2-m DEM Composite: September 2015](https://zenodo.org/record/4554647)                            |DEM, haz |Sep 2015           |Chamoli              |Rounce (HMA-2)  |[Shean et al, 2020](/publication/shean-systematic-2020/)
|[Chamoli Disaster Post-event 2-m DEM Composite (February 10-11, 2021) and Difference Map](https://zenodo.org/record/4558692) |DEM, haz |Feb 2021           |Chamoli              |Rounce (HMA-2)  |[Shean et al, 2020](/publication/shean-systematic-2020/)
|MERIT-Endorheic Dataset: Delineation of endorheic basins in 5 and 15 min upscaled river networks | river basins | | | Rounce (HMA-2) | Estimated publication: December 2022


## Glaciers

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[Glacier thickness changes from multi-sensor DEMs](https://nsidc.org/data/HMA_Glacier_dH_Mosaics/versions/1)  | glacier | 1974 to 2017  | HMA    |     Rupper (HMA-1)   |    [Maurer et al, 2019](/publication/maurer-acceleration-2019/)
|[Average glacier thickness change from multi-sensor DEMs](https://nsidc.org/data/HMA_GlacierAvg_dH/versions/1)   | glacier | 1974 to 2017 |  HMA   |      Rupper (HMA-1)   |    [Maurer et al, 2019](/publication/maurer-acceleration-2019/)
|[Gridded glacier thickness change from multi-sensor DEMs](https://nsidc.org/data/HMA_Glacier_dH/versions/1)   | glacier |  1974 to 2017  |  HMA     |     Rupper (HMA-1)   |     [Maurer et al, 2019](/publication/maurer-acceleration-2019/)
|[PyGEM glacier projections under different RCP model scenarios](https://nsidc.org/data/HMA_GL_RCP/versions/1) | glacier, model | 2000 to 2100  |  HMA  |     Osmanoglu (HMA-1)   |    [Rounce et al, 2019](/publication/rounce-glacier-2019/)
|[PyGEM glacier projections under different RCP model scenarios, rasterized](https://nsidc.org/data/hma_gl_rcpr/versions/1)  |glacier, model|2000 to 2100 |HMA |Osmanoglu (HMA-1) | [Rounce et al, 2019](/publication/rounce-glacier-2019/)
|[Debris thickness estimates and corresponding sub-debris melt factors](https://nsidc.org/data/hma_dte/versions/1) | glacier, debris | 2000 to 2018 | Global | Rounce (HMA-2) | [Rounce et al, 2021](/publication/rounce-distributed-2021/)
|Glacier projections (mass, area, runoff, mass balance components, etc.) | glacier, projections | 2000 - 2100 | | Rounce (HMA-2) | Estimated publication: late 2022
| Debris-covered glacier surface melt products (High-resolution DEMs, maps of surface melt, flux divegence and velocity for six glaciers in Nepal) | glacier, debris | | Nepal | Rounce (HMA-2) | Estimated publication: mid-2023
| Seasonal surface velocity products for select glaciers in Nepal | glacier, velocity | Monthly timeseries | Nepal | Rounce (HMA-2) | Estimated publication: mid-2023


## Snow

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[Langtang snow bidirectional reflectance factor](https://nsidc.org/data/HMA_SBRF/versions/1) |snow    |2018-04-23/24   |Langtang, NP |Tsay (HMA-1) |
|[Langtang snow properties](https://nsidc.org/data/HMA_Snowfield/versions/1)                  |snow    |2018-04-23/24   |Langtang, NP |Tsay (HMA-1) |
|[Daily snow reanalysis](https://nsidc.org/data/HMA_SR_D/versions/1)                          |snow    |1999 to 2017    |HMA          | Margulis (HMA-1) |
|Snow cover fraction, snow albedo including impacts from LAP from MODSCAG/MODDRFS | snow, albedo | 20 year record | 500 m spatial resolution | Rittger (HMA-2) | Estimated publication: TBD
|Snow cover fraction, snow albedo including impacts from LAP from SPIRES | snow, albedo | 20 year record | 500 m spatial resolution | Rittger (HMA-2) | Estimated publication: TBD
|SWE and snow/ice melt from ParBal driven with SCAG/DRFS and SPIRES | snow, SWE | 20 year record | 500 m spatial resolution | Rittger (HMA-2) | Estimated publication: TBD
|Melt from ParBal partitioned by surface type | snow, melt | 20 year record | 500 m spatial resolution | Rittger (HMA-2) | Estimated publication: winter 2023


## Land Surface and Atmosphere

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[LIS model output](https://nsidc.org/data/HMA_LIS_LandSurfaceHydro/versions/1)           |snow, rad, soil moist., sfc temp |2003 to 2018   |HMA         |Kumar, S (HMA-1)    |[Loomis et al, 2019](/publication/loomis-water-2019/)
|[MAR V3.5 output](https://nsidc.org/data/HMA_MAR3_5/versions/1)            |albedo, sfc temp, rad, snow, wind |2000 to 2015   |HMA         |Margulis (HMA-1) |
|[ASCAT freeze/thaw/melt status](https://nsidc.org/data/HMA_FreezeThawMelt_ASCAT/versions/1)     |sfc prop   |2009 to 2017   |HMA         |McDonald (HMA-1) |
|[LDAS 1 km snow and temperature parameters](https://nsidc.org/data/HMA_STParams/versions/1) |snow, model  |2007 to 2008   |HMA         |Houser (HMA-1)      |[Yoon et al, 2019](/publication/yoon-evaluating-2019/)
|[Regional Climate Model Output, Monthly](https://nsidc.org/data/HMA_RCMO_M/versions/1)     |temp, humid, moist, precip, wind, ocean |1999 to 2014   |HMA+        |Osmanoglu (HMA-1) |
|[Regional Climate Model Output, Daily](https://nsidc.org/data/HMA_RCMO_D/versions/1) | temp, humid, moist, precip, wind, ocean |1999 to 2014   |HMA+        |Osmanoglu (HMA-1)
|[Regional Climate Model Output, 6-hourly](https://nsidc.org/data/hma_rcmo_6h/versions/1)    |temp, humid, moist, precip, wind, ocean |1999 to 2014   |HMA+        |Osmanoglu (HMA-1)
|[Regional Climate Model Output, 1-hourly](https://nsidc.org/data/hma_rcmo_1h/versions/1)   |temp, humid, moist, precip, wind, ocean |1999 to 2014   |HMA+        |Osmanoglu (HMA-1)
|[GFDL SPEAR Large Ensembles](https://nsidc.org/data/HMA-2_gsle/versions/1)| temp, precip, humid, wind, model | 1921 to 2100 | Global | Shevliakova (HMA-2) | 
| [GEOS subseasonal to seasonal forecasts from 1981-present](https://www.cpc.ncep.noaa.gov/products/NMME/) | s2s, forecast | 1981 - 2022 | | Girotto (HMA-2) | Some variables published
| GEOSldas analysis with snow data assimilation | forecast, snow | 2000 - 2022 |  | Girotto (HMA-2) | Estimated publication: TBD
| GEOS S2S forecasts with snow cover assimilation | forecast, snow | 2000 - 2022 | | Girotto (HMA-2) | Estimated publication: 2023
| Downscaled hydrometeorological projections from CMIP6 ensemble members | projection | daily | 5 km resolution | Zaitchik (HMA-2) | Estimated publication: TBD
|

## Precipitation

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[GFDL FLOR modeled daily precipitation](https://nsidc.org/data/HMA_EAPrecip_FLOR/versions/1)  | precip, model | 1961 to 2000, 1982 to 2017, 2061 to 2100  |HMA    |Kirschbaum, Kapnick (HMA-1)|
|[GFDL FLOR modeled extreme precipitation indices](https://nsidc.org/data/HMA_Precip_FLOR/versions/1)   |precip, model |2000 to 2016   |HMA         |Kirschbaum, Kapnick (HMA-1)|
|[TRMM-derived 3B42 extreme precipitation indices](https://nsidc.org/data/HMA_Precip_3B42/versions/1)  |precip |1999 to 2017   |near-global |Kirschbaum (HMA-1) |
<!-- | Downscaled daily precipitation derived from GFDL SPEAR 30-member ensemble | precip, model | daily | 5 km resolution | Nikolopoulos (HMA-2) | -->
                                           

## Landslides and Hazards

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[Landslide catalog, ver. 1](https://nsidc.org/data/HMA_LS_Cat/versions/1)   |haz     |1956 to 2018    |near global  |Kirschbaum (HMA-1) |
|[Landslide inventory, ver. 1](https://nsidc.org/data/hma_mtli/versions/1) |haz     |2009 to 2018    |Nepal        |Kirschbaum (HMA-1) |
|[Multitemporal landslide inventory for Pumqu/Arun river basin](https://nsidc.org/data/HMA-2_mtli/versions/1) | haz | 2011 to 2020 | Pumqu/Arun River Basins | Kirschbaum (HMA-2)
| Inventory of newly discovered glacial lake outburst floods across the Himalayas | lakes, haz, glof | | HMA | McCoy (HMA-2) | Estimated publication: TBD
| Landslide hazard indicator | haz | | 5 km resolution | Kirschbaum (HMA-2) | Estimated publication: TBD

## Lakes

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[Near-global multi-temporal glacial lake inventory](https://nsidc.org/data/HMA_GLI/versions/1)  |lakes   |1990 to 2018    |near global  |Kargel (HMA-1) |
| Glacial lake outlines from ~1975 Hexagon imagery | glacier, lakes | 1975 | | McCoy (HMA-2) | Estimated publication: TBD


## Aerosols

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[MODIS aerosol optical depth](https://nsidc.org/data/HMA_OptDepth/versions/1) |aerosol |2000 to 2019    |HMA          |Tsay (HMA-1)          |[Jeong et al, 2018](/publication/jeong-langley-2018/)
| Spatial distribution of the deposition of light absorbing aerosols and aerosol radiative forcing in High Mountain Asia | aerosol | hourly | 12 km resolution | Kumar, R (HMA-2) | Estimated publication: March 2023


## Water Budget
| Title | Tags | Temporal Coverage | Geographic Coverage | PI | Notes/References
|-------|------|-------------------|---------------------|----|----------------------
|River vector discharge at overpass intervals over entire domain | discharge |  | | Gleason (HMA-2) | Estimated publication: TBD
|Small river vector discahrge from Planet over select basins | discharge | | | Gleason (HMA-2) | Estimated publication: summer 2023
|Total water storage, river discharge, other major water balance variables over HMA  | TWS, discharge | 1980 - | 6 arcminute resolution | Rounce (HMA-2) | Estimated publication: spring 2023

## Weather Station Data

|Title                                                            |Tags   |Temporal Coverage |Geographic Coverage |PI           |Notes/References
|-----------------------------------------------------------------|-------|------------------|--------------------|-------------|------------
|[Langtang AWS measurements](https://nsidc.org/data/HMA_AWS/versions/1)  |temp, precip, humid, press, wind |2017 to 2018   |Langtang, NP|Tsay (HMA-1) |
|[Langtang shortwave irradiance](https://nsidc.org/data/HMA_SDI/versions/1) |rad    |2017 to 2018   |Langtang, NP|Tsay (HMA-1)|
