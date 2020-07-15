---
id: 4029
title: 'VS Code disable minimap - 如何在Visual Studio Code 上 Disable Minimap 這個 extension'
date: 2017-09-17T15:39:12+08:00
author: ShareChiWai
layout: post

categories:
  - Visual Studio
tags:
  - Plugin
  - Visual Studio Code
  - VSCode
  - VSCode Plugin
---

**解決方法十分簡單:**
我們可以去 "**File**" -> "**Preferences**" -> "Settings"
的 "**User Settings**" 上把 "<span style="color: #008000;"><strong>editor.minimap.</strong>enabled</span>" 設定為 <span style="color: #ff0000;"><strong>false</strong></span> 便可以了

```
editor.minimap.enabled": false,
```

[<img class="alignnone size-large wp-image-4031" src="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/09/disable-minimap.gif?resize=625%2C515" alt="Disable minimap" width="625" height="515" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/09/disable-minimap.gif)
Hope you find it useful
