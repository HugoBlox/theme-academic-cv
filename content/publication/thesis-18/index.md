+++
title = "Thesis - Traffic state estimation and prediction in freeways and urban networks"
date = 2018-03-08T00:00:00

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["Ladino A."]

# Publication type.
# Legend:
# 0 = Uncategorized
# 1 = Conference paper
# 2 = Journal article
# 3 = Manuscript
# 4 = Report
# 5 = Book
# 6 = Book section
publication_types = ["4"]

# Publication name and optional abbreviated version.
publication = "In *HAL Archives ouvertes*, HAL."
publication_short = "In *HAL*"

# Abstract and optional shortened version.
abstract = "Centralization of work, population and economic growth alongside continued urbanization are the main causes of congestion. As cities strive to update or expand aging infrastructure, the application of big data, new models and analytics to better understand and help to combat traffic congestion is crucial to the health and development of our smart cities of XXI century. Traffic support tools specifically designed to detect, forecast and alert these conditions are highly requested nowadays.This dissertation is dedicated to study techniques that may help to estimate and forecast conditions about a traffic network. First, we consider the problem Dynamic Travel Time (DTT) short-term forecast based on data driven methods. We propose two fusion techniques to compute short-term forecasts from clustered time series. The first technique considers the error covariance matrix and uses its information to fuse individual forecasts based on best linear unbiased estimation principles. The second technique exploits similarity measurements between the signal to be predicted and clusters detected in historical data and it performs afusion as a weighted average of individual forecasts. Tests over real data were implemented in the study case of the Grenoble South Ring, it comprises a highway of 10.5Km monitored through the Grenoble Traffic Lab (GTL) a real time application was implemented and open to the public.Based on the previous study we consider then the problem of simultaneous density/flow reconstruction in urban networks based on heterogeneous sources of information. The traffic network is modeled within the framework of macroscopic traffic models, where we adopt Lighthill-Whitham-Richards (LWR) conservation equation and a piecewise linear fundamental diagram. The estimation problem considers two key principles. First, the error minimization between the measured and reconstructed flows and densities, and second the equilibrium state of the network which establishes flow propagation within the network. Both principles are integrated together with the traffic model constraints established by the supply/demand paradigm. Finally the problem is casted as a constrained quadratic optimization with equality constraints in order to shrink the feasible region of estimated variables. Some simulation scenarios based on synthetic data for a manhattan grid network are provided in order to validate the performance of the proposed algorithm."
abstract_short = "This dissertation is dedicated to study techniques that may help to estimate and forecast conditions about a traffic network."

# Is this a selected publication? (true/false)
featured = false

# Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects = ["speed"]

# Tags (optional).
#   Set `tags = []` for no tags, or use the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags =  ["Short Term Forecast","Sensor Fusion", "Clustering","Kalman","Traffic Estimation"]

# Links (optional).
url_pdf = "http://bit.ly/PhD-Thesis-AL"
url_preprint = ""
url_code = ""
url_dataset = "https://data.mendeley.com/datasets/tf483zkcmb/3"
url_project = ""
url_slides = "http://bit.ly/DefenseAL"
url_video = "https://www.youtube.com/watch?v=92Yp8QIg1h0"
url_poster = ""
url_source = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{name = "GTL Website", url = "http://gtl.inrialpes.fr"}]

# Digital Object Identifier (DOI)
doi = ""

# Does this page contain LaTeX math? (true/false)
math = true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = "Taken from **Thesis**"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Smart"
+++

