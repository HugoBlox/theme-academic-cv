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
画像のサイズを変えたい、または画像を左寄せ・右寄せしたい場合は下の{{<jump "画像の挿入" "Shortcode">}}を参照してください

# Shortcodes
ShortcodesとはHugo独自の機能で、Markdownファイルに書くことができるスニペットです。  
## 画像の挿入
```
{{</* figure src="./画像名" title="代替テキスト" */>}}
```
{{<alert note>}}
「画像名」には拡張子も含めてください  
{{</alert>}}
### 画像の左寄せ、右寄せ
{{< collapsable 左寄せ >}}
```
{{</* figure src="./画像名" title="代替テキスト" class="left" */>}}
```
{{< /collapsable >}}
{{< collapsable 右寄せ >}}
```
{{</* figure src="./画像名" title="代替テキスト" class="right" */>}}
```
{{< /collapsable >}}
{{< collapsable "左寄せ(float)" >}}
```
{{</* figure src="./画像名" title="代替テキスト" class="float-left" */>}}
```
{{< /collapsable >}}
{{< collapsable "左寄せ(float)" >}}
```
{{</* figure src="./画像名" title="代替テキスト" class="float-right" */>}}
```
{{< /collapsable >}}



他にも、画像の幅・高さなどをカスタムすることができます。詳しくは[公式ドキュメント](https://gohugo.io/content-management/shortcodes/#figure)  を参照してください。

## Youtube動画埋め込み
```  
{{</* youtube 動画のID */>}}
```  
{{<alert note >}}
YoutubeのURLは「https://www.youtube.com/watch?v=動画のID」という形式になっています
{{</alert>}}

## Unity WebGLの埋め込み
[ランダムさんの記事](https://ch-random.net/post/93/)の内容を少し改変した自作Shortcodeです
```
{{</* unity src="URL"*/>}}
```

## ツイートの埋め込み
```
{{</* tweet ツイートID */>}}
```
{{<alert note >}}
  ツイートのURLは「https://twitter.com/.../status/ツイートID」という形式になっています。
{{</alert>}}  

## 折りたたみ
自作Shortcodeです。折りたたまれている時、展開された時ともに、Markdown記法を用いた文章が使えます。
```
{{</* collapsable "`折りたたまれている時に表示する文字列`" */>}}
  展開された時に表示する文章1  
  **展開された時に表示する文章2**  
  > 展開された時に表示する文章3  
{{</* /collapsable */>}}
```
下のように表示されます。
{{< collapsable "`折りたたまれている時に表示する文字列`">}}
  展開された時に表示する文章1  
  **展開された時に表示する文章2**  
  > 展開された時に表示する文章3  
{{< /collapsable>}}

## ページへのリンク（カード表示）
自作Shortcodeです。
```
{{</* page "表示したいページのパス(ホームからの相対パス)" */>}}
```
例えば`{{</* page "project/online-yukosai-2020" */>}}`と記述すると、下のように表示されます。
{{< page "project/online-yukosai-2020" >}}

## ページ内リンク  
クリックすると同じページ内の見出しに飛ぶことができるリンクを挿入する自作Shortcodeです。
Markdown記法だけでも書けるのですが、見出し付近がナビゲーションバーに隠れてしまうバグがあるため、それを解消しています。
```
{{</* jump  "見出し名" "リンクテキスト"*/>}}
```
`"リンクテキスト"`は省略可能です。  
例えば`{{</*jump "折りたたみ"*/>}}`と書くと{{<jump "折りたたみ">}}のようなリンクが作れます。

# その他
## スライド
Markdown記法で簡易的なスライドを作成することができます。
```
{{</* slide-frame src="スライド名" */>}}
```
{{<slide-frame src="example">}}