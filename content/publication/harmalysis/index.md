---
title: "Harmalysis: A Language for the Annotation of Roman Numerals in Symbolic Music Representations"
authors:
- x-lab
- Ichiro Fujinaga
date: "2020-05-28T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2020-05-28T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: "In *Music Encoding Conference*"
publication_short: "In *MEC*"

abstract: "High-quality annotations of harmonic analysis are scarce. Furthermore, the existing data usually follows different conventions for spelling scale degrees, inversions, and special chords (e.g., cadential six-four).

There have been efforts for standardizing the notation of harmonic analysis annotations,  however, these have not been very successful because: 1) there are few software tools able to parse such notations 2) as a consequence, researchers have not adopted the suggested notations and it is more frequent to find a different notation with every new dataset.

We attempt to mitigate the limitations of existing notations through the definition of a new language for harmonic analysis, which we call harmalysis. This language 1) provides a notation that adjusts as much as possible to the way in which researchers have annotated roman numerals in existing datasets, 2) formalizes the resulting notation into a consistent and extensible context-free grammar, 3) uses the context-free grammar to generate tools that are able to parse and validate annotations in the syntax of the language.

We make the formal definition of the language, a context-free grammar described in the Extended Backus-Naur Form (EBNF), available as an open-source repository. Within the same repository, we make available tools for parsing annotations in the harmalysis language. The tools allow the users to extract high-level semantic information from their annotations (e.g., local key, root of the chord, inversion, added intervals, whether the chord is tonicizing another key or not, etc.) and to validate the correctness of a given annotation according to the grammar of the proposed language.

The language has been designed to be easily annotated through the addition of lyrics in music notation software or-when supported by the symbolic music format-in a dedicated data structure for indications of harmony (e.g., the function tag in MusicXML, the harm tag in MEI, and a **harm spine in Humdrum). This ensures that the users adopting the language find an immediate application for it."


# Summary. An optional shortened abstract.
summary: "A grammar for encoding roman numeral analysis annotations within the lyrics of a symbolic music representation."

tags:
- Demo
featured: true

links:
# - name: Custom Link
#   url: http://example.org
url_pdf: "papers/harmalysis/harmalysis.pdf"
url_code: 'https://github.com/napulen/harmalysis'
# url_dataset: '#'
# url_poster: ''
url_project: 'https://pypi.org/project/harmalysis'
url_slides: 'slides/harmalysis/harmalysis.pdf'
# url_source: ''
url_video: 'video/harmalysis/harmalysis.webm'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Harmalysis'
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
# slides: example
---
