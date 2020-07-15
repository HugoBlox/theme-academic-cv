---
title: ' failed to extract shortcode: template for shortcode "alert" not found'
date: 2019-06-04T00:00:00+08:00
author: ShareChiWai
layout: post
permalink: /2019/04/eslint-couldnt-find-the-plugin-when-install-dependencies-using-yarn/
categories:
  - Hugo
tags:
  - hugo
---

Hugo Error  

`failed to extract shortcode: template for shortcode "alert" not found`  

**解決方法**

```
 git submodule update --init --recursive
```

**Test**

```
hugo server --watch
```