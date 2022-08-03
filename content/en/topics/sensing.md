+++ 
date = 2016-04-18 
title = "Social/Human Sensing" 

toc = true # Show table of contents? true/false 
type = "docs" # Do not modify. 
weight = 30

[menu.topics] 
 weight = 30 
+++

## Multi-label Disengagement and Behavior Prediction in Online Learning

Student disengagement prediction in online learning environments is beneficial in various ways, especially to help provide timely cues to make some feedback or stimuli to the students. In this work, we propose a neural network-based model to predict students' disengagement, as well as other behavioral cues, which might be relevant to students' performance, using facial image sequences. For training and evaluating our model, we collected samples from multiple participants and annotated them with temporal segments of disengagement and other relevant behavioral cues with our multiple in-house annotators. We present prediction results of all behavior cues along with baseline comparison.

{{< youtube VDeTrHQk7iw >}}


## Facial expression recognition

Deep convolutional neural networks (CNNs) have established their feet in the ground of computer vision and machine learning, used in various applications. In this work, an attempt is made to learn a CNN for a task of facial expression recognition (FER). Our network has convolutional layers linked with an FC layer with a skip-connection to the classification layer. The motivation behind this design is that lower layers of a CNN are responsible for lower-level features, and facial expressions can be mainly encoded in low-to-mid level features. Hence, in order to leverage the responses from lower layers, all convolutional layers are integrated via FC layers. Moreover, a network with shared parameters is used to extract landmark motion trajectory features.
These visual and landmark features are fused to improve performance. Our method is evaluated on the CK+ and Oulu-CASIA facial expression datasets. 

{{< figure library="true" src="topics-sensing-face_exp.png" title="Our model for facial expression recognition with skip-connections." numbered="true" >}}

## Learning efficiency prediction from eye trajectories

Estimating how much a learner is engaged, concentrates, and comprehends a topic, which we call learners' efficiency, is an essential step towards adaptive e-learning to automatically adjust the content or suggest resting. We explore the first step toward estimating learners' efficiency with a certain learning task. From various possible signals, we choose eye trajectories captured by an eye tracker as eye trajectories are one of the modalities that can be directly affected by the learner’s status. We formulate the learners' efficiency estimation as a binary classification problem and solve it with a deep neural network. We show that predicting learners' efficiency is possible from eye trajectories, at least for a certain learning-related task at AUC of 70%. Performance varies learner by learner.
