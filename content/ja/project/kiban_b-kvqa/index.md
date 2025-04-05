---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Knowledge VQA"
summary: "知識を要する画像・映像に関する質疑応答（Knowledge Visual Question Answering; KVQA）は、画像・映像に関する質問で、回答に知識を必要とするタスクです。"
authors: ["Noa Garcia", "Zekun Yang", "Chenhui Chu", "Yuta Nakashima"]
tags: [kvqa]
categories: []
date: 2020-07-01T10:13:28+09:00

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
知識を要する画像・映像に関する質疑応答（Knowledge Visual Question Answering; KVQA）は、画像・映像に関する質問で、回答に知識を必要とするタスクです。知識を要求するこの新しいタスクは、今までのタスクと同様画像・映像の理解に加えて、どうやって知識を収集するのか、回答生成時にどうやって（外部）知識を取り入れるのか、という新しいチャレンジが必要になります。

このプロジェクトでは、[KVQAのための新しいデータセット](https://knowit-vqa.github.io)を構築し、公開しています。この成果は、人工知能分野のトップカンファレンスの一つである[AAAI 2020](https://aaai.org/Conferences/AAAI-20/)で発表しました。

また、深層学習などでの利用にあたって映像をどのように表現するかは、質疑応答をはじめとする様々なタスクにおいて主要な研究課題となっています。特に、視覚と自然言語を入力とするタスクでは、モデルが自然言語ばかり注目するような現象もあるようで、難しい問題です。このプロジェクトでは、映像をテキストで表現するアプローチ（キャプション生成のような教師ありの手法ではなく、映像から必要なオブジェクトなどを検出してルールベースでテキストを生成する手法）を採用し、既存手法と比較しています。この成果は、コンピュータビジョン分野のトップカンファレンスの一つである[ECCV 2020](https://eccv2020.eu)で発表しました。

{{< youtube KCUUvSpf-Qo >}}

<br/>

関連した研究として、絵画に関するQAについても取り組んでいます。

{{< youtube I78SoOkH3dM >}}

### Publications
- Noa Garcia, Chentao Ye, Zihua Liu, Qingtao Hu, Mayu Otani, Chenhui Chu, Yuta Nakashima, and Teruko Mitamura (2020). [A Dataset and Baselines for Visual Question Answering on Art](https://arxiv.org/abs/2008.12520). Proc. European Computer Vision Conference Workshops.
- Noa Garcia and Yuta Nakashima (2020). [Knowledge-Based VideoQA with Unsupervised Scene Descriptions](https://arxiv.org/abs/2007.08751). Proc. European Conference on Computer Vision.
- Noa Garcia, Mayu Otani, Chenhui Chu, and Yuta Nakashima (2020). KnowIT VQA: Answering knowledge-based questions about videos. Proc. AAAI Conference on Artificial Intelligence.
- Zekun Yang, Noa Garcia, Chenhui Chu, Mayu Otani, Yuta Nakashima, and Haruo Takemura (2020). BERT representations for video question answering. Proc. IEEE Winter Conference on Applications of Computer Vision.
- Noa Garcia, Chenhui Chu, Mayu Otani, and Yuta Nakashima (2019). Video meets knowledge in visual question answering. MIRU.
- Zekun Yang, Noa Garcia, Chenhui Chu, Mayu Otani, Yuta Nakashima, and Haruo Takemura (2019). Video question answering with BERT. MIRU.