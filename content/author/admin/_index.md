+++
# Display name
name = "Rudra Murthy V"

# Is this the primary user of the site?
superuser = true

# Role/position
role = "PhD Student"

# Organizations/Affiliations
#   Separate multiple entries with a comma, using the form: `[ {name="Org1", url=""}, {name="Org2", url=""} ]`.
organizations = [ { name = "Indian Institute Of Technology Bombay", url = "http://iitb.ac.in/" } ]

# Short bio (displayed in user profile at end of posts)
bio = "My research interests include multilingual learning for various Natural Language Processing Tasks."

# Enter email to display Gravatar (if Gravatar enabled in Config)
email = "rudra@cse.iitb.ac.in"

# List (academic) interests or hobbies
interests = [
  "Natural Language Processing",
  "Deep Learning",
  "Multilingual Learning"
]

# List qualifications (such as academic degrees)
[[education.courses]]
  course = "ME in Data Mining"
  institution = "Indian Institute Of Science, Bengaluru"
  year = 2013

[[education.courses]]
  course = "BE in Computer Science"
  institution = "RNS Institute of Technology, Bengaluru"
  year = 2011

# Social/Academic Networking
#
# Icon pack "fab" includes the following social network icons:
#
#   twitter, weibo, linkedin, github, facebook, pinterest, google-plus,
#   youtube, instagram, soundcloud
#
#   For email icon, use "fas" icon pack, "envelope" icon, and
#   "mailto:your@email.com" as the link.
#
#   Full list: https://fontawesome.com/icons
#
# Icon pack "ai" includes the following academic icons:
#
#   cv, google-scholar, arxiv, orcid, researchgate, mendeley
#
#   Full list: https://jpswalsh.github.io/academicons/

[[social]]
  icon = "envelope"
  icon_pack = "fas"
  link = "#contact"  # For a direct email link, use "mailto:test@example.org".

[[social]]
  icon = "twitter"
  icon_pack = "fab"
  link = "https://twitter.com/rudramurthyv"

[[social]]
  icon = "google-scholar"
  icon_pack = "ai"
  link = "https://scholar.google.co.in/citations?user=5bjj_9cAAAAJ&hl=en"

[[social]]
  icon = "github"
  icon_pack = "fab"
  link = "https://github.com/murthyrudra"

[[social]]
    icon = "linkedin"
    icon_pack = "fab"
    link = "https://www.linkedin.com/in/rudra-murthy-96521a45"

# Link to a PDF of your resume/CV from the About widget.
# To enable, copy your resume/CV to `static/files/cv.pdf` and uncomment the lines below.
# [[social]]
#   icon = "cv"
#   icon_pack = "ai"
#   link = "files/cv.pdf"

+++

Hi, I am a Research Scholar from [Center For Indian Language Technology](http://www.cfilt.iitb.ac.in/) lab headed by [Professor. Pushpak Bhattacharyya](https://www.cse.iitb.ac.in/~pb/). My area of interest is Deep Multilingual Learning to various Natural Language Processing(NLP) tasks. 

#### Research Summary

> **Pinky:** Gee, Brain, What do you want to do today?  
> **Brain:** The same thing we do everyday, Pinky. Borrow features from high-resource language to improve NLP Task performance in low-resource languages

Deep Learning techniques have become the *de-facto* approach for any Natural Language Processing (NLP) task. Deep neural networks coupled with unsupervised learning (in the form of pre-trained word embeddings or initial training of language model followed by supervised training) have revolutionised the area of NLP, at least for resource-rich languages. However, the success of deep learning techniques needs to be taken with a pinch of salt. The deep learning techniques have known to perform badly for low-resource languages when trained on very small data. To be fair even traditional machine learning models would perform badly if not for feature engineering. Due to limited data the model cannot reliably establish correlations with features and class labels leading to poor performance.

In my thesis, I focus on borrowing features (implicitly statistics) from a related language (also known as multilingual learning). This should minimise the impact of data sparsity and lead to improvements in the low-resource language for the task in hand. We apply the above intuition to Named Entity recognition (NER) task. We show that borrowing features from a related languages infact helps improve the NER performance in low-resource languages. However, the improvements gained is limited by the lexical gap between the two languages. Though the lexical gap can be overcome by use of crosslingual embeddings, these embeddings have known to be of poor quality for Indian languages. Currently, my research is focused on obtaining better crosslingual embeddings for Indian languages.
