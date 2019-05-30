+++
title = "Intuition Behind Transfer Learning"
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
discussionId = 4
+++

Some of us are really excited about the prospect of learning a new language. Unlike in regular language classes, we begin with by learning the vocabulary. We ask for translations of real-world objects and day-to-day activities. We do not try to learn already known concepts, for example the concept _tree_. Instead, we learn the corresponding word used to represent the concept (_tree_). This is different from how children first learn a language. We need to teach them concepts and also the symbols to represent those concept in their language. This is what **Transfer Learning** is all about. {{< hl >}} Transfer Learning is using knowledge gained from one task to solve a related task. {{< /hl >}}

##### Definition:
Now, let me quote the Wikipedia definition for [Transfer Learning](https://en.wikipedia.org/wiki/Transfer_learning),

> Transfer learning is a research problem in machine learning that focuses on storing knowledge gained while solving one problem and applying it to a different but related problem. For example, knowledge gained while learning to recognise cars could apply when trying to recognise trucks. This area of research bears some relation to the long history of psychological literature on transfer of learning, although formal ties between the two fields are limited.

In the field of Natural Language Processing (NLP), transfer learning can take the form of multi-task learning or multilingual learning. Multi-task learning refers to using knowledge from one task to improve performance in a related task in the same language. For example, sentiment analysis helping emotion analysis. Similarly, multilingual learning refers to using knowledge from a task in one language to improve performance in a related task in another language language. Usually in multilingual learning, we focus on the case where the tasks are the same in both the languages.

In this post, I won't be going into the details of Transfer Learning. Sebastian Ruder's blog post on [Transfer Learning](http://ruder.io/transfer-learning/) summarizes transfer learning. I will be motivating transfer learning from a slightly different perspective. 

### Transfer Learning: A Strong Prior Distribution Over Models
_Zoph et.al 2016_ quotes in his paper titled **Transfer Learning for Low-Resource Neural Machine Translation**:

> A justification for this approach is that in scenarios where we have limited training data, we need a strong prior distribution over models. The parent model trained on a large amount of bilingual data can be considered an anchor point, the peak of our prior distribution in model space. When we train the child model initialised with the parent model, we fix parameters likely to be useful across tasks so that they will not be changed during child-model training. 

### Supervised Learning as Curve Fitting
The goal of supervised learning can be thought of as fitting a curve (function) given some data points _i.e.,_ $y = f(x)$. Learn the function $f$, given input values $x$ and corresponding output values $y$. If we had $y$ for every point in the input space, we can fit the curve exactly. This is not the case in real-life scenarios. We usually get to collect a subset of measurements $y$ for some sample of points $x$ in the input space. The measurements $y$ obtained might be noisy. As a consequence, there are many possible functions which can fit the data well. The problem reduces to **search**, where the goal is to find a function which fits the data. 

There are situations, where we rarely get to collect observations. The collected observations may not be indicative of the actual function to be learnt. Supervised learning fails badly in these cases. If we have a related task with abundant data points, we can train the supervised model on this auxiliary task. Now when we fine-tune the auxiliary task model on the actual task data, the model is already restricted in the function space. The search now proceeds to find a suitable function to fit the actual task data in the neighbourhood.

#### Fitting a Cosine Function
Let us demonstrate this intuition with a toy example. Consider the task of fitting a **Cosine** function. We will use a deep feed-forward neural network for this purpose. We will first generate a set of data points and plot the curve.


```python
# We will generate 200 random points from 0 to 720
X = np.random.randint(720, size=(200,1))
# Convert the values to radians
X_rad = X * np.pi / 180
# Get the corresponding cosine values for the inputs
Y = np.cos(X_rad)
```

The following figure plots the generated data points {{< figure src="cosine.png" title="" >}} We now randomly selecting a subset of points (remember we used np.random to generate the points) to train our model. 
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
Training the above model on the smaller set of points leads to the following curve {{< figure src="cosine-supervised.png" title="" >}}

As observed, the model does well in areas where sufficient data is present. However, on the rightmost region where we have only one data point the model does poorly on fitting the curve.

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

Unlike the cosine model trained on smaller set of points, the fine-tuned cosine model does a reasonably decent job of mimicking the cosine function. The model also does a reasonable job outside of the domain. This is what I believe _Zoph et.al 2016_ meant when they said that {{< hl >}} the parent model enforces a prior distribution on the function space, allowing the model to learn a function close-enough to the function to be fitted. Unlike random initializations where the possible function space is very large. {{< /hl >}}

#### Initialization
Also, the initialization of the deep learning model plays a crucial role. For different randomly initializations, model before training on the data fits the following curves {{< figure src="cosine-rand.gif" title="" >}} However, as seen earlier the transfer learning model has learnt the sine function. When we fine-tune the model searching for the cosine function becomes easier compared to randomly initialized models.


The benefits might not be apparent in the toy example chosen. However, for very complex non-linear functions the benefits from transfer learning becomes clearer.


#### References

* Barret Zoph, Deniz Yuret, Jonathan May, and Kevin Knight. _Transfer Learning for Low-Resource Neural Machine Translation_. In Proceedings of the 2016 Conference on Empirical Methods in Natural Language Processing, EMNLP 2016.
