---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "[Unity] 面倒なエフェクトはShaderGraphで作ろう"
subtitle: ""
summary: "世界一簡単かもしれないエフェクト制作ツールを導入してみた。"
authors: ["nanami"]
tags: []
categories: []
date: 2020-07-06T15:31:53+09:00
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
# 1. はじめに

Unityユーザーの9割くらいは __”Shader”__ という文字を見るとアレルギー反応を起こすことでしょう。Shaderプログラムの中身を編集してオブジェクトの質感を変えたりアニメーションを持たせたりするのは骨が折れますし、CG自体の知識が無いとエラーから抜け出すのも困難です。構文の見た目も結構グロテスクなため、素人にとっては到底手に追えない代物と化しています。かといってUnity C#で実装するのもややこしいです…。

そこで今回紹介したいのが __"ShaderGraph"__ というShaderエディタです。これはノードと呼ばれる演算ブロックを線で結んでいくだけで簡単にエフェクトや制御を実装できる優れモノで、Unity 2018 以降のバージョンで利用できます。オモチャ感覚で操作できるため、Unity始めたての人でも扱えるほど簡単な点が魅力的です。

# 2. 私の開発環境

* PC ... ASUS ZENBOOK 13 ([スペック](https://www.asus.com/jp/Laptops/ASUS-ZenBook-13-UX331UN/))
* OS ... Windows 10 home
* Unity version ... 2019.3
* Unity Projectテンプレート ... Universal Render Pipeline(URP)

# 3. ShaderGraphの導入

## 3-1. ShaderGraphの動作環境

ShaderGraphを使うにあたってひとつだけ制約があります。それは、UnityのProject作成時のテンプレート選択で __"Universal RP(URP)"__ または __"High Definition RP(HDRP)"__ を指定する必要があることです。Unity 2019.3より前だとURPはLightweight RP(LWRP)というテンプレート名で備わっていますが、中身はほとんど同じものです。

## 3-2. Projectの作成

軽量のため今回はURPを使います。まずURPテンプレートでProjectを作成し、次に [Window→Package Manager] に飛んでUniversal RPとShaderGraphをInstallしてください。既にインストールされている場合 (ボタンにUp to dateと表示されている場合) は再インストールしなくても大丈夫です。

{{<figure src="./Temp_URP.png" title="URPテンプレートの作成">}}

{{<figure src="./Install_URP.png" title="URPのインストール画面">}}

Unity 2019.3より前のバージョンだとLightweight RPという名前になっているので注意です。LWRPの導入手順については先人が投稿したページを参照してください。LWRPとShaderGraphのインストールができたらOKです。

 [【Unityシェーダ】Shader Graph超入門](http://nn-hokuson.hatenablog.com/entry/2018/05/08/212502)

これでセットアップが完了しました。次は私と一緒にShaderGraphを触っていきましょう。

# 4. ShaderGraphで簡単なUVアニメーションを実装してみよう

ここではチュートリアルとしてObjectの色を七色に変化させてみます。(プリセットのSceneはごちゃごちゃしているので新規Sceneを作って作業することをお勧めします)

{{<figure src="./mihon.gif" title="制作物見本">}}

## 4-1. ShaderGraphの作成と画面説明

ShaderGraphのEditorは、Projectウィンドウから[Shader→Unlit Graph]を選択することで作成できます。ShaderGraphの種類はいくつかありますが、ここではLightに依存せず一番軽量なUnlitを用います。生成されたEditorを開いてみると下のような画面が表示されます。

{{<figure src="./ShaderGraph_create.png" title="ShaderGraphの作成">}}

①ではShaderGraphの名前を変更できたり変数を管理できます。②の領域ではノードの編集ができて、出力は④のプレビューでリアルタイムに確認できます。③のマスターノードは色々な項目がありますが、今回はColorのみを触ります。

また、Editorの基本操作としては下の4つを覚えておけばとりあえず十分です。覚えていなくても感覚的な操作で多分なんとかなります。

* 拡大縮小: [マウスのホイールを回転]
* スクロール: [Alt + マウス左ドラッグ] or [マウスのホイールをドラッグ]
* ノード作成: [右クリック→Create Node]
* ノード接続: [〇アイコンを左ドラッグし、接続先の〇アイコンまで線を伸ばす]
* 接続線の削除: [線を右クリック→Delete]

## 4-2. 今回使うテクスチャ

テクスチャは画像編集ソフトGIMPを使って作成しました。上手いことやれば素材画像ごとShaderGraphで作れたかもですが、私の知識不足により別のソフトに頼ることにしました。以下の画像ファイルをProjectの適当なフォルダに入れてください。

{{<figure src="./Rainbow.jpg" title="虹色テクスチャの素材画像">}}

参考: [フリーの画像編集ソフト GIMP を使って、レインボーグラデーションを作る方法](https://sore-zettai.com/gimp-rainbow/)

## 4-3. ノードの追加

完成イメージの要件は次の通り。

* 虹色のテクスチャが貼ってある
* テクスチャがスクロールする

テクスチャのスクロールはTiling And Offset というノード(UVスクロール)で実装したいと思います。スクロール用の変数にはTime ノードを、テクスチャの取得にはSample Texture 2D ノードを使用します。右クリックを使って以下のようにノードを追加してください。

{{<figure src="./Node_add.gif" title="ノードの追加">}}

ノードを追加できたら線を繋いでいきましょう。ノードの各項目の説明は割愛しますが、gifの通りに繋ぐとテクスチャがスクロールしてくれます。

{{<figure src="./Node_connection.gif" title="ノードの接続">}}

## 4-4. Materialへの出力方法

ShaderGraphで編集した内容をMaterialへ適用するには以下のように操作します。Save Assetを押してEditor画面から離脱し、ShaderGraphを右クリックして[Create→Material]を選択すれば完了です。

{{<figure src="./Rainbow.gif" title="Materialの出力">}}

Objectは虹色になりましたか？成功したら次はスクロール速度を変えてみます。速度を可変にするには、変数としてSliderノードを追加し、さらに変数を反映させるためにMultiplyノード(掛け算)を追加します。Multiplyノードの入力にTimeノードとSliderノードを追加すれば実装完了です。

{{<figure src="./Rainbow_speed.gif" title="スクロールスピードの変更">}}

## 4-5. 変数をMaterial上で変更する方法

先程はEditor上でスクロールを設定していましたが、実用面を考えるとこれではやや不便です。そこで、次はEditorを開かなくてもMaterialのInspector上で速度を扱えるようにしたいと思います。

やり方は、Inspectorで参照したいノード(ここではSliderノード)を選択し、右クリックから[Convert to Property]を選択するだけです。すると、MaterialのInspector上でSliderの項目が追加されます。とても簡単ですね。20秒でできてしまいました。

{{<figure src="./Rainbow_speed_Inspector.gif" title="Inspector上での変数参照方法">}}

# 5. まとめ

今回はShaderGraphについて紹介しました。ノードを作って繋ぐだけで簡単にMaterialの制御を実装でき、リアルタイムにグラフィックを確認できるため頭のイメージを具現化しやすいです。貴方にその有難みを少しでも体感して頂けたなら投稿者冥利に尽きます。

{{<figure src="./appnavi.gif">}}

最後に、先人たちがShaderGraphで作った作品をいくつか紹介します。「こんなこともできるんだな」と感じてインスピレーションが膨らむはずです。

* [Unity のシェーダーグラフで描画する軌跡をアニメーションさせる](https://www.matatabi-ux.com/entry/2018/12/13/100000)
* [【Unity】ShaderGraphでLoadingっぽいアイコンを作る](https://bravememo.hatenablog.com/entry/2020/05/13/111657)
* [UnityのShaderGraphでPBRシェーダーを作ってみる](https://qiita.com/o_s_t/items/c546962bbd9f064c9908)

Youtubeでも数々の素晴らしい動画がアップロードされているので一度検索してみてください。

# 参考にした書籍

森 哲哉, 秋山 高廣, 他, "Unity デザイナーズ・バイブル", ボーンデジタル社(2020).
[Unity デザイナーズ・バイブル](https://www.borndigital.co.jp/book/18319.html)
