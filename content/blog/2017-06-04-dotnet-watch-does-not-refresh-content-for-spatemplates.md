---
id: 3984
title: dotnet watch does not refresh content for AspNetCore.SpaTemplates React / Angular
date: 2017-06-04T19:43:31+08:00
author: ShareChiWai
layout: post
categories:
  - .Net Tips And Tricks
tags:
  - Azure
  - dotnet
  - dotnet core
  - dotnet tips and tricks
  - ReactJs
  - webpack
---

最近使用了 **ASP.Net Core** 的 **SPA Template** 來學習 **ReactJs**
因為我可以使用 **ASP.Net Core** 來做 **Web API**.. 而 **ReactJs** 來做 Web **Front End**
之後便可以 deploy 到 **Azure** 十分方便.. 又可以很快看到效果
<a href="https://blog.sharechiwai.com/2017/05/asp-net-core-app-can-now-be-deploy-to-azure-azure-web-app/" rel="bookmark">ASP.Net Core App can NOW be deploy to Azure – (Azure web app)</a>

由于使用**Visual Studio** 開發感覺比效慢
所以便用了**Visual Studio Code**了

不久便出現了一個問題..就是在**Visual Studio** 開發時
修改 **ReactJs** 相關的程式碼..在**Debug**時
是可以看到修改後的結果的
但是用**Visual Studio Code** 配合 "<span style="color: #008000;"><strong>dotnet watch run</strong></span>" 時
<a href="https://blog.sharechiwai.com/2017/05/enable-dotnet-watch-on-asp-net-core/" rel="bookmark">Enable dotnet watch – on asp.net core</a>

```bash
dotnet watch run
```

<img class="alignnone size-large wp-image-3987" src="https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/dotnet-Watch-Run.png?resize=625%2C228" alt="dotnet watch run" width="625" height="228" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />
網頁便不會更新但是**deploy** 到**Azure** 時是看到了修改的結果的

做了一會 research 之後 終於找到了解決方法

**解決方法**
我們需要使用另一個**Terminal windows** 執行 "<span style="color: #008000;"><strong>webpack -watch</strong></span>" 這個指令 便可以了

```bash
webpack --watch
```

[<img class="alignnone size-large wp-image-3986" src="https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/webpackWatch.png?resize=625%2C380" alt="webpack --watch" width="625" height="380" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/webpackWatch.png)
Hope you find it useful
