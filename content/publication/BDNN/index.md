---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "BiDirectional Neural Network For Facial Emotion Classification in SFEW Database"
authors: [Jiaxu Liu]
date: 2020-05-10T17:43:04+10:00
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate:

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: ""
publication_short: ""

abstract: "The SFEW database contains unconstrained facial expres- sions close to real world. In former research, current machine learning techniques are not robust enough for this uncontrolled environment[2]. In accordance with the effectiveness and limitation of BP network in clas- sification problem, we conduct an experiment of applying BiDirectional Neural Network on classification by training the network simultaneously in positive and negative propagate direction. In section 2 the method is explained, and in section 3 the classification result is presented, com- pared, and analysed. Further more, the experiment is concluded and some future works are presented in this paper.
"

# Summary. An optional shortened abstract.
summary: "We have shown the topology of BDNN and how can it be trained by a gen- eralised error back-propagation algorithm to provide the capabilities of label classification. We demonstrated the effectiveness of our classifier by evaluating the model on SFEW database. The experiment have somewhat revealed the per- formance of BDNN compared to other models.
The BDNN model, consisting of two symmetrical BPNNs, learns features and inversely at the same time. In paper [2], principle features in the image are extracted by descriptor. In the future, instead of LPQ and HPOG, if the original image is provided for instance, we plan to combine BDNN with convolu- tional neural network, applying CNN Cascade method for face detection[9], use pooling technique instead of descriptors, see if it could outperform the general CNN models and contributes an increment to emotion classification accuracy in SFEW."

tags: []
categories: [1]
featured: true

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://github.com/ljxw88/BDNN-for-SFEW/raw/master/paper.pdf
url_code:
url_dataset:
url_poster:
url_project: https://github.com/ljxw88/BDNN-for-SFEW
url_slides:
url_source:
url_video:

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
