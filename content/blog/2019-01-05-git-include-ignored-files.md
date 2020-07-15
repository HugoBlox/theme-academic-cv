---
id: 4088
title: Git Include Ignored files
date: 2019-01-05T00:00:44+08:00
author: ShareChiWai
layout: post
categories:
  - Git
tags:
  - Git
  - Source Control
  - VSCode
---

今日嘗試在 git 上加入之前 用 **.gitignore** Ignore 左既 個 project folder 入面的 **.vscode**資料夾  
剛剛更新了 project 入面的 **workspace setting**  
而在**VS Code** 的 **workspace setting** 是儲存在 **.vscode/settings.json** 上  
要把這個檔案加回 source control 我們首先要在 **.gitignore** 檔案上 移除這個資料夾

之後使用以下 指令 再強制把這個檔案加回**source control**

```bash
git add -f .vscode/settings.json
```

<figure class="wp-block-image">

<img src="https://i1.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-4.png?fit=625%2C57&ssl=1" alt="" class="wp-image-4090" srcset="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-4.png?w=1139 1139w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-4.png?resize=300%2C28 300w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-4.png?resize=768%2C71 768w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-4.png?resize=1024%2C94 1024w, https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2019/01/image-4.png?resize=624%2C58 624w" sizes="(max-width: 625px) 100vw, 625px" /> </figure>

完成後便可以 **commit** 這個檔案了  
Hope you find it useful
