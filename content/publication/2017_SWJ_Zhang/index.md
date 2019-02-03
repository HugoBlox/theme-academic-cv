+++
title = "An Unsupervised Data-driven Method to Discover Equivalent Relations in Large Linked Datasets"
date = 2017-03-01T00:00:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Ziqi Zhang", "Anna Lisa Gentile", "Isabelle Augenstein", "Eva Blomqvist", "Fabio Ciravegna"]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Manuscript
# 4 = Report
# 5 = Book
# 6 = Book section
publication_types = ["2"]

# Publication name and optional abbreviated version.
publication = "In *Semantic Web*, Volume 8, Number 2 / 2017"
publication_short = "In *SWJ*"

# Abstract and optional shortened version.
abstract = "The Web of Data is currently undergoing an unprecedented level of growth thanks to the Linked Open Data effort. One escalated issue is the increasing level of heterogeneity in the published resources. This seriously hampers interoperability of Semantic Web applications. A decade of effort in the research of Ontology Alignment has contributed to a rich literature to solve such problems. However, existing methods can be still limited as 1) they primarily address concepts and entities while relations are less well-studied; 2) many build on the assumption of the ‘well-formedness’ of ontologies which is unnecessarily true in the domain of Linked Open Data; 3) few looked at schema heterogeneity from a single source, which is also a common issue particularly in very large Linked Dataset created automatically from heterogeneous resources, or integrated from multiple datasets. This article aims to address these issues with a domain- and language-independent and completely unsupervised method to align equivalent relations across schemata based on their shared instances. We propose a novel similarity measure able to cope with unbalanced population of schema elements, an unsupervised technique to automatically decide similarity threshold to assert equivalence for a pair of relations, and an unsupervised clustering process to discover groups of equivalent relations across different schemata. Although the method is designed for aligning relations within a single dataset, it can also be adapted for cross-dataset alignment where sameAs links between datasets have been established. Using three gold standards created based on DBpedia, we obtain encouraging results from a thorough evaluation involving four baseline similarity measures and over 15 comparative models based on variants of the proposed method. The proposed method makes significant improvement over baseline models in terms of F1 measure (mostly between 7% and 40%), and it always scores the highest precision and is also among the top performers in terms of recall. We also make public the datasets used in this work, which we believe make the largest collection of gold standards for evaluating relation alignment in the LOD context."
abstract_short = "We propose a novel similarity measure able to cope with unbalanced population of schema elements, an unsupervised technique to automatically decide similarity threshold to assert equivalence for a pair of relations, and an unsupervised clustering process to discover groups of equivalent relations across different schemata."

# Is this a featured publication? (true/false)
featured = false

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = ["knowledge-bases"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
# slides = "example-slides"

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []

# Links (optional).
url_pdf = "http://www.semantic-web-journal.net/content/unsupervised-data-driven-method-discover-equivalent-relations-large-linked-datasets"
url_preprint = ""
url_code = ""
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = ""
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# url_custom = [{name = "Custom Link", url = "http://example.org"}]

# Digital Object Identifier (DOI)
doi = ""

# Does this page contain LaTeX math? (true/false)
math = false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
preview_only = true

# Caption (optional)
caption = "The similarity measure computes a numerical score for pairs of relations"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Center"
+++


