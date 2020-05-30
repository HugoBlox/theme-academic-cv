---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Unity WebGLのゲームをローカルでプレイする方法"
subtitle: ""
summary: "VSCode拡張機能紹介"
authors: ["juris710"]
tags: ["Unity", "Visual Studio Code"]
categories: []
date: 2020-05-30T16:45:03+09:00
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
UnityでWebGLをプラットフォームに選択し、`Build And Run`を押すと、ブラウザが起動して、作ったゲームをプレイすることができます。WebGLのビルドにはとても時間がかかるので、毎回ビルドするのではなく、一度ビルドしたゲームを複数回プレイしたくなります。ですが、ただ単に出力されたファイル`index.html`を開くだけではプレイできません。  
{{<figure src="./Unity_WebGL_Index_Html_Error.png" title="index.htmlを開くと、このようなエラーメッセージが表示される" >}}
そこで、`Visual Studio Code`(`VSCode`)を使ってビルドしたゲームをプレイする方法を紹介します。  
{{<alert note>}}
`VSCode`は https://code.visualstudio.com/ からダウンロードできます。
{{</alert>}}
# 1. 拡張機能のインストール
`VSCode`を起動し、画面左のボタンを押して拡張機能パネルを開きます。
{{<figure src="./VSCode_Japanese.png" title="拡張機能パネルを開くボタン">}}
パネル上の検索ボックスに`live server`と入力し、検索結果の一番上にある`Live Server`をクリックします。`拡張機能:Live Server`タブが開くので、`インストール`をクリックします。
{{<figure src="./VSCode_Live_Server.png" title="「拡張機能：Live Server」タブ">}}

## (補足) VSCode日本語化
検索ボックスに`japanese`と入力し、検索結果の一番上にある拡張機能`Japanese Language Pack for Visual Studio Code`をインストールすることで日本語化できます。
{{<figure src="./VSCode_Japanese.png" title="「Japanese Language Pack for Visual Studio Code」(インストール済み)">}}

# 2. ビルドしたゲームをVSCodeで開く
メニューの`ファイル(F)`から`フォルダを開く... Ctrl+K Ctrl+O`をクリックします。フォルダ選択ダイアログが表示されるので、出力された`Build`フォルダと`TemplateData`フォルダ、`index.html`ファイルのあるフォルダを選択します。

# 3. ゲームをプレイ
正しくフォルダを開けていると画面右下に`Go Live`ボタンが表示されます。このボタンをクリックするとブラウザが起動し、ゲームをプレイできます。
{{<figure src="./Live_Server_Go_Live.png" title="Go Live ボタン">}}
`Go Live`があった場所に表示される`Port:5050`をクリックすれば、ブラウザでのプレイを停止できます。VSCodeを閉じれば自動的に停止するはずですが、プレイを止める際にはボタンを押すことをおすすめします。