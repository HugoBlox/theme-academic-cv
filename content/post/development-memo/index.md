---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "開発 Memo"
subtitle: "サイト開発のメモ"
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

# Hugo

## 記事を新規作成する方法

{{< alert note >}}
「記事名」は英語（すべて小文字）で、単語間はハイフン（-）でつなぐのが望ましい
{{</ alert >}}

1. コマンドラインで`hugo new --kind post post/記事名` を実行
2. `content/post/記事名/index.md`に記事を書く  

## 著者を追加する方法

1. コマンドラインで`hugo new --kind authors authors/著者名`を実行
2. `content/authors/著者名/index.md`を編集
3. `content/authors/著者名/avatar.jpg`を任意の画像（png または jpg）に置き換え

## HugoとHugo Extendedの違い

[引用](https://sanpobiyori.info/20190503/)
>通常のhugoとの違いは、ExtendedではSASS/SCSSが使える点が異なります。
>githubで公開されているテーマなどの中にもSASS/SCSSが使用されているものもがあり、そういったテーマを使用する場合は通常のhugoではエラーとなってしまい、記事の生成を行うことが出来ません。

## その他

以下の方法でPageのMarkdownが取得できる

```html
<script>
    console.log({{.Page.RawContent}});
</script>
```

# Known Issues

## Nested Shortcodes

`{{.Inner}}`を用いるShortcodeで別のShortcodeがある文章を囲むと上手く表示されない。

- `{{.Inner | markdownify}}`だと、Markdown→Htmlの変換は問題ないが、特殊文字(`&lt;` → `<`など)が上手く変換されない
- `{{.Inner | safeHTML}}`だと、特殊文字(`&lt;` → `<`など)の変換は問題ないがMarkdownからHtmlに変換されない

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

## Spoiler

自作スムーススクロール機能と競合して、ボタンを押した後の挙動がおかしくなる。

### 対処法

以下でフィルターをかける。(jQuery)

```js
.filter(function(){
  return !($(this).closest(".spoiler").length); //先祖にclass="spoiler"がない
})
```

# Markdown

## コードの描画確認

```c:helloworld.c
#include<stdio.h>
int main(void){
  printf("Hello, World!");
  return 0;
}
```

```kt:test.kt
fun main(){
  println("Hello, World!")
}
```

```lua:test.lua
print("Hello, World!")
```

`aiueo`

## コードのエスケープ

`````````md
``````md
```c
#include<stdio.h>

int main(void){
    printf("Hello, World!");
    return 0;
}
```
``````
`````````

下のように表示される

``````md
```c
#include<stdio.h>

int main(void){
    printf("Hello, World!");
    return 0;
}
```
``````

# Academic Theme

## homeで使っているWidgetを他のページでも使う方法

1. 使いたいページ名のフォルダに`index.md`を作成
2. `index.md`のフロントマッターを編集

    ```toml
    type = "widget_page"
    headless = false  # Homepage is headless, other widget pages are not.
    ```  

3. `themes/academic/exampleSite/content/home`から使いたいWidgetを移動  

## 記事に挿入する画像の保存場所

記事のindex.mdファイルがあるフォルダに画像を追加

## レイアウトのhtmlファイルに関するメモ

{{<write-html>}}
<!-- 参考：https://www.conifer.jp/csstest/file-tree/index.html -->
<style>
.tree {
  position: relative;
  background: white;
  margin:0 0 0 50px;
  font-family: 'Roboto Mono', monospace;
  font-size: .85rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
}
.tree span {
  font-size: 13px;
  font-style: italic;
  letter-spacing: .4px;
  color: #a8a8a8;
}
.tree .fa-folder-open, .tree .fa-folder {
  color: #007bff;
}
.tree .fa-html5 {
  color: #f21f10;
}
.tree ul {
  padding-left: 5px;
  list-style: none;
}
.tree ul li {
  position: relative;
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 15px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.tree ul li:before {
  position: absolute;
  top: 15px;
  left: 0;
  width: 10px;
  height: 1px;
  margin: auto;
  content: '';
  background-color: #666;
}
.tree ul li:after {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 100%;
  content: '';
  background-color: #666;
}
.tree ul li:last-child:after {
  height: 15px;
}
.tree ul a {
  cursor: pointer;
}
.tree ul a:hover {
  text-decoration: none;
}
</style>
<div class="tree">
    <ul>
        <li><i class="fa fa-folder-open"></i> layouts
            <ul>
                <li><i class="fa fa-folder-open"></i> _default
                    <ul>
                        <li><i class="fab fa-html5"></i> list.html
                            <ul>
                                <li>Taxonomies(tags, categoriesなど)一覧表示</li>
                                <li>特定のTaxonomiesの付いた記事一覧表示</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><i class="fa fa-folder-open"></i> authors
                    <ul>
                        <li><i class="fab fa-html5"></i> list.html
                            <ul>
                                <li>著者のプロフィール表示(1人のみ)</li>
                            </ul>
                        </li>
                        <li><i class="fab fa-html5"></i> terms.html
                            <ul>
                                <li>著者一覧表示</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><i class="fa fa-folder-open"></i> project
                    <ul>
                        <li><i class="fab fa-html5"></i> list.html
                            <ul>
                                <li>プロジェクト一覧</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><i class="fa fa-folder-open"></i> tag
                    <ul>
                        <li><i class="fab fa-html5"></i> list.html
                            <ul>
                                <li>タグ一覧表示</li>
                                <li>特定のタグがついた記事の一覧表示</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
    </ul>
</div>
{{</write-html>}}

## TableOfContents

### 見出しのハイライト機能

- Academic独自(他のthemeにはない)
- 普段は`class="nav-link"`
- 現在ブラウザ上部に表示されている見出しは、`class="nav-link active"`に変わる
- 記事のhtmlのscriptを見る限り、特定のライブラリーで実装されているわけではなさそう
- Bootstrapが怪しい? [参考](https://afeld.github.io/bootstrap-toc/)

# Javascript

## Objectのクラス名表示

`typeof element`だと`Object`としか表示されない。

```js
console.log(Object.prototype.toString.call(element));
```
