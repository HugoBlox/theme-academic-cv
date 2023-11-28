---
title: 'AxIoU: An Axiomatically Justified Measure for Video Moment Retrieval'
authors:
- Riku Togashi
- Mayu Otani
- Yuta Nakashima
- Janne Heikkilä Esa Rahtu
- Tetsuya Sakai
date: '2022-06-01'
publishDate: '2023-11-28T10:16:24.743055Z'
publication_types:
- paper-conference
publication: '*Proc.~IEEE/CVF Conference on Computer Vision and Pattern Recognition
  (CVPR)*'
abstract: 'Evaluation measures have a crucial impact on the direction of research.
  Therefore, it is of utmost importance to develop appropriate and reliable evaluation
  measures for new applications where conventional measures are not well suited. Video
  Moment Retrieval (VMR) is one such application, and the current practice is to use
  R@K,θ for evaluating VMR systems. However, this measure has two disadvantages. First,
  it is rank-insensitive: It ignores the rank positions of successfully localised
  moments in the top-K ranked list by treating the list as a set. Second, it binarizes
  the Intersection over Union (IoU) of each retrieved video moment using the threshold
  θ and thereby ignoring fine-grained localisation quality of ranked moments. We propose
  an alternative measure for evaluating VMR, called Average Max IoU (AxIoU), which
  is free from the above two problems. We show that AxIoU satisfies two important
  axioms for VMR evaluation, namely, Invariance against Redundant Moments and Monotonicity
  with respect to the Best Moment, and also that R@K,θ satisfies the first axiom only.
  We also empirically examine how AxIoU agrees with R@K,θ, as well as its stability
  with respect to change in the test data and human-annotated temporal boundaries.'
url_pdf: 
  https://openaccess.thecvf.com/content/CVPR2022/papers/Togashi_AxIoU_An_Axiomatically_Justified_Measure_for_Video_Moment_Retrieval_CVPR_2022_paper.pdf
---
