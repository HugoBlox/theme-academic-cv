+++ 
date = 2020-06-20 
title = "Medical Imaging" 

toc = false # Show table of contents? true/false 
type = "book" # Do not modify. 
weight = 40

[menu.topics] 
 weight = 40 

+++

Medical imaging is an active research area toward computer-aided diagnosis. We are working on the following projects.

## SCOUTER: Slot Attention-based Classifier for Explainable Image Recognition

Explainable artificial intelligence has been gaining attention in the past few years. However, most existing methods are based on gradients or intermediate features, which are not directly involved in the decision-making process of the classifier. In this paper, we propose a slot attention-based classifier called SCOUTER for transparent yet accurate classification. Two major differences from other attention-based methods include: (a) SCOUTER's explanation is involved in the final confidence for each category, offering more intuitive interpretation, and (b) all the categories have their corresponding positive or negative explanation, which tells "why the image is of a certain category" or "why the image is not of a certain category." We design a new loss tailored for SCOUTER that controls the model's behavior to switch between positive and negative explanations, as well as the size of explanatory regions. Experimental results show that SCOUTER can give better visual explanations in terms of various metrics while keeping good accuracy on small and medium-sized datasets.

{{< youtube jMJs4uV3aHA >}}

You can find the [paper](https://arxiv.org/abs/2009.06138) and [code](https://github.com/wbw520/scouter).

## Vessel segmentation for retinal fundus images

Retinal vessel segmentation is of great interest for diagnoses of retinal vascular diseases. To further improve the performance of vessel segmentation, we propose IterNet, a new model based on UNet, with the ability to find obscured details of the vessel from the segmented vessel image itself, rather than the raw input image. IterNet consists of multiple iterations of a mini-UNet, which can be 4× deeper than the common UNet. IterNet also adopts the weight-sharing and skip-connection features to facilitate training; therefore, even with such a large architecture, IterNet can still learn from merely 10-20 labeled images, without pre-training or any prior knowledge. IterNet achieves AUCs of 0.9816, 0.9851, and 0.9881 on three mainstream datasets, namely DRIVE, CHASE-DB1,
and STARE, respectively, which currently are the best scores in the literature. 

{{< figure library="true" src="topics-mi-iternet.png" title="Example of retinal fundus image (a), ground-truth vessel segmentation, segmentation results by existing two methods (c, d), and our IterNet (e)." numbered="true" >}}


The code is available [here](https://github.com/conscienceli/IterNet).

## Artery/vein classification for retinal fundus images

Retinal imaging serves as a valuable tool for diagnoses of various diseases. However, reading retinal images is a difficult and time-consuming task even for experienced specialists. The fundamental step towards automated retinal image analysis is vessel segmentation and artery/vein classification, which provide various information on potential disorders. To improve the performance of the existing automated methods for retinal image analysis, we propose a two-step vessel classification. We adopt a UNet-based model, SeqNet, to accurately segment vessels from the background and make predictions on the vessel type. Our model does segmentation and classification sequentially, which alleviates the problem of label distribution bias and facilitates training. To further refine classification results, we post-process them considering the structural information among vessels to propagate highly confident predictions to surrounding vessels. Our experiments show that our method improves AUC to 0.98 for segmentation and the accuracy to 0.92 in classification over the DRIVE dataset.

{{< figure library="true" src="topics-mi-seqnet.png" title="SeqNet model." numbered="true" >}}

The code is available [here](https://github.com/conscienceli/SeqNet).