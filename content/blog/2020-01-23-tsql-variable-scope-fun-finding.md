---
title: "TSQL Variable Scope fun finding"
date: 2020-01-23T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - TSQL
tags:
  - TSQL
---

最近同事 發現了一個有趣既 TSQL behaviour  
在一般既情況下 Variable 應該是有一個scope 的  
如果個Variable 是 Declare 在  If statement 入面  
那麼在IF Statement 出面用這個variable 應該會 Throw Error 的..  
以下的TSQL 執行之後 你做會出現什麼結果呢?  

```TSQL
IF 1 = 1
BEGIN 
  DECLARE @insideIf nvarchar(50) = 'inside'
END
SELECT insideIf
```
居然會output `inside`

是不是十分surprise 呢?