---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "記事の書き方"
subtitle: "部員用"
summary: "(部員用)記事を投稿する方法のまとめです。"
authors: ["juris710"]
tags: ["Markdown", "Hugo"]
categories: []
date: 2020-04-28T00:01:09+09:00
lastmod: 2020-04-28T00:01:09+09:00
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
このサイトでの記事の書き方をまとめました。

# Markdown記法
全ての記事はMarkdown記法で書く必要があります。（[書き方の参考](https://qiita.com/kamorits/items/6f342da395ad57468ae3)）
## 画像を挿入する場合
```md
![代替テキスト](./画像名)
``` 
{{<alert note>}}
「画像名」には拡張子も含めてください  
{{</alert>}}
画像のサイズを変えたい、または画像を左寄せ・右寄せしたい場合は下のShortcodesを参照してください

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
自作Shortcodeです。`展開された時に表示する文章`にはMarkdown記法を用いることができます・
```
{{</* collapsable "折りたたまれている時に表示する文字列" */>}}
  展開された時に表示する文章
{{</* /collapsable */>}}
```
