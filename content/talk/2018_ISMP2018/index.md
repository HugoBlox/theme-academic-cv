+++
title = "The p-Lagrangian method for MIQCQPs"
date = 2019-02-24T19:25:06+02:00  # Schedule page publish date.
draft = false

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
time_start = 2018-07-05T19:25:06+02:00
#time_end = 2019-02-24T19:25:06+02:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Fabricio Oliveira", "Tiago Andrade", "Silvio Hamacher"]

# Abstract and optional shortened version.
abstract = "Mixed-integer quadratically constrained quadratic program- ming (MIQCQP) is a general class related to several impor- tant problems such as polynomial, semidefinite, and conic programming. Moreover, MIQCQP is a natural way to model many important problems in chemical engineering applica- tions. Our motivation is the refinery operational planning problem (ROPP) under uncertainty, which has a large-scale deterministic equivalent MIQCQP. We tackle this problem proposing a primal-dual decomposition algorithm named the p-Lagrangian method, which combines a bundle-method inspired Lagrangian decomposition with MIP-based relax- ations. These relaxations are obtained using the normalised multiparametric desegregation technique (NMDT) and can be made arbitrarily precise by means of a precision parameter p. We present enhancements for the NMDT-based relaxation and how to effectively employ them in the decomposition algorithm. The proposed method was tested on a real-world ROPP and compared with the commercial solver BARON in terms of performance. The numerical results obtained illus- trate the efficiency of the method for several instances."
abstract_short = ""

# Name of event and optional event URL.
event = "ISMP 2018"
event_url = "https://ismp2018.sciencesconf.org"

# Location of event.
location = "Bordeaux, France"

# Is this a selected talk? (true/false)
selected = false

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = []

# Slides (optional).
#   Associate this page with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references 
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = ""

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []

# Links (optional).
url_pdf = "/talk/2018_ISMP2018/2018_ISMP2018.pdf"
url_slides = ""
url_video = ""
url_code = ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
+++
