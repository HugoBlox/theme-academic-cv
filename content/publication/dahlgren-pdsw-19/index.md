---
title: "Towards Physical Design Management in Storage Systems"
date: 2019-11-01
publishDate: 2020-01-05T06:43:50.411373Z
authors: ["Kathryn Dahlgren", "Jeff LeFevre", "Ashay Shirwadkar", "Ken Iizawa", "Aldrin Montana", "Peter Alvaro", "Carlos Maltzahn"]
publication_types: ["1"]
abstract: "In the post-Moore era, systems and devices with new architectures will arrive at a rapid rate with significant impacts on the software stack. Applications will not be able to fully benefit from new architectures unless they can delegate adapting to new devices in lower layers of the stack. In this paper we introduce physical design management which deals with the problem of identifying and executing transformations on physical designs of stored data, i.e. how data is mapped to storage abstractions like files, objects, or blocks, in order to improve performance. Physical design is traditionally placed with applications, access libraries, and databases, using hard- wired assumptions about underlying storage systems. Yet, storage systems increasingly not only contain multiple kinds of storage devices with vastly different performance profiles but also move data among those storage devices, thereby changing the benefit of a particular physical design. We advocate placing physical design management in storage, identify interesting research challenges, provide a brief description of a prototype implementation in Ceph, and discuss the results of initial experiments at scale that are replicable using Cloudlab. These experiments show performance and resource utilization trade-offs associated with choosing different physical designs and choosing to transform between physical designs."
featured: false
publication: "*4th International Parallel Data Systems Workshop (PDSW 2019, co-located with SC'19)*"
url_slides: "http://www.pdsw.org/pdsw19/slides/JeffLeFevre-pdsw19.pdf"
tags: ["papers", "programmable", "storage", "datamanagement", "physicaldesign"]
projects:
- programmable-storage
- eusocial-storage
- declstore
- skyhook
---
