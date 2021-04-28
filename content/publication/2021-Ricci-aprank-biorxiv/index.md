---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "APRANK: computational prioritization of antigenic proteins and peptides from complete pathogen proteomes"
authors: ["@alejandro", "Mauricio Brunner", "Diego Ramoa", "@santiago", "Mortn Nielsen", "@fernan"]
date: 2021-04-27T16:35:37-03:00
doi: "10.1101/2021.04.27.441630"

# Schedule page publish date (NOT publication's date).
publishDate: 2021-04-27T16:35:37-03:00

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "APRANK: computational prioritization of antigenic proteins and peptides from complete pathogen proteomes"
publication_short: "Antigenic Protein and Peptide Ranker"

abstract: "Availability of highly parallelized immunoassays has renewed interest in the discovery of serology biomarkers for infectious diseases. Protein and peptide microarrays now provide a rapid, high-throughput platform for immunological testing and validation of potential antigens and B-cell epitopes. However, there is still a need for tools to prioritize and select relevant probes when designing these arrays. In this work we describe a computational method called APRANK (Antigenic Protein and Peptide Ranker) which integrates multiple molecular features to prioritize antigenic targets in a given pathogen proteome. These features include subcellular localization, presence of repetitive motifs, natively disordered regions, secondary structure, transmembrane spans and predicted interaction with the immune system. We applied this method to prioritize potentially antigenic proteins and peptides in a number of bacteria and protozoa causing human diseases: Borrelia burgdorferi (Lyme disease), Brucella melitensis (Brucellosis), Coxiella burnetii (Q fever), Escherichia coli (Gastroenteritis), Francisella tularensis (Tularemia), Leishmania braziliensis (Leishmaniasis), Leptospira interrogans (Leptospirosis), Mycobacterium leprae (Leprae), Mycobacterium tuberculosis (Tuberculosis), Plasmodium falciparum (Malaria), Porphyromonas gingivalis (Periodontal disease), Staphylococcus aureus (Bacteremia), Streptococcus pyogenes (Group A Streptococcal infections), Toxoplasma gondii (Toxoplasmosis) and Trypanosoma cruzi (Chagas Disease). We have tested this integrative method using non-parametric ROC-curves and made an unbiased validation using an independent data set. We found that APRANK is successful in predicting antigenicity for all pathogen species tested, facilitating the production of antigen-enriched protein subsets. We make APRANK available to facilitate the identification of novel diagnostic antigens in infectious diseases."

# Summary. An optional shortened abstract.
summary: "APRANK can take a complete pathogen proteome as input, and provide a ranked list of the _best_ candidate antigens..."

tags: ["antigens", "predictors", "epitopes", "antigenicity", "proteins", "peptides", "diagnostics", "biomarkers"]
categories: ["Predictors"]
featured: false

# Custom links (optional).
#   Uncomment and edit lines below to show custom links.
# links:
# - name: Follow
#   url: https://twitter.com
#   icon_pack: fab
#   icon: twitter

url_pdf: https://www.biorxiv.org/content/10.1101/2021.04.27.441630v1
url_code: https://github.com/trypanosomatics/aprank
url_dataset: https://doi.org/10.5061/dryad.zcrjdfnb1
url_poster:
url_project:
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
projects: ["immunomics"]

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
