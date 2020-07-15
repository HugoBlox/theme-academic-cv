---
id: 430
title: "Jquery's Notes"
date: 2009-03-19T03:19:00+08:00
author: ShareChiWai
layout: post
guid: http://sharechiwai.wordpress.com/2009/03/19/jquerys-notes
permalink: /2009/03/jquerys-notes/
blogger_blog:
  - ourchiwai.blogspot.com
blogger_author:
  - 智/Chi
blogger_6870bb21ec74375fd3c4e74cc80d3a54_permalink:
  - "6906755266741820197"
categories:
  - Jquery Notes
---

I am learning JQuery at the moment, and going to note down the error/mistake which I made while I am experimenting it.
Hope you would find it useful if you encounter the same issue, while you are using JQuery. Please correct me if my concept is

wrong or you have a better solution.

Why learn JQuery?
It is a JavaScript library/API/Frameworks allow you to develop website rapidly with nice feature that can work Cross-

browser, CSS3 Compliant and Lightweight Footprint, you can found lots of plugin on-line which can save you a lot of time to

develop you own method for some common feature.

Here it is the official site for JQuery, where you can find JQuery to download download/tutorials/documentation and get the latest

information about it.
[jquery.com](http://jquery.com/)

One thing that I would like to remind myself from this notes is. All the even/action E.g. Blur, Onchange...etc should register on ready event. Of course, the most important thing is to reference the jquery.js between the HTML header tag.
E.g.

<pre><br /><span style="color:rgb(0,153,0);"></span><br /><span style="color:rgb(0,153,0);">   </span><br /><span style="color:rgb(0,153,0);">          </span><br /><span style="color:rgb(0,153,0);">     </span><br /><span style="color:rgb(0,153,0);">           //Register on ready event                                        </span><br /><span style="color:rgb(0,153,0);">             $(document).ready(function() {</span><br /><span style="color:rgb(0,153,0);">              $("#txt_Text").change(function(){</span><br /><span style="color:rgb(0,153,0);">                 alert($("#txt_Text").val());</span><br /><span style="color:rgb(0,153,0);">               });</span><br /><span style="color:rgb(0,153,0);">          });</span><br /><br /><span style="color:rgb(0,153,0);">                  </span><br /><span style="color:rgb(0,153,0);">

<title>
  Jquery Notes
</title></span>

<br /><span style="color:rgb(0,153,0);">    </span><br /><span style="color:rgb(0,153,0);">  </span><br /><span style="color:rgb(0,153,0);">     </span><br /><span style="color:rgb(0,153,0);">  </span><br /><span style="color:rgb(0,153,0);"></span><br /><br /></pre>

The example above will display an alert box when we change the focus on txt_Text input control.

Happy coding.
