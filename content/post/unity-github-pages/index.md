---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Unity製ゲームをWebで共有する方法"
subtitle: "Unity WebGL × GitHub Pages"
summary: "Unityで作ったゲームを誰でもプレイできるようにする方法の解説です"
authors: ["juris710"]
tags: ["Unity", "GitHub"]
categories: []
date: 2020-05-04T20:17:22+09:00
lastmod: 2020-05-04T20:17:22+09:00
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
Gitに詳しくない人向けに書いています。Gitに詳しい人は`詳しくない人向け`の部分は読まなくて大丈夫です。
# 必要なもの  
- Unity
- GitHub アカウント
- Git：[ここ](https://git-scm.com/downloads)からダウンロードできます

# 1. Unityでゲームをビルドする
## 1.1 Build Settingsを開く
左上のメニューで`File`>`Build Settings`をクリックしてください。
## 1.2 プラットフォームの変更
`WebGL`を選択し、`Switch Platform`をクリックしてください。
## 1.3 ゲームをビルド
`Build`をクリックしてください。ビルド先はどこでも構いません。私は`(プロジェクト名)/Builds/WebGL`を選択しています。

# 2. GitHubにアップロード
ビルドの結果、以下の3つのファイルが生成されます。  
- `Build`フォルダ
- `TemplateData`フォルダ
- `index.html`ファイル  

これらのファイルをGitHubにアップロードします。  
{{<collapsable 詳しくない人向け>}}
## 2.1 GitHubにサインイン  
[GitHub](https://github.com/)にアクセスし、サインインしてください。  
## 2.2 新しいレポジトリの作成  
{{<figure src="./GitHub_New_Repository.png" class="left">}}
`Repositories`の右にある`New`をクリックしてください。  
{{<figure src="./GitHub_New_Repository2.png" class="left">}}
`Repository name`は任意の名前で構いませんが、ゲームをプレイする人も見ることができるので注意してください。  
`Public`と`Private`を選択できますが、`Public`を選択してください。  
`Create repository`を選択してレポジトリを作成してください。  
{{<figure src="./GitHub_New_Repository3.png" class="left">}}
赤い枠で囲まれたボタンを押してください。左のURLがクリップボードにコピーされます。
## 2.3 ファイルのアップロード
`Git Bash`を起動してください。
起動時のフォルダは`C:\Users\(ユーザー名)`なので、ビルド結果があるフォルダに移動してください。`cd (フォルダ名)`コマンドで移動できます。
移動したら、以下のコマンドを一行ずつ実行してください。
{{<alert note>}}
  `Git Bash`では`Shift`+`Insert`で貼り付けができます
{{</alert>}}
```
git init
git add .
git commit -m "Initial Commit"
git remote add origin (先ほどコピーしたURL)
git push -u origin master
```
{{</collapsable>}}

# 3. Webにゲームを公開
{{<figure src="./GitHub_Pages.png" class="left">}}
`Settings`をクリックしてください。
{{<figure src="./GitHub_Pages2.png" class="left">}}
スクロールし、`GitHub Pages`の`Source`の下にあるドロップダウンリストで`master branch`を選択してください。

# 公開したゲームをプレイ
`https://(ユーザー名).github.io/(レポジトリ名)/`というURLにアクセスすると、作ったゲームをプレイすることができます。

