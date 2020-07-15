---
title: 'Choco check if package already installed / outated'
date: 2019-06-28T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - Chocolatey
tags:
  - Chocolatey
  - choco
  - package manager
  - PowerShell
---

今日想檢查一下 電腦上用 `Chocolatey` 安裝的 NodeJs 有沒有 outdated  
所以便想找個 Choco command 來看看  

找到了以下一個 command  
用 Chocolatey command 來輸出一個 List  
`choco list -lo`  
![choco list -lo](/img/2019/choco-list-lo.png 'choco list -lo')  
之後用`Powershell` 來找出在這個 List 有那一個 record 包含某一些字  
`| Where-object { $_.ToLower().Contains("{text you interested}".ToLower()) }`  
![choco list node](/img/2019/choco-outdated.png 'choco list node')  
**解決方法**  

```
 choco list -lo | Where-object { $_.ToLower().Contains("node".ToLower()) }
```

![choco list search node](/img/2019/choco-list-search-node.png 'choco list search node')  

之後找到另一個更好的 command  
就是直找出 `outdated` 的 `package`  
**解決方法**  

```
 choco outdated | Where-object { $_.ToLower().Contains("node".ToLower()) }
```

![choco outdated](/img/2019/choco-outdated.png 'choco outdated')  

Hope you find it useful  
