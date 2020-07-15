---
title: "Git change capitalization of filename - Git 更改檔案名大小字"
date: 2020-03-06T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  -
tags:
  - git
---

今日遇到一個`git` 的問題  
就是需要更之前 commit 了既一個 filename 的大細階..  
e.g.

```
2020-03-01-Google-sheet-with-google-translate.md
```

到

```
2020-03-01-google-sheet-with-google-translate.md
```

即使在 VS code 上更新了檔案的大小字....  
但是還是 detect 不到 changes...

最後終於找到解決方法
我們可以使用以下的 git command
`git mv`

```
mv         Move or rename a file, a directory, or a symlink
```

e.g.

```
git mv 2020-03-01-Google-sheet-with-google-translate.md 2020-03-01-google-sheet-with-google-translate.md
```

Hope you find it useful
