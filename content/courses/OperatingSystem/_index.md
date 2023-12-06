---
# Page title
title: 《计算机操作系统》课程

# Title for the menu link if you wish to use a shorter link title, otherwise remove this option.
linktitle: 课程介绍

# Page summary for search engines.
summary: 操作系统是计算机系统的指挥中心，它既是系统中各种资源的管理者，又是服务的提供者。操作系统在计算机系统中所处的地位和作用决定本课程在计算机学科课程中特殊重要的核心位置。

# Date page published
date: 2018-09-09

authors: ["admin"]
author_notes: ["contributor"]

# Book page type (do not modify).
type: book

# Position of this page in the menu. Remove this option to sort alphabetically.
weight: 1
---

## 一、课程介绍 

《操作系统》课程是计算机考研408指定课程。操作系统是计算机系统的指挥中心，它既是系统中各种资源的管理者，又是服务的提供者。操作系统在计算机系统中所处的地位和作用决定本课程在计算机学科课程中特殊重要的核心位置。本课程主要讲授操作系统的基本概念、基本原理、设计方法和实现技术，包括：操作系统概述、进程线程与作业、中断与处理机调度、互斥同步、死锁饿、存储管理、输入输出系统、文件系统等内容。

## 二、课程资源

- [2023年课件PPT地址](https://pan.baidu.com/s/1qzxmW44K8OcAsm8T1Fjbrg?pwd=cvix)
- 教材：计算机操作系统（慕课版），汤小丹 王红玲 姜华 汤子瀛编著，人民邮电出版社
- 数字化资源：[官方全书慕课视频(新书的封底有激活码)](https://www.rymooc.com/Course/show/714)，[B站官方教学视频王红玲主讲](https://www.bilibili.com/video/BV17h411B7yW/)
- [Linux命令大全](http://www.runoob.com/linux/linux-command-manual.html)，[著名的操作系统专家Andrew S. Tanenbaum的个人网页](http://www.cs.vu.nl/~ast/)，

## 三、课程考核方式

- 课堂表现和作业：20%

- 期中测试：20%

- 期末考试：60%

## 四、教学计划

每章对应的PPT课件在这里，[2023年课件PPT地址](https://pan.baidu.com/s/1qzxmW44K8OcAsm8T1Fjbrg?pwd=cvix)

| 第n次课 |                             章节                             |                             内容                             |            备注             |
| :-----: | :----------------------------------------------------------: | :----------------------------------------------------------: | :-------------------------: |
|    1    | 第1章 操作系统引论1.1-1.5节 <br />[第1章思维导图](/courses/OperatingSystem/mindmap/chapter1.png) | 操作系统的目标和作用、操作系统的发展过程、操作系统的基本特性、操作系统的主要功能、操作系统的结构设计 |                             |
|    2    | 第1章 操作系统引论1.6节1.7节<br />第2章 进程描述与控制 2.1-2.4节<br />[第2章思维导图](/courses/OperatingSystem/mindmap/chapter2.png) |                前趋图、进程的描述、控制、通信                |   第1章作业，课后1，2，25   |
|    3    | 第2章 进程描述与控制 2.5-2.6节<br />第3章 处理机调度与死锁 3.1-3.2节<br />[第3章思维导图](/courses/OperatingSystem/mindmap/chapter3.png) |        线程的基本概念和实现，处理机调度概述，调度算法        |     第2章作业，1，2，21     |
|    4    |               第3章 处理机调度与死锁 3.3-3.7节               |              实时调度，死锁，预防死锁，避免死锁              |                             |
|    5    | 第3章 处理机调度与死锁 3.8节<br />第4章 进程同步 4.1-4.5节<br />[第4章思维导图](/courses/OperatingSystem/mindmap/chapter4.png) | 死锁的检测与解除，进程同步的基本概念，软件同步机制，硬件同步机制，信号量机制，管程机制 | 第3章作业，课后1，2，20，22 |
|    6    | 第4章 进程同步 4.6-4.7节<br />第5章 存储器管理5.1-5.2节<br />[第5章思维导图](/courses/OperatingSystem/mindmap/chapter5.png) | 经典进程的同步问题、Linux进程同步机制，存储器的层次结构，程序的装入和链接。 | 第4章作业，课后1，2，13，15，16 |
|    7    | 第5章 存储器管理5.3-5.5<br />[第5章思维导图](/courses/OperatingSystem/mindmap/chapter5.png) | 对换与覆盖、连续分配存储管理方式、分页存储管理方式 |  |
|    8    | 第5章 存储器管理5.6-5.7<br />[第5章思维导图](/courses/OperatingSystem/mindmap/chapter5.png)<br />第6章  虚拟存储器6.1-6.3 <br /> [第6章思维导图](/courses/OperatingSystem/mindmap/chapter6.png) | 分段存储管理方式、IA-32/x86-64内存管理、虚拟存储器概述、请求分页存储管理方式、页面置换算法  | 第5章作业，课后15，18 |
|    9    | 第6章 虚拟存储器6.4-6.6 <br /> [第6章思维导图](/courses/OperatingSystem/mindmap/chapter6.png) <br /> 第7章 输入输出系统7.1-7.2 <br /> [第7章思维导图](/courses/OperatingSystem/mindmap/chapter7.png)| 抖动、请求分段存储管理方式、I/0系统的功能模型接口、I/O设备控制器、 | 第6章作业，课后13，15，18 |
|    10    | 第7章 输入输出系统7.3-7.7 <br /> [第7章思维导图](/courses/OperatingSystem/mindmap/chapter7.png)| 中断和中断处理程序、设备驱动程序、与设备无关的I/O软件、用户层的I/O软件、缓冲区管理 |   |
|    11    | 习题讲解、期中测试  | 作业讲解、测试 |   |
|    12    | 第7章 输入输出系统7.8 <br /> 第8章文件管理8.1和8.2 [第8章思维导图](/courses/OperatingSystem/mindmap/chapter8.png) | 磁盘调度、文件和文件系统、文件的逻辑结构 |   |
|    13    |  第8章文件管理8.1和8.2[第8章思维导图](/courses/OperatingSystem/mindmap/chapter8.png) | 文件目录、文件共享、文件保护 | 作业13，14  |