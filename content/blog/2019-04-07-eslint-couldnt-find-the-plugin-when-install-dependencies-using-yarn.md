---
id: 4156
title: "ESLint couldnt find the plugin  (when install dependencies using yarn)"
date: 2019-04-07T11:25:53+08:00
author: ShareChiWai
layout: post
categories:
  - Javascript
tags:
  - ESLint
  - Npm
  - yarn
---

今日嘗試用 command line (CLI) 執行 **ESLint** 時出現了以下的錯誤信息

```bash
# eslint command
eslint ./src

Error: Cannot find module 'eslint-config-airbnb'
```

<figure class="wp-block-image">

<img src="https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/04/image.png?fit=625%2C163&ssl=1" alt="" class="wp-image-4157" srcset="https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/04/image.png?w=1418 1418w, https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/04/image.png?resize=300%2C78 300w, https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/04/image.png?resize=768%2C200 768w, https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/04/image.png?resize=1024%2C267 1024w, https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/04/image.png?resize=624%2C163 624w, https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/04/image.png?w=1250 1250w" sizes="(max-width: 625px) 100vw, 625px" /> </figure>

仔細看他其實是在找**npm install** 的 module 的 folder  
`c:\user\chi\AppData\Roaming\npm\node_modules`
但我是用 yarn install 的所以 是使用錯了 folder

**解決方法**十分簡單  
我們只要使用 `yarn` 執行便可

```bash
yarn eslint ./src
```

Hope you find it useful
