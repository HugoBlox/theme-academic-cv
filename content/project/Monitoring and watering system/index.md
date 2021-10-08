---
title: Watering System
summary: Monitoring and watering system, that can be used for domestic use as for large scale, has been developed. The system is based on the CC3200 (ARM), which uses FreeRTOS, 3 sensors interfaces have been developed (soil moisture, temperature and humidity ratio and water level) as well as a way to water the plant via a water pump powered by an external battery and controlled by a relay. A PC application has also been developed consisting of a graphic user interface in where the user can visualize the sensors data, both the latest measure as well as a graphic containing the history of the variable. The user interface also allows to water the plan in two ways, normal watering or fixing a temperature and soil moisture threshold, if those thresholds are surpassed the plant will water by itself. Data is also stored in a file at the computer in CSV format, just in case, any further processing is needed. The communication between PC and microcontroller is wireless and done via Wi-Fi, using MQTT, which makes scaling the project very easy thanks to the publish-subscribe method. Besides, a websyte has been developed in order to be able to access the data and interact with the system even when not in the same Wi-Fi network.
tags:
- Embedded Software
- Electronics
date: "2019-10-10T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: "https://github.com/SergioGasquez/Monitoring-and-watering-system"

image:
  caption: Final form of the project
  focal_point: Smart

links:
# - icon: twitter
#   icon_pack: fab
#   name: Follow
#   url: https://twitter.com/georgecushen
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides: example
---

Monitoring and watering system, that can be used for domestic use or in large systems, has been developed. The system is based on the CC3200 (ARM), which uses FreeRTOS, 3 sensors interfaces have been developed (soil moisture, temperature and humidity ratio and water level) as well as a way to water the plant via a water pump powered by an external battery and controlled by a relay. A PC application has also been developed consisting of a graphic user interface, where the user can visualize the sensors data, both the latest measure as well as a graphic containing the history of the variable. The user interface also allows to water the plan in two ways, normal watering or fixing a temperature and soil moisture threshold, if those thresholds are surpassed the plant will water by itself. Data is also stored in a file at the computer in CSV format, just in case, any further processing is needed. The communication between PC and microcontroller is wireless and done via Wi-Fi, using MQTT, which makes scaling the project very easy thanks to the publish-subscribe method. Besides, a website has been developed in order to be able to access the data and interact with the system even when not in the same Wi-Fi network.
