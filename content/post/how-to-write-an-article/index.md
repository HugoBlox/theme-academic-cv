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

このサイトでの記事の書き方をまとめました。英語でも構わない場合は[公式ドキュメント](https://sourcethemes.com/academic/docs/writing-markdown-latex/)も参照してください。

# Markdown記法  

全ての記事はMarkdown記法で書く必要があります。書き方については[このサイト](https://qiita.com/kamorits/items/6f342da395ad57468ae3)を参照してください。

## 画像を挿入する場合  

```md
![代替テキスト](./画像名)
```

{{<alert note>}}
「画像名」には拡張子も含めてください  
{{</alert>}}
画像のサイズを変えたい、または画像を左寄せ・右寄せしたい場合は下の[画像の挿入](#画像の挿入)を参照してください

# Shortcodes  

ShortcodesとはHugo独自の機能で、Markdownファイルに書くことができるスニペットです。  

## 画像の挿入  

```md
{{</*figure src="./画像名" title="代替テキスト"*/>}}
```

{{<alert note>}}
「画像名」には拡張子も含めてください  
{{</alert>}}

### 画像の左寄せ、右寄せ  

{{< collapsable 左寄せ >}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="left"*/>}}
```

{{< /collapsable >}}
{{< collapsable 右寄せ >}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="right"*/>}}
```

{{< /collapsable >}}
{{< collapsable "左寄せ(float)" >}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="float-left"*/>}}
```

{{< /collapsable >}}
{{< collapsable "右寄せ(float)" >}}

```md
{{</*figure src="./画像名" title="代替テキスト"  class="float-right"*/>}}
```

{{< /collapsable >}}
他にも、画像の幅・高さなどをカスタムすることができます。詳しくは[公式ドキュメント](https://gohugo.io/content-management/shortcodes/#figure)  を参照してください。

## Youtube動画埋め込み  

```md
{{</*youtube 動画のID*/>}}
```

{{<alert note >}}
YoutubeのURLは「https://www.youtube.com/watch?v=動画のID」という形式になっています
{{</alert>}}

## Unity WebGLの埋め込み  

[ランダムさんの記事](https://ch-random.net/post/93/)の内容を少し改変した自作Shortcodeです。Unity WebGLのゲームをページ内でプレイすることができます。

```md
{{</*unity src="URL"*/>}}
```

## ツイートの埋め込み  

```md
{{</*tweet ツイートID*/>}}
```

{{<alert note >}}
  ツイートのURLは「https://twitter.com/.../status/ツイートID」という形式になっています。
{{</alert>}}  

## 折りたたみ  

```md
{{</*collapsable "折りたたまれている時に表示する文字列"*/>}}
  展開された時に表示する文章(複数行可)
{{</*/collapsable*/>}}
```

自作Shortcodeです。折りたたまれている時、展開された時ともに、Markdown記法を用いた文章が使えます。例えば

```md
{{</*collapsable "`Hello`"*/>}}
  foo
  *bar*
  > Hello, World!
{{</*/collapsable*/>}}
```

のように書けば、下のように表示されます。

{{< collapsable "`Hello`">}}
  foo  
  *bar*
  > Hello, World!
{{< /collapsable>}}

## ページへのリンク（カード表示）  

自作Shortcodeです。

```md
{{</*page "表示したいページのパス(ホームからの相対パス)"*/>}}
```

例えば`{{</* page "project/opu-virtual-festival-2020"*/>}}`と記述すると、下のように表示されます。
{{< page "project/opu-virtual-festival-2020" >}}

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

Markdown記法で簡易的なスライドを作成することができます。

```md
{{</*slide-frame src="スライド名"*/>}}
```

{{<slide-frame src="slide-introduction">}}
