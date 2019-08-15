---
title: Model Comparison
summary: An R Visualization Package to fit and plot a variety of machine learning models
tags:
- Machine Learning
date: "2016-04-27T00:00:00Z"

# Optional external URL for project (replaces project detail page).
external_link: ""

image:
  caption: Example plot
  focal_point: Smart

links:
url_code: "https://github.com/orionw/ModelComparison"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: ""
---

After taking a few Intro to Machine Learning type classes, I was annoyed with the class requirement to "test out a few models and compare them."  What a repitive request!  I wasn't learning anything by waiting for the code to run different models and then monotonously plotting those values in Excel or R for a class report.  I decided to create a package that would do all this for me.  Thus, `ModelComparison` was born.  It takes in your dataset and runs the machine learning algorithms you specifiy.  It then takes those models and creates an attractive plot that compares those models on metrics of your choosing.  Hopefully this can help those who run into the same repitive task of just "running some models on your data."
