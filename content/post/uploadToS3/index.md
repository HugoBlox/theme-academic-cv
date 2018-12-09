+++
title = "Create a website with Hugo, Academic theme and Amazon S3 - part 1"
subtitle = "Generating the website with Hugo and Academic"
date = 2018-11-11T20:16:41+01:00
draft = false

authors = ["Sergio Roselló"]

# Tags and categories
# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = ["S3", "AWS", "Hugo", "Academic", "git"]
categories = []
summary = "We will create a very simple and basic static website with Hugo and upload it to a S3 bucket"
+++

This project is long overdue. I've been meaning to create my own personal website since I purchased the web domain [sergiorosello.com](http://sergiorosello.com) but as a good friend of mine always says, life happens.

This morning I was surfing through the web wen I came across [Hugo](https://gohugo.io/). It's slogan `The world’s fastest framework for building websites` sold it for me. I wanted to be up and running in no time at all, so I gave it a try. These are the steps I followed, feel free to adapt them to your specific workflow.

1. [Download](https://gohugo.io/getting-started/quick-start/) [Hugo](https://gohugo.io/) and install it. In my particular system:
  * `pacman -S hugo`
2. Clone or download the [academic repository](https://github.com/sourcethemes/academic-kickstart) with [git](https://git-scm.com/):
  * `git clone https://github.com/sourcethemes/academic-kickstart.git sergiorosello`.  
  (Note: `sergiorosello` should be replaced with the name you want the directory to have)
3. Initialize the theme:
  * `cd` into your directory: `cd sergiorosello`
  * `git submodule update --init --recursive`  
4. Start web server:
  * `hugo server`
  * Once this is up and running, you can go to [localhost:1313](localhost:1313) to view your new website!

When you have finished all of these steps, go to [academic's documentation](https://sourcethemes.com/academic/docs/) to get started on making it truly yours.
