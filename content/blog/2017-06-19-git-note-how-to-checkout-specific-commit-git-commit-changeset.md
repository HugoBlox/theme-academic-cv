---
id: 3990
title: 'Git note - How to checkout specific commit - Git 如何checkout 之前的Commit / Changeset'
date: 2017-06-19T07:12:42+08:00
author: ShareChiWai
layout: post

categories:
  - Git
tags:
  - Git
  - Git Command
  - Git Tips and Tricks
---

常常很大意地 **merge**完一些程式碼後沒有測試便**Commit** 和**Pull** 了到 Remote Repo
所以便要用 一些 git command 來還原之前的 Commit 再去解決問題

那麼如何 還原或 **Checkout** 之前的**Commit** 呢?

**解決方法**分簡單
我們只需要找到之前**commit**的 hash id 之後 "<span style="color: #008000;"><strong>git checkout [commit hash]</strong></span>" 便可以了

查看之前的**Commit** 可以使用 "<span style="color: #008000;"><strong>git log</strong></span> [<span style="color: #008000;"><strong>-(前多小個 commit)</strong></span>]"
e.g.

```bash
// 這個指令會輸出前三個commit的資訊
git log -3
```

[<img class="alignnone size-large wp-image-3991" src="https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/gitlog.png?resize=625%2C169" alt="Git Log" width="625" height="169"  sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/gitlog.png)
取後**commit hash** 之後 只要輸內前 8 個以上的 characters 應該便足夠令 **git** 識出那個**commit**你想**checkout**的
之後可以**checkout** 這個 commit 了

```bash
git checkout 7aef7c3f
```

**Local Repos** 的 程式碼應該會還原到這個**commit** 時的 程式碼

hope you find it useful
