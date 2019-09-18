+++
title = "A Hierarchical Approach For Splitting Truck Platoons Near Network Discontinuities"
date = 2018-11-30T00:00:00
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Duret A.","Wang M.", "Ladino A."]

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
publication = "In *Transportation Research Part B* - *23rd International Symposium on Transportation and Traffic Theory (ISTTT)*."
publication_short = "In *TR-B* / *ISTTT*"

# Abstract and optional shortened version.
abstract = "Truck platooning has attracted substantial attention due to its pronounced benefits in saving energy and promising business model in freight transportation. However, one prominent challenge for the successful implementation of truck platooning is the safe and efficient interaction with surrounding traffic, especially at network discontinuities where mandatory lane changes may lead to the decoupling of truck platoons. This contribution puts forward an efficient method for splitting a platoon of vehicles near network merges. A model-based bi-level control strategy is proposed. A supervisory tactical strategy based on a first-order car-following model with bounded acceleration is designed to maximize the flow at merge discontinuities. The decisions taken at this level include optimal vehicle order after the merge, new equilibrium gaps of automated trucks at the merging point, and anticipation horizon that the platoon members start to track the new equilibrium gaps. The lower-level operational layer uses a third-order longitudinal dynamics model to compute the optimal truck accelerations so that new equilibrium gaps have been created when merging vehicles start to change lane and the transient maneuvers are efficient, safe and comfortable. The tactical decisions are derived from an analytic car-following model and the operational accelerations are controlled via model predictive control with guaranteed stability. Simulation experiments are provided in order to test the feasibility and demonstrate the performance and robustness of the proposed strategy."
abstract_short = "This contribution puts forward an efficient method for splitting a platoon of vehicles near network merges."

# Is this a selected publication? (true/false)
featured = true

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = ["ensemble"]

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags =  ["Truck Platooning","Connected & Automated Vehicles", "Vehicle Merging"]

# Links (optional).
url_pdf = "http://bit.ly/TR-B2019"
url_preprint = "http://bit.ly/ISTTT-2019"
url_code = "https://github.com/research-licit/Hierarchical-Platooning/tree/master/Operational"
url_dataset = ""
url_project = ""
url_slides = ""
url_video = ""
url_poster = "http://bit.ly/PosterIPAM2019"
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
# url_custom = [{name = "Custom Link", url = "http://example.org"}]

# Digital Object Identifier (DOI)
doi = "10.1016/j.trb.2019.04.006"

# Does this page contain LaTeX math? (true/false)
math = true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = "Taken from **Paper**"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "TopLeft"
+++

