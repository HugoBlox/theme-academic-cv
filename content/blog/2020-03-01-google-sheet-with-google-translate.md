---
title: "Use Google Translate with Google Sheet - 在Google Sheet 上使用Google Translate"
date: 2020-03-01T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - 
tags:
  - Google Sheet
  - Google Doc
  - Google Drive
  - Google 試算表
  - Google 試算表公式
  - Google 試算表 教學
---
前兩日在Facebook 上看到一位朋友分享的 Google Document, Google Sheet 的小貼士  
我覺得十分有用... 想和大家分享...  

原來..我們可以在**Google Sheet /  Google試算表** 的公式上使用 **Google Translate**

只需要在 Worksheet的 Formula 上輪入 `=GOOGLETRANSLATE`
`=GOOGLETRANSLATE([文字或 Cell的參考], "原文的語言既 2個位的 language Code (可以不填)","想翻譯的語言既 2個位的 language Code" )`
E.g. 
`=GOOGLETRANSLATE("Hello", "en","fr" )`

![Use Google Translate with Google Sheet demo](/img/2020/GoogleSheetTranslate.gif 'Use Google Translate with Google Sheet demo')  

大家可以在以下的網頁找到 **Google Translate** 可以支援皫 語言   

Hope you find it useful
