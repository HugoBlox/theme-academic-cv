---
title: "Enabling seamless execution of computational and data science workflows on HPC and cloud with the Popper container-native automation engine"
date: 2020-11-01
publishDate: 2020-12-09T04:47:36.222445Z
authors: ["Jayjeet Chakraborty", "Carlos Maltzahn", "Ivo Jimenez"]
publication_types: ["1"]
abstract: "The problem of reproducibility and replication in scientific research is quite prevalent to date. Researchers working in fields of computational science often find it difficult to reproduce experiments from artifacts like code, data, diagrams, and results which are left behind by the previous researchers.The code developed on one machine often fails to run on other machines due to differences in hardware architecture, OS, software dependencies, among others. This is accompanied by the difficulty in understanding how artifacts are organized, as well as in using them in the correct order. Software containers(also known as Linux containers) can be used to address some of these problems, and thus researchers and developers have built scientific workflow engines that execute the steps of a workflow in separate containers. Existing container-native workflow engines assume the availability of infrastructure deployed in the cloud or HPC centers. In this paper, we present Popper, a container-native workflow engine that does not assume the presence of a Kubernetes cluster or any service other than a container engine such as Docker or Podman. We introduce the design and architecture of Popper and describe how it abstracts away the complexity of multiple container engines and resource managers, enabling users to focus only on writing workflow logic. With Popper, researchers can build and validate workflows easily in almost any environment of their choice including local machines, Slurm based HPC clusters, CI services, or Kubernetes based cloud computing environments. To exemplify the suitability of this workflow engine, we present a case study where we take an example from machine learning and seamlessly execute it in multiple environments by implementing a Popper workflow for it."
featured: false
publication: "*CANOPIE HPC 2020 (at SC20)*"
tags: ["papers", "reproducibility", "containers", "workflow", "orchestration"]
projects:
- practical-reproducibility
---
