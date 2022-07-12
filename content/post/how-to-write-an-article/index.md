---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "記事の書き方"
subtitle: "部員用"
summary: "(部員用)記事を投稿する方法のまとめです。"
authors: ["juris710"]
tags: ["Markdown", "Hugo"]
categories: []
date: 2020-04-28T00:01:09+09:00
featured: false
draft: false

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

このサイトでの記事の書き方をまとめました。英語でも構わない場合は[公式ドキュメント](https://wowchemy.com/docs/)も参照してください。

# Markdown記法  

全ての記事はMarkdown記法で書く必要があります。書き方については[このサイト](https://qiita.com/kamorits/items/6f342da395ad57468ae3)を参照してください。

## 画像を挿入する場合  

```md
![代替テキスト](./画像名)
```

{{<callout note>}}
「画像名」には拡張子も含めてください  
{{</callout>}}
画像のサイズを変えたい、または画像を左寄せ・右寄せしたい場合は下の[画像の挿入](#画像の挿入)を参照してください

# Shortcodes  

ShortcodesとはHugo独自の機能で、Markdownファイルに書くことができるスニペットです。  

## 画像の挿入  

```md
{{</*figure src="./画像名" title="代替テキスト"*/>}}
```

{{<callout note>}}
「画像名」には拡張子も含めてください  
{{</callout>}}

### 画像の左寄せ、右寄せ  

{{<spoiler text="左寄せ ">}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="left"*/>}}
```

{{</spoiler>}}
{{<spoiler text="右寄せ ">}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="right"*/>}}
```

{{</spoiler>}}
{{<spoiler text="左寄せ(float)" >}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="float-left"*/>}}
```

{{</spoiler>}}
{{<spoiler text="右寄せ(float)" >}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="float-right"*/>}}
```

{{</spoiler>}}
他にも、画像の幅・高さなどをカスタムすることができます。詳しくは[公式ドキュメント](https://gohugo.io/content-management/shortcodes/#figure)  を参照してください。

## Youtube動画埋め込み  

```md
{{</*youtube 動画のID*/>}}
```

{{<callout note >}}
YoutubeのURLは「https://www.youtube.com/watch?v=動画のID」という形式になっています
{{</callout>}}

## Unity WebGLの埋め込み  

ランダムさんの記事(現在は非公開)の内容を少し改変した自作Shortcodeです。Unity WebGLのゲームをページ内でプレイすることができます。

```md
{{</*unity src="URL"*/>}}
```

## ツイートの埋め込み  

```md
{{</*tweet ツイートID*/>}}
```

{{<callout note >}}
  ツイートのURLは「https://twitter.com/.../status/ツイートID」という形式になっています。
{{</callout>}}

## 折りたたみ  

```md
{{</*spoiler "折りたたまれている時に表示する文字列"*/>}}
  展開された時に表示する文章(複数行可)
{{</*/spoiler*/>}}
```

折りたたまれている時、展開された時ともに、Markdown記法を用いた文章が使えます。例えば

```md
{{</*spoiler "`Hello`"*/>}}
  foo
  *bar*
  > Hello, World!
{{</*/spoiler*/>}}
```

のように書けば、下のように表示されます。

{{<spoiler text="`Hello`">}}
  foo  
  *bar*
  > Hello, World!
{{< /spoiler>}}

## ページへのリンク

```md
{{</*cite page="表示したいページのパス(ホームからの相対パス)" view="表示形式"*/>}}
```

表示形式には1から4の数値が指定できます。

例えば、`{{</*cite page="project/opu-virtual-festival-2020" view="1"*/>}}`と記述すると、下のように表示されます。
{{<cite page="project/opu-virtual-festival-2020" view="1">}}

`view="2"`に変えると、下のように表示されます。
{{<cite page="project/opu-virtual-festival-2020" view="2">}}

`view="3"`に変えると、下のように表示されます。
{{<cite page="project/opu-virtual-festival-2020" view="3">}}

`view="4"`に変えると、下のように表示されます。
{{<cite page="project/opu-virtual-festival-2020" view="4">}}

# その他  

## 数式  

$\LaTeX$ 記法を用いることで数式を表示することができます。数式は`$$`で囲む必要があります。

```md
$$ F=G\frac{Mm}{r^2} $$
```

下のように表示されます。
$$ F=G\frac{Mm}{r^2} $$
`$$`の代わりに`$`で囲むと $ F=G\frac{Mm}{r^2} $ のようにインライン表示できます。

## Diagrams  

mermaid記法を使った図の挿入が可能です。

``````md
```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```
``````

以下のように表示されます。

```mermaid
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
```

## スライド  

このブログでは、Markdown記法で簡易的なスライドを作成することができます。

作成したスライドを記事内に表示することができます。

```md
{{</*slide-frame src="スライド名"*/>}}
```

{{<slide-frame src="slide-introduction">}}
