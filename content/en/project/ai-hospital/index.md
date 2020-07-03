---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "AI Hospital"
summary: ""
authors: ["Liangzhi Li", "Bowen Wang", "Manisha Verma", "Yuta Nakashima", "Hajime Nagahara"]
tags: []
categories: []
date: 2020-07-01T10:05:12+09:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
 caption: ""
 focal_point: ""
 preview_only: True

# Custom links (optional).
# Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
# url: https://twitter.com
# icon_pack: fab
# icon: twitter

url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
# Associate this project with Markdown slides.
# Simply enter your slide deck's filename without extension.
# E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
# Otherwise, set `slides = ""`.
slides: ""
---
Osaka University Medical Hospital has launched [Artificical Intelligence Center for Medical Research and Application (AIM)](https://www.hosp.med.osaka-u.ac.jp/english/departments/ai.html), which supports physicians, nurses, and all the medical staff collaborating with medical information specialists and data scientists to boost the medical application of AI in daily practices of the hospital.

We are collaborating with AIM to provide cutting-edge technologies.

## Ophthalmology and AI

In ophthalmology or any other departments, vessels in retinal fundus images provide rich information on the cardiovascular system of human bodies. We proposed a state-of-the-art method, coined [IterNet](publication/li-2020-a/) for extracting vessels from retinal fundus images as in the (e) in the figure below. 

{{< figure src="iternet.jpg" title="" lightbox="true" >}}

On top of this technology, we also invented a new method for classifying vessels into artery/vein, which takes a two-step approach: We firstly segment vessels in input images using an IterNet-based method and then classify them into artery/vein with some post-processing. 

{{< figure src="segmentation.jpg" title="" lightbox="true" >}}