---
id: 4138
title: "Linux updated folder and subfolder's ownership"
date: 2019-03-11T00:00:18+08:00
author: ShareChiWai
layout: post
guid: https://blog.sharechiwai.com/?p=4138
permalink: /2019/03/linux-updated-folder-and-subfolders-ownership/
categories:
  - Linux Notes / Linux 新手筆記
tags:
  - Linux Command
---

今日發現自從把 `wordpress` 轉了用 docker host 之後便不能 upload file  
原因是我把之 wordpress site 的檔案從 FTP upload 到新 server 的 uploads folder  
的 ownership 是我 FTP 的 user 名 而不是 run wordpress 的 `www-data`

只要把這個 `folder` 的 `ownership` 轉為 `www-data` 便可  
我們可以使用 `sudo chown user:usergroup folder/\*`

**解決放法**

```bash
sudo chown www-data:www-data uploads/*
```

Hope you find it useful
