---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Recent Work"
subtitle: "Major components of most recent work"
summary: "A living list of significant aspects of my most recent employment as a Senior Machine Learning Engineer at X."
authors: [Grace, J.]
tags: []
categories: []
date: 2019-10-10T15:09:25+01:00
lastmod: 2019-10-10T15:09:25+01:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
# Major components of most recent work
#### Work completed as a Senior Machine Learning Engineer at X.

## Deep Learning framework
* Contributed to a tensorflow library that enabled for rapid development and evaluation of new models. Our work focused on rank based metrics and so our framework made use of custom hooks during training to enable early stopping using custom rank metrics (topK, MAP).
* Involved replicating state-of-the-art model architectures for siamese sequence matching (e.g. decomposable attention), RNNs, 1D CNNs
* Wrote wrapper for finetuning BERT
* Library for finetuning/training a set of best in class models with new data to quickly evaluate novel datasets
* Deploying production models using Flask and ElasticBeanstalk

## Research & experiments
* The main focus of our research was around question answering (by FAQ; question-question matching), topic classification for questions, and designing model architectures with inductive biases for paraphrastic encodings (i.e. sentences with different lexical form but same meaning should have similar encodings).
* Main model architectures included siamese architectures for sequence matching (RNN, CNN)
* Embeddings (glove, elmo, flair, custom, etc.)
* Hyper-params
* Model architectures (decomposable attention, CNNs, RNNs, regularisation)
* Training data (difference sources, mixes, negative sampling strategies)
* Pre-trained language models (BERT) + finetuning
* Tools for visualising/analysing latent representation
* Error analyses

## NLP pipelines
* Question identification using CNN
* Language detection using google library, spacy and dictionary lookup
* Sentence extraction using spacy

## Dataset creation
* Our research identified that our baseline models lacked generalisability. Two methods to approach this were to focus on architectural designs that promote generalization by design and to gather more data to expose the models to. The latter approach involved a significant amount of work with methods for dataset creation including:
* Model-based data augmentation
* Synonym swapping using wordnet (library)
* Back-translation
* Similarity-based negative sampling for improving training dynamics
* Mechanical turk for creating paraphrases and labelled data, including model-based mechanical turk environments where soft model predictions were used as label targets
* Model-based bootstrapping for creating soft-labels and noisy paraphrases
* Created gold-standard evaluation dataset using expert and novice labellers and a voting system

## Other work/skills
* Taxonomy/knowledge base construction and optimisation
* Created and managed databases for asset storage and access (dynamoDB)
* Accessing and manipulating data from No-SQL databases (mongoDB)
* Analytics
* AWS (EC2, DynamoDB, S3)
* Wrote a number of utils/helper functions e.g. for connecting to ec2, setting cloudwatch alarms, synchronizing local-s3, etc.