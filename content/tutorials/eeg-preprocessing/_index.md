---
title: EEG preprocessing
type: book # Do not modify.
toc: false
summary: EEG preprocessing from theory to practice.
---
 {{% callout warning %}}
This is an ongoing project.
{{% /callout %}}

I remember the first time I learnt EEG preprocessing. It was like learning how to cook a dish. By following a recipe, you'll learn the ingredient needed and the amount you need, but seldom does the recipe tell you why is such an ingredient necessary and how to decide the exact amount needed. 

It might not be a huge issue if you miss some ingredient or add some of your personal flavors while cooking. However, it matters as a researcher that you justify the preprocessing steps used in your pipeline, and decide the right function parameters. 

```mermaid
graph TD;
  A[Loading data]-->B[High pass filter];
  B[High pass filter]-->C[Line noise removal]; 
  C[Line noise removal]-->D[Bad channels removal];
  D[Bad channels removal]-->E[Interpolating bad channels];
  E[Interpolating bad channels] --> F[Rejecting data segments];
  F[Rejecting data segments] --> G[Re-reference];
  G[Re-reference] --> H[Extract epoch];
  H[Extract epoch] --> I[ICA];
  I[ICA] --> J[Removing artifacts];
```





