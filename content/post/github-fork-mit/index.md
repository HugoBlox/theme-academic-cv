---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "GitHubのforkとライセンス"
subtitle: "forkしたリポジトリのライセンスについて"
summary: "GitHubを使ったことのある人向け"
authors: ["Juris710"]
tags: []
categories: []
date: 2020-05-24T22:37:45+09:00
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
# GitHubのfork
GitHubにはforkという機能があります。既に存在するリポジトリをコピーして、オリジナルのリポジトリに影響を与えることなく変更を加えることができます。  
このサイトは[Academic Kickstart](https://github.com/sourcethemes/academic-kickstart)というリポジトリをforkして開発しています。

# ライセンス
GitHubのリポジトリにはたいてい、LICENSEという名前のファイルがあります。ライセンスはそのプログラムの改変/
商用利用などをしても良いかなどを記したファイルで、何を許可するかによって様々なライセンスが存在します。  
その中で一番多く用いられているライセンスの１つがMITライセンスです。[Academic Kickstart](https://github.com/sourcethemes/academic-kickstart)もMITライセンスです。
MITライセンスは以下の2つを守れば、改変や、商用利用など自由に使うことができます。
- 著作権表示(`Copyright (c) 年 作者名`)を掲載すること  
- ライセンスの全文（あるいは全文が掲載されたサイトのURL）を掲載すること  

詳しくは[このサイト](https://wisdommingle.com/mit-license/)などを参照してください。

# 疑問に思ったこと
このサイトを開発する中で、次のような疑問を持ちました。「forkしたリポジトリのライセンスはどうするべきなのか」ということです。私の調べ方が悪いのかもしれませんが、forkしたリポジトリにあるLICENSEファイルに自分の著作権表示を加えてもよいのか、それともそのままにするべきなのか、解説した記事がないのです。

# 調べた結果

# 検証
forkされた数の多いリポジトリを1つ取り上げ、fork先でライセンスがどのように変更されているかを検証することにしました。取り上げるリポジトリは、昨今話題になった「東京都コロナウイルス対策サイト」です。GitHubにMITライセンスのリポジトリが公開されており、多くの都道府県が(公式 / 非公式で)このリポジトリをforkした対策サイトを作成しています。  
GitHubにforkして作成されたリポジトリを表示する機能がないため、東京都のリポジトリに「派生したサイト一覧」があることから選びました。

|   ライセンスに加えられた変更   | リポジトリ数 |  
| :----------------------------: | :----------: |  
|            そのまま            |      51      |
|            書き換え            |       6      |
|              追記              |       1      |

# 結論
もとのライセンスの著作権表示の下に自分の著作権表示を加えるのが一番問題なさそうです。  
ですが、そのままにしているリポジトリが多いようなので、現状はそのままにしておきます。
# 参考サイト
- https://help.github.com/ja/github/getting-started-with-github/fork-a-repo
- https://wisdommingle.com/mit-license/
- https://wisdommingle.com/mit-license/
- https://gist.github.com/fbaierl/1d740a7925a6e0e608824eb27a429370
- https://opensource.stackexchange.com/questions/6119/forking-github-repository-mit-what-references-to-the-original-author-should-r
- https://ja.stackoverflow.com/questions/3040/mit%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E3%81%AE%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%92%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88%E3%81%AE%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E8%A1%A8%E8%A8%98
- https://softwareengineering.stackexchange.com/questions/277688/if-i-fork-a-project-on-github-that-is-licensed-under-mit-how-to-i-handle-the-at