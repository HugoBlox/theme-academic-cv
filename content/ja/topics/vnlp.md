+++ 
date = 2016-04-18 
title = "Vision and Language" 

toc = true # Show table of contents? true/false 
type = "docs" # Do not modify. 
weight = 20

[menu.topics] 
 weight = 20 
+++

Since the dawn of deep neural network-related technologies, the combination of vision and language modalities has become one of the mainstream research areas in both computer vision and natural language processing communities. We have been working on the following topics in this area.

## Visual question answering with knowledge

Visual question answering is a popular research topic recently, and many papers have been published. As its name suggests, this task explores a system that can answer a question on a given input image, which means that the answer should appear in the image. 

{{< figure library="true" src="topics-vnlp-knowledgevqa.png" title="Various questions on video, including knowledge-based one." numbered="true" width="500" >}}

In this work, we propose a novel video understanding task by fusing knowledge-based and video question answering. First, we introduce KnowIT VQA, a video dataset with 24,282 human-generated question-answer pairs about a popular sitcom. The dataset combines visual, textual, and temporal coherence reasoning with knowledge-based questions, which need the experience obtained from the viewing of the series to be answered. Second, we propose a video understanding model by combining the visual and textual video content with specific knowledge about the show. Our main findings are: (i) the incorporation of knowledge produces outstanding improvements for VQA in videos, and (ii) the performance on KnowIT VQA still lags well behind human accuracy, indicating its usefulness for studying current video modeling limitations. 

{{< figure library="true" src="topics-vnlp-kvqa_model.png" title="Our model for addressing the knowledge VQA task." numbered="true" >}}

Our dataset is available [here](https://knowit-vqa.github.io).

## Visually grounded paraphrases

Visually grounded paraphrases (VGPs) describe the same visual concept but in different wording.
Previous studies have developed models to identify VGPs from language and visual features.
In these existing methods, language and visual features are simply fused.
However, our detailed analysis indicates that VGPs with different lexical similarities require different weights on language and visual features to maximize identification performance.
This motivates us to propose a gated neural network model to adaptively control the weights.
In addition, because VGP identification is closely related to phrase localization, we also propose a way to explicitly incorporate phrase-object correspondences.
From our evaluation in detail, we confirmed our model outperforms the state-of-the-art model.

{{< figure library="true" src="topics-vnlp-vgp.png" title="Examples of a VGP and non-VGP." numbered="true" width="600" >}}

## Transformer-based models for visual question answering

Visual question answering (VQA) aims at answering questions about the visual content of an image or a video. Currently, most work on VQA is focused on image-based question answering, and less attention has been paid into answering questions about videos. However, VQA in video presents some unique challenges that are worth studying: it not only requires to model a sequence of visual features over time but often it also needs to reason about associated subtitles. In this work, we propose to use BERT, a sequential modeling technique based on Transformers, to encode the complex semantics from video clips. Our proposed model jointly captures the visual and language information of a video scene by encoding not only the subtitles but also a sequence of visual concepts with a pre-trained language-based Transformer. In our experiments, we exhaustively study the performance of our model by taking different input arrangements, showing outstanding improvements when compared against previous work on two well-known video VQA datasets: TVQA and Pororo.

{{< figure library="true" src="topics-vnlp-bert.png" title="VQA with a BERT pretrained model." numbered="true" width="500" >}}


## Video summarization

Video summarization is a technique to create a short skim of the original video while preserving the main stories/content. There exists a substantial interest in automatizing this process due to the rapid growth of the available material. The recent progress has been facilitated by public benchmark datasets, which enable easy and fair comparison of methods. Currently, the established evaluation protocol is to compare the generated summary with respect to a set of reference summaries provided by the dataset. In this paper, we will provide an in-depth assessment of this pipeline using two popular benchmark datasets. Surprisingly, we observe that randomly generated summaries achieve comparable or better performance to the state-of-the-art. In some cases, the random summaries outperform even the human-generated summaries in leave-one-out experiments. Moreover, it turns out that the video segmentation, which is often considered as a fixed pre-processing method, has the most significant impact on the performance measure. Based on our observations, we propose alternative approaches for assessing the importance scores as well as an intuitive visualization of correlation between the estimated scoring and human annotations.

{{< figure library="true" src="topics-vnlp-vsum.png" title="A typical pipeline for video summarization and its randomization test." numbered="true" width="500" >}}