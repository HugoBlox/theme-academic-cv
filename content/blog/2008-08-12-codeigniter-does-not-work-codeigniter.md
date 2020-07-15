---
id: 18
title: CodeIgniter does not work — CodeIgniter 不能 顯示 $name入面的內容
date: 2008-08-12T01:00:07+08:00
author: ShareChiWai
layout: post
guid: http://sharechiwai.wordpress.com/?p=18
permalink: '/2008/08/codeigniter-does-not-work-codeigniter'
jabber_published:
  - '1281805587'
categories:
  - Codeingter
  - PHP 新手筆記
---

今日在學習<span style="color:#339966;">CodeIgniter </span>時
嘗試隨著 <span style="color:#339966;">CodeIgniter</span>的教學建立一些 Sample Website
但不知道為什麼用 `<?=$name?>`

不能顯然 <span style="color:#339966;">\$name </span>的內容, 最後發現原來是 一些 Config 的問題

**解決方法:**
打開你的 CodeIgniter 檔案夾
到<span style="color:#339966;">systemapplicationconfig</span>
開啟: <span style="color:#339966;">config.php</span>
之後找
<span style="color:#339966;">$config['rewrite_short_tags']</span>
如果設定為FALSE 的話
就會用不到這個功能的
只要把設定改到好像下面一樣便可
<span style="color:#339966;">$config['rewrite_short_tags'] = TRUE;</span>

Hope you find it useful
