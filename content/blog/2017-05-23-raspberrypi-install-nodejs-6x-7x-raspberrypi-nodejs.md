---
id: 3965
title: 'RaspberryPi install NodeJs 6.x / 7.x - 如何在RaspberryPi 安裝 NodeJs'
date: 2017-05-23T00:00:07+08:00
author: ShareChiWai
layout: post
categories:
  - RaspberryPi
tags:
  - CylonJs
  - Johnny-Five
  - NodeJs
  - RaspberryPi
  - RaspberryPi setup
---

今日嘗試在**RaspberryPi**上安裝**Johnny-Five** /**CylonJs** 時出現**NodeJs** 的版本問題
但是執行

```bash
sudo apt-get install node
```

他說 **NodeJs**已經安裝了

做了一會 research 之後 發現我們可以使用以下方法來更新這個**NodeJs**的

**解決方法**
我𠍒可以在**Terminal** 上執行以下**command**
**NodeJs 6.x**

```bash
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**NodeJs 7.x**

```bash
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt-get install -y nodejs
```

[<img class="alignnone size-large wp-image-3967" src="https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/04/InstallNodeJsRaspberry.png?resize=625%2C370" alt="Install NodeJs on RaspberryPi" width="625" height="370" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/04/InstallNodeJsRaspberry.png)

完成後再次執行

```bash
sudo apt-get install node
```

詳情可以參考以下網頁
<https://nodejs.org/en/download/package-manager/#debian-and-ubuntu-based-linux-distributions>

Hope you find it useful
