---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "新入生歓迎イベントの反省"
subtitle: ""
summary: "2020年11月1日・2日に開催された新入生歓迎イベントについて"
authors: ["juris710"]
tags: []
categories: []
date: 2020-12-16T16:41:56+09:00
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

# 新入生歓迎イベントとは?

アプリNaviは例年「友好祭」と「白鷺祭」という文化祭でゲーム展示を行っています。しかしながら、今年は新型コロナウイルスの影響により、どちらも中止となってしまいました。

そこで、白鷺祭の代わりとして開催されたイベントが「新入生歓迎イベント」です。大阪府立大学の1回生のみが参加でき、例年の白鷺祭のような屋内企画(もちろん全団体が感染症対策をした上での開催です)に加えて、特設サイトやYouTube動画などのオンライン企画も開催されました。

私たちアプリNaviは、屋内企画とオンライン企画の両方に参加しました。この記事では、オンライン企画に関する反省を書いていきます。

# オンライン企画特設サイト

{{<figure src="home.png" caption="特設サイトのホームページ" >}}

アプリNaviは新入生歓迎イベントオンライン企画として、部員が作成したゲームをプレイできる特設サイト「あぷりなびらんど(オンライン)」を作成しました。このブログと同じく、`Hugo`を使って作成しました。

{{<callout info>}}
現在は特設サイトは閉鎖されており、アクセスすることはできません。
{{</callout>}}

# 反省

## 頑張ったこと

### Aboutページ

特設サイトにアプリNaviについて紹介する「About」ページを作成しました。新入生歓迎イベント終了後、このブログのAboutページにコピペしたので、このブログと特設ページのAboutページはほぼ同じです。

「分野」のセクションでは、多くのアイコンを使いました。大半のアイコンは既存のものを使用しましたが、`Hugo`、`Flutter`、`C`、`C++`、`C#`、`Kotlin`、`Dart`のアイコンは自作しました。

「部員」のセクションでは、`Google Charts`を導入し、部員の構成を見やすくしました。

### ゲームページ

#### 操作方法の表示

ゲームの操作方法をゲームの上に表示し、プレイする人にとって分かりやすくしました。

{{<figure src="game01.png" caption="操作方法①(キーボードのみで操作)" >}}
{{<figure src="game02.png" caption="操作方法②(マウス＆キーボードで操作)" >}}

#### コメント機能の実装

Firebaseを使用し、各ゲームページにコメント投稿機能を実装しました。匿名ログインを利用して、自分で投稿したコメントの編集および削除ができるようにしました。

新入生歓迎イベントの2日間で、11件のコメントを頂きました。コメントしてくださった皆様、ありがとうございました。

## やりたかったけれど出来なかったこと

### ゲームページ

#### 音量調整機能

ゲームページは、Unity製のゲームをiframeを用いて埋め込みました。iframeの仕様なのかもしれませんが、タイトルでBGMを流しているゲームの場合、iframeのどこかをクリックするまで音が流れません。逆に言えば、iframeのどこかクリックした途端いきなりBGMが流れるのでびっくりします。なので、「プレイ」ボタンを作り、そのボタンが押されるまで音が流れないようにするつもりでした。

しかしながら、Unity製のゲーム(WebGL)の音量を外部から変更する方法が分かりませんでした。そのため、音量調整機能の実装は諦め、代わりにゲームの上に「音量注意」の表示をつけました。

{{<figure src="game03.png" caption="「音量注意」の表示">}}

# 次回の祭りに向けて

来年の友好祭や白鷺祭でもオンライン企画が行われる可能性が高いと思うので、現在新しいゲーム展示サイトを制作中です。

今までサイトは`Hugo`を使って作ってきましたが、次のサイトは`Flutter`を使用して作成しています。
