---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "GitHubのforkとライセンス"
subtitle: "forkしたリポジトリのライセンスについて"
summary: "GitHubを使ったことのある人向け"
authors: ["Juris710"]
tags: ["GitHub"]
categories: []
date: 2020-05-24T22:37:45+09:00
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
# GitHubのfork
GitHubにはforkという機能があります。既に存在するリポジトリをコピーして、オリジナルのリポジトリに影響を与えることなく変更を加えることができます。  
このサイトは[Academic Kickstart](https://github.com/sourcethemes/academic-kickstart)というリポジトリをforkして開発しています。

# ライセンス
GitHubのリポジトリにはたいてい、LICENSEという名前のファイルがあります。ライセンスはそのプログラムの改変/
商用利用などをしても良いかなどを記したファイルで、何を許可するかによって様々なライセンスが存在します。  
その中で一番多く用いられているライセンスの１つがMITライセンスです。[Academic Kickstart](https://github.com/sourcethemes/academic-kickstart)もMITライセンスです。
MITライセンスは以下の2つを守れば、改変や、商用利用など自由に使うことができます。
- 元の著作権表示(`Copyright (c) 年 作者名`)をそのまま掲載すること  
- ライセンスの全文（あるいは全文が掲載されたサイトのURL）を掲載すること  

詳しくは[このサイト](https://wisdommingle.com/mit-license/)などを参照してください。

# forkとライセンス  
このサイトを開発する中で、「forkしたリポジトリのライセンスはどう変更するべきなのか」という疑問を持ち、検索してみました。その結果わかった2つの方法を紹介します。
## 方法1　一行下に自分の著作権表示を追加
{{<collapsable 方法1>}}
```md
The MIT License (MIT)

Copyright (c) 年 foo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
上のようなライセンスのリポジトリをforkする場合、次のように変更します。
```md
The MIT License (MIT)

Copyright (c) 年 foo
Copyright (c) 年 作者名(自分)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
{{</collapsable>}}
## 方法2　ライセンスを併記
{{<collapsable 方法2>}}
```md
The MIT License (MIT)

Copyright (c) 年 foo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
上のようなライセンスのリポジトリをforkする場合、書き方は色々ありますが、例えば次のように変更します。
```md
The MIT License (MIT)

Copyright (c) 年 作者名(自分)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Here is the original copyright notice:

The MIT License (MIT)

Copyright (c) 年 foo

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
この方法には1つだけ問題があります。GitHubはライセンスの種類を認識し、説明を表示する機能がありますが、この方法だとMITライセンスだと認識してくれません。
{{</collapsable>}}

# 検証
forkしたリポジトリのライセンス変更に、実際どのような方法が取られているか検証することにしました。検証するリポジトリは[東京都コロナウイルス対策サイト](https://github.com/tokyo-metropolitan-gov/covid19)です。GitHubにMITライセンスのリポジトリが公開されており、多くの都道府県が(公式 / 非公式で)このリポジトリをforkした対策サイトを作成しています。[派生したサイト一覧](https://github.com/tokyo-metropolitan-gov/covid19/blob/development/FORKED_SITES.md)に掲載されているリポジトリについて、`master`ブランチの`LICENSE.txt`の権利表記を比較すると、以下のような結果になりました。

|   著作権表示に加えられた変更   | リポジトリ数 |  
| :----------------------------: | :----------: |  
|            そのまま[^1]        |      51      |
|            書き換え            |       7      |
|              方法1             |       1      |
|              方法2             |       0      |
[^1]:forkした側のライセンスを別ファイルに掲載しているリポジトリを含みます。

東京都のリポジトリの権利表記`Copyright (c) 2020 Tokyo Metropolitan Government and other contributors.`をforkした側の名前に書き換えているリポジトリがいくつかありました。厳密に言えばこれはMITライセンスの規約違反になるので意外でした。「コロナ対策サイト」で著作権の問題は起こらないでしょうから、ライセンス関連はあまり気にしていないのかもしれません。

# 参考サイト
- https://help.github.com/ja/github/getting-started-with-github/fork-a-repo
- https://wisdommingle.com/mit-license/
- https://wisdommingle.com/mit-license/
- https://gist.github.com/fbaierl/1d740a7925a6e0e608824eb27a429370
- https://opensource.stackexchange.com/questions/6119/forking-github-repository-mit-what-references-to-the-original-author-should-r
- https://ja.stackoverflow.com/questions/3040/mit%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E3%81%AE%E3%82%BD%E3%83%95%E3%83%88%E3%82%A6%E3%82%A7%E3%82%A2%E3%82%92%E3%83%95%E3%82%A9%E3%83%BC%E3%82%AF%E3%81%97%E3%81%9F%E5%A0%B4%E5%90%88%E3%81%AE%E3%83%A9%E3%82%A4%E3%82%BB%E3%83%B3%E3%82%B9%E8%A1%A8%E8%A8%98
- https://softwareengineering.stackexchange.com/questions/277688/if-i-fork-a-project-on-github-that-is-licensed-under-mit-how-to-i-handle-the-at