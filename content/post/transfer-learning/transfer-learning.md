+++
title = "Transfer Learning"
date = 2019-02-06T00:00:00

# List format.
# 0 = Simple
# 1 = Detailed
# 2 = Stream
list_format = 2

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""
discussionId = 3
+++

Some of us are really excited about the prospect of learning a new language. Unlike in formal language classes, we usually begin wth by learning the vocabulary. We ask for translations of real-world objects and day-to-day activities. We do not try to learn already known concepts _for example the word **tree**_. We instead learn the word used to represent the concept (**tree**). This is different from how children first learn a language. We need to teach them concepts and also the symbols to represent those concept in their language. This is what **Transfer Learning** is all about. Transfer Learning is using knowledge gained from one task to solve a related task.

Now, let me quote the Wikipedia definition for [Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning),

> Transfer learning is a research problem in machine learning that focuses on storing knowledge gained while solving one problem and applying it to a different but related problem. For example, knowledge gained while learning to recognize cars could apply when trying to recognize trucks. This area of research bears some relation to the long history of psychological literature on transfer of learning, although formal ties between the two fields are limited.

In the field of Natural Language Processing (NLP), transfer learning can take the form of multi-task learning or multilingual learning. Multi-task learning refers to using knowledge from one task to improve performance in a related task in the same language. For example, sentiment analysis helping emotion analysis. Similarly, multilingual learning refers to using knowledge from a task in one language to improve performance in a related task in another language language. Usually in multilingual learning, we focus on the case where the tasks are the same in both the languages.

In this post, I won't be going into the details of Transfer Learning. Sebastian Ruder's blog post on [Transfer Learning](http://ruder.io/transfer-learning/) summarizes transfer learning. I will be motivating transfer learning from a slightly different perpective. 

### Transfer Learning: A Strong Prior Distribution Over Models
_Zoph et.al 2016_ quotes in his paper titled **Transfer Learning for Low-Resource Neural Machine Translation**:

> A justification for this approach is that in scenarios where we have limited training data, we need a strong prior distribution over models. The parent model trained on a large amount of bilingual data can be considered an anchor point, the peak of our prior distribution in model space. When we train the child model initialized with the parent model, we fix parameters likely to be useful across tasks so that they will not be changed during child-model training. 

#### Supervised Learning as Curve Fitting
The goal of suprvised learning can be thought of as fitting a curve (function) given some data points _i.e.,_ $y = f(x)$ learn the fundtion $f$ given input values $x$ and corresponding output values $y$. If we had $y$ for every pint in the input space, we can fit the curve exactly. In real-life scenarios, we usually get $y$ for some sample of points in the input space. The values $y$ might be noisy for some values of $x$. Sometimes, the sample of points may be very small that it might not be indicator of the function at all.

Consider the task of fitting a **Cosine** function. We will use a deep feedfoward neural network for this purpose. We will first generate a set of data points and plot the curve.


```python
# We will generate 200 random points from 0 to 720
X = np.random.randint(720, size=(200,1))
# Convert the values to radians
X_rad = X * np.pi / 180
# Get the corresponding cosine values for the inputs
Y = np.cos(X_rad)

# We will add some noise to the inputs
mask = np.random.randint(2,size=(200))
y_noise = Y
y_noise[ (mask==1) ] += (0.001 - np.random.rand(1) * 0.01)
```


#### References

* Barret Zoph, Deniz Yuret, Jonathan May, and Kevin Knight. _Transfer Learning for Low-Resource Neural Machine Translation_. In Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing, EMNLP 2016.
