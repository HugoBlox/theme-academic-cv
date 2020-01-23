---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "SnakeNode"
summary: "Snake multiplayer game."
authors: []
tags:
- game
categories: []
date: 2020-01-23T11:59:11+01:00

# Optional external URL for project (replaces project detail page).
external_link: ""

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_code: "https://github.com/Haashi/SnakeNode"
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

Small snake game, using this implementation as a base : https://www.youtube.com/watch?v=AaGK-fj-BAM on top of which I added multiplayer using NodeJS.

In the implementation, the server is authority and send the whole game state to the clients.

Technologies used for this project : 
- JavaScript
- NodeJS
- SocketIO