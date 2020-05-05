---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "プログラマーが使えるようになるべきファイル形式(個人的)"
subtitle: ""
summary: "脱プログラミング初心者向け"
authors: ["juris710"]
tags: ["Markdown", "JSON", "XML"]
categories: []
date: 2020-05-05T21:46:39+09:00
lastmod: 2020-05-05T21:46:39+09:00
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
projects: ["online-yukosai-2020"]
---
プログラミング入門講座を学び、Unity/Android/Webなどの開発を始めた脱プログラミング初心者に向けた記事です。開発する際に内容を理解出来たり、自分で書けるようになったほうがいいと思うファイル形式を3つ紹介します。

# Markdown

# Json

# XML
XMLとは、文書やデータの意味や構造を記述するためのマークアップ言語の一つであり、マークアップ言語とは、「タグ」と呼ばれる特定の文字列で地の文に情報の意味や構造、装飾などを埋め込んでいく言語です。[(引用)](http://e-words.jp/w/XML.html)  
## Android
Android StudioでのAndroidアプリ開発では、UIのレイアウトやスタイル、多言語対応の文字列などに関してxmlで記述されています。  
## Unity
Unity開発でも将来的にXMLを使うことになるかもしれません。  
Unity 2019から`UI Elements`という新しいUIシステムが使えます。`UI Elements`はwebに近い設計で、UIをレイアウト、スタイル、ロジックに分けて記述します。XMLをベースとしたUXMLファイルを記述することでレイアウトをカスタマイズすることができます。
{{<alert note>}}
`UI Builder`(preview版)を使えば、マウスクリックやドラッグ＆ドロップなどでレイアウトやスタイルをカスタマイズできます。
{{</alert>}}
`UI Elements`は現在エディタ拡張のUI(IMGUI)を置き換えるものとなっていますが、将来的にはゲーム内UIにも対応し、uGUIを置き換える予定とのことです。

# 参考
- https://blogs.unity3d.com/jp/2019/04/23/whats-new-with-uielements-in-2019-1/  
- https://www.youtube.com/watch?v=5UTiLOIU8TE  
