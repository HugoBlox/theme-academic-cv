+++ 
date = 2020-06-20 
title = "Medical Imaging" 

toc = false # Show table of contents? true/false 
type = "docs" # Do not modify. 
weight = 40

[menu.topics] 
 weight = 40 

+++

Medical imaging is an active research area toward computer-aided diagnosis. We are working on the following projects.

## Vessel segmentation for retinal fundus images

Retinal vessel segmentation is of great interest for diagnoses of retinal vascular diseases. To further improve the performance of vessel segmentation, we propose IterNet, a new model based on UNet, with the ability to find obscured details of the vessel from the segmented vessel image itself, rather than the raw input image. IterNet consists of multiple iterations of a mini-UNet, which can be 4× deeper than the common UNet. IterNet also adopts the weight-sharing and skip-connection features to facilitate training; therefore, even with such a large architecture, IterNet can still learn from merely 10-20 labeled images, without pre-training or any prior knowledge. IterNet achieves AUCs of 0.9816, 0.9851, and 0.9881 on three mainstream datasets, namely DRIVE, CHASE-DB1,
and STARE, respectively, which currently are the best scores in the literature. 

{{< figure library="true" src="topics-mi-iternet.png" title="Example of retinal fundus image (a), ground-truth vessel segmentation, segmentation results by existing two methods (c, d), and our IterNet (e)." numbered="true" >}}


The code is available [here](https://github.com/conscienceli/IterNet).

## Artery/vein classification for retinal fundus images

Retinal imaging serves as a valuable tool for diagnoses of various diseases. However, reading retinal images is a difficult and time-consuming task even for experienced specialists. The fundamental step towards automated retinal image analysis is vessel segmentation and artery/vein classification, which provide various information on potential disorders. To improve the performance of the existing automated methods for retinal image analysis, we propose a two-step vessel classification. We adopt a UNet-based model, SeqNet, to accurately segment vessels from the background and make predictions on the vessel type. Our model does segmentation and classification sequentially, which alleviates the problem of label distribution bias and facilitates training. To further refine classification results, we post-process them considering the structural information among vessels to propagate highly confident predictions to surrounding vessels. Our experiments show that our method improves AUC to 0.98 for segmentation and the accuracy to 0.92 in classification over the DRIVE dataset.

{{< figure library="true" src="topics-mi-seqnet.png" title="SeqNet model." numbered="true" >}}

The code is available [here](https://github.com/conscienceli/SeqNet).