# wowchemy academic theme build method
# [Hugo Academic Theme](https://github.com/wowchemy/starter-hugo-academic) , New name as: [theme-academic-cv](https://github.com/HugoBlox/theme-academic-cv)

使用方法主要参考：https://university.wowchemy.com/getting-started/


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

### 3.github Action自动构建，部署，发布
- 源码本地编写，使用VSCode编辑器，编辑*.md文件完以后，commit and Sycn，即发布到远端源代码仓库
- github在线编辑器，codespaces只用编写源码*.md，commit and Sycn之后，github workflow自动构建
- 当前版本通过actions能够自动构建
- 只用关心编写MD文件即可
- starter-hugo-academic(源码仓库)会自动发布到github pages的仓库（发布的HTML页面仓库）
-------------------------------------------------------------
