---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Knowledge VQA"
summary: ""
authors: ["Noa Garcia", "Zekun Yang", "Chenhui Chu", "Mayu Otani", "Yuta Nakashima"]
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
Visual question answering (VQA) with knowledge is a task that requires knowledge to answer questions on images/video. This additional requirement of knowledge poses an interesting challenge on top of the classic VQA tasks. Specifically, a system needs to explore external knowledge sources to answer the questions correctly, as well as understanding the visual content.

We created [a dedicated dataset for our knowledge VQA task](https://knowit-vqa.github.io) and made it open to the public so that everyone can enjoy our new task. The results are presented at [AAAI 2020](https://aaai.org/Conferences/AAAI-20/).

Representation of videos has been a major research topic for various deep learning applications including visual question answering. This is a challenging problem especially for tasks that involves vision and language and some researchers pointed out that deep neural network-based models mainly use natural language text but not the vision. We propose to use textual representation of videos, in which SOTA models for detection/recognition are used for generating text together with some rules. The results are presented at [ECCV 2020](https://eccv2020.eu). 

{{< youtube KCUUvSpf-Qo >}}

<br/>

We also work on question answering on art, which requires high-level understanding of paintings themselves as well as associated knowledge on them. 

{{< youtube I78SoOkH3dM >}}


### Publications
- Noa Garcia, Chentao Ye, Zihua Liu, Qingtao Hu, Mayu Otani, Chenhui Chu, Yuta Nakashima, and Teruko Mitamura (2020). [A Dataset and Baselines for Visual Question Answering on Art](https://arxiv.org/abs/2008.12520). Proc. European Computer Vision Conference Workshops.
- Noa Garcia and Yuta Nakashima (2020). [Knowledge-Based VideoQA with Unsupervised Scene Descriptions](https://arxiv.org/abs/2007.08751). Proc. European Conference on Computer Vision.
- Noa Garcia, Mayu Otani, Chenhui Chu, and Yuta Nakashima (2020). KnowIT VQA: Answering knowledge-based questions about videos. Proc. AAAI Conference on Artificial Intelligence.
- Zekun Yang, Noa Garcia, Chenhui Chu, Mayu Otani, Yuta Nakashima, and Haruo Takemura (2020). BERT representations for video question answering. Proc. IEEE Winter Conference on Applications of Computer Vision.
- Noa Garcia, Chenhui Chu, Mayu Otani, and Yuta Nakashima (2019). Video meets knowledge in visual question answering. MIRU.
- Zekun Yang, Noa Garcia, Chenhui Chu, Mayu Otani, Yuta Nakashima, and Haruo Takemura (2019). Video question answering with BERT. MIRU.
