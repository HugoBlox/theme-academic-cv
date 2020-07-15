---
title: "Git Your branch have diverged and have 1 and 1 different commits each, respectively"
date: 2019-12-11T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - git
tags:
  - git
---

最近同同事一齊用同一個 branch 寫 code  
誰不知..呢隻同事..十分喜歡 `rebase`
或在 push 左既 branch 用 `git commit --amend --no-edit`  
想佢變成一個 `commit`

之後問題便出現了... 當我嘗試 pull 他的 changes 到我的 local 時  
即使我沒有加新的 commit 也出現了以下情況

```
Your branch and 'origin/ubuntu-install-wpscan' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
```

![have 1 and 1 different commits each, respectively](/img/2019/have-1-and-1-different-commits.png "have 1 and 1 different commits each, respectively")

**解決方法**  
如果知道自己是沒有 commit 只是 remote branch 跟你的 local branch 有些 commit 亂了  
而你又信 remote branch 既 changes 的話..  
我們可以使用 git pull --rebase 來解決

```
 git pull --rebase
```
