+++
title = "Monolingual NER Results for various Languages"
date = 2019-02-06T00:00:00

# List format.
#   0 = Simple
#   1 = Detailed
#   2 = Stream
list_format = 2

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""
discussionId = 2
+++

The Neural NER system implemented by me as part of the papers [TALLIP paper]({{< ref "/publication/low-resource-tallip/index.md" >}}) and [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}}) achieves the following *F1-Scores* on various languages.

## Results
|  Language |                             Dataset                            |                                            Word Embeddings                                            |                                  Reference                                 | F1 Score |
|:---------:|:--------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------:|:--------------------------------------------------------------------------:|:--------:|
| English   | [CoNLL 2003](https://www.clips.uantwerpen.be/conll2003/ner/)   | [Spectral Embeddings](http://www.pdhillon.com/code.html)                                              | [Arxiv Paper]({{< ref "/publication/dblp-journalscorrvkb-16/index.md" >}}) |    90.94 |
| Spanish   | [CoNLL 2002](https://www.clips.uantwerpen.be/conll2002/ner/)   | Spectral Embeddings                                                                                   | [Arxiv Paper]({{< ref "/publication/dblp-journalscorrvkb-16/index.md" >}}) |    85.75 |
| Dutch     | [CoNLL 2002](https://www.clips.uantwerpen.be/conll2002/ner/)   | Spectral Embeddings                                                                                   | [Arxiv Paper]({{< ref "/publication/dblp-journalscorrvkb-16/index.md" >}}) |    85.20 |
| German    | [Link](https://nlpado.de/~sebastian/software/ner_german.shtml) | Spectral Embeddings                                                                                   | [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}})            |    87.64 |
| Italian   | Evalita 2009                                                   | Spectral Embeddings                                                                                   | [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}})            |    75.98 |
| Hindi     | FIRE 2014                                                      | [Fasttext Embeddings](https://github.com/facebookresearch/fastText/blob/master/docs/crawl-vectors.md) | [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}})            |    64.93 |
| Marathi   | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}})            |    61.46 |
| Bengali   | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}})            |    55.61 |
| Malayalam | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}})            |    64.59 |
| Tamil     | FIRE 2014                                                      | Fasttext Embeddings                                                                                   | [ACL 2018 Paper]({{< ref "/publication/p-18-2064/index.md" >}})            |    65.39 |

PPS: The reason for difference in monolingual NER performance for Bengali, Tamil and Malayalam compared to the published results are due to certain pre-processing steps which were not performed in the ACL 2018 paper. We have observed that some of the sentences have length greater than 200 words. Manually splitting these longer sentences into smaller ones using '|' as delimiter lead to substantial improvement. Also, these models are trained using [common-crawl embeddings](https://github.com/facebookresearch/fastText/blob/master/docs/crawl-vectors.md) as opposed to [wikipedia embeddings](https://fasttext.cc/docs/en/pretrained-vectors.html)

