---
title: "git Create branch via Command"
date: 2020-02-20T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - git
tags:
  - git
---

很多時候都是使用BitBucket / Github 去create 新branch  
但是久不久BitBucket 的 選擇 Branch的選項..總是選擇不到 `UAT` 的  
最後選擇最原始既方法...  
就是使用 command line 了  

**解決方法:**
```bash
# 首先 checkout 了你想Create branch from 的 branch && git pull
git checkout uat && git pull
# 使用 git branch 來Create 新 branch
git branch [branch-name]
# checkout 新建立的branch
git checkout [branch-name]
# 用以下command push 去remote
git push --set-upstream origin [branch-name]
```

或者可以嘗試這樣..簡短一點  
```bash
# git checkout -b [new branch name] [branch-from]
# e.g. 
git checkout -b [branch-name] uat
```

Hope you find it useful







```

```
