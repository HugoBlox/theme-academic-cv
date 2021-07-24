---
title: "SkyhookDM"
summary: "Making the storage layer manage data."
tags:
- programmable
- eusocial
- skyhook
date: "2021-07-23T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: ""
  focal_point: Smart

links: []
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: []
---

**Websites:** [skyhookdm.com](https://skyhookdm.com), [IRIS-HEP project](https://iris-hep.org/projects/skyhookdm.html)  
**Funding:** DOE ASCR DE-NA0003525 (FWP 20-023266): UCSC subcontractor of Sandia National Labs, [NSF OAC-1836650](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1836650), [NSF CNS-1764102](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1764102), [NSF CNS-1705021](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1705021), and [CROSS](https://cross.ucsc.edu/)  
**Overview:** [USENIX ;login: Summer '20]({{< ref "/publication/lefevre-login-20" >}})

SkyhookDM is an extension of Ceph for the scalable storage of tables and for offloading common data management operations on them, including selection, projection, aggregation, and indexing, as well as user-defined functions. The goal of SkyhookDM is to transparently scale out data management operations across many storage servers leveraging the scale-out and availability properties of Ceph while significantly reducing the use of CPU cycles and interconnect bandwidth for unnecessary data transfers. The SkyhookDM architecture is also designed to transparently optimize for future storage devices of increasing heterogeneity and specialization. All the data movements from the Ceph OSDs to the client happen in Apache Arrow format.
