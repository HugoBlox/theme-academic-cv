---
id: 4020
title: 'Csharp - Remove last comma - C# 如何移除最後一個符號 (分號)?'
date: 2017-07-10T07:02:23+08:00
author: ShareChiWai
layout: post
categories:
  - .Net Tips And Tricks
tags:
  - dotnet tips and tricks
---

**解決方法**十分簡單
我們可以使用 [<img class="alignnone size-full wp-image-4021" src="https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/07/removeComma.png?resize=625%2C314" alt="C# remove last comma (string.TrimEnd)" width="625" height="314" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/07/removeComma.png)  這個功能來解決這個問題

E.G.

```csharp
string y = "1,2,3,4,5,6,";
Console.WriteLine(y.TrimEnd(','));
```

Hope you find it useful
