---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "スマホゲームの権利表記"
subtitle: ""
summary: "プログラマーにとっては面白いかもしれません"
authors: ["juris710"]
tags: []
categories: []
date: 2020-06-13T17:35:24+09:00
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
皆が当たり前のようにスマートフォンを持つ今日、スマホでゲームをプレイすることもまた当たり前となりました。3Dモデルや2Dアニメーションを用いた、PCゲームやコンソールゲームに迫るようなクオリティーのゲームも増えています。

プログラミングの勉強をしていて、いつか多くの人にプレイされるようなゲームを作りたいと思っている人ならば、自分がプレイしているスマホゲームがどのように作られているのか、知りたいと思ったことがあるかもしれません。

今回は、そんなゲームの中身をほんの少しだけ知れる(もとい、知った気になれる)スマホゲームの「ライセンス」の話です。

# ライブラリーとライセンス  

ゲームやアプリ開発において、多くのプログラマーはライブラリーというものを利用します。

> ライブラリは、汎用性の高い複数のプログラムを再利用可能な形でひとまとまりにしたものである。  (Wikipedia)  

世界中のプログラマーが作成した様々なライブラリーを使うことで、自分でプログラムすることなく便利な機能を利用できるようになります。

とても便利なライブラリーですが、利用する際に注意する点があります。それが、ライセンスの表示です。ここでのライセンスとはオープンソースソフトウェアのソフトウェアライセンスのことを指します。

> ソフトウェアライセンスは、コンピュータのソフトウェアについて、ソフトウェア利用者が遵守すべき事項を記載した文書である。(Wikipedia)

そのライブラリーを改変してもよいのか、商用利用してもよいのか、などを記したファイルがほぼ全てのライブラリーに同梱されています。

# スマホゲームの権利表記

一部のスマホゲームにはそのゲームが使用しているライブラリーのライセンスを見られる「権利表記」という項目があります。権利表記では、どのライブラリーのライセンスなのかが併記されていることが多いです。これを利用すれば、権利表記を読むことによって、そのスマホゲームにどんなライブラリーが使われているのかを知ることができます。実際に多くの人にプレイされているゲームがどのようなライブラリーを使っているのかを知ることは、プログラミングを学ぶ上でとても役に立つと思います。

# 権利表記の例

例として、自分がプレイしているスマホゲームをいくつか取り上げ、権利表記の見方と、権利表記にライセンスが表示されているライブラリーの一部を取り上げることとします。

## SAO AB

正式タイトルは「ソードアート・オンライン　アリシゼーション・ブレイディング」です。([公式サイト](https://ab.sao-game.jp/))

ライセンス一覧は右上のメニューボタンを押して、「その他」&rarr;「コピーライト」で見ることができます。

- cocos2d-x  
  オープンソースでクロスプラットフォームなゲーム開発フレームワーク[^1]です。
- Spine  
  ゲーム用2Dアニメーション制作ツールです。
- Sprite Studio  
  2Dアニメーション作成ツールです。

## FEヒーローズ

正式タイトルは「ファイアーエムブレム　ヒーローズ」です。([公式サイト](https://fire-emblem-heroes.com/ja/))

ライセンス一覧はアプリ起動後、「その他」&rarr;「FAQ等」&rarr;「このアプリについて」&rarr;「権利表記」で見ることができます。

- Cocos2d-x

## とあるIF

正式タイトルは「とある魔術の禁書目録　インテグラルファクター」です。([公式サイト](https://www.jp.square-enix.com/index-if/))

ライセンス一覧はアプリ起動後、「メニュー」&rarr;「規約」&rarr;「権利表記」で見ることができます。

以下のUnity用ライブラリーが用いられていることから、Unityを用いて開発されていると推測されます。

- Play-games-plugin-for-unity
- Unity-Built-in-Shaders
- Unity.IO.Compression

また、タイトル画面から、2DアニメーションにはLive 2Dが用いられているようです。

## このファン

正式タイトルは「この素晴らしい世界に祝福を!　ファンタスティックデイズ」です。([公式サイト](https://konosubafd.jp/))

ライセンス一覧はアプリ起動後、「メニュー」&rarr;「サポート」&rarr;「権利表記」で見ることができます。

以下のUnity用ライブラリーが用いられていることから、Unityを用いて開発されていると推測されます。

- Do Tween Pro (Demigiant)
- Unity-Slngen
- Unity-UIGradient
- Naughty Attributes

また、タイトル画面から、2DアニメーションにはLive 2Dが用いられているようです。

## 装甲娘

正式タイトルは「装甲娘 ミゼレムクライシス」です。2011年に発売されたゲーム「ダンボール戦機」シリーズを基にしたゲームです。([公式サイト](https://soukou-musume.com/))

ライセンス一覧はアプリ起動後、「メニュー」&rarr;「サポート」&rarr;「権利表記」で見ることができます。

以下のUnity用ライブラリーが用いられていることから、Unityを用いて開発されていると推測されます。

- iTween
- DOTween
- UniRx
- Unity built-in shader
- UnmaskForUGUI
- ParticleEffectForUGUI

また、タイトル画面から、2DアニメーションにはLive 2Dが用いられているようです。

# まとめ

今回ライセンス内容を調べた結果の推測を表にまとめました。
{{<alert warning>}}
  必ずしも表の通りとは限らないので注意してください。
{{</alert>}}

|   ゲーム名   | ゲームエンジン |    2Dアニメーション   |
|:------------:|:--------------:|:---------------------:|
|    SAO AB    |   cocos2d-x    | Spine & Sprite Studio |
| FEヒーローズ |   cocos2d-x    |           ?           |
|   とあるIF   |      Unity     |        Live 2D        |
|  このファン  |      Unity     |        Live 2D        |
|    装甲娘    |      Unity     |        Live 2D        |

個人の小規模なゲーム開発だけでなく、ゲームメーカーによって大規模に開発されているゲームの作成にも使われているUnityってすごいなと思いました。

# 参考文献

- https://ja.wikipedia.org/wiki/%E3%83%A9%E3%82%A4%E3%83%96%E3%83%A9%E3%83%AA
- https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF
- https://ja.wikipedia.org/wiki/%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9

[^1]:フレームワークとはアプリケーションプログラム等に必要な一般的な機能が、あらかじめ別に実装されたもの(Wikipedia)
