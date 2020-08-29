---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Google Summer of Code 2020"
subtitle: "Final Evaluation: Aug 24-31th."
summary: ""
authors: []
tags: [gsoc, TARDIS]
categories: []
date: 2020-08-28T21:04:01-03:00
lastmod: 2020-08-28T21:04:01-03:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []

aliases:
    - /gsoc20
---

Project [“Comparing TARDIS spectra generated with different atomic data sources”](https://summerofcode.withgoogle.com/projects/#6530109852352512) for the [TARDIS-SN](https://tardis-sn.github.io/tardis) collaboration, mentored by **Andreas  Flörs**, **Christian Vogl** and **James Gillanders**.

---

## Summary

TARDIS relies on Carsus to manage the atomic data necessary to run the simulations. These data comes from a wide variety of sources (laboratories) and measurements of the same quantity usually differ depending on the source.

Through my second year as a Google Summer of Code student I made several contributions to improve the Carsus package. These
contributions can be summarized in the following way:


### 1. Metadata for atomic files ([#183](https://github.com/tardis-sn/carsus/pull/183))

Reproducibility of scientific results is a must. We wanted to store all the necessary information needed to reproduce our atomic data files at any point in the future.

The main challenge was to find a convenient way to serialize Pandas's objects (we chose PyArrow) and then calculate a checksum for every _DataFrame_ stored in the atomic data file.

Finally the metadata is completed with a global checksum for the entire file, an universally unique identifier (UUID1), and versions of relevant packages and datasets.


### 2. Fix for heavy elements ([#189](https://github.com/tardis-sn/carsus/pull/189))

Missing total angular momentum (_"j"_) for some ground levels obtained from the NIST Atomic Spectra Database limited the usage of Carsus to species with atomic number (Z) lower than 59 [**Pr**].

A small but critical patch made in collaboration with Stuart Sim allows Carsus to ingest atomic data from heavy elements.


### 3. Collision strengths from Chianti DB ([#190](https://github.com/tardis-sn/carsus/pull/183))

The last piece of atomic data needed to fully replace the old Carsus SQL interface (_"legacy"_) were the collision strengths from Chianti.


### 4. Energy levels and lines from CMFGEN ([#191](https://github.com/tardis-sn/carsus/pull/191))

My GSoC 2019 project involved writing parsers for CMFGEN files. This year I wrote the code necessary to ingest energy levels and transition lines from this database into the atomic files.

This action required a complete refactor of the Carsus output module, including a full revision of the priority management system.


<br>

## What's left to do?

Nothing.

<br>

## Final thoughts

It has been an amazing two years journey. I look forward to continue contributing to TARDIS and other open source projects as well.

<br>

## See also

- Documentation -- [https://tardis-sn.github.io/carsus](https://tardis-sn.github.io/carsus)

> A complete list of PRs made during the entire GSoC 2020 period can be found [here](https://github.com/pulls?q=is%3Apr+created%3A2020-05-04..2020-08-31+author%3Aepassaro+user%3Atardis-sn).