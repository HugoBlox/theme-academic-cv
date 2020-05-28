---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "手軽に始める！GAS を使ってみませんか～"
subtitle: ""
summary: "Google Apps Scriptの紹介"
authors: ["nobu"]
tags: ["google-apps-script"]
categories: []
date: 2020-05-28T19:47:24+09:00
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
どうもこんにちは、今回は自分がよく使っている、GAS について紹介したいと思います。

ちなみにタイトルの通り、手軽に始められるので、最近プログラミングを始めたという方にもおススメなのでぜひ見ていってください(^-^)

# GAS って?

**GAS**とは **Google Apps Script**の略でプログラミング言語の一つです。

読み方はガス、ギャスなどと言われることが多いです。

一応、
[公式](https://developers.google.com/gsuite/aspects/appsscript?hl=ja)の文言を載せておくと、

> Google Apps Script は JavaScript ベースのスクリプト言語で、ドキュメント、スプレッドシート、スライド、フォームなどの G Suite サービスをカスタマイズ、拡張できます。


とのこと。（抜粋）

# GAS で何ができるの？

じゃあ GAS で何ができるのかというと、色々とあると思うのですが、とりあえず大きく分けてこの２つかなと。

- Google のサービスをより便利に活用する
- web アプリケーションの作成、公開

順に紹介していきます。

# Google のサービスをより便利に活用する

GAS では Google のサービスをより自由に効率的に使うことが出来ます。

下記のようなサービスを利用する際、GAS のコードを加えることで、面倒な作業を自動化したりなどが可能です。

## 利用できるサービス例

- Google Document
- G Mail
- Google SpreadSheet
- Google Calender
- Google Form 　　　　などなど…

これらのサービスを使っている人も比較的多いのではないでしょうか？

## 使用例

具体的に GAS で Google のサービスをより効果的に用いた使用例としてはこのようなものがあります。

- カレンダーに自動でスケジュールを記入
- 事務的メールを複数人に指定の時間に自動送信
- Google Formを自分好みに改造

もちろん他にも色々とありますが、例のように日常の何気ない作業を自動化したり、普段用いているサービスの機能を拡張するようなことができます。

# Web アプリケーションの作成、公開

GAS では、google のサービスと連携して、web アプリケーションを開発、公開する機能があります。

またアプリケーションの機能として、googleのサービスと連携しているのでその機能を簡単に用いることができ、少しのコードでちょっと素敵な事を行うことが可能です。

## 使用例

簡単に例をあげると

- SpreadSheetを簡易的なデータベースのように使う
- G Mailを用いてメール送信機能を作る

などがあります。

他にも外部アプリケーションとの連携などを組合せて、様々な事ができると思うので、ぜひ試してください！

# GASを使用するメリット

GASで何ができるかというのを紹介したところで、タイトルの**お手軽**という理由を紹介していきます。

## 開発環境構築がいらない！ 

GASでは新しく言語をはじめるときの面倒な環境構築はほとんどありません。

必要なのは**Googleアカウント**だけ。

加えて、実行はGoogleのサーバーを利用するので、レンタルサーバーを用意したり、それ関係のツールを利用することもなく開発をすることができます。

## 無料！

利用するのに基本的にお金はかかりません。

## 学習コストが低い、勉強になる！

GASはJavaScriptベースで、そしてwebサイトを開発する時に良く用いられるHTML,CSSを使用して開発することが可能なので、一般的に学習コストはそこまで高くないです。

それにJavaScriptを勉強中の方はそれを使って手軽にアプリケーションを作ったりできるので、その学習の実践の場として助けにもなると思います。

# デメリットもあります…

メリットの反面、やはりデメリットもあります。

その例として一つあげると無料で利用できる反面、Googleのサーバーを利用していているので、ユーザーによる過剰な負担を避けるために利用するのに制限があります。

もっとも大きな制限として考えられるのは実行制限で、

- 1回あたりの実行制限時間: 6分

となっています。

これは工夫せずに重い処理を何度も書くと、引っかかってしまうので注意が必要です…


そのためGASはそこまで大きなプロジェクトには向いていないと言えます...

詳しい公式の制限は[コチラ](https://developers.google.com/apps-script/guides/services/quotas)


# さっそく始めてみよう

始める方法はとても簡単です。せっかくなので実際にやってみます。

0. googleアカウントの作成（無い方は）   
  こちらより必要事項を記入して
  [Google アカウントを作成](https://support.google.com/accounts/answer/27441?hl=ja)
  します。


1. ブラウザで[Google Drive](https://www.google.co.jp/drive/apps.html)にアクセスします。


2. Google DriveにGoogle Apps Scriptを追加する   
  左上の新規＋ボタンをクリックし、その他→アプリを追加→Google Apps Scriptを探し、接続をクリック

3. もう一度新規＋を押し、その他にGoogle Apps Scriptが出てきたら完了

{{< figure src="./nobu_GAS_img_1.png" title="HelloWorld" >}}


4. それをクリックすると、エディタがでてくるので、これでGASをはじめる準備が出来ました！

ちなみにHello Worldはこんな感じです。

{{< figure src="./nobu_GAS_img_2.png" title="完了後" >}}



# 最後に

今回はざっくりでしたがGASについて簡単に紹介しました。

GASの存在だけでも知ってもらい、機会があれば何かで使ってもらえたら幸いです。

また、GASを十分使いこなせているとは言えない自分ですが、おすすめしたい参考サイトも載せておくので興味がある人は見てみてください！

## 参考サイト

[【保存版】初心者向け実務で使えるGoogle Apps Script完全マニュアル](https://tonari-it.com/google-apps-script-manual/)












