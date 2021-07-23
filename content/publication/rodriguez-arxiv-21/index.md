---
title: "Zero-Cost, Arrow-Enabled Data Interface for Apache Spark"
date: 2021-06-01
publishDate: 2021-07-23T18:52:38.468504Z
authors: ["Sebastiaan Alvarez Rodriguez", "Jayjeet Chakraborty", "Aaron Chu", "Ivo Jimenez", "Jeff LeFevre", "Carlos Maltzahn", "Alexandru Uta"]
publication_types: ["3"]
abstract: "Distributed data processing ecosystems are widespread and their components are highly specialized, such that efficient interoperability is urgent. Recently, Apache Arrow was chosen by the community to serve as a format mediator, providing efficient in-memory data representation. Arrow enables efficient data movement between data processing and storage engines, significantly improving interoperability and overall performance. In this work, we design a new zero-cost data interoperability layer between Apache Spark and Arrow-based data sources through the Arrow Dataset API. Our novel data interface helps separate the computation (Spark) and data (Arrow) layers. This enables practitioners to seamlessly use Spark to access data from all Arrow Dataset API-enabled data sources and frameworks. To benefit our community, we open-source our work and show that consuming data through Apache Arrow is zero-cost: our novel data interface is either on-par or more performant than native Spark."
featured: false
publication: "arXiv:2106.13020 [cs.DC]"
tags: ["papers", "spark", "arrow", "performance"]
projects:
- programmable-storage
- declstore
- skyhookdm
---
