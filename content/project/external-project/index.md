+++
# Project title.
title = "Formula car aerodynamics"

# Date this page was created.
date = 2016-04-27T00:00:00

# Project summary to display on homepage.
summary = "Multi-elements design optimization."

# Tags: can be used for filtering projects.
# Example: `tags = ["design", "aerodynamics"]`
tags = ["aerodynamics"]

# Optional external URL for project (replaces project detail page).
external_link = ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references
#   `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides = "example-slides"

# Links (optional).
url_pdf = ""
url_slides = ""
url_video = "https://www.youtube.com/watch?v=UlE5aqorMjk"
url_code = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
links = [{icon_pack = "fas", icon="car", name="Aristurtle", url = "http://www.aristurtle.gr"}]



# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder.
[image]
  # Caption (optional)
  caption = "Turbulence visualization OpenFOAM"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Smart"

+++
Design and construction of FSAE car aerodynamic elements. Use of computational fluid dynamics and goal driven algorithms to optimize the geometries and setups. Initial geometry was designed in `Solidworks` , then a parametric CAD file was created in `ANSYS`. Spallart-Allmaras and K-epsilon turbulence models were used for the solver. The optimization algorithm altered variables such as absolute and relative elements pitch and relative and absolute element location and scaling, and tried to maximize the lift to drag ratio. The solver used was ANSYS-Fluent

{{< youtube UlE5aqorMjk >}}

---

[`Aristurtle`](http://www.aristurtle.gr), is a research student team of the Aristotle University of Thessaloniki. The team’s department is the Department of Electrical and Computer Engineering of Aristotle University and its members are undergraduate students from various scientific fields. These include Electrical and Computer Engineering, Mechanical Engineering, Chemical Engineering, Architecture, Physics and Economics. Working under the pressure of demanding deadlines, the team’s members broaden their academic knowledge, theoretically and practically and gain great experience.


`Aristurtle’s` goal is to design and build electric race cars in order to compete in the international Formula Student competitions against universities from all over the world. Preparing towards this goal its members work in a fully structured professional environment. The team’s vision is to contribute to the upgrading of new technologies in the electric automotive field, in Greece and worldwide, by researching and getting in touch with high-level innovative products and pioneering ideas.

{{< youtube d8xarB_aHxE >}}
