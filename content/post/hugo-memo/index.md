---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Hugo Memo"
subtitle: "Hugoを使う際のメモ"
summary: "サイトには表示されません。"
authors: ["juris710"]
tags: []
categories: []
date: 2020-04-29T13:44:51+09:00
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

# Known Issues
## ページ内リンクの不具合
記事内でページ内リンク(例えば[はじめに](#はじめに))を使う際、移動先の一部がヘッダーによって隠れてしまう。
### 解決法1
academic.jsの関数`scrollToAnchor`をページ内リンククリック時に毎回実行するように
### 解決法2
関数`scrollToAnchor`を無効化し、以下をcustom.scssに追加
{{<collapsable "custom.scss">}}
```scss
$header-height-default: 70px;
$header-height-small: 50px;
.article-style h1[id],.article-style h2[id],.article-style h3[id],.article-style h4[id],.article-style h5[id],.article-style h6[id]{
    padding-top: $header-height-default;
    margin-top: -1 * $header-height-default;
    @include media-breakpoint-down(md) {
        padding-top: $header-height-small;
        margin-top: -1 * $header-height-small;
    }
}
```
{{</collapsable>}}
#### 問題
`{{</*page*/>}}`などの形がおかしくなる可能性あり  
解決のためには対象クラスを大量に指定する必要がある
{{<alert note>}}
現状では解決法１を使っている
{{</alert>}}

## ナビゲーションバーの不具合
現在いるページに該当するナビゲーションバーが太字になる（クラスに'active'が追加される機能）の不具合
### 例
ナビゲーションバーの`about`が`post/about-this-page`にいるときに'active'になってしまう
### 対処法
`themes\academic\layouts\partials\navbar.html`の79～90行目を修正

# academicのlayoutのhtmlファイルに関するメモ
## _default/list.html
- Taxionomy(tags, categoriesなど)一覧表示
- 特定のTaxionomyの付いた記事一覧表示
## authors
### authors/list.html
著者のプロフィール表示(1人のみ)
### authors/terms.html
著者一覧表示