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

### Supervised Learning as Curve Fitting
The goal of suprvised learning can be thought of as fitting a curve (function) given some data points _i.e.,_ $y = f(x)$ learn the fundtion $f$ given input values $x$ and corresponding output values $y$. If we had $y$ for every pint in the input space, we can fit the curve exactly. In real-life scenarios, we usually get $y$ for some sample of points in the input space. The values $y$ might be noisy for some values of $x$. Sometimes, the sample of points may be very small that it might not be indicator of the function at all.

#### Fitting a Cosine Function
Consider the task of fitting a **Cosine** function. We will use a deep feedfoward neural network for this purpose. We will first generate a set of data points and plot the curve.


```python
# We will generate 200 random points from 0 to 720
X = np.random.randint(720, size=(200,1))
# Convert the values to radians
X_rad = X * np.pi / 180
# Get the corresponding cosine values for the inputs
Y = np.cos(X_rad)
```

The following figure plots the genrated data points {{< figure src="cosine.png" title="" >}} We now randomly select a subset of points to train our model. 
```python
X_small = X_rad[:20]
Y_small = Y[:20]
```

The reduced set of data points leads to the following plot {{< figure src="cosine-small.png" title="" >}} Before proceeding further, let us define the deep learning model.
```python
class CurveFitter(nn.Module):

	def __init__(self, inputDim, outDim, hidDim):
		super(CurveFitter, self).__init__()

		self.inputDim = inputDim
		self.outDim = outDim
		self.hidDim = hidDim

		self.linear_l1 = nn.Linear(self.inputDim, self.hidDim)
		self.nla_l1 = nn.ReLU()

		self.linear_l2 = nn.Linear(self.hidDim, self.hidDim)
		self.nla_l2 = nn.ReLU()

		self.linear_l3 = nn.Linear(self.hidDim, self.hidDim)
		self.nla_l3 = nn.ReLU()

		self.linear_l4 = nn.Linear(self.hidDim, self.outDim)
		self.nla_l4 = nn.Tanh()

		self.mse_loss = nn.MSELoss()

	def forward(self, x):

		result = self.nla_l4( self.linear_l4( self.nla_l3( self.linear_l3( self.nla_l2( self.linear_l2( self.nla_l1( self.linear_l1(x) ) ) ) ) ) ) )

		return result

	def loss(self, x, y):

		result = self.nla_l4( self.linear_l4( self.nla_l3( self.linear_l3( self.nla_l2( self.linear_l2( self.nla_l1( self.linear_l1(x) ) ) ) ) ) ) )

		return self.mse_loss(result, y)
```
Let us instantiate the model and use _Adam_ optimizer to train the model.

```python
torch.manual_seed(9899999)
network_cos = CurveFitter(1, 1, 200 )
optim_alg_cos = Adam(network_cos.parameters(), lr=0.001)
```
Training the above model on the smaller set of points for different random initialization leads to the following curves {{< figure src="cosine-supervised.png" title="" >}}

As observed, the model does well in areas where sufficient data is present. However, on the leftmost region where we have only one data point the model does poorly on fitting the curve.

#### Transferring Knowledge from Sine Function

Let us assume, that we have enough data points to train a Sine function. We will train the model using the earlier architecture. Unlike earlier, we will generate points from 0 to 1080 instead of 0 to 720.

```python
# We will generate 200 random points from 0 to 720
X = np.random.randint(1080, size=(200,1))
# Convert the values to radians
X_rad = X * np.pi / 180
# Get the corresponding cosine values for the inputs
Y = np.sin(X_rad)
```
The training points for sine function is {{< figure src="sine.png" title="" >}} and the curve fit by the model is {{< figure src="sine-predicted.png" title="" >}} 
We will use the trained model and further fine-tune the model on smaller set of points for the cosine function. The resulting fitted curve looks as below {{< figure src="cosine-transfer.png" title="" >}}

Unlike the cosine model trained on smaller set of points, the fine-tuned cosine model does a reasonably decent job of mimicking the cosine function. This is what i believe _Zoph et.al 2016_ meant when they said that {{< hl >}} the parent model enforces a prior distribution on the function space, allowing the model to learn a function close-enough to the function to be fitted. Unlike random initializations where the possible function space is very large. {{< /hl >}}


#### References

* Barret Zoph, Deniz Yuret, Jonathan May, and Kevin Knight. _Transfer Learning for Low-Resource Neural Machine Translation_. In Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing, EMNLP 2016.
