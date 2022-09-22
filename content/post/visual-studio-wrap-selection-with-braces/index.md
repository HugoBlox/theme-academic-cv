---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Visual Studio で選択範囲を括弧で囲む方法" # 記事タイトル
subtitle: "" # 記事のサブタイトル(省略可)
summary: "選択範囲の前後に括弧やダブルクォーテーションなどを挿入する方法の紹介" # 要約：記事の中身を端的に表す短い文章
authors: ["juris710"] # 著者ID(複数可)
tags: ["Visual Studio"] # タグ：記事内容のジャンルなどを表す単語(複数可)
categories: []
date: 2022-09-21T21:03:53+09:00
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
# はじめに

[Visual Studio Code](https://code.visualstudio.com/) などのエディタでは、テキストを選択した状態で 括弧`(`を入力すると、選択範囲の前後に括弧が挿入されます。
`(`以外のキーでも同様の機能があり、例えばダブルクォーテーション`"`を入力すると、選択範囲の前後にダブルクオーテーションが挿入されます。

{{<figure src="./vscode-wrap-selection.png" caption="選択範囲の前後に括弧などを挿入するVSCodeの機能">}}

一方で、[Visual Studio](https://visualstudio.microsoft.com/ja/)はVSCodeと挙動が異なります。テキストを選択した状態で`(`や`"`を入力すると、選択範囲が消えて`(`や`"`に置き換わってしまいます。

この記事では、Visual Studio においてもVSCodeと同様の機能を実現する方法について紹介します。

今回の記事で想定する Visual Studio のバージョンは以下の通りです。

- Visual Studio Community 2019
- Visual Studio Community 2022

# 方法1

## 方法1のメリット

- 設定変更のみで実現可能
- Visual Studio 2017 にも対応？（未検証）

## 方法1のデメリット

- C言語とC++のソースコードを編集している時のみ利用可能
- 一部の記号のみ対応

## 方法1の手順

1. Visual Studio を起動
2. Visual Studio 左上のメニューから `ツール` → `オプション`を選択

   {{<figure src="./method1-procedure2.png">}}

3. 「オプション」ウィンドウ左側のメニューから`テキスト エディター`→`C/C++`→`詳細設定`を選択

   {{<figure src="./method1-procedure3.png">}}

4. 「オプション」ウィンドウ右側で`テキスト エディター`を選択
    - Visual Studio 2019 の場合
        1. `波かっこによる囲みの有効化`の値を`True`に設定
        2. `かっこによる囲みの有効化`の値を`True`に設定

         {{<figure src="./method1-procedure4-2019.png">}}

    - Visual Studio 2022 の場合

        `自動囲みモード`を次のいずれかの値に設定
        - すべて
        - 引用符のみ
        - 角かっこのみ

# 方法2

## 方法2のメリット

- 多くの言語に対応
- 多くの記号に対応

## 方法2のデメリット

- 第三者が作成した拡張機能を導入する必要あり

## 方法2の手順

1. Visual Studio を起動
2. Visual Studio 左上のメニューから `拡張機能` → `拡張機能の管理`を選択

   {{<figure src="./method2-procedure2.png">}}

3. 「拡張機能の管理」ウィンドウ左側から`オンライン`を選択
4. 「拡張機能の管理」ウィンドウ右上の検索ボックスに`Auto Surround`を入力しEnter
5. 「拡張機能の管理」中央のリストに表示された`Auto Surround`を選択し、右上の`ダウンロード`をクリック

   {{<figure src="./method2-procedure3.png">}}

6. Visual Studio を終了
7. 「VSIX Installer」ウィンドウ右下の`Modify`をクリック

   {{<figure src="./method2-procedure7.png">}}

8. 「VSIX Installer」ウィンドウに「変更が完了しました」と表示されるまで待機

   {{<figure src="./method2-procedure8.png">}}

9. 「VSIX Installer」ウィンドウに右下の`Close`をクリック

# 参考文献

- [https://stackoverflow.com/questions/37226014/visual-studio-is-there-a-shortcut-to-insert-parentheses-around-a-selection](https://stackoverflow.com/questions/37226014/visual-studio-is-there-a-shortcut-to-insert-parentheses-around-a-selection)
- [https://marketplace.visualstudio.com/items?itemName=reduckted.AutoSurround](https://marketplace.visualstudio.com/items?itemName=reduckted.AutoSurround)
