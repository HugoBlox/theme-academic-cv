---
title: "Rethinking basic primitives for store based systems "
date: 2022-10-01
publishDate: 2022-11-08T04:51:16.018609Z
authors: ["Farid Zakaria", "Tom Scogland", "Carlos Maltzahn"]
publication_types: ["3"]
abstract: "Nix has introduced the world to store-based systems and ushered a new wave of reproducibility. These new systems however are built atop long established patterns and occasionally leverage them to band-aid over the problems Nix aims to solve.  How much further can we leverage the store abstraction to rethink long valued established patterns in Unix based operating systems? This talk will introduce some of the simple improvements one can uncover starting at the linking phase of object building and process startup.  The authors introduce Shrinkwrap which can greatly improve startup performance and further improve reproducibility for applications ported to Nix by making simple improvement to how libraries are discovered and leveraging the store further. Additional explorations for improvements during the linking phase will be discussed and explored. It's time we rethink everything."
featured: false
publication: "NixCon 2022, Paris, France, October 20-22"
tags: ["linking", "reproducibility", "packaging"]
projects: 
- packaging
url_video: "https://drive.google.com/file/d/1uFE5UfvteXxkM4KCOjbSh52yGPa2hZtg/view"

---


