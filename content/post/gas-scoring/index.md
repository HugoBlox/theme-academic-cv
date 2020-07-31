---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "GAS でサクッと採点シート作ってみた"
subtitle: "GASの紹介第二弾です。"
summary: ""
authors: ["nobu"]
tags: ["Google Apps Script"]
categories: []
date: 2020-05-30T10:04:44+09:00
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
全然需要ないかもですが、GAS の紹介第二弾です。

今回は GAS を使って、以前ハッカソンの採点シートをちゃっと作った話をしたい思います。

手軽にできるので、JavaScript など、プログラミングを最近学び始めた方はちょっと実践がてらに GAS を利用して何か作ってみたらどうでしょう？みたいな気持ちで書いたので、読んでもらえたら幸いです。（GAS は一応 JavaScript ベースでできています(^^)/)

## GAS って？

こちらで紹介しているので良ければ見ていってください！

{{<cite page="post/gas-recommendation" view="3">}}

## 作った経緯（ついでにハッカソンの紹介）

アプリ Navi では毎年、長期休みのどこかで、ハッカソンというものを開催しています。

**ハッカソン**とは

> ハッカソン（英語: hackathon 、別名:hack day ,hackfest ,codefest ）とは、ソフトウェア開発分野のプログラマやグラフィックデザイナー、ユーザインタフェース設計者、プロジェクトマネージャらが集中的に作業をするソフトウェア関連プロジェクトのイベントである
> ([Wikipedia より抜粋](https://ja.wikipedia.org/wiki/%E3%83%8F%E3%83%83%E3%82%AB%E3%82%BD%E3%83%B3))

とのこと。なんかヤバそう...

もちろん、この文から読み取れるようなそこまでヤバそうな感じではないです（笑）

一言でいうと、参加者同士が、チームを組んで一つの作品を作ろうというイベントになっています。twitter にて簡単に紹介しているので良ければ見てください。

ハッカソンの紹介
{{<tweet 1246644279813926912>}}

ハッカソンの紹介はこの程度にして、そこでは審査員の方もお呼びして、それぞれの作品を審査してもらう形を取っています。

その審査の際、採点用紙が必要だったので、ちょうど GAS を勉強し始めたこともあり自作することにしました。

## 作ったもの

それ専用に作ったので、完全に内輪向けですが画像としてはこんなものです。

{{< figure src="./HackathonScoreSheet.png" title="作ったもの" >}}

見た目等はいまいちですが、ちゃんと動きます。

審査員の方に審査するチーム名を選択してもらい、それぞれの項目について点数を付け送信してもらうといった流れです。

こういうの何かの初歩の題材でありそうですね...

## どうして GAS で？

大きな理由としては、GAS を知り始めて使ってみたかったというのがありますが、

その使ってみたくなるという前提となるのが、手軽に作成できるからです。

その理湯としては大きく分けて２つあります。

### サーバー等の手続きがいらず、簡単に公開できる

GAS では Google のサーバーを使っているので、このような簡単なサイトでもサーバーを借りるなどの作業がいらず、実質ワンクリックで公開、利用できます。

GAS のエディタから、おおよそここをクリックしたら公開できます

{{< figure src="./GAS_Release.png" title="公開方法" >}}

#### SpreadSheet を簡易的なデータベースのように利用できる

個人的には SpreadSheet を簡易的なデータベースとして利用できるのは大きいと思います。

SpreadSheet を簡易的なデータベースとして用いることで、データベースの知識がなくても簡単な事ならできますし、なんにせよ上限はありますが、無料で利用できるので、少なくとも何かをパッと作りたいときにはいいのではないかと！

一応、ちょっとした例として、ユーザーの入力を SpreadSheet に追加するコードを載せておきます…

- HTML の`<form></form>`に入力された内容を SpreadSheet に記述

```html:index.html
<form method="post" action="送信先のURL">
  ....
</form>
```

```JavaScript:input.gs
function doPost(e){
  //データを記録するスプレッドシート
  var sheet =SpreadsheetApp.openByUrl("//利用したいSpreadSheetのURL//");
  ...
  //チーム名、各採点項目の情報を取得
  var name = e.parameter.name;
  var theme = e.parameter.theme;
  var uniqe = e.parameter.uniqe;
  var practice = e.parameter.practice;
  var presentation = e.parameter.presentation;
  var comment = e.parameter.comment;

  //データ
  var array = [userEmail,name,theme,uniqe,practice,presentation,comment];

  //SpreadSheetにデータを追加
  sheet.appendRow(array);
  ...
}
```

データの保存だけですが、このように SpreadSheet を用いることで手軽に簡易的なデータベースを利用することができます。

また SpreadSheet を Sheet API として利用することで GAS のプロジェクトだけではなく、その他の web 開発やスマホアプリ開発などにもデータベースとして活用できるので知っておいて損はないかと思います。

## コード

こんなので公開していいのかという思いもありますが、大まかなコードを載せておきます。お見苦しいですが、何卒ご容赦下さい、、、
恐らくすごく簡単というのが分かると思います。

```html:index.html
<!DOCTYPE html>
<html lang="ja">
  <head>
    <base target="_top" />
    <!-- GASでのcssの読み込み-->
    <?!= HtmlService.createHtmlOutputFromFile('css').getContent(); ?>
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1.0,minimum-scale=1.0"
    />
  </head>
  <body>
    <div class="wrap">
      <h1>ハッカソン 採点シート</h1>
      <p>
        使い方:<br />採点欄がチームごとに４つの項目があるので各１０点、<br />
        合計40点で採点をお願いします。<br />
        各チームの採点が終わり次第、一番下の送信ボタンをおしてください。<br />
        また申し訳ありませんが、誤送信など、なにかございましたらすぐにご連絡ください
      </p>
      <form method="post" action="送信先のURL">
        <table border="1" width="100%" height="30rem">
          <tr>
            <th>チーム名</th>
            <th>
              <select name="name">
                <option value="">選択してください</option>
                <option value="/*チーム名*/">/*チーム名*/</option>
                ...
              </select>
            </th>
          </tr>
          <tr>
            <th colspan="2">採点項目</th>
          </tr>
          <tr>
            <td>/*採点項目*/</td>
            <td><input type="number" name="name" min="0" max="10" />/10</td>
            ...
          </tr>

          <tr>
            <td>コメント</td>
            <td>
              <textarea
                id="commit"
                name="comment"
                placeholder="こちらに何かチームに向けてコメントあればお願いします！"
              ></textarea>
            </td>
          </tr>
        </table>
        <p>
          <input
            type="submit"
            value="送信する"
            style="width:200px;height:100px;font-size:30px;float:right"
          />
        </p>
      </form>
    </div>
  </body>
</html>
```

```JavaScript:コード.gs
//htmlを読み込む
function doGet() {
  var template = 'index';
  return HtmlService.createTemplateFromFile(template).evaluate();
}
//得点計算処理
function myFunction() {

  var sum = [];

  var teamList = ["/*チームリスト*/"];

  for(var j = 0; j < 8;j++){
    sum[j] = 0;
  }
//spreadsheetのデータを取得する処理(細かい解説は省きます)
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getActiveSheet();

  var lastRow = sheet.getLastRow();
  Logger.log(lastRow);

  for(i = 9; i <= lastRow;i++){
    var range = sheet.getRange(i,2);

    for(k = 0; k < 8;k++){

      if(range.getValue() == teamList[k]){
        var range = sheet.getRange(i,3,1,4);
        var valueArray = range.getValues();
        for(var u = 0; u < 4;u++){
          sum[k] += valueArray[0][u];
    }
      }
  }
  }
  for(i = 0;i < 8;i++){
    sheet.getRange(i + 1 ,9).setValue(sum[i]);
  }
}

```

## 作ってみた感想

コード自体も非常に簡単ながら、データの保存等も SpreadSheet で行い、利用してもらうための公開もすぐにできるので、サクッと作ることが出来ました。
ただやはり GAS 自体の勉強もいるかなという感じです。
また勉強だけでなく、大小あれど自分で実際に使ってもらうものを作ることができたので、その点は良かったと思います。

## 最後に

今回は本当に簡単な例をあげましたが、かなりざっくりしていたので、説明不足の点も多々あって申し訳ないです。ただ、こんなのがあるとだけ伝われば幸いです。
また、もちろん GAS にはもっと様々な事に利用することができるので、ご興味のある方は一度調べてみてください！

追伸

普通に Google Form とかでやればええやん、とかは言わないで m(\_ \_)m
