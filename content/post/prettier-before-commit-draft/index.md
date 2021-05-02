---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "コミット前にPrettierでソースコードをフォーマットする"
subtitle: ""
summary: "2021年版"
authors: ["juris710"]
tags: ["git", "Node.js"]
categories: []
date: 2021-05-02T20:01:34+09:00
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
# はじめに

Node.jsプロジェクトにおいて、[Prettier](https://prettier.io/)によるソースコードのフォーマットを毎回のコミット前に自動的に実行する方法について解説します。

やり方を解説しているサイトは既に存在します。しかしながら、使用しているnpmパッケージの破壊的変更により、それらのやり方は最新バージョンでは上手くいかなくなっています。

Reactアプリの開発中、[Create React Appのドキュメント](https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically)で解説されていた古いやり方で上手くいかなかったので、記事にしてみました。

# 前提

- gitリポジトリである前提で進めます。
- この解説では`yarn`を使用します。`npm`でもできると思うので、コマンドを適宜置き換えてください。

# 1. Prettierの導入

Prettierを導入します。`dependencies`ではなく`devDependencies`である必要があるので、`--dev`オプションを忘れないようにしてください。

```shell
yarn add --dev prettier
```

# 2. `husky`と`lint-staged`の導入

以下のコマンドを実行すると、`husky`と`lint-staged`が`devDependencies`に追加され、`package.json`に設定が追加されます。また、`.husky`というフォルダーが作成されます。

```shell
npx mrm lint-staged
```

## 失敗した場合

私がこのコマンドを実行した際、エラーが出て上手くいきませんでした。以下のコマンドを実行した後でもう一度試すと、上手くいきました。

```shell
yarn global add mrm mrm-task-lint-staged
```

# 参考文献

- https://prettier.io/docs/en/precommit.html
- https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically
