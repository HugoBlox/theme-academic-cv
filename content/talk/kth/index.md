+++
title = "On the design of cooperative maneuvers for CAV in traffic flow"
draft = false

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date = 2019-04-23T15:00:00
date_end = 2019-04-23T16:00:00
all_day = false

# Schedule page publish date (NOT talk date).
publishDate = 2019-04-23T10:00:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Andres Ladino", "Aurelien Duret", "Meng Wang"]

# Abstract and optional shortened version.
abstract = "Vehicle platooning in particular truck platooning has attracted substantial attention due to its pronounced benefits in saving energy and promising business model in freight transportation. However, one prominent challenge for the successful implementation of these strategies is the safe and efficient interaction with surrounding traffic, especially at network discontinuities where mandatory lane changes may lead to the decoupling of truck platoons. In this talk, some control methods for vehicle platoons are presented in the presence of traffic flow.  In the first part, an efficient method for splitting a platoon of vehicles near network merges is considered. The control problem is cast as a bi-level hierarchical control problem where the supervisory layer is tied to classic traffic flow theory. The decisions taken at this level include optimal vehicle order after the merge, new equilibrium gaps of automated trucks at the merging point, and anticipation horizon that the platoon members start to track the new equilibrium gaps. In the second part of the talk, a differential game framework is presented to design the system optimum strategy for a network of cooperative vehicles interacting at a merging bottleneck with a simplified vehicle dynamics model. An optimum strategy is found by minimizing the joint cost of interacting vehicles while respecting behavioral and physical constraints. The full differential game is cast as a set of sub-problems regularly expressed as standard optimal control problems that can be solved efficiently. Numerical examples show the feasibility of the approach in capturing the nature of conflict and cooperation during the merging process."
abstract_short = "Recent works combining traffic flow theory and control problems for CAVs."

# Name of event and optional event URL.
event = "Visit Automatic Control Department, KTH"
event_url = ""

# Location of event.
location = "Stockholm, Sweden"

# Is this a selected talk? (true/false)
featured = true

# Projects (optional).
#   Associate this talk with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = ["ensemble"]

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["Truck Platooning","Connected & Automated Vehicles", "Vehicle Merging"]

# Links (optional).
url_pdf = ""
url_slides = "http://bit.ly/KTH_201904"
url_video = ""
url_code = ""

# Does the content use math formatting?
math = true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = "Image credit: [**Unsplash**](https://unsplash.com/photos/bzdhc5b3Bxs)"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Right"
+++