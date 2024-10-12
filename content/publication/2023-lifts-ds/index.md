---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Doctoral Symposium: Variability-Aware Behavioural Learning"
authors:
  - admin
date: 2023-08-29
doi: "10.1145/3579028.3609007"

# Schedule page publish date (NOT publication's date).
publishDate: 2023-08-29

# Publication type: paper-conference, article-journal, article-newspaper, book, chapter, masters-thesis, preprint, report, thesis, webpage (from CSL standard)
publication_types: ["paper-conference"]

# Publication name and optional abbreviated publication name.
publication: "In the *Doctoral Symposium* of the *27th ACM International Systems and Software Product Line Conference*"
publication_short: "In the *Doctoral Symposium* of *SPLC 2023*"

abstract: "Addressing variability proactively during software engineering activities means shifting from reasoning on individual systems to reasoning on families of systems. Adopting appropriate variability management techniques can yield important economies of scale and quality improvements. Conversely, variability can also be a curse, especially for Quality Assurance (QA), i.e., verification and testing of such systems, due to the combinatorial explosion of the number of software variants. Featured Transition Systems (FTSs) were introduced as a way to represent and reason about the behaviour of Variaility-intensive Systems (VISs). By labelling a transition system with feature expressions, FTSs capture multiple variants of a system in a single model, enabling reasoning at the family level. They have shown significant improvements in automated QA activities such as model-checking and model-based testing, as well as guiding design exploration activities. Yet, as most model-based approaches, FTS modelling requires both strong human expertise and significant effort that would be unaffordable in many cases, in particular for large legacy systems with outdated specifications and/or systems that evolve continuously.Therefore, this PhD project aims to automatically learn FTSs from existing artefacts, to ease the burden of modelling FTS and support continuous QA activities. To answer this research challenge, we propose a two-phase approach. First, we rely on deep learning techniques to locate variability from execution traces. For this purpose, we implemented a tool called VaryMinions. Then, we use these annotated traces to learn an FTS. In this second part, we adapt the seminal L algorithm to learn behavioural variability. Both frameworks are open-source and we evaluated them separately on several datasets of different sizes and origins (e.g., software product lines and configurable business processes)."


# Summary. An optional shortened abstract.
summary: ""
tags: [Featured Transition Systems, Software Product Lines, Variability Mining, Active Automata Learning, Reverse Engineering]
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
