---
id: 4049
title: Useful SQL command to reduce the size of the database
date: 2018-02-06T09:30:04+08:00
author: ShareChiWai
layout: post
categories:
  - MSSQL Tips and Tricks
tags:
  - Database Maintenance
  - Database Management
  - Useful SQL Command
---

今日想和大家分享一個 幾有用的**TSQL Command**, 去 Release 返一些**SQL Server** 佔用的空間  
**Transaction log** 和**Database file**

```bash
-- select database
USE Production;

-- Change the recovery mode to SIMPLE, to clear the transaction log
ALTER DATABASE Production SET RECOVERY SIMPLE ;

-- shrink database to release space
DBCC SHRINKDATABASE (Production, 1);
```

Hope you find it useful
