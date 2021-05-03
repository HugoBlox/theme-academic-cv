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

私の環境ではエラーが出て上手くいきませんでした。以下のコマンドを実行した後でもう一度試すと、上手くいきました。

```shell
yarn global add mrm mrm-task-lint-staged
```

## 不要なファイルの削除

私の環境では、実行後`6`という名前のファイルが作成されました。ただのログファイルみたいなので、削除しても問題と思います。

{{<spoiler text="`6`の中身">}}

```txt:6
yarn add v1.22.5
[1/4] Resolving packages...
[2/4] Fetching packages...
info electron-installer-debian@3.1.0: The platform "win32" is incompatible with this module.
info "electron-installer-debian@3.1.0" is an optional dependency and failed compatibility check. Excluding it from installation.
info electron-installer-redhat@3.3.0: The platform "win32" is incompatible with this module.
info "electron-installer-redhat@3.3.0" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@2.3.2: The platform "win32" is incompatible with this module.
info "fsevents@2.3.2" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...
success Saved lockfile.
success Saved 20 new dependencies.
info Direct dependencies
├─ husky@6.0.0
└─ lint-staged@10.5.4
info All dependencies
├─ aggregate-error@3.1.0
├─ clean-stack@2.2.0
├─ dedent@0.7.0
├─ execa@4.1.0
├─ get-own-enumerable-property-symbols@3.0.2
├─ human-signals@1.1.1
├─ husky@6.0.0
├─ is-obj@1.0.1
├─ is-regexp@1.0.0
├─ is-stream@2.0.0
├─ lint-staged@10.5.4
├─ listr2@3.8.1
├─ log-update@4.0.0
├─ merge-stream@2.0.0
├─ npm-run-path@4.0.1
├─ p-map@4.0.0
├─ please-upgrade-node@3.2.0
├─ string-argv@0.3.1
├─ stringify-object@3.3.0
└─ strip-final-newline@2.0.0
$ husky install
husky - Git hooks installed
Done in 5.92s.
```

{{</spoiler>}}

# 3. `package.json`の編集

このままだと、js・css・mdファイルしかフォーマットされません。`package.json`の`"lint-staged"`を編集することでフォーマット対象ファイルを増やせます。例えば、次のように編集します。

```package.json
"lint-staged": {
  "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
    "prettier --write"
  ]
}
```

# 4. ソースコードのフォーマット

今回の方法は、`git commit`が実行された際に変更が加えられたファイルに対してフォーマットを実行するものです。そのため、既にコミット済みのソースコードはフォーマットされないので、最初は手動でフォーマットする必要があります。

```shell
npx prettier --write .
```

# 参考文献

- https://prettier.io/docs/en/precommit.html
- https://create-react-app.dev/docs/setting-up-your-editor/#formatting-code-automatically
