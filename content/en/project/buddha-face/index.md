---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Buddha Face and AI"
summary: ""
authors: ["Benjamin Renoust", "Noa Garcia", "Yuta Nakashima", "Noriko Takemura", "Hajime Nagahara"]
tags: ["buddha"]
categories: []
date: 2020-06-17T22:52:41+09:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
 caption: ""
 focal_point: "Right"
 preview_only: false

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

In collaboration with [Prof. Fujioka](http://www.dma.jim.osaka-u.ac.jp/view?l=en&u=6617) with Graduate School of Letters/School of Letters, Osaka University, we are attempting to create an AI for analyzing various aspects of Buddha faces in images. 

Focusing on the face of the Buddha image, i.e., "Buddha face", we analyze the characteristics of the style of each region, era, and author using statistical and machine learning approaches based on images and 3D geometric data, building a genealogy of Buddha faces. This is to realize style judgment based on the knowledge obtained from data, not based on the experience of art historians, which promotes the globalization of the Buddha statue research and also helps to identify the genealogy of Buddha faces propagated through the Silk Road, giving a new perspective on the spread of culture in Asia.

We have built several interfaces to browse through a large corpus of precious Buddha faces for facilitating annotations on the basic meta-data on the statues, which will then serve as a source to train more sophisticated models for analyzing them. 

{{< figure src="interfaces.png" title="" lightbox="true" >}}

For example, we built a model that can embed various information on target entities (i.e., Buddha status), such as authors, eras, places, etc., into a vector representation of images and use them for other tasks like classification, through the model below. 

{{< figure src="contextnet.png" title="" lightbox="true" >}}