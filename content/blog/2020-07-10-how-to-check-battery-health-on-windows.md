---
title: "How to check battery health on Windows - 如果在Windows 上檢查電池健康度."
date: 2020-07-10T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - 電腦小貼事 Computing Tips and Tricks
tags:
  - Battery Health
  - Computing Tips and Tricks
  - 電腦小貼事
---

今日無聊時發現了 `Windows` 有一個可以檢查電池健康度既 Command 十分有趣  
我們只需要在 Windows 的 `Command Prompt` 上輸入以下的指令  
`powercfg /batteryreport`
![Windows Command check battery health](/img/2020/windows-check-battery-health.png "Windows Command check battery health")

之後便會建立一份和你部電腦電池健康度的 report 是 HTML format  
e.g.

```
C:\Users\yauch\battery-report.html
```

開啟後便可以看到以下資訊
e.g.
電腦名稱, BIOS version, OS Build  
電池資訊, Manufacturer, Serial Number, Chemistry, Design Capacity, Full Chage Capacity, Cycle Count

我估可以使用 Design Capacity 和 Full Charge Capacity 來計算出 電池健康度  
![Windows battery health report](/img/2020/battery-report.png "Windows  battery health report")
還有一些 使用電池的資訊  
有時間可以 Generate 一個 report 來睇下

Hope you find it useful
