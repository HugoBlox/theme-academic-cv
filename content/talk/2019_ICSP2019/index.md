+++
title = "Decision Programming: a framework For optimizing multi-stage decision problems under uncertainty"
date = 2019-08-08T19:25:06+02:00  # Schedule page publish date.
draft = false

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
time_start = 2019-08-08T19:25:06+02:00
#time_end = 2019-02-24T19:25:06+02:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Fabricio Oliveira", "Juho Andelmin", "Ahti Salo"]

# Abstract and optional shortened version.
abstract = "Multi-stage decision problems under uncertainty can be represented as influence diagrams consisting of decision, chance and value nodes connected by arcs. The variables associated with decision and chance nodes have discrete states, which represent decision alternatives for the former and possible realisations of uncertainties for the latter. At each decision node, the strategy for maximizing the expected utility at the value node can be derived either by transforming the diagram through arc reversals or by solving the equivalent decision tree with dynamic programming. Both approaches assume that earlier decisions are known when making later ones, which may not be the case in important problems, viz. in which decisions are made in a distributed fashion. Moreover, dynamic programming is restrictive, as an optimal strategy within a given branch (i.e., a sequence of observed states) cannot depend on the decisions in other, non-overlapping branches. Thus, the objective function cannot include risk measures or probabilistic constraints, which would capture the variability of consequences over all branches. Interdependencies between branches arise in project portfolio selection, too, because the use of shared resources implies that decisions for one project depend on those for others. Dynamic-programming based approaches are also prone to suffering from performance issues due to the combinatorial nature (i.e, the number of states growth exponentially with the number of nodes) that such problems present and the computational challenges associated with the well-known Bellman's curse of dimensionality. To develop a comprehensive framework to address these shortfalls, we propose the Decision Programming framework for multi-stage decision problems that can be represented as extended influence diagrams, without the ‘no forgetting’ assumption, in the presence of multiple objectives, endogenous uncertainty and constraint types. The Decision Programming approach is based on the development of a multi-stage stochastic programming model considering influence diagrams as a starting point. By doing so, we formulate an equivalent deterministic mixed-integer programming (MIP) representation that can be solved using off-the-shelf MIP solvers. The key feature of the approach is that, instead of exploiting recursion as the underpinning framework (as it is the case in dynamic programming), we exploit linearity and the outstanding capabilities of modern MIP technology. Furthermore, we exploit the structure arising from the multi-stage stochastic programming formulation to derive probability cuts, which are valid inequalities arising from the sum-to-one property of probability values that greatly improve the computational performance of the proposed formulation. To showcase the potential of the Decision Programming framework, we develop a comprehensive experimental setting illustrating how Decision Programming can be employed to (i) address problems that are not amenable to earlier approaches and (ii) model and solve large-scale multi-stage decision problems with endogenous uncertainty and risk considerations. We also discuss potential extensions of the proposed framework."
abstract_short = ""

# Name of event and optional event URL.
event = "ICSP 2019"
event_url = "https://www.ntnu.edu/icsp"

# Location of event.
location = "Trondheim, Norway"

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
