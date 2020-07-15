---
title: "Manifest: found icon with no valid size."
date: 2020-05-05T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  -
tags:
  - pwa
  - manifest
---

今日睇 Chrome 個 console 見到以下的 error message  
`Manifest: found icon with no valid size.`
![Manifest: found icon with no valid size](/img/2020/manifest-found-icon-no-valid-size.png "Manifest: found icon with no valid size")

感到很奇怪.. 明明已經有整不的 icon 的 image size ...
但是都係話 "no valid size"...  
做了一會 research 之後發現...  
原來最小的 size 要是 `192 x 192`

**解決方法**
移除 比 192 x 192 小的 icon 便可以
原本的 `manifest.json`

```json
{
  "short_name": "SCW Utils",
  "name": "ShareChiWai Utils",
  "icons": [
    {
      "src": "48.png",
      "type": "image/png",
      "sizes": "48 × 48"
    },
    {
      "src": "96.png",
      "type": "image/png",
      "sizes": "96x96"
    },
    {
      "src": "144.png",
      "type": "image/png",
      "sizes": "144x144"
    },
    {
      "src": "192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "orientation": "portrait-primary",
  "theme_color": "#1f2022",
  "background_color": "#1f2022"
}
```

更新了的 `manifest.json`

```json
{
  "short_name": "SCW Utils",
  "name": "ShareChiWai Utils",
  "icons": [
    {
      "src": "192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "orientation": "portrait-primary",
  "theme_color": "#1f2022",
  "background_color": "#1f2022"
}
```

Hope you find it useful
