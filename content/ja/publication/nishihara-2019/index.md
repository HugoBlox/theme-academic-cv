---
title: "Controllable text simplification with lexical constraint loss"
date: 2019-01-01
publishDate: 2020-11-02T06:48:17.740002Z
authors: ["Daiki. Nishihara", "Tomoyuki. Kajiwara", "Yuki. Arase"]
publication_types: ["1"]
abstract: "We propose a method to control the level of a sentence in a text simplification task. Text simplification is a monolingual translation task translating a complex sentence into a simpler and easier to understand the alternative. In this study, we use the grade level of the US education system as the level of the sentence. Our text simplification method succeeds in translating an input into a specific grade level by considering levels of both sentences and words. Sentence level is considered by adding the target grade level as input. By contrast, the word level is considered by adding weights to the training loss based on words that frequently appear in sentences of the desired grade level. Although existing models that consider only the sentence level may control the syntactic complexity, they tend to generate words beyond the target level. Our approach can control both the lexical and syntactic complexity and achieve an aggressive rewriting. Experiment results indicate that the proposed method improves the metrics of both BLEU and SARI."
featured: false
publication: "*Proceedings of the ACL 2019 Student Research Workshop (ACL 2019 SRW)*"
url_pdf: "https://www.aclweb.org/anthology/P19-2036/"
doi: "10.18653/v1/P19-2036"
---

