+++
# Project title.
title = "Stance Detection and Fact Checking"

# Date this page was created.
date = 2016-04-27T00:00:00

# Project summary to display on homepage.
summary = "Determine the attitude expressed in a text towards a topic, and use this for automatic evidence-based fact checking"

# Tags: can be used for filtering projects.
# Example: `tags = ["machine-learning", "deep-learning"]`
tags = ["nlu", "fact-checking"]

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
url_video = ""
url_code = ""

# Custom links (optional).
#   Uncomment line below to enable. For multiple links, use the form `[{...}, {...}, {...}]`.
url_custom = [{icon_pack = "fab", icon="twitter", name="Follow", url = "https://twitter.com/georgecushen"}]

# Featured image
# To use, add an image named `featured.jpg/png` to your project's folder. 
[image]
  # Caption (optional)
  caption = "Photo by rawpixel on Unsplash"
  
  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Smart"
+++

We are interested in studying method to determine the attitude expressed in a text towards a topic (stance detection), such as determining if a tweet expresses a positive, negative or neutral stance towards a political entity. One additional challenge we are exploring is stance detection in a conversational context, where the stance depends on the context of the conversation.
Fact checking using textual data can be framed very similarly, namely as if an evidence document agrees with, disagrees with or is topically unrelated to a headline or claim.
