---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Your recommendation engine is only as smart as your customers’ purchases are."
subtitle: "Or… How the psychological aspects of product purchasing affects your recommendation engine: Informed vs impulse purchases"
summary: "To set the problem, imagine two companies using recommendation engines: an online music streaming service and a luxury watch retailer. Customers of a music streaming service listen to (acquire) thousands of songs, often on a whim as the product acquisition cost is low (for a subscription based service, the acquisition cost goes down the more you listen to and so customers are encouraged, economically, to acquire many items to “get their money’s worth”). In other words, product acquisition in this business is akin to impulse buying — users make little investment in deciding whether they really want a product as there is little additional cost to them acquiring it (other than the time taken to listen). The luxury watch company, on the other hand, has customers who buy a small number of expensive products. The customers invest heavily in researching what they want and are almost always satisfied with the product they purchase, provided they have done enough research. Customers of the watch company are making an informed purchase. These two business models should be using totally different recommendation engines; here I will explain why."
authors: [Grace, J.]
tags: ['recommendation systems']
categories: ['introduction']
date: 2015-09-17
lastmod: 2015-09-17
featured: false
draft: false

url_source: 'https://www.linkedin.com/pulse/your-recommendation-engine-only-smart-customers-purchases-grace/'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
This article is intended for those who are taking, or considering, their first approach at a recommendation engine. More advanced systems (for instance those based on product ratings data) may not be subject to the issues discussed here.

Most companies with an online store have, or are considering, some form of recommendation engine. Many use “off-the-shelf” solutions — here I am going to explain one reason why these may fail to work well.

To set the problem, imagine two companies using recommendation engines: an online music streaming service and a luxury watch retailer. Customers of a music streaming service listen to (acquire) thousands of songs, often on a whim as the product acquisition cost is low (for a subscription based service, the acquisition cost goes down the more you listen to and so customers are encouraged, economically, to acquire many items to “get their money’s worth”). In other words, product acquisition in this business is akin to impulse buying — users make little investment in deciding whether they really want a product as there is little additional cost to them acquiring it (other than the time taken to listen). The luxury watch company, on the other hand, has customers who buy a small number of expensive products. The customers invest heavily in researching what they want and are almost always satisfied with the product they purchase, provided they have done enough research. Customers of the watch company are making an informed purchase. These two business models should be using totally different recommendation engines; here I will explain why.

## How recommendation systems work (briefly)
 

A common type of basic recommendation engine relies on calculating the cosine similarity between products. This is a metric that calculates relatedness of two products by looking at the number of times they are both acquired by the same customer. For example, Miley Cyrus songs may have a higher cosine similarity with Katy Perry songs than with the Beatles because more customers listen to Miley Cyrus and Katy Perry, than Miley and the Beatles. Similarly, Breitling and Tag Heur (both sports/aviator style watches of similar price range) are likely to have higher cosine similarities than either does with a Rolex (a more classic style and higher priced product). It’s worth noting that cosine similarity is a similarity metric of two vectors, it is not a similarity metric of two products. Products may be bought together that are not similar (e.g. a Breitling watch and Breitling additional watch strap), and these will have a high cosine similarity despite being very different. A more appropriate description would be relatedness metric.

A new product can now be recommended to an individual based on their existing products, by choosing unowned items that have a high cosine similarity with products owned by a customer.

## Your customers’ leg work is part of your recommendation engine
 

So why won’t this approach work equally well for both businesses? This is to do with the informedness of the product purchase. In an extreme case, a customer of the music streaming service might listen to songs entirely at random. Any contribution to the cosine similarity would simply reflect their random song choices. If certain songs are more likely to be listened to together because of some external property (e.g. they are both in the charts) then those products will appear to be related according to cosine similarity even though the products may be completely different and have no shared market appeal. The watch shop customers, however, are rational agents making informed decisions — and this information makes its way into the cosine similarity network. In a way, the research customers do before purchasing a watch is embedded in their purchase, whilst the embedded prior knowledge in acquiring music on the streaming service is minimal or zero in the extreme random case. So the cosine similarity network for the watch shop holds more information than the music streaming service; it is smarter.

The resulting cosine network of the watch shop is built on nearly optimal product decisions, whilst the network of the music service contains a large amount of noise, mistaken purchases and the effect of external and non-relevant correlations.

Logically, we can see how a recommendation engine for the watch shop is likely to work better than the music streaming service given these conditions. To highlight how, I am going to focus on a phenomenon known as the filter bubble. A filter bubble is when a recommendation engine suggests items that have some relatedness, so more people consume these items together, in turn their relatedness goes up, and so the recommendation engine is even more likely to recommend these products together. The music streaming service is highly prone to filter bubbles; since the acquisition cost of products is low, people are likely to act on the recommendation engine without questioning it, compared to the watch shop where people might use the recommendation engine to help their research, but their final purchase is still likely to be informed and close to the optimal product. Music that is at the top of the charts is likely to be consumed together (due to high salience), and this is likely to create a strong filter bubble that has two negative impacts. One, it is likely to recommend chart music that is not related in any aspect other than being in the charts — e.g. “Photograph” by Ed Sheeran (23) and “Lean On” by Major Lazer Mo & DJ Snake — and two, it is very unlikely to recommend content that is actually related but not in the charts. The engine ends up with a “chart vortex”.

The worst possible outcome here is that customers are so dissatisfied with their purchases that they cease being a return customer. If you had a staff member in a shop who gave terrible recommendations to customers they would be educated or fired. Why don’t we hold the same candle to recommendation engines? Businesses tend to think of recommendation engines as a bolt-on extra that may drive up consumption without any potential for negative impact. This view is wrong, and a recommendation engine that gives bad advice could be severely damaging customer loyalty and long term sales.

## What can you do to improve your basic recommendation system
 

Firstly, you need to establish whether your company is like the music streaming service or the luxury watch company. You need to know if your customers make impulse or informed purchases. Most companies are somewhere in between (as I picked examples at the extremes). If you are like the watch company, the basic system described above might work well for you, however you likely have other issues such as not enough repeat purchases within customers, or not enough data. If your customers are making some or many sub-optimal (or impulse) purchases there are a few steps you can take to address this.

In order to improve your recommendation engine it may be sensible to change the way you calculate cosine similarity to run over a value that measures engagement or satisfaction with a product. For instance, with the music streaming example you might require a user to listen to a song at least 3 times, or for at least 2 minutes, before it enters the calculation. Other companies use rating systems to constrain or weight the cosine similarity between products. Many companies use rating data, however not every company has this available. The main aim is to remove mistaken purchases and noise from each customer’s product inventory to get it as close to optimal as possible. This is made harder the minute you implement a bad recommendation system, as it is likely to increase the number of suboptimal product purchases.

It may also be of benefit to encourage informed purchases. Music streaming services do this by telling you what titles a recommendation is based on — this allows the customer to judge whether the recommendation is appropriate or based on a mistaken purchase, and whether they are in the mood for that music, which may help avoid a mistaken purchase. This can be done by providing meta-information about the recommended product and explaining why a recommendation has been made. This helps customers make near optimal purchases, which prevents your future data from having suboptimal purchases that lead to a worse recommendation engine.

It may also be possible to down-weight or discount mistaken purchases. If a person buys a product but does not use it, then it may well be a mistaken purchase. Excluding such products from the cosine calculation may improve the recommendation engine. Rating systems also help identify mistaken purchases; however these require a lot of time and work to build up.

It may also be sensible to restrict your cosine network to mature accounts (i.e. accounts that are 6/12 months old +). Purchasing behaviour changes over time based on the customers knowledge of the product base. Young accounts may not know the inventory well and may make less informed purchases, whilst mature customers know the inventory base better and are likely to refine their tastes. This is not certain, but might be a phenomenon worth investigating by looking at whether mature accounts have fewer mistaken purchases (e.g. better per-item engagement). Alternatively, it may be useful to segment your cosine network by account maturity, so you have independent networks for young, adolescent and mature accounts — this might be useful if there is an element of exploration and taste-refinement to your inventory, e.g. entry level vs. connoisseur products.