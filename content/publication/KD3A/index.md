---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "KD3A: Unsupervised Multi-Source Decentralized Domain Adaptation via Knowledge Distillation"
authors:
  [
    Haozhe Feng, 
    Zhaoyang You, 
    Minghao Chen, 
    Tianye Zhang, 
    Minfeng Zhu, 
    Fei Wu, 
    Chao Wu, 
    Wei Chen
  ]
date: 2021-07-01T17:20:04+08:00
doi: ""

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "nInternational Conference on Machine Learning"
publication_short: "ICML"

abstract: "Conventional unsupervised multi-source domain adaptation (UMDA) methods assume all source domains can be accessed directly. This neglects the privacy-preserving policy, that is, all the data and computations must be kept decentralized. There exists three problems in this scenario: (1) Minimizing the domain distance requires the pairwise calculation of the data from source and target domains, which is not accessible. (2) The communication cost and privacy security limit the application of UMDA methods (e.g., the domain adversarial training). (3) Since users have no authority to check the data quality, the irrelevant or malicious source domains are more likely to appear, which causes negative transfer. In this study, we propose a privacy-preserving UMDA paradigm named Knowledge Distillation based Decentralized Domain Adaptation (KD3A), which performs domain adaptation through the knowledge distillation on models from different source domains. KD3A solves the above problems with three components: (1) A multi-source knowledge distillation method named Knowledge Vote to learn high-quality domain consensus knowledge. (2) A dynamic weighting strategy named Consensus Focus to identify both the malicious and irrelevant domains. (3) A decentralized optimization strategy for domain distance named BatchNorm MMD. The extensive experiments on DomainNet demonstrate that KD3A is robust to the negative transfer and brings a 100x reduction of communication cost compared with other decentralized UMDA methods. Moreover, our KD3A significantly outperforms state-of-the-art UMDA approaches."

# Summary. An optional shortened abstract.
summary: ""

tags:
  [
    "Domain Adaptation",
    "Knowledge Distillation",
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

url_pdf: https://arxiv.org/pdf/2011.09757.pdf
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
