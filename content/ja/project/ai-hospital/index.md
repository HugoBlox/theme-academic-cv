---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "AIホスピタル"
summary: "ISLabでは、最新のAIの技術を利用して大阪大学医学部附属病院のAI医療センターと共同研究を進めています。"
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
大阪大学附属病院はでは、医療従事者、医療情報専門家、テータサイエンティストなどが一体となることにより、AIを用いた医療を速やかに、かつ安全に医療現場に導入するために、[AI医療センター](https://www.hosp.med.osaka-u.ac.jp/departments/ai.html)を設立しました。

ISLabでは、最新のAIの技術を利用してAI医療センターと共同研究を進めています。

## 眼科と人工知能

網膜画像中の血管を見ると、人の循環器システムに関する様々な情報を取り出すことができ、眼科のみではなく様々な診療科で活用されています。我々は、血管の自動抽出を目指して、IterNetという、深層学習を利用した新しい手法を開発しました (図(e))。
{{< figure src="iternet.jpg" title="" lightbox="true" >}}

また、このIterNetをベースに、動脈と静脈を抽出、分類する手法を提案しています。この手法では深層学習を利用した分類器の結果に後処理を適用することで高い精度を達成しました。
{{< figure src="segmentation.jpg" title="" lightbox="true" >}}