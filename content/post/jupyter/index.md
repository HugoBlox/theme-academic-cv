---
authors:
- admin
categories: []
date: "2019-02-05T00:00:00Z"
draft: false
featured: false
image:
  caption: ""
  focal_point: ""
projects: []
subtitle: Learn how to blog in Academic using Jupyter notebooks
summary: Learn how to blog in Academic using Jupyter notebooks
tags: []
title: Display Jupyter Notebooks with Academic
---


```python
from IPython.core.display import Image
Image('https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png')
```




![png](./academic_0_0.png)




```python
print("Welcome to Academic!")
```

    Welcome to Academic!


## Install Python and Jupyter

[Install Anaconda](https://www.anaconda.com/distribution/#download-section) which includes Python 3 and Jupyter notebook.

Otherwise, for advanced users, install Jupyter notebook with `pip3 install jupyter`.

## Create a new blog post [as usual](https://sourcethemes.com/academic/docs/managing-content/#create-a-blog-post)

Run the following commands in your Terminal, substituting `<MY_WEBSITE_FOLDER>` and `my-post` with the file path to your Academic website folder and a name for your blog post (without spaces), respectively:  

```bash
cd <MY_WEBSITE_FOLDER>
hugo new  --kind post post/my-post
cd <MY_WEBSITE_FOLDER>/content/post/my-post/
```

## Create or upload a Jupyter notebook

Run the following command to start Jupyter within your new blog post folder. Then create a new Jupyter notebook (*New > Python Notebook*) or upload a notebook.

```bash
jupyter notebook
```

## Convert notebook to Markdown

```bash
jupyter nbconvert Untitled.ipynb --to markdown --NbConvertApp.output_files_dir=.

# Copy the contents of Untitled.md and append it to index.md:
cat Untitled.md | tee -a index.md

# Remove the temporary file:
rm Untitled.md
```

## Edit your post metadata

Open `index.md` in your text editor and edit the title etc. in the [front matter](https://sourcethemes.com/academic/docs/front-matter/) according to your preference.

To set a [featured image](https://sourcethemes.com/academic/docs/managing-content/#featured-image), place an image named `featured` into your post's folder.

For other tips, such as using math, see the guide on [writing content with Academic](https://sourcethemes.com/academic/docs/writing-markdown-latex/). 
