---
# Page title
title: My PhD Project in One Poster
summary: "LIFTS: LearnIng Featured Transition Systems."

# Page type - we want a landing page
type: landing

date: 2022-06-03

# Your landing page sections
sections:
  # A section to display the PhD project poster and description
  - block: markdown
    id: poster
    content:
      title: My PhD Project in One Poster
      subtitle: 
      text: |
        <center>{{< figure src="media/poster-full.jpeg" caption="Poster presentation at the Women & Girls in Science Day (2022)">}}</center> 

        My PhD project is called LIFTS for **_"LearnIng Featured Transition Systems"_**. It aims at automatically learning transition systems that capture the **behaviour of a whole family of software-based systems**. Reasoning at the family level has been shown to yield important economies of scale and quality improvements for a broad range of systems such as software product lines, adaptive and configurable systems. Yet, to fully benefit from the above advantages, a model of the system family’s behaviour is necessary. Such a model is often prohibitively expensive to create manually due to the **combinatorial explosion** of system variants (that is, all the configurations corresponding to the different members of the system family). For large long-lived systems with outdated specifications or for systems that continuously adapt, the modeling cost is even higher. Therefore, this thesis proposes to **automate the learning** of such models from existing artifacts. To advance research at a fundamental level, our learning target are **Featured Transition Systems (FTS)**, an abstract formalism that can be used to provide a pivot semantics to a range of state-based modeling languages such as UML state diagrams (adapted to software families). More specifically, the main research questions addressed by this project are:

        1. Can we learn variability-aware models **efficiently**?
        2. Can we learn FTS in a **black-box** fashion? (i.e. with access to execution logs but not to source code);
        3. Can we learn FTS in a **white/grey-box** testing fashion? (i.e. with access to source code);
        4. How do the proposed techniques **scale** in practice?

        This project was summarised in the following poster. It was presented in April 2022, during the second edition of the [Women & Girls in Science Day](https://wgis.unamur.be/) organised by the University of Namur (Belgium).

        <center><iframe src="/uploads/poster.pdf" width="100%" height="600px"></center>
    design:
        # Choose how many columns the section has. Valid values: 1 or 2.
        columns: '1'
---