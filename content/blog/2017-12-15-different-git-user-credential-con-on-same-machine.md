---
id: 4044
title: 'Different Git User credential Con on same machine - 在同一個電腦上使用不同的Git 使用者'
date: 2017-12-15T00:00:17+08:00
author: ShareChiWai
layout: post

categories:
  - Git
tags:
  - Git
  - Git Command
  - Git Tips and Tricks
---

**解決方去**
我們可以在 local 的 Git Repos 上設定這個 Repos 的**Git Credential**
我們只需要在 **Git Bash**上輸入以下指令便可以了

```bash
git config user.name "YOUR_USERNAME"

git config user.email "YOUR_EMAIL"
```

如果大家不想每次都要輸入**password** 的話可以輸入以下**Git command** 去 cache 你的 **git password**

```bash
git config credential.helper cache
```

Hope you find it useful
