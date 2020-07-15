---
title: "Windows reset subsystem - Ubuntu"
date: 2019-11-27T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - Windows Subsystem
tags:
  - Windows Subsystem
  - WSL
  - Ubuntu
---

最近想嘗試 reset 由頭再安裝 `Windows Subsystem` 上的 `Ubuntu`  
開頭以入只要 在 `Windows Store` Uninstall 了便可  
但是再次安裝後 之前想 remove 的 application 還是在 `Ubuntu` 裡面

做了一會 research 之後  
終於找到解決方法  
我們可以使用 `WSL command` 來 `unregister` 這個 `linux`

```bash
# List subsystem 上有的 distributions
wsl --list

# Unregister linux distribution
wsl --unregister [distribution name]

# e.g
wsl --unregister Ubuntu-18.04

```

Hope you find it useful
