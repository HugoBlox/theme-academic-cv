---
title: 镜像
date: 2020-10-07
lastmod: 2020-10-07
summary: 由于外网访问速度受限制或不可访问，抄近道即可体验 x M/s。修改配置记得先备份！
draft: false
image:
  placement: 2
  caption: 'Image credit:[**pinterest**](https://www.pinterest.com/pin/303007881181562391/)'
  focal_point: ""
  preview_only: true
authors:
  - 笼鹰
tags:
  - 镜像
categories:
  - 技术
---
## `APT`

```shell
deb http://us.archive.ubuntu.com/ubuntu/ bionic main restricted universe multiverse
deb http://us.archive.ubuntu.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://us.archive.ubuntu.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://us.archive.ubuntu.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb http://us.archive.ubuntu.com/ubuntu/ bionic-backports main restricted universe multiverse
deb-src http://us.archive.ubuntu.com/ubuntu/ bionic main restricted universe multiverse
deb-src http://us.archive.ubuntu.com/ubuntu/ bionic-security main restricted universe multiverse
deb-src http://us.archive.ubuntu.com/ubuntu/ bionic-updates main restricted universe multiverse
deb-src http://us.archive.ubuntu.com/ubuntu/ bionic-proposed main restricted universe multiverse
deb-src http://us.archive.ubuntu.com/ubuntu/ bionic-backports main restricted universe multiverse
```

注意：需要根据需求来改source.list。如：将us替换成cn即变成中国；将bionic替换成对应的ubuntu版本代号；对于镜像网站用mirros.<域名>替换us.archive.ubuntu.com；

```shell
deb http://mirrors.xjtu.edu.cn/ubuntu/ bionic main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ bionic-backports main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ bionic-proposed main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ bionic-security main multiverse restricted universe
deb http://mirrors.xjtu.edu.cn/ubuntu/ bionic-updates main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ bionic main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ bionic-backports main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ bionic-proposed main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ bionic-security main multiverse restricted universe
deb-src http://mirrors.xjtu.edu.cn/ubuntu/ bionic-updates main multiverse restricted universe
```

```shell
# newer versions of the distribution.
deb http://mirrors.aliyun.com/ubuntu bionic main restricted
# deb-src http://mirrors.aliyun.com/ubuntu bionic main restricted

## Major bug fix updates produced after the final release of the
## distribution.
deb http://mirrors.aliyun.com/ubuntu bionic-updates main restricted
# deb-src http://mirrors.aliyun.com/ubuntu bionic-updates main restricted

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team. Also, please note that software in universe WILL NOT receive any
## review or updates from the Ubuntu security team.
deb http://mirrors.aliyun.com/ubuntu bionic universe
# deb-src http://mirrors.aliyun.com/ubuntu bionic universe
deb http://mirrors.aliyun.com/ubuntu bionic-updates universe
# deb-src http://mirrors.aliyun.com/ubuntu bionic-updates universe

## N.B. software from this repository is ENTIRELY UNSUPPORTED by the Ubuntu
## team, and may not be under a free licence. Please satisfy yourself as to
## your rights to use the software. Also, please note that software in
## multiverse WILL NOT receive any review or updates from the Ubuntu
## security team.
deb http://mirrors.aliyun.com/ubuntu bionic multiverse
# deb-src http://mirrors.aliyun.com/ubuntu bionic multiverse
deb http://mirrors.aliyun.com/ubuntu bionic-updates multiverse
# deb-src http://mirrors.aliyun.com/ubuntu bionic-updates multiverse

## N.B. software from this repository may not have been tested as
## extensively as that contained in the main release, although it includes
## newer versions of some applications which may provide useful features.
## Also, please note that software in backports WILL NOT receive any review
## or updates from the Ubuntu security team.
deb http://mirrors.aliyun.com/ubuntu bionic-backports main restricted universe multiverse
# deb-src http://mirrors.aliyun.com/ubuntu bionic-backports main restricted universe multiverse

## Uncomment the following two lines to add software from Canonical's
## 'partner' repository.
## This software is not part of Ubuntu, but is offered by Canonical and the
## respective vendors as a service to Ubuntu users.
# deb http://archive.canonical.com/ubuntu bionic partner
# deb-src http://archive.canonical.com/ubuntu bionic partner

deb http://mirrors.aliyun.com/ubuntu bionic-security main restricted
# deb-src http://mirrors.aliyun.com/ubuntu bionic-security main restricted
deb http://mirrors.aliyun.com/ubuntu bionic-security universe
# deb-src http://mirrors.aliyun.com/ubuntu bionic-security universe
deb http://mirrors.aliyun.com/ubuntu bionic-security multiverse
# deb-src http://mirrors.aliyun.com/ubuntu bionic-security multiverse
```

## Maven

在.m2/setting.xml替换对应部分为以下内容：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
    xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 http://maven.apache.org/xsd/settings-1.0.0.xsd">
    <!--
        <localRepository>~/.m2</localRepository>
    -->
    <pluginGroups>
    </pluginGroups>
    <proxies>
    </proxies>
    <servers>
    </servers>
    <!--
        <mirrorOf>central</mirrorOf> 这里最好不要写成*号，否则你项目中的pom中配置repository不生效
    -->
    <mirrors>
        <mirror>
            <id>nexus-aliyun</id>
            <mirrorOf>central</mirrorOf>
            <name>Nexus Aliyun</name>
            <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
        </mirror>
    </mirrors>
    <profiles>
        <profile>
            <repositories>
                <repository>
                    <id>nexus</id>
                    <name>local private nexus</name>
                    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>false</enabled>
                    </snapshots>
                </repository>
            </repositories>
            <pluginRepositories>
                <pluginRepository>
                    <id>nexus</id>
                    <name>local private nexus</name>
                    <url>http://maven.aliyun.com/nexus/content/groups/public/</url>
                    <releases>
                        <enabled>true</enabled>
                    </releases>
                    <snapshots>
                        <enabled>true</enabled>
                    </snapshots>
                </pluginRepository>
            </pluginRepositories>
        </profile>
    </profiles>
</settings>
```

## pip

对某个包使用清华源：sudo pip2 install -i <https://pypi.tuna.tsinghua.edu.cn/simple>  \[package-name]

要一直生效用命令存在配置文件中 pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

## bazel和npm

添加

--registry https://registry.npm.taobao.org 对编译时下载的所有依赖使用淘宝镜像

或者对部分依赖使用镜像，例如phantomjs

export PHANTOMJS_CDNURL=https://npm.taobao.org/mirrors/phantomjs

## 我的bash环境变量配置

```
export PROXY_IP=127.0.0.1
export PROXY_PORT=8118

export JAVA_HOME=/usr/lib/jvm/java-8-oracle
#export JAVA_HOME="$(dirname $(dirname $(realpath $(which javac))))"
#export M2_HOME=/usr/lib/mvn/mvn
#export GOPATH=$HOME/go
#export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64
export JRE_HOME=$JAVA_HOME/jre
export CLASSPATH=.:$JAVA_HOME/lib:/lib:
export M2_HOME=/usr/share/maven
export MAVEN_OPTS="-Xms256m"

# WORKSPACE
export ONOS_ROOT=~/onos
source $ONOS_ROOT/tools/dev/bash_profile

export PATH="$PATH:%HOME/bin"
export LC_ALL="en_US.UTF-8"

# alias
alias speed="watch -n 1 \"ifconfig ens33 |grep bytes\""
alias localproxy="sudo systemctl start v2ray.service ; sudo systemctl start privoxy.service"
alias localunproxy="sudo systemctl stop v2ray.service ; sudo systemctl stop privoxy.service"

alias proxy="export HTTP_PROXY=http://$PROXY_IP:$PROXY_PORT; export HTTPS_PROXY=https://$PROXY_IP:$PROXY_PORT; export http_proxy=http://$PROXY_IP:$PROXY_PORT; export https_proxy=https://$PROXY_IP:$PROXY_PORT"
alias unproxy="unset HTTP_PRPXY;     unset HTTPS_PROXY"
alias fishunproxy="set -e HTTP_PROXY ; set -e HTTPS_PROXY; set -e http_proxy; set -e https_proxy"

alias gitproxy="git config --global http.proxy http://$PROXY_IP:$PROXY_PORT;git config --global https.proxy http://$PROXY_IP:$PROXY_PORT "
alias gitunproxy="git config --global --unset-all http.proxy;git config --global --unset-all https.proxy "

alias chrome="chromium-browser --proxy-server=socks5://127.0.0.1:1080"
alias pipmirror="pip3 config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple"
alias pipunmirror="pip3 config unset global.index-url"

alias myip="curl cip.cc"
#alias myip="curl ifconfig.cc"
```

## 谷歌搜索和谷歌学术也有镜像站

例如google-fix，不用翻墙也能访问，但是搜索结果中被墙的网站还是会无妨访问。

Did you find this page helpful? Consider sharing it 🙌