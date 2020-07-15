---
id: 4006
title: 'LetsEncrypt Renew - Lets Encrypt SSL 更新'
date: 2017-06-27T06:51:11+08:00
author: ShareChiWai
layout: post
categories:
  - UBuntu
tags:
  - LetsEncrypt
  - SSL
  - Ubuntu
  - VPS
---

差不多每三個月 **Let's Encrypt Expiry Bot**
便會**Email** 我說.. 我的**SSL** 後快便會到期**Expire**
我需要去**Renew**"
[<img class="alignnone size-large wp-image-4009" src="https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/letsEncryptExpiry.png?resize=625%2C39" alt="Let's Encrypt Expiry Bot Email Notification" width="625" height="39" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i2.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/letsEncryptExpiry.png)

**解決方法**十分簡單
我們只需要在 server 的**Terminal** 上用 **sudo**執行以下指令便可

`sudo certbot-auto renew`

[<img class="alignnone size-large wp-image-4007" src="https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/letsEncryptRenew.png?resize=625%2C339" alt="Let's Encrypt Renew Successfully" width="625" height="339" sizes="(max-width: 625px) 100vw, 625px" data-recalc-dims="1" />](https://i0.wp.com/blog.sharechiwai.com/wp-content/uploads/2017/06/letsEncryptRenew.png)

完成後會說成功 renew

hope you find it useful
