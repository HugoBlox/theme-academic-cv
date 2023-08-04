---
# Documentation: https://wowchemy.com/docs/managing-content/

title: ' Skyhook: Bringing Computation to Storage with Apache Arrow '
subtitle: ''
summary: ''
authors:
- Jayjeet Chakraborty
- Carlos Maltzahn
- David Li
- Tom Drabas
tags:
- computation
- storage
- programmable
- datamanagement
- ceph
- arrow
categories: []
date: 2022-01-31
lastmod: 2023-07-05
featured: false
draft: false

url_: https://arrow.apache.org/blog/2022/01/31/skyhook-bringing-computation-to-storage-with-apache-arrow/

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
- skyhook
- eusocial-storage
- programmable-storage
publishDate: '2022-05-08T18:22:08.329823Z'
publication_types:
- '0'
abstract: 'CPUs, memory, storage, and network bandwidth get better every year, but increasingly, they’re improving in different dimensions. Processors are faster, but their memory bandwidth hasn’t kept up; meanwhile, cloud computing has led to storage being separated from applications across a network link. This divergent evolution means we need to rethink where and when we perform computation to best make use of the resources available to us.

For example, when querying a dataset on a storage system like Ceph or Amazon S3, all the work of filtering data gets done by the client. Data has to be transferred over the network, and then the client has to spend precious CPU cycles decoding it, only to throw it away in the end due to a filter. While formats like Apache Parquet enable some optimizations, fundamentally, the responsibility is all on the client. Meanwhile, even though the storage system has its own compute capabilities, it’s relegated to just serving “dumb bytes”.

Thanks to the [Center for Research in Open Source Software](https://cross.ucsc.edu) (CROSS) at the University of California, Santa Cruz, Apache Arrow 7.0.0 includes Skyhook, an [Arrow Datasets](https://arrow.apache.org/docs/cpp/dataset.html) extension that solves this problem by using the storage layer to reduce client resource utilization. We’ll examine the developments surrounding Skyhook as well as how Skyhook works.'
publication: '[Apache Arrow Blog, January 31, 2022](https://arrow.apache.org/blog/2022/01/31/skyhook-bringing-computation-to-storage-with-apache-arrow/)'
---
