---
title: Terrestrial Water Cycle Changes
summary: Insights on terrestrial water cycle changes over HMA in the past two decades (2002-2021)
tags:
- science highlight
date: "2024-01-16T00:00:00Z"

# Optional external URL for project (replaces project detail page).
# external_link: ""

image:
  preview_only: true
  caption: 
  focal_point: Smart

---

High Mountain Asia (HMA), a region that includes the Tibetan Plateau and the Himalayan,
Karakoram, Pamir, Hindu Kush, and Tien Shan mountains, represents the headwaters of Asia's
most prominent hydrologic basins, which feed billions of people. HMA is subject to warming
at an alarming rate in addition to an intense human management. During HiMAT 2, our team
developed a terrestrial water cycle reanalysis with the best available, downscaled
meteorology conditions, a state-of-the-art land surface model, a large suite of remote
sensing measurements, and advanced data assimilation algorithms to better understand the
impacts of a changing climate and human management on land surface processes and subsurface
hydrology in HMA.

{{<figure src="/img/topic/terrestrial-water-cycle-changes/figure1.png"
caption="Figure 1: Key elements of the terrestrial water cycle reanalysis: Multisensor, multivariate constraints on the terrestrial water budget from remote sensing; Multi-decadal land reanalysis through data assimilation and land surface modeling; Quantification of the hydrological budget, trends, and extremes as a contribution to GMELT">}}

High-quality precipitation datasets are critical for land surface modeling. Nonetheless,
precipitation is highly uncertain especially in complex environments such as HMA where it
remains extremely hard to measure due to the harshness of the area. As a result, in HMA,
gridded precipitation products provide different values of precipitation and trends which
make hydrologic analyses difficult. Because different gridded precipitation products have
different performance and accuracy depending on the area over HMA and there is not an
overall best and accurate dataset for the region, we generated an ensemble precipitation
with GPM IMERG, CHIRPS, and ERA5 datasets using a localized probability matching mean
method[^1]. Comparisons between the ensemble product and the selected ensemble members
have shown that the ensemble allows filtering out inconsistencies and differences across
the different products and provides more realistic datasets.

HMA exhibits high increases in vegetation greenness. While Earth’s greening has been
attributed to climate change in general, greening over HMA has potentially multiple
drivers because of the complexity of the environment. We performed a holistic multivariate
remote sensing analysis which simultaneously examines the primary components of the
terrestrial water cycle from 2003 to 2020 to identify the main drivers of greening in the
region[^2]. Our analysis showed that (1) precipitation drives greening in mid and low
elevation areas covered by evergreen and mixed forests (e.g., Yangtze basin), (2) warming
and decreases in snow enhance greening in areas where the cryospheric processes are
important, and (3) irrigation induces greening in irrigated lands (Ganges-Brahmaputra and
Indus).

Changes in vegetation greenness impact the surface albedo, which can further
exacerbate/counterbalance the impacts of climate change. We performed a remote sensing
analysis to quantify the changes in surface albedo and their drivers over HMA[^3]. Our
results demonstrate that greening dominates the changes in surface albedo in vegetated
areas. However, in vegetated areas subject to cryospheric processes, the changes in snow
cover are the dominant driver to the changes in surface albedo in winter, the effects of
vegetation greenness are only preponderant from spring to fall. Soil moisture drives the
decreases in surface albedo in non-vegetated areas with low fractional snow cover. Over
the irrigated lands of HMA, both changes in vegetation and soil moisture control the high
decreases in surface albedo due to the induced greening and high soil moisture. 

The HMA’s land reanalysis is based on a multivariate assimilation of remotely sensed
estimates of irrigation, GRACE GSFC’s Terrestrial Water Storage (TWS), MODIS’s leaf area
index (LAI), snow water equivalent (SWE) derived from MODIS, and ESA CCI’s soil moisture
into the land surface model Noah-Multi-Parameterization (Noah-MP) from 2003 to 20207. To
simulate the surface water dynamics, including streamflow, we use the Hydrological
Modeling and Analysis Platform (HyMAP), a state-of-the-art, globalscale flood model. The
land reanalysis has been validated by comparing the trends in simulated key hydrologic
variables such as streamflow, runoff and groundwater storage, and evapotranspiration to
the trends derived from ground (streamflow and groundwater levels) and remotely sensed
(the global runoff data, MODIS evapotranspiration and the Global Land Evaporation
Amsterdam Model (GLEAM) evapotranspiration) measurements7. We also evaluate the
probability of snow detection of the reanalysis. The HMA reanalysis with a spatial
resolution of 5 km and a temporal resolution of a day provides spatially and temporally
consistent estimates of storages, fluxes, and meteorological conditions that are relevant
for a range of model applications in hydrology. The reanalysis is conducted using the NASA
Land Information System (LIS), an advanced land surface modeling and data assimilation
environment. The datasets are currently available at the [National Snow and Ice Dataset
Center (NSIDC)](https://nsidc.org/data/hma2_nlsmr/versions/1).

With the onset of climate change, mountainous regions such as HMA are subject to
rain-on-snow with dramatic consequences on downstream hydrology. We analyzed rain-on-snow
events and their trends over the past two decades in HMA using the developed model[^4].
The results showed that rain-on-snow significantly contributes to runoff in the region and
are characterized by bidirectional trends with strong implications for water
management[^5]. For instance, the decreasing trends of rain-on-snow in some of areas of
HMA (e.g., over the Ganges-Brahmaputra basin) will have consequences of decreased recharge
from the headwaters and exacerbated use of groundwater unless increasing trends of
rainfall compensate for the decreasing snowmelt whereas the increasing trends in Indus
contribute to reducing the snowpack in late summer, with concerns of reduced water
availability and increased groundwater exploitation for agricultural purposes.

The renalysis was also used to better understand the impacts of irrigation-driven
groundwater depletion in the Ganges-Brahmaputra on the streamflow in the Bay of Benghal,
which has a crucial role in global geopolitics and Southeast Asia’s economy[^6]. The
effects of such activities mostly occurring in the Ganges basin, either intensified or
lessened depending on the area by the climatic conditions, decrease the streamflow in the
bay by up to 1200 m3/s/year. While the increase in precipitation in the Ganges basin
reduces the effects of irrigation-driven groundwater depletion on the streamflow, the
decrease in precipitation and the snowmelt decline in the Brahmaputra basin exacerbate
streamflow reduction due to groundwater depletion at the basin’s delta. 

In a follow-up study, we focus on two HMA basins (the Yangtze and the Ganges-Brahmaputra)
to contrast the impacts of climate- and human-induced greening on evapotranspiration using
the land reanalysis5. Greening can alter the water and energy cycles by changing the
evapotranspiration. We found that though the rate of greening is similar in both basins,
anthropogenic influences lead to dissimilar responses in evapotranspiration. In the
Yangtze, climate-induced greening increases evapotranspiration, with the increase in
moisture being high enough to meet the evapotranspiration demand. In the
Ganges-Brahmaputra, irrigation-induced greening does not alter annual evapotranspiration,
only pre-monsoon evapotranspiration increases. The dry season declines in water storage
due to pumping decrease evapotranspiration, while laboriously meeting the demand.

###### References

[^1]:[Maina, F. Z., Kumar, S. V., Dollan, I. J., & Maggioni, V. 2022 "Development and
evaluation of ensemble consensus precipitation estimates over High Mountain
Asia"](/publication/maina-development-2022/)

[^2]:[Maina, F.Z., Kumar, S. V., Albergel, C., Mahanama S. P. 2022 "Warming, increase in
precipitation, and irrigation enhance greening in High Mountain
Asia"](/publication/maina-warming-2022/)

[^3]:[Maina, F. Z., Kumar, S. V., & Gangodagamage, C. 2022 "Irrigation and warming drive
the decreases in surface albedo over High Mountain
Asia"](/publication/maina-irrigation-2022/)

[^4]:[Maina, F. Z., Kumar S. V. 2023 "Diverging trends in rain-on-snow over High Mountain
Asia"](/publication/maina-diverging-2023/)

[^5]:Maina, F., et al. "Anthropogenic influences alter the response and seasonality of
evapotranspiration: A case study over two High Mountain Asia basins", Geophysical Research
Letters, Accepted.

[^6]:Maina F. Z., Getirana A., Kumar S.V., Saharia M., Kumar B. N., McLarty S., Appana R.
“Irrigation-driven groundwater depletion in the Ganges-Brahmaputra basin decreases the
streamflow in the Bay of Bengal”, Communication Earth Environment, In review.
