---
id: 4144
title: Update WordPress Inside Docker Container Required FTP Access
date: 2019-03-15T00:00:32+08:00
author: ShareChiWai
layout: post
guid: https://blog.sharechiwai.com/?p=4144
permalink: /2019/03/update-wordpress-inside-docker-container-required-ftp-access/
categories:
  - Docker
tags:
  - Docker
  - Wordpress
---

今日 Update WordPress 既時候出現了  
輸入 FTP 資料的畫面

> To perform the requested action, WordPress needs to access your web server. Please enter your FTP credentials to proceed. If you do not remember your credentials, you should contact your web host.

<figure class="wp-block-image">

<img src="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/03/image-1.png?fit=625%2C289&ssl=1" alt="" class="wp-image-4145" srcset="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/03/image-1.png?w=1794 1794w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/03/image-1.png?resize=300%2C139 300w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/03/image-1.png?resize=768%2C355 768w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/03/image-1.png?resize=1024%2C474 1024w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/03/image-1.png?resize=624%2C289 624w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/03/image-1.png?w=1250 1250w" sizes="(max-width: 625px) 100vw, 625px" /> </figure>

原因是因為有些 `wordpress` 的資料夾沒有 權限去 access  
**解決方法**  
我們只需要把這個資料夾的 ownership 設定和這個 container 一樣便可

e.g.

```bash
sudo chown -R www-data:www-data wordpress
```

Hope you find it useful
