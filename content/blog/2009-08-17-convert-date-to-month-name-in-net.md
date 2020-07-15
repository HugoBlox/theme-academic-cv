---
id: 379
title: Convert Date to Month Name in .Net
date: 2009-08-17T08:17:00+08:00
author: ShareChiWai
layout: post

categories:
  - .Net Tips And Tricks
---

Today, my friend and I tried to find a way to convert date to a month name. E.g. 2008-08-08 to return August.

I tried to use String.Format(TODAY, "MMM") ,String.Format("MMM",TODAY) "etc.
To convert Date to Month Name sound quite simple, unforunately, I have spent quite a long time to find the solution.

Finally, I have find a solution online, which is to use the ToString's method.
E.g. Today.ToString({Format of the date}) to get the date format you want.

**DateTime.Now.ToString("MMMM")**

Is it quite easy, isn't it?

Happy programming = )
