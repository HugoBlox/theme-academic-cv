---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "(個人的)プログラマーなら使えたほうがいいファイル形式"
subtitle: ""
summary: "脱プログラミング初心者向け"
authors: ["juris710"]
tags: ["Markdown", "JSON", "XML"]
categories: []
date: 2020-05-05T21:46:39+09:00
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
projects: ["opu-virtual-festival-2020"]
---
プログラミング入門講座を学び、UnityやAndroid、Webなどの開発を始めた脱プログラミング初心者に向けた記事です。何を開発するかに関わらず、内容を理解出来たり自分で書けたりすれば役にたつと思うファイル形式を3つ紹介します。

# Markdown  

Markdown（マークダウン）は、文書を記述するための軽量マークアップ言語のひとつです。
ソフトウェアのインストールし使用する前の注意事項などを記述した`Readme`ファイルなどに用いられています。また、このサイトの記事も全てMarkdownファイルです。  

# JSON  

JSONは`Javascript Object Notation`の略で、データを記述するための言語です。

## Unity  

Unityでは`JsonUtility`クラスを使用することで、オブジェクトをJSON形式の文字列に変換したり、逆にJSON形式の文字列からオブジェクトを生成することができます。といっても、オブジェクト指向に詳しくない人にはよく分からない説明だったと思います。簡単に言えば、JSONファイルからキャラクターのステータスなどのデータを読み込むことがとても簡単にできます。

## Web API  

Web APIとは、ものすごく乱暴に言えば、HTTP通信によって利用できる便利機能です。様々な種類のWebAPIがあり、WebAPIごとに特定のURLにアクセスすることで様々な機能を利用することができます。例えば、天気予報や鉄道の路線情報といったデータを取得したり、AIを用いた画像認識を利用したりすることが可能です。WebAPIを利用した結果は、JSON形式やXML形式の文字列で取得できることが多いです。

# XML  

XMLは`Extensible Markup Language`の略で、文書やデータの意味や構造を記述するためのマークアップ言語の一つです。マークアップ言語とは、「タグ」と呼ばれる特定の文字列で地の文に情報の意味や構造、装飾などを埋め込んでいく言語です。

## Web API  

WebAPIを利用した結果は、JSON形式やXML形式の文字列で取得できることが多いです。詳しくは{{<jump "#JSON">}}を参照してください。

## Android  

Android StudioでのAndroidアプリ開発では、UIのレイアウトやスタイル、多言語対応の文字列などに関してxmlで記述されています。  

## Unity  

Unity開発でも将来的にXMLを使うことになるかもしれません。  
Unity 2019から`UI Elements`という新しいUIシステムが使えます。`UI Elements`はwebに近い設計で、UIをレイアウト、スタイル、ロジックに分けて記述します。XMLをベースとしたUXMLファイルを記述することでレイアウトをカスタマイズすることができます。
{{<alert note>}}
`UI Builder`(preview版)を使えば、マウスクリックやドラッグ＆ドロップなどでレイアウトやスタイルをカスタマイズできます。
{{</alert>}}
`UI Elements`は現状、エディタ拡張のUI(現在のIMGUI)にしか対応していませんが、将来的にはゲーム内UI(現在のuGUI)にも対応する予定とのことです。

# 参考  

- https://ja.wikipedia.org/wiki/Markdown
- https://ja.wikipedia.org/wiki/%E3%83%AA%E3%83%BC%E3%83%89%E3%83%9F%E3%83%BC
- https://ja.wikipedia.org/wiki/JavaScript_Object_Notation
- https://qiita.com/mikan3rd/items/ba4737023f08bb2ca161
- https://qiita.com/NagaokaKenichi/items/df4c8455ab527aeacf02
- https://itpropartners.com/blog/8546/
- https://ja.wikipedia.org/wiki/%E3%83%87%E3%83%BC%E3%82%BF%E8%A8%98%E8%BF%B0%E8%A8%80%E8%AA%9E
- http://e-words.jp/w/XML.html
- https://blogs.unity3d.com/jp/2019/04/23/whats-new-with-uielements-in-2019-1/  
- https://www.youtube.com/watch?v=5UTiLOIU8TE  
