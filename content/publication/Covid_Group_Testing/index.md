---
title: "Group Testing Large Populations for SARS-CoV-2"

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here 
# and it will be replaced with their full name and linked to their profile.
authors:
- Hooman Zabeti
- Nick Dexter
- admin
- Leonhardt Unruh
- Ben Adcock
- Leonid Chindelevitch



date: "2021-06-05T00:00:00Z"
doi: "10.1101/2021.06.03.21258258"

# Schedule page publish date (NOT publication's date).
# publishDate: "2017-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
# publication_types: ["3"]

# Publication name and optional abbreviated publication name.
# publication: Submitted
publication_short: Submitted

abstract: "Group testing, the testing paradigm which combines multiple samples within a single
test, was introduced in 1943 by Robert Dorfman. Since its original proposal for syphilis
screening, group testing has been applied in domains such as fault identification in electrical and computer networks, machine learning, data mining, and cryptography. The
SARS-CoV-2 pandemic has led to proposals for using group testing in its original context
of identifying infected individuals in a population with few tests. Studies suggest that nonadaptive group testing - in which all the tests are determined in advance - for SARS-CoV-2
could help save 20% to 90% of tests depending on the prevalence. However, no systematic
approach for comparing different non-adaptive group testing strategies currently exists.
In this paper we develop a software platform for evaluating non-adaptive group testing
strategies in both a noiseless setting and in the presence of realistic noise sources, modelled
on published experimental observations, which makes them applicable to polymerase chain
reaction (PCR) tests, the dominant type of tests for SARS-CoV-2. This modular platform
can be used with a variety of group testing designs and decoding algorithms. We use it to
evaluate the performance of near-doubly-regular designs and a decoding algorithm based
on an integer linear programming formulation, both of which are known to be optimal in
some regimes. We find savings between 40% and 91% of tests for prevalences up to 10%
when a small error (below 5%) is allowed. We also find that the performance degrades
gracefully with noise. We expect our modular, user-friendly, publicly available platform
to facilitate empirical research into non-adaptive group testing for SARS-CoV-2."

# Summary. An optional shortened abstract.
summary: 

tags: []

# Display this page in the Featured widget?
featured: false

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''
# url_pdf: 'https://www.medrxiv.org/content/10.1101/2021.06.03.21258258v1.full.pdf+html'
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: ''
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects:

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---
