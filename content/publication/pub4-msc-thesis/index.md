---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Evaluating latent representations in encoder-decoder models for text summarization with multitask and transfer learning."
authors: [Grace, J.]
date: 2019-10-02T12:50:49+01:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: 2019-10-02T12:50:49+01:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["7"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "Neural encoder-decoder models have shown significant promise in sequence transduc- tion tasks such as machine translation and, more recently, text summarization. Such models rely on a latent space representation of the source sequences, learned by the encoder, to pass to a decoder for generation of a target sequence. Understanding and evaluating what information the latent representations learn remains a significant chal- lenge. Multitask learning aims to solve several tasks simultaneously using learned representations that are shared across different tasks. Our research investigates learned latent space representations of the encoder in the context of different sequence trans- duction tasks and multitask learning. We make use of a novel dataset of news articles from the Guardian newspaper, which are accompanied by metadata including short summaries and topic tag sequences for articles. We train separate encoder-decoder re- current neural network models to generate (a) abstractive text summaries of the articles and (b) topic tag sequences related to the article content. We first establish high quality benchmarks in the new dataset and on the new task. We then perform experiments using our models to manipulate the latent representations learned by the models using multitask learning. We train an encoder-dual-decoder model to perform both sum- marization and tag sequence generation simultaneously. Whilst performance of the single task models is good the multitask model fails to learn to generate high quality sequences. We evaluate learned representations using transfer learning with a semantic classification task. We show that the tag sequence generation model learns represen- tations that are more useful for the semantic classification side task and by training a summarization model with a multitask objective we induce a similar performance increase on the side task."

# Summary. An optional shortened abstract.
summary: ""

tags: []
categories: []
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: 'files/s0451365_MSC_THESIS_FINAL.pdf'
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
