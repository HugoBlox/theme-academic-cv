---
title: "Richer File System Metadata Using Links and Attributes"
date: 2005-04-01
publishDate: 2020-01-05T13:33:06.017729Z
authors: ["Alexander Ames", "Nikhil Bobb", "Scott A. Brandt", "Adam Hiatt", "Carlos Maltzahn", "Ethan L. Miller", "Alisa Neeman", "Deepa Tuteja"]
publication_types: ["1"]
abstract: "Traditional file systems provide a weak and inadequate structure for meaningful representations of file interrelationships and other context-providing metadata. Existing designs, which store additional file-oriented metadata either in a database, on disk, or both are limited by the technologies upon which they depend. Moreover, they do not provide for user-defined relationships among files. To address these issues, we created the Linking File System (LiFS), a file system design in which files may have both arbitrary user- or application-specified attributes, and attributed links between files. In order to assure performance when accessing links and attributes, the system is designed to store metadata in non-volatile memory. This paper discusses several use cases that take advantage of this approach and describes the user-space prototype we developed to test the concepts presented."
featured: false
publication: "*MSST '05*"
tags: ["papers", "ssrc", "metadata", "filesystems", "linking"]
---

