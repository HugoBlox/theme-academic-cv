---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "一般人とプログラマーの違い（youtube動画紹介)"
subtitle: ""
summary: "めんどくさい作業、GASで自動化してみたの巻"
authors: ["nobu"]
tags: ["Google Apps Script"]
categories: []
date: 2021-04-07T23:01:38+09:00
featured: true
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
projects: ["club-introduction-blog-relay-2021-spring"]
---
# はじめに

 どうも、部内でブログを書くとなるとGASを使って何かしたいNobuです。（需要はあまりなさそうですが）

 今回はyoutubeで少し気になった動画があり、GASも使っていたのでそれの紹介と実際にやってみたいと思います！

# 対象

* プログラミングに興味があるけど、何か難しそうと思っている人

* GAS少し知っている人

# 動画紹介

今回紹介する動画はコチラです。1分程度なので、まずは見てみてください！

[一般人とプログラマーの違い[エンジニアチャンネル]](https://www.youtube.com/watch?v=pDWgh-EpYck)

{{<figure src="./gas_programmer_video_image.png" title="一般人とプログラマーの違い" >}}

# 動画内容

 ざっと内容をまとめると、

 翻訳の仕事が何百個も割り振られ、一つ一つコピーアンドペーストでGoogle翻訳をかけ、全く終わらない一般人。

その一方でプログラマーは、タスクを少し見て、パソコンをカタカタ、少しコードを書いただけで、あとは自動で翻訳していきます。そして終いには余裕でNetflixを開き休憩と…。

一般人が苦労している最中、プログラマーがタスクを自動化することで余裕でタスクを終わらせるという動画でした。

# これを見てみて、、

この動画は人によってそれぞれ捉え方が異なるのではないかなと。

* プログラミングの知識が少しでもあり、これならパッとできそうと思った人、

  アプリNaviにぜひ！ GASは便利でいいよ！と伝えておきます。

* 何やってるか分からん、興味はあるけど、難しそう…と思った人、
  
  ぜひ続きもサッといいので読んでいただきたい！ そしてなんとなくでもやってみたいと思ったらぜひアプリNaviへ！

実はちょっとプログラミングのやり方を知っていれば、簡単に出来ちゃうんです。（コードも載せてくれていますし…)

注: 本記事は全くこの動画をdisっているわけではなく、このチャンネルさんを尊敬したうえで、簡単にこの動画でいうプログラマー(気分)になってみよう！というものです。その点どうかご注意お願いしますm(_ _)m

# 実際にやってみる

ということで実際にやってみましょう。

詳しいことは色々と省略するのですが、項目はざっとこんな感じです。

* 最初に読んでみたらいいかも（環境設定）
* webスクレイピング
* 自動翻訳

ではやっていきます。

## 最初に読んでみたらいいかも(環境設定)

GAS(Google Apps Script)を使います。
GASの詳細や環境設定（超簡単）とかは以前書いたこの記事などにのっているのでよかったら！

{{<cite page="post/gas-recommendation" view="3">}}

## webスクレイピング

動画の通りするには実際に翻訳する文が必要ですが、
これは適当に英語のサイトからスクレイピングを使ってとってきます(詳細は省略します,何個か自分で打ってみてもいいかもです)

参考サイト：([AutoWorker〜Google Apps Script(GAS)とSikuliで始める業務改善入門](https://auto-worker.com/blog/?p=2460))

元の文はCNNの2021年3月の記事のまとめというサイトからとってきました。

こんな感じで、翻訳する文が250個ほど生成します。

{{<figure src="./gas_programmer_video1.gif" title="英語文取り出し" >}}

## 自動翻訳

幸い動画内でコードが出ているのでそれを参考にしながらというかありがたく写させてもらいつつ、少し自分用にいじってこんな感じになりました。

```JavaScript:input.gs
function batchTranslate() {
  var targetSpreadSheet = SpreadsheetApp.openById("自分のシートIDをここに");
  var targetSheet = targetSpreadSheet.getSheetByName("シート1");
  var lastRowTranslate = targetSheet.getRange(1, 2).getNextDataCell(SpreadsheetApp.Direction.DOWN).getRow();
  var lastRowEnglish = targetSheet.getLastRow();

  for(var i = lastRowTranslate; i<= lastRowEnglish;i++){
    var sourceDoc  = targetSheet.getRange("A" + i).getValue();
    var destRange = targetSheet.getRange("B" + i);
    var translate = LanguageApp.translate(sourceDoc, "en","ja");
    destRange.setValue(translate);
    Utilities.sleep(1000);
  }
}
```

あとはこのコードを実行させると…

このように順に翻訳していってくれます！(google翻訳なので若干おかしいところもあるかもですが…)

{{<figure src="./gas_programmer_video2.gif" title="自動翻訳" >}}

コードを実行して実際に動いているのを眺めると、どんなものでも少しニヤっとしてしまいますね(自分だけ？）

ということで動画で言うプログラマーに無事になれそうです！

# まとめ

今回は一般人とプログラマーの違いという動画を取り上げ、実際にやってみました！

やってみたように少しプログラミングの知識があるとめんどくさい作業が自動化できたり、面白いことが出来たりします。

難易度としても、簡単なものなら調べたらコードやツールが出てくるものもあり、自動化、効率化できないかと気にするだけで作業のストレスが減ることも少なくないはず、、

また、今は全然知らないって人も何かきっかけがあってプログラミングに触れる機会があれば、きっとそういう場面で役に立つはずです！

そのきっかけとしてアプリNaviを使ってもらうのもありかもですね！（また宣伝かい/)

本記事で少しでもGASの存在を知ってもらえたり、何か自動化、効率化してみようと思ってもらったら幸いです！

## GASについて(参考)

GASを使えば他にも簡単に作業を効率化することが出来るかもしれません！
気になる人は調べてみてください！

### おすすめサイト  

[【保存版】初心者向け実務で使える Google Apps Script 完全マニュアル](https://tonari-it.com/google-apps-script-manual/)
