+++
title = "Character-level Supervision for Low-resource POS Tagging"
date = 2018-07-31T00:00:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Katharina Kann", "Johannes Bjerva", "Isabelle Augenstein", "Barbara Plank", "Anders Søgaard"]

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

# Publication name and optional abbreviated version.
publication = "In *Proceedings of the 1st Workshop on Deep Learning Approaches for Low Resource Natural Language Processing (DeepLo) at the Annual Meeting of the Association for Computational Linguistics (ACL 2018)*."
publication_short = "In *DeepLo at ACL*"

# Abstract and optional shortened version.
abstract = "Neural part-of-speech (POS) taggers are known to not perform well with little training data. As a step towards overcoming this problem, we present an architecture for learning more robust neural POS taggers by jointly training a hierarchical, recurrent model and a recurrent characterbased sequence-to-sequence network supervised using an auxiliary objective. This way, we introduce stronger character-level supervision into the model, which enables better generalization to unseen words and provides regularization, making our encoding less prone to overfitting. We experiment with three auxiliary tasks: lemmatization, character-based word autoencoding, and character-based random string autoencoding. Experiments with minimal amounts of labeled data on 34 languages show that our new architecture outperforms a single-task baseline and, surprisingly, that, on average, raw text autoencoding can be as beneficial for lowresource POS tagging as using lemma information. Our neural POS tagger closes the gap to a state-of-the-art POS tagger (MarMoT) for low-resource scenarios by 43%, even outperforming it on languages with templatic morphology, e.g., Arabic, Hebrew, and Turkish, by some margin"
abstract_short = ""

# Is this a featured publication? (true/false)
featured = false

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = ["limited-data", "multi-lingual"]

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
url_pdf = "http://aclweb.org/anthology/W18-3401"
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
  caption = "Our multi-task architecture, consisting of a shared character LSTM (down), as well as a sequence labeling (up) and a sequence-tosequence (right) part"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Center"
+++


