---
id: 4064
title: 'WPScan Docker Sample - WPScan Docker 示範'
date: 2018-10-01T09:06:35+08:00
author: ShareChiWai
layout: post
categories:
  - Docker
tags:
  - Docker
  - Security
  - Wordpress
  - WP
  - WPScan
---

如果不想在電腦上安裝 **WPScan** 的話可以考慮使用 Docker
使用方法十分簡單
首先要 **pull wpscan** 既 **docker image**
<https://hub.docker.com/r/wpscanteam/wpscan/>

```bash
docker pull wpscanteam/wpscan
```

之後便可以使用這個**Docker image** 來執行 **wpscan** 的指令
e.g.

```bash
docker run --rm wpscanteam/wpscan --url https://blog.sharechiwai.com
```

如果想直接進入這個 `wpscan` 的 docker image 上執行 wpscan 可以使用以下指令

```bash
docker run -it --entrypoint /bin/sh wpscanteam/wpscan
```

想了解更多的**wpscan** 的用法可以參考他們的網站
<https://github.com/wpscanteam/wpscan>

Hope you find it useful
