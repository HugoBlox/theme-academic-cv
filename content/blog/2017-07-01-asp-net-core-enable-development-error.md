---
id: 4011
title: ASP.Net Core Enable Development Error
date: 2017-07-01T12:07:06+08:00
author: ShareChiWai
layout: post
categories:
  - .net core
tags:
  - dotnet
  - dotnet core
  - dotnet tips and tricks
---

由於不太了解 **ASP.Net Core with Angular / React Webpack** 的關係
當遇到有 **Angular** / **React**的問題是都不知道那裡出錯

- 我的**Angular** / **ReactJs** Project 是用 **dotnet core 的 SPA template** 建立的

過了幾天才發現..
由於是使用

```
dotnet run
```

或

```
dotnet watch run
```

的關係
所以執行的 port 和 visual studio 執行時 debug 的 port 不一樣..
可能是這樣所以被定義為不是 **development mode**
所以網頁的 error 便被隱藏了

**解決方法**有兩個

**解決方法 1**
我們可以在**Startup.cs**
**Enable Developer Error** 便可以了
E.G.
在以下的 function 上

```csharp
public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)

```

移除這個 If statement
當程式遇到錯誤時執行這個 Developer Error

```csharp
/*
if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true
                });
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
*/

 app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(new WebpackDevMiddlewareOptions {
                    HotModuleReplacement = true
                });
```

[<img class="alignnone size-large wp-image-4013" src="https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/07/startupcs.png?resize=625%2C287" alt="startup.cs" width="625" height="287" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/07/startupcs.png)
**解決方法 2**
這個方法比理性
就是更改 開發電腦的 `Environment Variable Settings`
我們可以使用`Command prompt`
執行以下指令設定`環境變數` `Environment Variable`

`set ASPNETCORE_ENVIRONMENT=Development`

**[<img class="alignnone size-large wp-image-4012" src="https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/07/aspnetCoreEvvironment.png?resize=625%2C105" alt="Set up ASPNETCORE Environment Variable" width="625" height="105" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/07/aspnetCoreEvvironment.png)**
詳情可以參考以下網頁
<https://docs.microsoft.com/en-us/aspnet/core/fundamentals/environments>

Hope you find it useful
