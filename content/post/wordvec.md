+++
title = "My thoughts on word2vec"
date = 2019-02-06T00:00:00

# List format.
#   0 = Simple
#   1 = Detailed
#   2 = Stream
list_format = 2

# Optional featured image (relative to `static/img/` folder).
[header]
image = ""
caption = ""
discussionId = 3
+++

If language is a medium of communication then words are symbols of communication. Words represent some concepts which when agreed upon by both the parties involved, make the information conveyed unambiguously. How do these words behave? Can we somehow model the behaviour of words?

Let us consider a **corpus** as some closed system. We care only about the particles inside this closed system and not about any outside influence. In thermodynamics, the particles of interest are molecules and their kinetic energies. In the case of the corpus, should we choose **words** as the particle of interest? But the word itself doesn&#39;t signify anything. When we hear a word we implicitly assume a context which helps us in deciphering it&#39;s meaning. 

Instead, we choose **word-context pair** as the particles in our closed system. The contextual word could be as simple as a co-occurring word in a window or a word related by some dependency relationship.

Just like in a gaseous system, some particles have high kinetic energy and some particles have very low kinetic energy. Let us assume that temperature and pressure are constant and do not have any influence on the system. What do we mean by high kinetic energy in the definition of our particles (**word-context pair**)? 

In the gaseous state, we find few particles with very low energy, a lot number of particles with the most common(average) energy and very few particles with very high energy. It almost looks like a bell curve with tapering at the high energy region. 

*If we take any corpus, usually we find few word-context pairs which appear always together, many pairs appear a decent number of times and a very large number of pairs which do not appear at all?*

Let us now define the energy of a **word-context pair**, as the energy required to bring them together in a closed system. Some pairs like *(money, bank)*, *(money, account)* require less energy as they frequently appear together. But more energy is required for a pair like *(bank, pitch)*. If a pair appears a lot number of times in the corpus, they already have a strong affinity towards each other. Hence less energy is required to  bring them together. If a pair does not appear then probably more energy is required to make them appear together. 

If we make the assumption that distribution of **word-context pair** is similar to the distribution of particles in a closed gaseous state, we have a statistical model in hand. We already have assumed that temperature and pressure are constant in our system. 

## Maxwell-Boltzmann Distribution

With the assumption that a **word-context pair** follow a Maxwell-Boltzmann distribution, the goal now becomes to estimate the parameters of the distribution. We haven&#39;t mathematically defined what energy is? The energy of a **word-context pairs** needs to satisfy the following property 

* The energy of a **word-context pair** should be low when they have high affinity (co-occurrence) towards each other and vice-versa

How do we determine the most probable energy associated with a **word-context pairs**? First, let us formally define the energy associated with a **word-context pair** as

$$\begin{align}
E(\text{context}, \text{word}) = - v\_{\text{context}}^Tv\_{\text{word}}
\end{align} $$

Here, we are associating a word and it&#39;s context with a $d$ dimensional real-valued vector. It would be interesting to explore a different function for calculating the energy associated with a **word-context pairs**. One advantage of representing a word by a real-valued vector is that we can study the interaction of unseen **word-context pairs**.

We are really interested in finding out the most-probable energy state of a **word-context pair** in a given closed system. The probability is given by the equation
$$ \begin{align}
        P(\text{context}, \text{word}) = \frac{1}{Z} \exp^{-
        E(\text{context},\text{word})}
        \end{align}
$$

The goal is to estimate the parameters of the distribution by looking at the data. We use maximum likelihood to estimate the parameters. Given a corpus, we build a dataset consisting of **word-context pairs** where the contextual region is appropriately defined.

## Maximum Likelihood Estimation
Given a dataset $$ D= (w,c)$$ pairs, the goal is to maximize the probability of seeing context given the word *i.e,*

$$\begin{align}
\underset{\theta}{\text{maximize}} \mathcal{L} (D) &= \prod P(c | w) \\\\\\
&= \prod \frac{p(c,w)}{p(w)} \\\\\\
&= \prod \frac{p(c,w)}{\sum\_{k}p(k,w)} \\\\\\
\end{align}$$

Substituting the definition of $P(c,w)$ we get,
$$\begin{align}
\underset{\theta}{\text{maximize}} \mathcal{L} (D) &= \prod \frac{p(c,w)}{\sum_{k}p(k,w)} \\\\\\
&= \prod \frac{\exp^{c^Tw}}{\sum\_{k} \exp^{k^Tw}}
\end{align}$$

Taking log-likelihood of the objective gives,
$$\begin{align}
\underset{\theta}{\text{maximize}} \mathcal{\hat{L}} (D) &= \log \prod P(c
| w)
\\\\\\
&= \sum \log \frac{p(c,w)}{p(w)} \\\\\\
&= \sum \log \frac{\exp^{c^Tw}}{\sum\_{k} \exp^{k^Tw}}
\end{align}$$
We have now arrived at the skip-gram definition.

#### References

* Mikolov, Tomas; et al. "Efficient Estimation of Word Representations in Vector Space"
* Mikolov, Tomas, Ilya Sutskever, Kai Chen, Greg S. Corrado, and Jeff Dean. "Distributed representations of words and phrases and their compositionality." In Advances in neural information processing systems, pp. 3111-3119. 2013.
* Mikolov, Tomas, Wen-tau Yih, and Geoffrey Zweig. "Linguistic regularities in continuous space word representations." In Proceedings of the 2013 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies, pp. 746-751. 2013.
* Goldberg, Yoav, and Omer Levy. "word2vec Explained: deriving Mikolov et al.'s negative-sampling word-embedding method." arXiv preprint arXiv:1402.3722 (2014).
* Rudolph, Maja, Francisco Ruiz, Stephan Mandt, and David Blei. "Exponential family embeddings." In Advances in Neural Information Processing Systems, pp. 478-486. 2016.
