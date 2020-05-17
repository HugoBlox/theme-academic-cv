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
![{{<code-em>}}代替テキスト{{</code-em>}}]({{<code-em>}}./画像名{{</code-em>}})
``` 
{{<alert note>}}
「画像名」には拡張子も含めてください  
{{</alert>}}
画像のサイズを変えたい、または画像を左寄せ・右寄せしたい場合は下の{{<jump "画像の挿入" "Shortcode">}}を参照してください

# Shortcodes
ShortcodesとはHugo独自の機能で、Markdownファイルに書くことができるスニペットです。  
## 画像の挿入
{{<escape-shortcode-single>}} figure src="{{<code-em>}}./画像名{{</code-em>}}" title="{{<code-em>}}代替テキスト{{</code-em>}}" {{</escape-shortcode-single>}}
{{<alert note>}}
「画像名」には拡張子も含めてください  
{{</alert>}}
### 画像の左寄せ、右寄せ
{{< collapsable 左寄せ >}}
{{<escape-shortcode-single>}} figure src="{{<code-em>}}./画像名{{</code-em>}}" title="{{<code-em>}}代替テキスト{{</code-em>}}"  class="left" {{</escape-shortcode-single>}}
{{< /collapsable >}}
{{< collapsable 右寄せ >}}
{{<escape-shortcode-single>}} figure src="{{<code-em>}}./画像名{{</code-em>}}" title="{{<code-em>}}代替テキスト{{</code-em>}}"  class="right" {{</escape-shortcode-single>}}
{{< /collapsable >}}
{{< collapsable "左寄せ(float)" >}}
{{<escape-shortcode-single>}} figure src="{{<code-em>}}./画像名{{</code-em>}}" title="{{<code-em>}}代替テキスト{{</code-em>}}"  class="float-left" {{</escape-shortcode-single>}}
{{< /collapsable >}}
{{< collapsable "右寄せ(float)" >}}
{{<escape-shortcode-single>}} figure src="{{<code-em>}}./画像名{{</code-em>}}" title="{{<code-em>}}代替テキスト{{</code-em>}}"  class="float-right" {{</escape-shortcode-single>}}
{{< /collapsable >}}
他にも、画像の幅・高さなどをカスタムすることができます。詳しくは[公式ドキュメント](https://gohugo.io/content-management/shortcodes/#figure)  を参照してください。

## Youtube動画埋め込み
{{<escape-shortcode-single>}} youtube {{<code-em>}}動画のID{{</code-em>}} {{</escape-shortcode-single>}} 
{{<alert note >}}
YoutubeのURLは「https://www.youtube.com/watch?v=動画のID」という形式になっています
{{</alert>}}

## Unity WebGLの埋め込み
[ランダムさんの記事](https://ch-random.net/post/93/)の内容を少し改変した自作Shortcodeです
{{<escape-shortcode-single>}} unity src="{{<code-em>}}URL{{</code-em>}}"　{{</escape-shortcode-single>}}

## ツイートの埋め込み
{{<escape-shortcode-single>}} tweet {{<code-em>}}ツイートID{{</code-em>}} {{</escape-shortcode-single>}}
{{<alert note >}}
  ツイートのURLは「https://twitter.com/.../status/ツイートID」という形式になっています。
{{</alert>}}  

## 折りたたみ
自作Shortcodeです。折りたたまれている時、展開された時ともに、Markdown記法を用いた文章が使えます。
<pre><code class="language-bash hljs">{{<shortcode-tag-left>}} collapsable "{{<code-em>}}`折りたたまれている時に表示する文字列`{{</code-em>}}" {{<shortcode-tag-right>}}
  {{<code-em>}}展開された時に表示する文章1{{</code-em>}}  
  {{<code-em>}}**展開された時に表示する文章2**{{</code-em>}}  
  {{<code-em>}}> 展開された時に表示する文章3{{</code-em>}}  
{{<shortcode-tag-left>}} /collapsable {{<shortcode-tag-right>}}</code></pre>

下のように表示されます。
{{< collapsable "`折りたたまれている時に表示する文字列`">}}
  展開された時に表示する文章1  
  **展開された時に表示する文章2**  
  > 展開された時に表示する文章3  
{{< /collapsable>}}

## ページへのリンク（カード表示）
自作Shortcodeです。
{{<escape-shortcode-single>}} page "{{<code-em>}}表示したいページのパス(ホームからの相対パス){{</code-em>}}" {{</escape-shortcode-single>}}
例えば`{{</* page "project/online-yukosai-2020" */>}}`と記述すると、下のように表示されます。
{{< page "project/online-yukosai-2020" >}}

## ページ内リンク  
クリックすると同じページ内の見出しに飛ぶことができるリンクを挿入する自作Shortcodeです。
Markdown記法だけでも書けるのですが、見出し付近がナビゲーションバーに隠れてしまうバグがあるため、それを解消しています。
{{<escape-shortcode-single>}} jump "{{<code-em>}}見出し名{{</code-em>}}" "{{<code-em>}}リンクテキスト{{</code-em>}}" {{</escape-shortcode-single>}}
`"リンクテキスト"`は省略可能です。  
例えば`{{</*jump "折りたたみ"*/>}}`と書くと{{<jump "折りたたみ">}}のようなリンクが作れます。

# その他
## 数式
$\LaTeX$ 記法を用いることで数式を表示することができます。数式は`$$`で囲む必要があります。
```math
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
{{<escape-shortcode-single>}} slide-frame src="{{<code-em>}}スライド名{{</code-em>}}" {{</escape-shortcode-single>}}
{{<slide-frame src="test">}}