---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "全組織細胞イメージング／分子病態解析"
summary: "大阪大学 薬学研究科の[橋本 均 教授](http://molpharm.umin.jp)との共同研究では、新しいイメージング技術に画像処理技術を組み合わせることで、脳全体をセンシングする技術に取り組んでいます。"
authors: ["Hajime Nagahara"]
tags: []
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
脳内では、神経細胞間の神経投射を介して様々な脳領域が相互に連絡し、情報の処理・統合が行われている。脳の情報処理機構や、脳神経疾患における機能変調の機序の理解を深めるためには、脳を構成する全細胞の分布や振舞いを捉えた全脳レベルの解析を行う必要があると考えられる。橋本教授の研究グループでは、全脳細胞の局在を捉えたイメージング解析を行うために、脳全体をサブセルラーレベルの空間分解能で（0.7×0.7×5μm）で、マウス脳あたり最速2.4時間で画像を取得できる高精細全脳イメージング顕微鏡装置FAST (block-face serial microscopy tomography)を開発してきた。これにより、解析スループットの向上や、非ヒト霊長類の全脳、ヒト死後脳への応用に成功してきたが、脳全体を対象として細胞レベルの細かな病態を解析するためには、マウス脳あたり約0.5～1 TB/色におよぶ大規模データの解析手法などの課題が残されている。昨年度までに画像上のアーティファクトを除く画像処理方法や標準脳画像へのフィッティング方法の確立に取り組んできたが、これらの画像処理精度を向上するために組織自家蛍光シグナルレベルの向上や周辺減光等の改善が必要であることが明らかになった。

そこで、様々な画質向上のためのハードウェアと画像処理プログラムコードの両者を相互に連動した改良を加え、画像の空間周波数成分を考慮した独自アルゴリズムによる補正法を作成し、周辺減光等による筋状の縫目を解消することに成功した（図1）。

{{< figure src="overview.png" title="" lightbox="true" >}}