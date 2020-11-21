---
title: '关于梯子'
summary: '关于梯子的一些经验，然后谈谈伟大的防火墙'
authors:
- admin
tags:
- 墙
- 代理
categories:
- 生活 
date: 2020-10-07
lastmod: 2020-10-07
featured: false
draft: false
toc: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Placement options: 1 = Full column width, 2 = Out-set, 3 = Screen-width
# Focal point options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
image:
  placement: 2
  caption: 'Image credit: [**dribbble**](https://dribbble.com/shots/6559019-Great-Wall-of-China)'
  focal_point: ""
  preview_only: true

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

### 我的一些使用经验

我用梯子主要是科研需求和编程需求。这都怪自己一开始选择了计算机专业，然后坚持走了这条路。

最初我是电脑小白，只会使用各种免费vpn软件例如自由门，不稳定又慢，[蓝灯](https://github.com/getlantern/lantern/releases)还不错也开源了，这个项目一直在更新，大多数时候都蛮稳定的。后来又在论坛和油管上得知了一些`免费机场`，申请账号每日签到就可以换取使用时长。还有些网站每天会放出一些公益的ss/ssr/v2ray节点。例如[ssrtool](https://ssrtool.us/tool/free_ssr)、[fanqiang论坛](https://fanqiangdang.com/forum-51-1.html)、[free-ss](https://free-ss.site/)。订阅一些电报，也会不定时更新免费节点。再后来嫌烦自己买了vps自建梯子，使用过**阿里云、华为云、搬瓦工、virmach**的产品，发现还是`搬瓦工`便宜好用。搭梯子开始是用`ss`，后来用`ssr`，最后用`v2ray`。技术更新升级，墙也跟着更新升级，似乎不存在永久可用的梯子。一到`敏感时期IP就被封`，无法连接上。虽然过了敏感期又会被放出来。后来学到了用trojan伪装或者[用Cloudflare来中转V2Ray的WebSocket+TLS流量](https://github.com/233boy/v2ray/wiki/%E4%BD%BF%E7%94%A8Cloudflare%E4%B8%AD%E8%BD%ACV2Ray%E6%B5%81%E9%87%8F)，考虑到v2ray在各个平台支持的更好，我现在一直在用v2ray WSS+bbrplus。于是买了一个非常便宜的域名做伪装，这样就可以避免墙，这招目前倒是一直有效。而其他的流量伪装技术，例如微信电话、bt下载都活得不长久。但是套了CF速度当然就降下来了，以前用v2ray可以在油管看1080p，现在全看网络的心情。想买搬瓦工的[Just My Socks](https://justmysocks.in/buy.html)服务，被墙`自动切换IP`，但是一个月5.88刀又觉得不值。现在科学上网还是回归到了原始，即白嫖，因为找到了三棵大树，贼稳，[蚂蚁加速器](mayi.laihuluwa.com)、还有两个v2ray的订阅地址，又是跨平台使用，都用不了的概率太小了。

### 对于梯子这事的看法
敏感时期看到别人抱怨自己买的科学上网服务失灵的时候，我只能心理表示无奈，因为我知道墙的必要性和局限性，目前没有更好的方法改善现状解决问题。首先，梯子这项技术是危险的。经常看到github上star排在前面的梯子突然就由于不可描述的原因停止维护了，虽然技术本身没有错，但是使用它的人往往会干出不符合我国法律法规的事情毕竟大家都是人在国内。我发自内心的认为墙是正确的事情，因为当前国民素质还不够高。经常有傻子在推特、油管上造谣、诽谤、抹黑这个国家，真让人痛心。`谁不想自己的祖国变好呢，靠敲键盘能改变什么，垃圾言论带来的只能是人心不安、社会动荡，这种人应该抓起来`。我迫切地希望国民教育得到提高，但是发展往往不能均衡，如果国民都追求做`论语`里的君子，那墙就没有必要了，这显然是理想主义，不现实，有人的地方就有恶存在，因为人性中的恶经过几十万年都没有消除掉，如果人的三观或者认知出了问题，在科学上网的过程，必然主动或被动违法违规。

作为一个科研人员和程序员，不科学上网还真不行。因为墙不仅把国外不好的东西挡住了，也把好的东西挡住了。不好的东西，不用说坚决要抵制。好的东西做的比我们好，就要学习它，使用它，超越他。虽然我们有自己的解决方案，但是这些方案要么不是最好的，要么就是使用体验太差。我们作为解决方案的生产者参与者，必须扩展视野，找世界上最好的技术来借鉴比较超越，往往由于墙受到限制，不能容易地获取到生产需要使用的资源。同时我认为不能鼓励所有人都找世界上最好的东西用，因为我们自己生产的东西如果没人用，我们也就没有了动力去优化它。我们这些人都明白，`科学上网是为了自我提升和让社会变好`。

Did you find this page helpful? Consider sharing it 🙌
