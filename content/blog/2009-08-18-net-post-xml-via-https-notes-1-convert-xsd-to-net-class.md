---
id: 378
title: '.Net Post XML via HTTPS Notes 1 [Convert XSD to .Net Class]'
date: 2009-08-18T18:18:00+08:00
author: ShareChiWai
layout: post

categories:
  - .Net Tips And Tricks
  - Web Services
  - XML
---

最近公司有一個 project 是要用另外一間公司的 XML Interface 既 Webservice 去做 exchange data.
其實只要這間公司提供 WSDL 既 Address 給我們
這個 project 便很容易完成"
很可惜這間公司不願提供 WDSL file
所以最後便要自己學怎樣在 VB.Net 入面 post XML 去 HTTP 了

便這了這篇筆記了

還記得之前用 WSDL 時
當我 Add 了 Service Reference Visual Studio 便會自動產生了和這 Web service 有關的 .NET Object 和 Connection End Point
一切都十分方便"

現在所有事都要自己 Handle 　感到有點煩惱"
等一個 STEP 便是要找 方法把
Developer Guide 入面的 XSD 轉做 .Net Object
或者你要自己寫一些 CLASSES 出來
去做一些 function 可以 return 到 XML OUTPUT 可以 Match 到
Developer Guide 入面你需要 POST 的 XML Rule.

以下是我的做法

首先你要找到這個<span style="font-weight:bold;">XSD.EXE</span> file
在我的電腦入面是在以下的 directory
<span style="color:rgb(51,51,255);">C:Program FilesMicrosoft SDKsWindowsv6.0ABin</span>

或者你可以試試 SEARCH
"<span style="font-weight:bold;">xsd.exe</span>" 之後 copy 這個檔案去另一個 location
或到"<span style="font-weight:bold;">xsd.exe</span>"後便用 Command Prompt
[我將這個.EXE copy 到 裝有 xsd 檔案的 directory 入面 (這樣可以方便自己打小一些 path)]

之後開啓 command prompt
"<span style="font-weight:bold;">Start</span>"-> "<span style="font-weight:bold;">Run</span>"-> Type "<span style="font-weight:bold;">cmd</span>" ->Press "<span style="font-weight:bold;">Enter</span>"
在 command prompt 入面
進入有 "<span style="font-weight:bold;">xsd.exe</span>" 的 directory 入面
之後打以下的 Command 你便可以 create 一個 class base on 這個 xsd 檔案了
MyXMLObjNameSpace 是我想這個 Class 用的 namespace.
XMLToExampleCLass.xsd 是我轉的 xsd file.
我用的 language 是 VB.NET

VB

```
xsd.exe –c –l:vb –n:MyXMLObjNameSpace XMLToExampleCLass.xsd
```

C#

```
xsd.exe -c -l:c# -n:MyXMLObjNameSpace XMLToExampleCLass.xsd

xsd.exe -c[-c mean general Class] -l:[Language Name e.g. c#/vb] -n:[Namespace][xsd file name]
```

如果你的 XSD 檔案不是 proper define command prompt 便會出示一些 error message 說出那裡出現問題就好像下面一樣

這樣你便要看清楚你的 XSD 檔案是否 Well define 了

如果你的 xsd 檔案是沒有問題
他便會出現"
<span style="font-size:85%;"><span style="font-style:italic;"><span style="font-weight:bold;">Writing file</span> "C:pathXMLToExampleCLass.vb"</span></span>

當你完成之後只要 COPY 這個 VB 檔案到你的 VB project
之後 imports 這個 namespace 你便可以使用這個 class 了

E.G.
VB
<span style="color:rgb(0,153,0);font-size:85%;"><span style="font-style:italic;font-weight:bold;">Imports MyProgram.MyXMLObjNameSpace</span> </span>
C#

```
using MyProgram.MyXMLObjNameSpace;
```

Hope you find it useful.
如果你有更好的方法, 歡迎大家一齊來研究研究
