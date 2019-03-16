+++
title = "Uncertainty in deep learning models"
date = 2018-09-15T00:38:37+05:30
draft = false

# Authors. Comma separated list, e.g. `["Bob Smith", "David Jones"]`.
authors = ["uddeshya"]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["deep-learning"]` references 
#   `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
# projects = ["internal-project"]
math = true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
+++
This is an attempt to understand and recreate the work presented in [What Uncertainties Do We Need in Bayesian Deep
Learning for Computer Vision?](https://papers.nips.cc/paper/7141-what-uncertainties-do-we-need-in-bayesian-deep-learning-for-computer-vision.pdf) by alex kendall and yarin gal.

The paper proposes framework to include uncertainty in context of classification as well as regression by deep neural network.
For the purpose of this article I will stick to uncertainty in context of some regression by deep neural nets.

Broadly uncertainty can be of two types 

`Aleatoric` : uncertainty inherently in the observation (i.e sensor which captured the data was malfunctioning, obtaining more data from such a sensor won't help cure the problem)

`Epistemic` : uncertainty in the model parameters, this can be explained away with more data

Author proposes a method to account for both type of uncertainties in a given baseline model (baseline model doesn't acount for uncertainty).

Suppose the baseline model has the loss function:
$$\begin{eqnarray} 
L_{base} &=& \frac{1}{D}\sum_i\frac{1}{2}||y_i - \hat{y_i}||^2
\end{eqnarray}$$
Here $D =$ number of pixels in the output and $\hat{y_i}$, $y_i$ are predicted pixel value and ground truth pixel value for pixel $i$, where sum is over all the pixels.

To account for uncertainties, we should

* Introduce dropouts
* Tweak the model such that instead of outputing a value say $\mathbf{\hat{y}}$, it will output a tuple $(\mathbf{\hat{y}}, \mathbf{\hat{\sigma^2}})$ where $\mathbf{\hat{\sigma^2}}$ will represent the uncertainty in $\mathbf{\hat{y}}$
* changing the loss function to
$$\begin{eqnarray} 
L_{BNN} &=& \frac{1}{D}\sum_i{\frac{1}{2\hat{\sigma_i^2}}||y_i - \hat{y_i}||^2+\frac{1}{2}\log\hat{\sigma_i^2}}
\end{eqnarray}$$
* Introduce weight decay

this will try to learn the uncertainty without any supervision, $\log\hat{\sigma_i^2}$ will prevent the uncertainty from blowing up,
where as $\frac{1}{2\hat{\sigma_i^2}}$ will prevent uncertainty to going down to zero.
This is like base loss function except that it is weighted using uncertainty and the hope is that we will hit a sweet spot
where network is still outputing values close to original ground truth but also giving us idea about uncertainty (which is non-zero and not infiinity) 

for training it's better to use $s_i = \log\sigma_i^2$ as this will prevent a possible division by zero operation.

$$\begin{eqnarray}
L_{BNN} &=& \frac{1}{D}\sum_i{\frac{1}{2}\exp(-s_i)||y_i - \hat{y_i}||^2 + \frac{1}{2}s_i}
\end{eqnarray}$$

## Experiment
In order to see it in action, consider the toy problem where I have created an autoencoder for MNIST, 
then I have modified this autoencoder by introducing 

* **dropout layers** after every convolution layer
* splitting the last layer of the network **into 2 parts, one for $\mathbf{\hat{y}}$ and other for $\mathbf{\hat{\sigma^2}}$**

The modified network is train with the above mentioned $L_{BNN}$ with $L2$ norm penalty on the weights of the model. The following diagram shows
the oriignal network and modified network
![](/img/mnistuae.png)

## Expectation
My expectation is that even with modified autoencoder (with uncertainty) I should be able to get good reconstruction of digits and uncertainty maps should be something that makes sense visibily. 
***I'm not sure if this is achievable***

## Results
* With plain auto-encoder after 20 epochs:
    ![](/img/ae1.png)
* With modified auto-encoder after 20 epochs, here the `log variance map` corresponds to $s$ (i.e $\log\hat{\sigma^2}$) values which was used in loss function
and `variance map` corresponds to $\log\hat{\sigma^2}$ values
![](/img/uae1.png)

## Thoughts
* Uncertainty is usually high only among the pixels which are in the neighborhood of the pixels which represent non-zero ground truth values. 
The black background usually does not have high uncertainty, this looks ok
* The contributions from uncertainty is too high and distrubs the gradients as a result reconstruction is not good
