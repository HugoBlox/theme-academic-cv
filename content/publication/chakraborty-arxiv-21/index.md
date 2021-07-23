---
title: "Towards an Arrow-native Storage System"
date: 2021-05-01
publishDate: 2021-07-23T18:52:38.470304Z
authors: ["Jayjeet Chakraborty", "Ivo Jimenez", "Sebastiaan Alvarez Rodriguez", "Alexandru Uta", "Jeff LeFevre", "Carlos Maltzahn"]
publication_types: ["3"]
abstract: "With the ever-increasing dataset sizes, several file formats like Parquet, ORC, and Avro have been developed to store data efficiently and to save network and interconnect bandwidth at the price of additional CPU utilization. However, with the advent of networks supporting 25-100 Gb/s and storage devices delivering 1,000,000 reqs/sec the CPU has become the bottleneck, trying to keep up feeding data in and out of these fast devices. The result is that data access libraries executed on single clients are often CPU-bound and cannot utilize the scale-out benefits of distributed storage systems. One attractive solution to this problem is to offload data-reducing processing and filtering tasks to the storage layer. However, modifying legacy storage systems to support compute offloading is often tedious and requires extensive understanding of the internals. Previous approaches re-implemented functionality of data processing frameworks and access library for a particular storage system, a duplication of effort that might have to be repeated for different storage systems. In this paper, we introduce a new design paradigm that allows extending programmable object storage systems to embed existing, widely used data processing frameworks and access libraries into the storage layer with minimal modifications. In this approach data processing frameworks and access libraries can evolve independently from storage systems while leveraging the scale-out and availability properties of distributed storage systems. We present one example implementation of our design paradigm using Ceph, Apache Arrow, and Parquet. We provide a brief performance evaluation of our implementation and discuss key results."
featured: false
publication: "arXiv:2105.09894 [cs.DC]"
tags: ["papers", "programmable", "storage", "systems", "arrow"]
projects:
- programmable-storage
- declstore
- eusocial-storage
---
