---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Python Package & Environment Management"
subtitle: "How I (barely) manage my python environments"
summary: "How I manage python environments using conda, mamba & nb_conda_kernels"
authors: []
tags: []
categories: []
date: 2023-03-22T13:19:37-07:00
lastmod: 2023-03-22T13:19:37-07:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: "[xkcd](https://xkcd.com/1987)"
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

<!-- Advantages of using a virtual environment: -->

<!-- Isolation: A virtual environment provides an isolated space where you can install packages and dependencies without affecting your system Python or other projects. This means you can experiment with different packages and versions without worrying about conflicts or unintended consequences. -->

<!-- Reproducibility: By using a virtual environment, you can easily recreate the exact same environment on another machine or for a different project. This is especially useful when collaborating with others or when sharing your code. -->

<!-- Package management: With virtual environments, you can easily manage packages and dependencies for each project separately. This means you can install different versions of the same package for different projects, without worrying about conflicts or compatibility issues. -->

<!-- Consistency: By using a virtual environment, you can ensure that your project dependencies are consistent and up to date. This makes it easier to maintain your code and avoid unexpected errors or bugs. -->

<!-- Easy setup: Setting up a virtual environment is a straightforward process and can be done quickly with a few simple commands. This means you can get started on your project right away without spending time setting up your environment. -->


Python is an excellent tool but package and environment management can be frustrating at times. The [xkcd](https://xkcd.com) comic shown above really hits home for me and can make it hard for beginners. I recently came across a method that has worked surprisingly well for me. I thought I'd briefly describe this here for anyone sharing my frustration with the state of Python environment management. Don't get me wrong - I love Python and am in awe of what the open source software development community produced. 
