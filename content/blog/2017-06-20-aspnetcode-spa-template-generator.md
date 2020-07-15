---
id: 3993
title: ASP.net Core SPA Single Page Application Template Generator with angular, aurelia, knockout, react
date: 2017-06-20T06:51:03+08:00
author: ShareChiWai
layout: post
categories:
  - .net core
tags:
  - dotnet
  - dotnet core
  - SPA
---

最近開始學 **Angular 4** / **React**
但是不知道怎樣開始
如果只是**React** / **Angular** 的 CLI 來產生他們的 **Project Template** 的話 自己便要再起一個**Node JS** 的 backend 來 serve data 了

**安裝方法**:
我們可以在 Command prompt 執行以下指令

```bash
dotnet new --install Microsoft.AspNetCore.SpaTemplates::*
```

之後便可以執行以下指令 去看看有什麼 **Template** 可以使用

```bash
dotnet new
```

[<img class="alignnone size-large wp-image-3994" src="https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/dotnetnew.png?resize=625%2C347" alt="dotnet new" width="625" height="347" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/dotnetnew.png)
建立一個新資料夾之後進入這資料夾執行
以下指令到 建立你的 **angular SPA site with Dotnet core backend**

```bash
dotnet new angular
```

完成後可以執行以下指令到 run 這個 project

```bash
dotnet restore
npm install
dotnet run
```

hope you find it useful
