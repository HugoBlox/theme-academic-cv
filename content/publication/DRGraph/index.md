---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "DRGraph: An Efficient Graph Layout Algorithm for Large-scale Graphs by Dimensionality Reduction"
authors:
  [
    Minfeng Zhu,
    Wei Chen,
    Yuanzhe Hu,
    Yuxuan Hou,
    Liangjun Liu,
    Kaiyuan Zhang
  ]
date: 2021-02-02T15:46:02+08:00
doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "IEEE Transactions on Visualization and Computer Graphics"
publication_short: "IEEE TVCG"

abstract: "Efficient layout of large-scale graphs remains a challenging problem: the force-directed and dimensionality reduction-based methods suffer from high overhead for graph distance and gradient computation. In this paper, we present a new graph layout algorithm, called DRGraph, that enhances the nonlinear dimensionality reduction process with three schemes: approximating graph distances by means of a sparse distance matrix, estimating the gradient by using the negative sampling technique, and accelerating the optimization process through a multi-level layout scheme. DRGraph achieves a linear complexity for the computation and memory consumption, and scales up to large-scale graphs with millions of nodes. Experimental results and comparisons with state-of-the-art graph layout methods demonstrate that DRGraph can generate visually comparable layouts with a faster running time and a lower memory requirement."

# Summary. An optional shortened abstract.
summary: ""

tags:
  [
    "Graph Layout",
    "Dimensionality Reduction",
  ]
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://ieeexplore.ieee.org/abstract/document/9282195
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
# image:
#   caption: "featured"
#   focal_point: "Top"
#   preview_only: false

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
