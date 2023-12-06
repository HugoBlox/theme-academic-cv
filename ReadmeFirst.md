# wowchemy academic theme build method
主要参考：https://university.wowchemy.com/getting-started/

------------------------------------------------------------
### 1.在电脑本地端，使用操作方法：
- 文档写作流程：
1.重点关注config、content目录；
2.启动服务：hugo server；
3.在content目录编写对应内容，自动更新；
4.内容无误后进入部署流程。

- 部署到git pages的流程：
1.hugo -d /docs     #指定目录
2.github desktop 同步至远程github即可

### 2.在github codespaces在线平台，使用操作方法：
- 文档写作流程：同上
- 生成git pages的内容：hugo -d docs     #部署HTML到指定目录
- 使用源代码管理，commit and Sycn

### 3.探索自动构建
- codespaces只用编写源码，github workflow自动构建

-------------------------------------------------------------