---
id: 4113
title: Git Check which branch contain specific commit
date: 2019-02-10T00:00:44+08:00
author: ShareChiWai
layout: post
categories:
  - Git
tags:
  - Git
  - Git Command
  - Git Tips and Tricks
---

今日公司個 Production project 有一個 Bug 但係在 Staging 和 UAT environment 都 replicate 唔到呢個問題..  
之後便用**Git Blame** 去檢查一下有什麼 code change  
再看看是那一個 commit 做了 code change  
找到 commit 之後  
便要嘗試去看看這個**commit merge** 了去那些 branch  
解決方法

我們可以使用以下 **git command**

<pre class="wp-block-syntaxhighlighter-code">git branch --contains $COMMIT_ID

e.g.
git branch --contains 7df12c5</pre><figure class="wp-block-image">

<img src="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/02/image.png?w=625&#038;ssl=1" alt="" class="wp-image-4115" srcset="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/02/image.png?w=686 686w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/02/image.png?resize=300%2C115 300w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/02/image.png?resize=624%2C240 624w" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" /> </figure>

Hope you find it useful
