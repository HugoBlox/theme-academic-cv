---
# Documentation: https://wowchemy.com/docs/managing-content/

title: 'Skyhook: Towards an Arrow-Native Storage System'
subtitle: ''
summary: ''
authors:
- Jayjeet Chakraborty
- Ivo Jimenez
- Sebastiaan Alvarez Rodriguez
- Alexandru Uta
- Jeff LeFevre
- Carlos Maltzahn
tags:
- papers
- programmable
- storage
- systems
- arrow
- nsf1836650
- nsf1705021
- nsf1764102
categories: []
date: '2022-05-01'
lastmod: 2022-04-25T15:07:59-07:00
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
projects:
- programmable-storage
- declstore
- eusocial-storage
- skyhook
publishDate: '2022-04-25T22:07:44.206228Z'
publication_types:
- '1'
abstract: With the ever-increasing dataset sizes, several file formats such as Parquet,
  ORC, and Avro have been developed to store data efficiently, save the network, and
  interconnect bandwidth at the price of additional CPU utilization. However, with
  the advent of networks supporting 25-100 Gb/s and storage devices delivering 1,000,000
  reqs/sec, the CPU has become the bottleneck trying to keep up feeding data in and
  out of these fast devices. The result is that data access libraries executed on
  single clients are often CPU-bound and cannot utilize the scale-out benefits of
  distributed storage systems. One attractive solution to this problem is to offload
  data-reducing processing and filtering tasks to the storage layer. However, modifying
  legacy storage systems to support compute offloading is often tedious and requires
  an extensive understanding of the system internals. Previous approaches re-implemented
  functionality of data processing frameworks and access libraries for a particular
  storage system, a duplication of effort that might have to be repeated for different
  storage systems.  This paper introduces a new design paradigm that allows extending
  programmable object storage systems to embed existing, widely used data processing
  frameworks and access libraries into the storage layer with no modifications. In
  this approach, data processing frameworks and access libraries can evolve independently
  from storage systems while leveraging distributed storage systems' scale-out and
  availability properties. We present Skyhook, an example implementation of our design
  paradigm using Ceph, Apache Arrow, and Parquet. We provide a brief performance evaluation
  of Skyhook and discuss key results.
publication: '*CCGrid22*'
---
