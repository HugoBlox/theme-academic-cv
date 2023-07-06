---
title: "SkyhookDM"
summary: "Making the storage layer manage data."
tags:
- programmable
- eusocial
- skyhook
date: "2022-05-09T00:00:00Z"
last_update: 2023-07-05

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

**Websites:** [Skyhook Data Management](https://github.com/skyhookdm), [IRIS-HEP project](https://iris-hep.org/projects/skyhookdm.html)  
**Funding:** [NSF TI-2229773](https://www.nsf.gov/awardsearch/showAward?AWD_ID=2229773), DOE ASCR DE-NA0003525 (FWP 20-023266): UCSC subcontractor of Sandia National Labs, [NSF OAC-1836650](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1836650), [NSF CNS-1764102](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1764102), [NSF CNS-1705021](https://www.nsf.gov/awardsearch/showAward?AWD_ID=1705021), and [CROSS](https://cross.ucsc.edu/)  
**Overview:** [CCGrid'22 paper]({{< ref "/publication/chakraborty-ccgrid-22" >}})  
**Important Links:** [github repository](https://github.com/apache/arrow/tree/master/cpp/src/skyhook), getting started [instructions](https://skyhookdm-arrow.readthedocs.io/en/latest/getting_started.html) and [notebook](https://github.com/uccross/arrow/blob/rados-dataset-dev/cpp/src/arrow/adapters/arrow-rados-cls/docs/demo.ipynb), code walkthrough [video](https://www.youtube.com/watch?v=XfJsnadp18c).

The key advantage of the cloud is its elasticity. This is implemented by systems that can expand and shrink resources quickly and by disaggregationg services, including compute and storage. Elasticity is also valuable for on-premise datacenters where disaggregation allows compute and storage to scale independently. This disaggregation however places greater demand on expensive top-of-rack networking resources since compute and storage nodes end up in different racks and even rows as the installation is growing. More network traffic also requires more CPU cycles to be dedicated to sending and receiving data. Therefore, disaggregation, somewhat paradoxically, amplifies the benefit of moving some compute -- the compute that involves data management -- back into storage because data management filtering operations can reduce data movement significantly.

Combining data management with storage also creates the opportunity for new services that can help avoid dataset copies and thereby can significantly save storage space. Data management-enabled storage systems can provide views by combining parts of multiple datasets. For HEP this means that columns from one table can be combined with columns from a different table without creating copies. For this to work, these storage systems need to store sufficient metadata and naming conventions about datasets. This makes them a natural place for maintaining this metadata and servicing it to other tools in convenient formats.

Skyhook Data Management is an extension of the [Ceph open source distributed storage system](https://ceph.io/) for the scalable storage of tables and for offloading common data management operations on them, including selection, projection, aggregation, and indexing, as well as user-defined functions. The goal of SkyhookDM is to transparently scale out data management operations across many storage servers leveraging the scale-out and availability properties of Ceph while significantly reducing the use of CPU cycles and interconnect bandwidth for unnecessary data transfers. The SkyhookDM architecture is also designed to transparently optimize for future storage devices of increasing heterogeneity and specialization. All the data movements from the Ceph OSDs to the client are using the [Apache Arrow](https://arrow.apache.org/) format.

SkyhookDM is currently an incubator project at the [Center for Research on Open Source Software](https://cross.ucsc.edu) at the [University of California Santa Cruz](https://ucsc.edu).
