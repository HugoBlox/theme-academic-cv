---
title: "Key-Finding Based on a Hidden Markov Model and Key Profiles"
authors:
- x-lab
- Claire Arthur
- Ichiro Fujinaga
date: "2019-11-09T00:00:00Z"
doi: "10.1145/3358664.3358675"

# Schedule page publish date (NOT publication's date).
publishDate: "2019-09-09T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: In *6th International Conference on Digital Libraries for Musicology*
publication_short: In *DLFM 2019*

abstract: "Musicologists and musicians often would like to search by keys in a digital music library. In this paper, we introduce a new key-finding algorithm that can be applied to music in both symbolic and audio formats. The algorithm, which is based on a Hidden Markov Model (HMM), provides two stages of key-finding output; the first one referring to local keys and the second one to the global key.

We describe the input, the two output stages, and the parameters of the model. In particular, we describe two configurable parameters, the transition probability distributions, which are based on a matrix of neighbouring keys, and the emission probability distributions, which make use of established key profiles.
We discuss the local key-finding capabilities of the algorithm, presenting an example analysis of the Prelude Op. 28 No. 20 in C minor by Chopin, showing the local key regions obtained using different key profiles. We evaluate the global key-finding capabili- ties of the model, using an existing dataset and six well-known key profiles as different model parameters.

Since different key profiles will tend to err or misclassify in different ways and across different pieces, we train an ensemble method with the predictions from all the key profiles (6) through our model. We show that the ensemble method achieves state-of- the-art performance for major and overall keys, however, it still underperforms the state-of-the-art for minor keys."

# Summary. An optional shortened abstract.
summary: "A new key detection algorithm that works in the symbolic and audio domain, furthermore, it is able to output local and global keys."

tags:
- Demo
featured: true

links:
# - name: Custom Link
#   url: http://example.org
url_pdf: "papers/keydetection19/dlfm19-11.pdf"
url_code: "https://github.com/napulen/justkeydding"
# url_dataset: '#'
# url_poster: '#'
# url_project: ''
url_slides: "slides/keydetection19/keydetection19.pdf"
# url_source: '#'
# url_video: '#'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Evaluation of symbolic key detection algorithms'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
# - internal-project

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---