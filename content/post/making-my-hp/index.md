---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "ゼロから始めるWebページ作成" # 記事タイトル
subtitle: "" # 記事のサブタイトル(省略可)
summary: "はじめてのWebページ作成とその記録。" # 要約：記事の中身を端的に表す短い文章
authors: [Nanamofu] # 著者ID(複数可)
tags: [] # タグ：記事内容のジャンルなどを表す単語(複数可)
categories: []
date: 2022-09-23T16:24:51+09:00
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
おうちが大好きで休日は基本ひきこもり生活をしているNanamofuです。  
ただ寝て食べて動画みて終わる夏休みなんて嫌だ、嫌すぎる。  
何か成果を残したい……。  

よし、Webページ作ってみるか！！  
（Twitterやpixivといったものができる前のヲタクたちはWebページ自作してたっていうし、自分でもできるやろって思ったんです……。はい。）    
  
# HTMLとCSSって？
そもそもWebページってどうやってつくってるんでしょうか。HTML、CSSって聞いたことはあるけれどなんのことなんだか。
* HTML  
HTMLとは　Hyper Text Markup Language　のことでWebページを作成するための言語です。
* CSS  
CSSとは　Cascading Style Sheets　のことでスタイルシート言語でHTMLなどで記述された文書の体裁や見栄えを表現するために用いられています。
  
# やってみた
今回は「konkon webチャンネル」さんを参考にしながら空想のカフェのWebページを作成してみました。
{{<youtube qM2N78hbd10>}}  
  
動画を見ながら自分のファイルに少しずつ書き加えたものの一部がこちらになります。  
* HTML  
開始タグと終了タグでサンドイッチしていくのが特徴ですね。
{{<figure src="./html.png" title="HTMLのコード">}}  
ちなみに、これだけだとこうなります。
{{<figure src="./pre pages.png" title="HTMLだけのページ">}}  
シンプルすぎますね。おしゃれとは言い難い……。  
ここでCSSの出番です。
* CSS   
HTMLでの項目について色やフォントサイズ、配置などを指示していきます。
{{<figure src="./css.png" title="CSSのコード">}}  
CSSによって見栄えをよくするとこうなります！
{{<figure src="./pages.png" title="完成版のページ">}}  
凄い。CSSのコードだけ見ても何がなんだかよくわからない感じですがあのシンプルすぎたHTMLだけのページがおしゃれに生まれ変わった！  
凄いぞスタイルシート。（二回目）
  
  
  
# インターネット上に公開しよう
出来上がったページを友人にみせたくてファイルを送ったのですが、  
「Nanamofu、コードしか見えへんで……？」  
  
## え？見えない？  
   
そう、ローカルなファイルなので自分のPCからは上手くページを表示できますが、

**"インターネット上に公開しないと"**
{style="color: #fff26b"}
他者のPCからは見えないのです。（Word、Excelなどのようにファイルだけ送ればいいと思ってました。）
  
サーバーをかりてドメインを取得して……といった方法が一般的のようですが、今回はGitHubを使って公開しました。  
以下のサイトを参考にしました。  
[自分で作ったWebページをインターネット上に公開しよう！](https://prog-8.com/docs/github-pages)
  
こちらがインターネット上に公開した出来上がった空想カフェのWebページです。（よかったら覗いてみてください）  
[おさかなカフェ](https://nanamofu.github.io/NanaHP/)
  
  
  
# 最後に
今回は触れることのできなかったサーバやドメインについても勉強する必要がありそうです。ただ、実際のお店のページのようなものを作れて楽しかったです。皆さんには何も知らない状態でもそれなりにWebページをを作成できることが伝われば幸いです。自作ホームページに興味のある方は調べてみてください！