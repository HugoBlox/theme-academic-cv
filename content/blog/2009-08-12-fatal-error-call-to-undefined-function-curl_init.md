---
id: 383
title: 'Fatal error: Call to undefined function curl_init() 問題'
date: 2009-08-12T08:12:00+08:00
author: ShareChiWai
layout: post
categories:
  - PHP 新手筆記
---

今天想嘗試使用 <span style="font-weight:bold;">CURL </span>這個 MODULE 去 POST 一些 XML Data 到另一個 website,
當我跟著網上的 example 試 code 的時候"

```php
<?
$ch = curl_init();
?>
```

下面的 error 便出現了<br /><b>Fatal error</b><span style="color:rgb(255,0,0);">: Call to undefined function curl_init() in </span><b>D:WebServerWebSitePostXML.php</b><span style="color:rgb(255,0,0);"> on line </span><b>8</b></span>

其實解決方法很簡單
只要到 "**Notepad**" 開啟 "**php.ini**"
之後用 "**Edit**" ->"**Find"**" 或 <span style="font-weight:bold;">CTRL </span>+ "<span style="font-weight:bold;">F</span>"
找 "**curl**"
你便會找到
`;extension=php_curl.dll`

你只需要刪除"<span style="font-weight:bold;color:rgb(51,204,0);">;</span>"
之後儲存檔案
<span style="font-weight:bold;">"Restart" </span>你的 web server 便可

Good Luck
