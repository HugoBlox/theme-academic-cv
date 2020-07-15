---
id: 434
title: WordWrap on Crystal Report?
date: 2009-03-07T03:07:00+08:00
author: ShareChiWai
layout: post
categories:
  - Crystal Report Tips and Tricks
---

I have received a task to convert the project handbook from Word Document into Crystal report. It does not sound difficult until I need to do some formatting and Layout.

I had a problem on trying to make a field to display in Multi-line, instead of one line. And I am not able to file a word wrap function on Crystal Report. After spending some time on the web. Finally I find out how to do it.

**Solution:**

1. **Select** the **field(s)** that you want to enable WordWrap.

2. Right click and select "**Format Field**" OR **"Format Objects"** (if you select more than 1 fields)

3. Then in the **"Format Editor"** Click on the **"Common"** tab.

4. You will see the screen shot similar as below.

[<img title="Crystal Reports fields Format Editor" src="https://i1.wp.com/api.photoshop.com/home_453edadf42c44e2bba351fb5d2dfaeb1/adobe-px-thumbnails/fe5dd095128d47e39605022d415e78d6/256.jpg?resize=412%2C512" alt="Crystal Reports fields Format Editor" width="412" height="512" data-recalc-dims="1" />](https://i1.wp.com/api.photoshop.com/home_453edadf42c44e2bba351fb5d2dfaeb1/adobe-px-thumbnails/fe5dd095128d47e39605022d415e78d6/256.jpg)

5. Then "Tick" the "Can Grow" check box and click "OK"</p>

</strong>6)After you done that you can save the Report and press **"F5"** to preview the report.

Hopefully you the field will be wrapped into next line.

Good luck
