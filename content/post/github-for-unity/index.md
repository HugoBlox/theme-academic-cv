---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "GitHub for Unityの紹介"
subtitle: ""
summary: "Unityアセット紹介"
authors: ["Juris710"]
tags: ["Unity", "GitHub"]
categories: []
date: 2020-04-30T20:18:25+09:00
lastmod: 2020-04-30T20:18:25+09:00
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

# 使用したUnityのバージョン  
Unity 2018.4.22f1  
# 導入方法
プロジェクトごとに行う必要があります。
1. Asset Storeから「GitHub for Unity」をインポート
2. メニューで`Window`>`GitHub`を選択  
    {{<figure src="./GitHub_Tab_Menu.png" class="left">}}
    GitHubタブが開きます。
    {{<figure src="./GitHub_Tab.png" class="left">}}
3.  **(初回のみ)** `Sign In`をクリック  
    {{<figure src="./GitHub_SignIn.png" class="left">}}
    ダイアログが表示されるので、GitHubアカウントでサインインしてください。
4.  `Initialize a git repository for this project`をクリック  
    少し待つと、タブの中身が変化します。  
    {{<figure src="./GitHub_AfterGitInit.png" class="left">}}

# 使い方
`Changes`を選択してください。前回保存した状態から変更があったファイルが一覧表示されます。
{{<figure src="./GitHub_Changes.png" class="left">}}
## 変更を保存する
1. リストから保存したい変更をチェックマークをクリックして選択
2. `Commit summary`に変更内容を記述
3. `Commit description`に変更内容の詳細を記述（任意）
4. `Commit to [master]`をクリック
## 変更内容を確認する
前回保存した状態と現在の状態との差分を見ることができます。
{{<alert warning>}}
差分を比較するソフトウェア([WinMerge](https://forest.watch.impress.co.jp/library/software/winmerge/)など)をインストールする必要があります。
{{</alert>}}
1. リストから差分を見たいファイルを右クリック
2. `Show Diff`をクリック
### 変更を取り消す
加えた変更を無かったことにして、前回保存した状態に戻すことができます。
1. リストから変更を取り消したいファイルを右クリック
2. `Discard`をクリック


# その他
## 比較ソフトウェアを変更したい
比較ソフトウェアが複数インストールされていて、変更したい場合
1. UnityのPreferenceを開く
2. `External Tools`を選択
3. `Revision Controll Diff/Merge`でソフトウェアを選択  
---
{{<collapsable GitHubやGitに詳しい人向け>}}
## Revert
1. `History`を選択
2. コミットを右クリック
3. `Revert`をクリック
{{</collapsable>}}




