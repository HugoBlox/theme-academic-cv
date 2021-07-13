---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "APRANK: computational prioritization of antigenic proteins and peptides from complete pathogen proteomes"
authors: ["@alejandro", "Mauricio Brunner", "Diego Ramoa", "@santiago", "Morten Nielsen", "@fernan"]
date: 2021-07-12T17:01:07-03:00
doi: "10.3389/fimmu.2021.702552"

# Schedule page publish date (NOT publication's date).
publishDate: 2021-07-12T17:01:07-03:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["2"]

# Publication name and optional abbreviated publication name.
publication: "Frontiers In Immunology"
publication_short: "Front Immunol"

abstract: "The long and boring but academically correct abstract is available at the publisher ([read Abstract at Frontiers](https://www.frontiersin.org/articles/10.3389/fimmu.2021.702552/abstract)). Here we will provide a cooler version of what the paper is about. We used information on known and validated antigens and their peptidic epitopes (spoiler alert: this is all biased towards linear epitopes), and used it to train two models (one for proteins, to predict antigens; one for peptides to predict epitopes). APRANK takes a complete proteome as input, calculates a number of features for each protein and peptide, and outputs a score of how likely it is that the given protein or peptide is antigenic. APRANK has been trained with antigenic proteins and peptides from a phylogenetically wide diversity of human pathogens, and has been validated to works for bacteria, protozoa, and metazoan parasites (helminths)."

# Summary. An optional shortened abstract.
summary: "APRANK takes a pathogen proteome as input, and provides a ranked list of the _best_ candidate antigens and epitopes."

tags: ["antigens", "predictors", "epitopes", "antigenicity", "proteins", "peptides", "diagnostics", "biomarkers", "human pathogens"]
categories: ["Predictors"]
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
links:
- name: Code
  url: https://github.com/trypanosomatics/aprank
  icon_pack: fab
  icon: github
- name: Data and Models
  url: https://doi.org/10.5061/dryad.zcrjdfnb1
  icon_pack: ai
  icon: dryad
- name: Predictions
  icon_pack: 
  icon: 
  url: https://doi.org/10.5281/zenodo.4939160


#url_pdf:
#url_code:
#url_dataset:
#url_poster:
#url_project:
#url_slides:
#url_source:
#url_video:

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
projects: ["immunomics"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
#slides: ""
---

&nbsp;  

APRANK is available to predict antigenicity but also for hacking and modifying. 

We have made all code, data and trained models available. Code is under a simplified BSD 2-clause license, which is a permisive free software license. Feel free to reuse, retrain, and take APRANK to the next level. 

If you read the paper, you will get pointers to all the relevant places, but in short: 

 * Code is at Github (https://github.com/trypanosomatics/aprank)
     * this includes code to run APRANK on a new pathogen (using our pan-species, already trained models)
     * as well as code needed to re-train APRANK
 * Trained models are available at Dryad (https://doi.org/10.5061/dryad.zcrjdfnb1)
     * due to size restrictions, these are made available separately here, and need to be placed in the corresponding directories in the APRANK code (once you check it out from GitHub)
 * APRANK predictions for 15 human pathogens are in the Supplementary Materials (and also at Zenodo (https://doi.org/10.5281/zenodo.4939160)). 

Hopefully everything is well documented in the code! Enjoy.