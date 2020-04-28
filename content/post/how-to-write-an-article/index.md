---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "記事の書き方"
subtitle: "部員用"
summary: "記事を投稿する方法のまとめです。"
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
# 記事を新規作成する方法
{{< alert note >}}
「記事名」は英語（すべて小文字）で、単語間はハイフン（-）でつなぐのが望ましい
{{</ alert >}}
1. `hugo new --kind post post/記事名` を実行
2. `content/post/記事名/index.md`に記事を書く  

# 記事に画像を挿入する方法
1. 記事のindex.mdファイルがあるフォルダに画像を追加
2. 画像を挿入したい箇所に下記を入力  
  {{<alert note>}}
  「画像名」には拡張子も含めること  
  {{</alert>}}
   1. シンプル
    ```md
    ![代替テキスト](./画像名)
    ```
   2. カスタム
    ```
    {{</* figure src="./画像名" title="代替テキスト" */>}}
    ```

# Markdown記法
全ての記事はMarkdown記法で書く必要があります。（[書き方の参考](https://qiita.com/tbpgr/items/989c6badefff69377da7)）

# Shortcodes
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

