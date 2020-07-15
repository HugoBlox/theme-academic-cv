---
id: 3982
title: 'Enable dotnet watch - on asp.net core'
date: 2017-05-31T22:00:20+08:00
author: ShareChiWai
layout: post
categories:
  - .net core
tags:
  - dotnet
  - dotnet core
  - dotnet tips and tricks
---

最近開始學習 **.Net Core** 的 **ASP.Net Core**
發現現在.net 越來越方便了
之前開發 asp.net 的 web application 時每當要更改程式碼 時
都有需要停止 **debug**之後更重新開始**debug**..
感覺開發.net application 需要的時間比較長
不像使用 **node.js**一樣..可以使用 **gulp**或**grunt** 來檢查程式碼有沒有更新
如果有的話便會 re-compile 等等
之後只要 refresh browser 便會自看到程式碼所做的更新

現在.net core 也有這個功能叫 "**dotnet watch**"
我們只需要在".csproj" 上的 "**<ItemGroup>**" tag 內加上以下的 setting
e.g.

```
<ItemGroup>
    <DotNetCliToolReference Include="Microsoft.DotNet.Watcher.Tools" Version="1.0.0" >
    <DotNetCliToolReference Include="Microsoft.Extensions.SecretManager.Tools" Version="1.0.0" >
    <DotNetCliToolReference Include="Microsoft.Extensions.Caching.SqlConfig.Tools" Version="1.0.0" >
  </ItemGroup>
```

之後在這個 project 的資料夾的 執行

```
dotnet restore

```

之後便可以 在 CLI 上執行

```
dotnet watch run

```

hope you find it useful
