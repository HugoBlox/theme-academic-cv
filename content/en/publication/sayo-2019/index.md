---
title: "Human shape reconstruction with loose clothes from partially observed data by pose specific deformation"
date: 2019-11-01
publishDate: 2020-08-03T05:48:42.771545Z
authors: ["Akihiko Sayo", "Hayato Onizuka", "Diego Thomas", "Yuta Nakashima", "Hiroshi Kawasaki", "Katsushi Ikeuchi"]
publication_types: ["1"]
abstract: "Reconstructing the entire body of moving human in a computer is important for various applications, such as tele-presence, virtual try-on, etc. For the purpose, realistic representation of loose clothes or non-rigid body deformation is a challenging and important task. Recent approaches for full-body reconstruction use a statistical shape model, which is built upon accurate full-body scans of people in skin-tight clothes. Such a model can be fitted to a point cloud of a person wearing loose clothes, however, it cannot represent the detailed shape of loose clothes, such as wrinkles and/or folds. In this paper, we propose a method that reconstructs 3D model of full-body human with loose clothes by reproducing the deformations as displacements from the skin-tight body mesh. We take advantage of a statistical shape model as base shape of full-body human mesh, and then, obtain displacements from the base mesh by non-rigid registration. To efficiently represent such displacements, we use lower dimensional embeddings of the deformations. This enables us to regress the coefficients corresponding to the small number of bases. We also propose a method to reconstruct shape only from a single 3D scanner, which is realized by shape fitting to only visible meshes as well as intra-frame shape interpolation. Our experiments with both unknown scene and partial body scans confirm the reconstruction ability of our proposed method."
featured: false
publication: "*Proceedings - Pacific-Rim Symposium on Image and Video Technology*"
tags: ["eigen-deformation", "human shape reconstruction", "neural network", "non-rigid registration"]
doi: "10.1007/978-3-030-34879-3_18"
---

