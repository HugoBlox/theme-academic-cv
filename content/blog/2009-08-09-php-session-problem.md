---
id: 386
title: PHP Session Problem
date: 2009-08-09T23:00:00+08:00
author: ShareChiWai
layout: post
categories:
  - PHP 新手筆記
---

When I try to use the Session variable in PHP \$\_Session["VariableName"], it does not work".
The session never get registered.

How to check?
You can use the following code to see if the Session is null or not.

```php
<?php
isset($_SESSION["VariableName"]) //If this return false, that mean this session is null
?>

if(isset($_SESSION["VariableName"])){
echo "Session value:" . $_SESSION["VariableName"];
$_SESSION["VariableName"] = "Assigned";
}else{
echo "Session is null";
}
?>
```

</p>
```php
if(isset($_SESSION["VariableName"])){
echo "Session value:" . $_SESSION["VariableName"];
$_SESSION["VariableName"] = "Assigned";
}else{
echo "Session is null";
}
?>

```
<div>
 <span style="background-color:rgb(255,255,255);"><span class="Apple-style-span" style="color:#000000;">If the result is "</span><b><span class="Apple-style-span" style="color:#000000;">Session is null</span></b><span class="Apple-style-span" style="color:#000000;">", once you refresh the page again, it should display "Session value: Assigned".</span></span><span class="Apple-style-span" style="color:#000000;"></p>

  <p>
    If not, that mean the Session feature has not been turn on properly on you server.
  </p>

  <p>
    <b>Solution 1:</b><br />If you are allowed to modify the php.ini file, you can open up the "php.ini" file and Search for the keyword "</span>session.auto_start<span class="Apple-style-span" style="color:#000000;">"<br />To ensure </span>session.auto_start= 1<span class="Apple-style-span" style="color:#000000;">;<br />After you edited it, you can restart the web sever and try again.</p>

    <p>
      <b>Solution 2:</b><br />You can use the follow code to enable the session feature:</span><br /><span style="font-family:Courier New;"><span style="color:rgb(0,0,0);"><span style="color:rgb(0,0,187);">session_start</span><span style="color:rgb(0,119,0);">();</span></span></span>
    </p>

    <p>
      <span class="Apple-style-span" style="color:#000000;">Hope you find this useful!</span></span></span></div>
```
