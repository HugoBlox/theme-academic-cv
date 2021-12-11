---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "The End of Summer of Code"
subtitle: "Final Evaluation: Aug 24-31th, 2021"
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
  caption: "At least the world didn't end."
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

> Project [“Comparing TARDIS spectra generated with different atomic data sources”](https://summerofcode.withgoogle.com/projects/#6530109852352512) for the [TARDIS-SN](https://tardis-sn.github.io) organization, and mentored by **Andreas  Flörs**, **Christian Vogl**, and **James Gillanders**.

---

## Summary

Through my second (and last) year as a **Google Summer of Code** student, I made several contributions to improve the Carsus package.

**TARDIS** relies on Carsus to manage the atomic data necessary to run the simulations. These data comes from a wide variety of sources (experiments) and measurements of the same quantity may differ depending on the source.

> A complete list of PRs made during the entire GSoC 2020 period can be found [here](https://github.com/pulls?q=is%3Apr+created%3A2020-05-04..2020-08-31+author%3Aepassaro+user%3Atardis-sn).

### 1. Metadata for atomic files (PR [#183](https://github.com/tardis-sn/carsus/pull/183))

Reproducibility of scientific results is a must. We wanted to store all the information 
required to reproduce our atomic data files at any point in the future.

The main challenge was to find a convenient way to serialize Pandas's objects (we chose PyArrow) and then calculate a checksum for every DataFrame stored in the atomic data file. 

Then, we store these checksumns and versions of relevant packageas and datasets.

Finally, the atomic file is signed with a global checksum and a universally unique identifier (UUID1).


### 2. Fix for heavy elements (PR [#189](https://github.com/tardis-sn/carsus/pull/189))

Missing total angular momentum (_"j"_) for some ground levels obtained from the NIST Atomic Spectra Database limited the usage of Carsus to species with atomic number (Z) lower than 59 [**Pr**].

A small but critical patch made in collaboration with Stuart Sim allows Carsus to ingest atomic data from heavy elements.


### 3. Collision strengths from Chianti DB (PR [#190](https://github.com/tardis-sn/carsus/pull/183))

The last piece of atomic data needed to fully replace the old Carsus SQL interface (_"legacy"_) were the collision strengths from Chianti.


### 4. Energy levels and lines from CMFGEN (PR [#191](https://github.com/tardis-sn/carsus/pull/191))

My [GSoC 2019 project](https://summerofcode.withgoogle.com/archive/2019/projects/5344591031566336) involved writing parsers for CMFGEN files. This year, I wrote the code necessary to ingest energy levels and transition lines from this database into TARDIS atomic files.

This action required a complete refactor of the Carsus output module, including a complete revision of the priority management of the data sources.


<br>

## What's left to do?

Nothing.

<br>

## Final thoughts

My plans for 2020 were really different to be honest. I wasn't sure about to apply for Google Summer of Code again. But, in March I knew that this year was going to be "special". 

And boy it was crazy. As an inhabitant of the southern hemisphere, GSoC passed during a long,
long winter. I was grateful to have something to work on in these difficult times.

It has been an amazing two years journey. GSoC was a life-changing event for me, without any doubt. It happened at the right time, after some difficult years.

What's next? I'm glad to say that I joined this fantastic organization and I will contributing to TARDIS-SN as long as possible.

<br>

## See also

- [GSoC 2021 - Project's Page](https://summerofcode.withgoogle.com/archive/2020/projects/5301481479077888)
- [GSoC 2020 - Final Evaluation](https://epassaro.github.io/gsoc19/)
- [Carsus's Package Documentation](https://tardis-sn.github.io/carsus)
