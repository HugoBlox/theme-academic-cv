---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Hugo Memo"
subtitle: "Hugoを使う際のメモ"
summary: "サイトには表示されません。"
authors: ["Juris710"]
tags: []
categories: []
date: 2020-04-29T13:44:51+09:00
lastmod: 2020-04-29T13:44:51+09:00
featured: false
draft: true

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---
# はじめに
サイト制作者Juris710のメモです。  `draft=true`を設定しているため、サイトには表示されません。

# 記事を新規作成する方法
{{< alert note >}}
「記事名」は英語（すべて小文字）で、単語間はハイフン（-）でつなぐのが望ましい
{{</ alert >}}
1. コマンドラインで`hugo new --kind post post/記事名` を実行
2. `content/post/記事名/index.md`に記事を書く  

# 著者を追加する方法
1. コマンドラインで`hugo new --kind authors authors/著者名`を実行
2. `content/authors/著者名/index.md`を編集
3. `content/authors/著者名/avatar.jpg`を任意の画像（png または jpg）に置き換え

# HugoとHugo Extendedの違い
[引用](https://sanpobiyori.info/20190503/)
>通常のhugoとの違いは、ExtendedではSASS/SCSSが使える点が異なります。
>githubで公開されているテーマなどの中にもSASS/SCSSが使用されているものもがあり、そういったテーマを使用する場合は通常のhugoではエラーとなってしまい、記事の生成を行うことが出来ません。

# homeで使っているWidgetを他のページでも使う方法
1. 使いたいページ名のフォルダに`index.md`を作成
2. `index.md`のフロントマッターを編集
    ```toml
    type = "widget_page"
    headless = false  # Homepage is headless, other widget pages are not.
    ```  
3. `themes/academic/exampleSite/content/home`から使いたいWidgetを移動  

# 記事に挿入する画像の保存場所
記事のindex.mdファイルがあるフォルダに画像を追加

