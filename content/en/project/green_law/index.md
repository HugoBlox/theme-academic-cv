---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Law and AI"
summary: "This work investigates legal evaluation criteria on the green laws' participation principle, analyzes Japanese participation system's pros and cons in a comparative perspective, and propose some recommendations to establish the environmental democracy."
authors: ["Benjamin Renoust", "Chenhui Chu", "Yuta Nakashima", "Noriko Takemura", "Hajime Nagahara"]
tags: []
categories: []
date: 2020-06-17T23:02:32+09:00

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

In collaboration with [Prof. Noriko Okubo](https://researchmap.jp/read0180483?lang=en) at Graduate School of Law and Politics, Osaka University, we are studying to automatically evaluate how green laws are enforced in different countries. 

Green laws' participation principle consists of 1) the information access right, 2) participation in the policy decision process, 3) the judicial access; however, actual implementation varies country to country, and legal methodologies have been explored for evaluating their effectiveness. This work investigates legal evaluation criteria on the green laws' participation principle, analyzes Japanese participation system's pros and cons in a comparative perspective, and propose some recommendations to establish the environmental democracy.
 
The difficulty lies in how to automatically find out related legislations, cases, statutes, etc. in different languages. As the first attempt, we proposed a method for identifying the topic of such legal documents through analyzing citation networks in addition to classic topic modeling. The figure below shows citation networks among different types of legal documents (e.g., cases-prior cases).

{{< figure src="citation_networks.png" title="" lightbox="true" >}}