---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Windowsでもビデオ会議でバ美肉したい！"
subtitle: ""
summary: "VTuberの姿でビデオ会議に参加する方法"
authors: ["juris710"]
tags: []
categories: []
date: 2020-05-17T15:47:06+09:00
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
projects: ["online-yukosai-2020"]
---
# はじめに
## バ美肉とは
>バ美肉（バびにく）とは、バーチャル美少女受肉またはバーチャル美少女セルフ受肉の略語。美少女のアバターを纏うこと、あるいは纏った上でバーチャルな美少女として、VRChat等のバーチャル空間で活動したり、バーチャルYouTuber・バーチャルアイドル等として活動することを指す。(Wikipedia)
## ビデオ会議でバ美肉
Qiitaで「バ美肉」と検索すると、VTuberなどの姿でビデオ会議に参加する方法を解説する記事が複数投稿されています。しかしながら、それらの記事はMacでのやり方解説であり、Windowsでの方法を解説した記事は（ざっと見た限りでは）見つかりませんでした。
# Windowsでのやり方
## 仮想カメラの準備
バ美肉した映像をカメラとしてビデオ会議ソフトに認識してもらうために仮想カメラが必要です。Qiitaの記事では`CamTwist`というソフトが使われていますが、Mac版が存在しません。そのため、代わりに`OBS Studio`というフリーソフトを使用します。録画・配信用のソフトウェアですが、`OBS Virtualcam`というプラグインを使用することで仮想カメラになります。
### OBS Studioのインストール
https://obsproject.com/ja からインストールできます。
### OBS Virtualcamのインストール
https://obsproject.com/forum/resources/obs-virtualcam.949/ にアクセスし、画面右の`Go to download`をクリックすることでインストーラーがダウンロードできます。
{{<alert warning>}}
今回使用したバージョンは`2.0.5`です。それ以下のバージョンだと上手くいかない可能性があります。
{{</alert>}}
## バ美肉する
https://facevtuber.com/にアクセスします。  
`Start`をクリックします。  
一回目のみ、カメラの使用を許可してください。  
`Start`の上にカメラ映像が表示されるまで（20秒くらい）待ってください。  
`Set`をクリックします。  
`popWindow`をクリックします。  
子ウインドウが開き映像が表示されます。  
## OBS Studioにバ美肉した映像を表示
`OBS Studio`を起動します。  
`ソース`の項目の`+`をクリックし、`ウインドウキャプチャ`を選択します。  
`ソースを作成/選択`ダイアログで、`OK`をクリックします。  
`'ウインドウキャプチャ'のプロパティ`ダイアログで、`ウインドウ`のドロップダウンリストから子ウインドウの名前（Chromeなら`[chrome.exe]:無題-Google Chrome`）を選択し`OK`をクリックします。
## 仮想カメラ起動
左上の`ツール`メニューから`VirtualCam`を選択します。  
`VirtucalCam`ダイアログで、`Start`をクリックすることで仮想カメラに映像が出力されます。
`Stop`をクリックすれば映像出力が止まります。
## ビデオ会議に参加
カメラとして`OBS-Camera`を選択すれば、バ美肉した姿でビデオ会議に参加できます。

# Tips(facevtuber.com)
- モデルを変更したい場合
  1. "ファイルを選択"をクリックし、MMDモデル入りzipファイルを選択
  2. 権利表記を確認するダイアログが複数表示されるので、ダイアログが表示されなくなるまで`OK`を押し続ける
- zoomでバーチャル背景を使用する場合は背景色で`Green`を選択すると、グリーンバックの代わりになります。
- facevtuber.comのページや子ウインドウを最小化すると映像が止まります。
- `moveLeftHandByMouse`、`moveRightHandByMouse`にチェックが入っているとマウスの動きに合わせて手が動きます。手の位置がおかしくなったら`ResetPose`をクリックしてください。
- 子ウインドウはできるだけ画面下に移動させると、マウスカーソルが映り込むことがなくなります。

# 参考サイト
- https://note.com/d_v_osorezan/n/nd9130e2012dd
- https://qiita.com/tktktktk/items/a024b9df15efe7b36ad6
- https://forest.watch.impress.co.jp/docs/news/585371.html

