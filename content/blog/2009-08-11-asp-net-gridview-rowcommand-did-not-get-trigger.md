---
id: 384
title: ASP.Net GridView RowCommand did not get trigger
date: 2009-08-11T08:11:00+08:00
author: ShareChiWai
layout: post
guid: http://sharechiwai.wordpress.com/2009/08/11/asp-net-gridview-rowcommand-did-not-get-trigger
permalink: /2009/08/asp-net-gridview-rowcommand-did-not-get-trigger/
blogger_blog:
  - sharechiwai.blogspot.com
blogger_author:
  - 智/Chi
blogger_242190872ae71f6d0f1f8731ec21ccf3_permalink:
  - '1031693772412055032'
categories:
  - ASP.Net Tips and Tricks
---

I was stuck in a <span style="font-weight:bold;">GridView RowCommand</span> problem for a long time. Not sure why the <span style="font-weight:bold;">RowCommand </span>did not get trigger"
Here is my situation:

I have a <span style="font-weight:bold;">Grid View</span> which is used to display a table with data, It also contain an image button which allow user to click on, to download a file.

I have done the similar feature several time, all of them works fine. Unfortunately, when the user click on the image button for this grid view, it just refresh the page, but it did not do anything. I try to check what have done wrong by comparing the code that I did before. They all looks fine.

So I have set up several break point to where the <span style="font-weight:bold;">RowCommand </span>handler is, a strange thing happened. The <span style="font-weight:bold;">RowCommand Handler</span> did not get triggered at all.

Finally, I just realised I have forgotten to put an if-statement ispostback on the Page Load event, so that whenever the RowCommand get triggered, it executed a post back, which will run the page_load event. And inside my Page_Load event, it will populate the table again. Therefore, the RowCommand never get triggered.

<span style="font-weight:bold;">Solution is:</span>
To put a code on <span style="font-weight:bold;">Page_Load Event</span> to check if it is a <span style="font-weight:bold;">PostBack </span>or not. If it is not a postback then populate the table, if Not, then skip it.
Here it is the Code to check if it is postback or not.

<span style="font-weight:bold;">VB.Net</span>
<span style="color:rgb(0,153,0);font-size:85%;">If Not IsPostBack Then<br /> 'Do some action, in my case populate the table<br />End</span>

<span style="font-weight:bold;">C#</span>
<span style="font-size:85%;"><span style="color:rgb(0,153,0);">if(!IsPostBack){</span><br /><span style="color:rgb(0,153,0);"> //Do some action, in my case populate the table</span><br /><span style="color:rgb(0,153,0);"> }</span><br /></span>
Hope you find it useful! = )
