---
id: 4039
title: Git refusing to merge unrelated histories
date: 2017-12-12T10:11:24+08:00
author: ShareChiWai
layout: post
categories:
  - Git
tags:
  - Git
  - Git Command
  - Git Tips and Tricks
  - Git Troubleshooting
---

今日剛在**Bitbucket** 建立左一個新既 repos  
當我嘗試 push local 的一個 **git repos**上去既時候出現了以下的錯誤信息
(當我嘗試 Pull 這個 repos 去 local 的 repos 時)
"<span style="color: #ff0000;"><strong>fatal: refusing to merge unrelated histories</strong></span>"
[<img class="alignnone size-large wp-image-4040" src="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/12/refusingToMergeUnrelatedHistories.png?resize=625%2C294" alt="git Refusing To Merge Unrelated Histories" width="625" height="294" srcset="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/12/refusingToMergeUnrelatedHistories.png?resize=1024%2C481 1024w" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/12/refusingToMergeUnrelatedHistories.png)

如果了解自己的 repos 和在 **git**/**bitbucket**上的沒有衝突的話
**解決方法分簡單**
我們只需要輸入以卜**git** 指令便可以

```bash
git pull --allow-unrelated-histories
```

Hope you find it useful
