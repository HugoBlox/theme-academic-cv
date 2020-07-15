---
title: "Ubuntu install WPScan"
date: 2019-11-26T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - Ubuntu
tags:
  - Ubuntu
  - WPScan
  - WordPress
---

之前介紹過用如何用 `Docker` 來執行 `WPScan`  
來檢查 `Wordpress` 有沒有安全問題  
最近開始使用 Windows Subsystem  
發現原來做 Windows Subsystem 上安裝使用 `Ubuntu` 也十分方便  
我們可以用 subsystem 上的 Ubuntu 來安裝 linux 可以安裝的 software  
所以安裝 和執行 `WPScan` 也十分方便  

我們可用以下的 command 來安裝 `WPScan`

```bash
sudo apt-get update

# install dependencies
sudo apt install curl libcurl4-openssl-dev zlib1g-dev pkg-config ruby ruby-bundler ruby-dev -y

sudo gem install wpscan
```

Hope you find it useful