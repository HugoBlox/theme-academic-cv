+++
title = "Robust Super-Resolution GAN, with Manifold-based and Perception Loss"
date = 2019-02-28T21:35:03+05:30
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Uddeshya Upadhyay", "Suyash P Awate"]
#
# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Manuscript
# 4 = Report
# 5 = Book
# 6 = Book section
publication_types = ["1"]
#
# Publication name and optional abbreviated version.
publication = "IEEE International Symposium on Biomedical Imaging-2019"
publication_short = "ISBI, 2019"
#
# Abstract and optional shortened version.
abstract = "Super-resolution using deep neural networks typically relies on highly curated training sets that are often unavailable in clinical deployment scenarios. Using loss functions that assume Gaussian-distributed residuals makes the learning sensitive to corruptions in clinical training sets. We propose novel loss functions that are robust to corruptions in training sets by modeling heavy-tailed non-Gaussian distributions on the residuals. We propose a loss based on an autoencoder-based manifold-distance between the super-resolved and high-resolution images, to reproduce realistic textural content in super-resolved images. We propose to learn to super-resolve images to match human perceptions of structure, luminance, and contrast. Results on a large clinical dataset shows the advantages of each of our contributions, where our framework improves over the state of the art."

# abstract_short = "Robust superresolution GAN"
#
# Is this a featured publication? (true/false)
 featured = true
#
## Projects (optional).
##   Associate this publication with one or more of your projects.
##   Simply enter your project's folder or file name without extension.
##   E.g. `projects = ["deep-learning"]` references 
##   `content/project/deep-learning/index.md`.
##   Otherwise, set `projects = []`.
##projects = []
#
## Slides (optional).
##   Associate this page with Markdown slides.
##   Simply enter your slide deck's filename without extension.
##   E.g. `slides = "example-slides"` references 
##   `content/slides/example-slides.md`.
##   Otherwise, set `slides = ""`.
##slides = ""
#
## Tags (optional).
##   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
##tags = []
#
# Links (optional).
url_pdf = "./Robust-SRGAN.pdf"
#url_preprint = ""
#url_code = ""
#url_dataset = ""
#url_project = ""
#url_slides = ""
#url_video = ""
#url_poster = ""
#url_source = ""
#
# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{name = "details", url = "publication/robust-srgan/"}]
#
## Digital Object Identifier (DOI)
#doi = ""
#
## Featured image
## To use, add an image named `featured.jpg/png` to your page's folder. 
#[image]
#  # Caption (optional)
#  caption = ""
#
#  # Focal point (optional)
#  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
#  focal_point = ""
+++

This work is accepted as ***full oral presentation*** at ISBI-19.