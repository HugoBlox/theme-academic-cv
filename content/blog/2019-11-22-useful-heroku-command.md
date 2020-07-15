---
title: "Useful Heroku command"
date: 2019-11-22T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - Heroku
tags:
  - PaaS
  - Javascript
---

最近又多用了 `Heroku` 無左 `Microsoft Azure` 既 subscription 又怕佢 charge 貴  
用 free tier 時發現好似好多野都要收錢咁  
剛剛 deploy 了一個 NodeJS project 時 Load 唔起..  
又唔知可以點睇 log.  
由於同一隻 App 都是放在 githu 月

**Login**

```bash
heroku login
```

**List Application**

```bash
heroku apps
```

**Show log**

```bash
heroku logs --tail -a AppName
```

Hope you find it useful
