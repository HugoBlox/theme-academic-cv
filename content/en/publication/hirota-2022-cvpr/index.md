---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: Quantifying Societal Bias Amplification in Image Captioning
subtitle: ''
summary: ''
authors:
- Yusuke Hirota
- Yuta Nakashima
- Noa Garcia
tags: []
categories: []
date: '2022-06-01'
lastmod: 2022-09-05T16:51:45+09:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ''
  focal_point: ''
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
publishDate: '2022-09-05T07:51:45.328760Z'
publication_types:
- '1'
abstract: 'Vision-and-language tasks have increasingly drawn more attention as a means
  to evaluate human-like reasoning in machine learning models. A popular task in the
  field is visual question answering (VQA), which aims to answer questions about images.
  However, VQA models have been shown to exploit language bias by learning the statistical
  correlations between questions and answers without looking into the image content:
  e.g., questions about the color of a banana are answered with yellow, even if the
  banana in the image is green. If societal bias (e.g., sexism, racism, ableism, etc.)
  is present in the training data, this problem may be causing VQA models to learn
  harmful stereotypes. For this reason, we investigate gender and racial bias in five
  VQA datasets. In our analysis, we find that the distribution of answers is highly
  different between questions about women and men, as well as the existence of detrimental
  gender-stereotypical samples. Likewise, we identify that specific race-related attributes
  are underrepresented, whereas potentially discriminatory samples appear in the analyzed
  datasets. Our findings suggest that there are dangers associated to using VQA datasets
  without considering and dealing with the potentially harmful stereotypes. We conclude
  the paper by proposing solutions to alleviate the problem before, during, and after
  the dataset collection process.'
publication: '*Proc.~IEEE/CVF Conference on Computer Vision and Pattern Recognition
  (CVPR)*'
url_pdf: https://facctconference.org/static/pdfs_2022/facct22-102.pdf
---
