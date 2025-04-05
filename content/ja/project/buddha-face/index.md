---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "仏顔とAI"
summary: "大阪大学 文学研究科の[藤岡 穣 教授](http://www.dma.jim.osaka-u.ac.jp/view?l=ja&u=6617)との共同研究では、仏像の顔に着目して、その仏像に関する様々な側面を解析する研究を実施しています。"
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

大阪大学 文学研究科の[藤岡 穣 教授](http://www.dma.jim.osaka-u.ac.jp/view?l=ja&u=6617)との共同研究では、仏像の顔に着目して、その仏像に関する様々な側面を解析する研究を実施しています。

仏像の顔（仏顔）には、その地域や時代、作家に関する様々な情報が含まれると考えられます。我々は、統計的、機械学習的手法を用いて、仏顔の画像や3次元形状のデータから仏像の系統図を構築します。これは、専門家の主観や経験によらず、純粋にデータから得られた知識を利用して様式判定を実現することに繋がり、仏像に関する研究のグローバル化や、仏像の系統の特定からアジア圏の文化がどのようにシルクロードを伝播したかについて、さらなる知見を与える可能性を持つ。

この目的に向けて、ISLabでは解析に利用可能なより高度なモデルの学習のためのメタデータ収集を容易にしつつ、大量の仏顔画像コーパスをブラウジングするための新しいインターフェイスを開発した。

{{< figure src="interfaces.png" title="" lightbox="true" >}}

また、対象の画像を機械学習モデルで解釈する際に利用される画像の表現方法として、作者や時代、作成場所などの情報を画像と併せてベクトル表現するアプローチを開発した。このベクトル表現は、分類モデルなどに直接利用が可能となる。

{{< figure src="contextnet.png" title="" lightbox="true" >}}