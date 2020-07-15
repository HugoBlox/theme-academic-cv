---
id: 4095
title: Visual Studio CodeLens show no Reference
date: 2019-01-07T10:34:06+08:00
author: ShareChiWai
layout: post
categories:
  - Visual Studio
tags:
  - CodeLens
  - Visual Studio Troubleshooting
---

最近我的**Visual Studio** 的 **CodeLens** 沒有再顯示 **Class**/ **Method** 有多 reference ..
只係顯示了 "**-**"... 十分不方便 <figure class="wp-block-image">

<img src="https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-6.png?w=625&#038;ssl=1" alt="" class="wp-image-4097" data-recalc-dims="1" /> </figure>

做了一會 research 之後發現解決方法十分簡單
我們只要洗除電腦的 **Temporary files**

<figure class="wp-block-image">

<img src="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-5.png?w=625&#038;ssl=1" alt="" class="wp-image-4096" srcset="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-5.png?w=375 375w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-5.png?resize=248%2C300 248w" sizes="(max-width: 375px) 100vw, 375px" data-recalc-dims="1" /> </figure>

之後重新開啟 Visual Studio  
便可以了

<figure class="wp-block-image">

<img src="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-7.png?w=625&#038;ssl=1" alt="" class="wp-image-4098" data-recalc-dims="1" /> </figure>

Hope you find it useful
