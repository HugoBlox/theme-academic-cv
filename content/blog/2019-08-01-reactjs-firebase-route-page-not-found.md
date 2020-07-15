---
title: 'Firebase ReactJs routing issue - Page not found'
date: 2019-06-25T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - Firebase
tags:
  - Firebase
  - NodeJs
  - Javascript
---

使用 firebase hosting 來 host reactjs 既時候 出現了以下問題  
當我直接在 browser 輸入 ReactJs 的 route 既時候 出現了  

```
Page Not Found
This file does not exist and there was no index.html found in the current directory or 404.html in the root directory

```

![Page not found](/img/2019/fireabase-react-404.png 'firebase page not found')

_解決方法:_
我們只需要在 `firebase.json` 的 `hosting` section
加上 `rewrites` 到 index.html 便可以了

```
{
  "hosting": {
    "public": "build",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

Hope you find it useful
