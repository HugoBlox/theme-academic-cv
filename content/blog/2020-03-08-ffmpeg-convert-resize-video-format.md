---
title: "FFmpeg convert resize video - 使用FFmpeg 來轉換視訊格式"
date: 2020-03-08T00:00:00+08:00
author: ShareChiWai
layout: post
categories:
  -
tags:
  - ffmpeg
  - Convert Video
  - Convert Audio
  - Free software
---

使用 `FFmpeg` 來轉換 Video 格式十分容易的  
首先要知道`FFmpeg` 可以轉換那些 format
大家可以執行以下的指令看看

```
ffmpeg -formats
```

或者參考以下網頁
https://www.ffmpeg.org/ffmpeg-formats.html

https://www.ffmpeg.org/general.html#Supported-File-Formats_002c-Codecs-or-Features

轉換 Video format 十分簡單

以下是一些有用的 command

`mp4 to mkv`

```
ffmpeg -i \
[input]mp4] \
-vcodec copy \
-acodec copy \
[output.mkv]
```

`mkv to mp4`

```
ffmpeg -i \
[input.mkv] \
-c copy \
[output.mp4]
```

改變 Video 的解像度大小  
我們可以使用以下 command

```
ffmpeg -i [Input].mp4 -vf scale=-[Scale height e.g. 1920]:[scale width e.g. 1080] -c:v libx264 -crf 18 -preset veryslow -c:a copy [output].mp4 -async 1 -vsync 1
```

例子. 以下是 將 4k Video 轉成 1080p

```
ffmpeg -i 20190907_122335.mp4 -vf scale=-1:1080 -c:v libx264 -crf 18 -preset veryslow -c:a copy 20190907_122335_1080.mp4 -async 1 -vsync 1
```

使用

Hope you find it useful
