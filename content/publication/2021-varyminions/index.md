---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "VaryMinions: leveraging RNNs to identify variants in event logs"
authors:
  - admin
  - Paul Temple
  - Xavier Devroey
  - Gilles Perrouin
  - Patrick Heymans
date: 2021-08-23
doi: "10.1145/3472674.3473980"

# Schedule page publish date (NOT publication's date).
publishDate: 2021-08-23

# Publication type: paper-conference, article-journal, article-newspaper, book, chapter, masters-thesis, preprint, report, thesis, webpage (from CSL standard)
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "In the *5th International Workshop on Machine Learning Techniques for Software Quality Evolution*"
publication_short: "In *MaLTESQuE 2021*"

abstract: "Business processes have to manage variability in their execution, e.g., to deliver the correct building permit in different municipalities. This variability is visible in event logs, where sequences of events are shared by the core process (building permit authorisation) but may also be specific to each municipality. To rationalise resources (e.g., derive a configurable business process capturing all municipalities’ permit variants) or to debug anomalous behaviour, it is mandatory to identify to which variant a given trace belongs. This paper supports this task by training Long Short Term Memory (LSTMs) and Gated Recurrent Units (GRUs) algorithms on two datasets: a configurable municipality and a travel expenses workflow. We demonstrate that variability can be identified accurately (>87%) and discuss the challenges of learning highly entangled variants."

# Summary. An optional shortened abstract.
summary: ""

tags: [Software reverse engineering, Configurable processes, Recurrent Neural Networks, Variability Mining]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf:
url_code:
url_dataset:
url_poster:
url_project:
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
