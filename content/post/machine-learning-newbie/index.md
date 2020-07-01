---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "機械学習入門"
subtitle: ""
summary: "機械学習に必要な数学知識"
authors: ["yuta"]
tags: ["機械学習"]
categories: []
date: 2020-07-01T10:11:52+09:00
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

この記事は多くの理系大学生が1年生時に習う微分積分、線形代数が機械学習の分野においてどの様に活用されているのかを示すことで勉強のモチベーションを上げてもらおう、という趣旨の記事となっています。ここでは下の図のような、複数の座標上の点から推定される最適な直線を引くアルゴリズムを取り扱います。

{{<figure src="./before.png" title="before">}}

{{<figure src="./after.png" title="after">}}

## 最急降下法

機械学習の一例として、偏微分を用いた最急降下法というアルゴリズムを紹介します。[ウィキペディア](https://ja.wikipedia.org/wiki/%E6%9C%80%E6%80%A5%E9%99%8D%E4%B8%8B%E6%B3%95#:~:text=%E6%9C%80%E6%80%A5%E9%99%8D%E4%B8%8B%E6%B3%95%EF%BC%88%E3%81%95%E3%81%84%E3%81%8D%E3%82%85%E3%81%86%E3%81%93%E3%81%86,%E3%81%A6%E3%81%84%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82)では最急降下法を以下の様に説明しています。
>最急降下法は、関数の傾きのみから、関数の最小値を探索する連続最適化問題の勾配法のアルゴリズムの一つ。
>
すなわち下図のように、関数上の初期地点から微分によって求まる傾きのマイナス方向へ点を移動させていき、初期地点から最も近い最小点(極小値)を求めるアルゴリズムです。

{{<figure src="./最急降下法.png" title="最急降下法">}}

式としては以下のようになります。αは点の移動距離の大きさを決めるパラメーターです。

{{<figure src="./最急降下法式.png" title="最急降下法式">}}

[ウィキペディア 最急降下法](https://ja.wikipedia.org/wiki/%E6%9C%80%E6%80%A5%E9%99%8D%E4%B8%8B%E6%B3%95#:~:text=%E6%9C%80%E6%80%A5%E9%99%8D%E4%B8%8B%E6%B3%95%EF%BC%88%E3%81%95%E3%81%84%E3%81%8D%E3%82%85%E3%81%86%E3%81%93%E3%81%86,%E3%81%A6%E3%81%84%E3%82%8B%E5%A0%B4%E5%90%88%E3%81%AF%E5%A4%9A%E3%81%84%E3%80%82)

## 最小二乗法

物理実験でも使われますが、複数の座標点から推定される直線を求めるために最小二乗法が用いられます。[ウィキペディア](https://ja.wikipedia.org/wiki/%E6%9C%80%E5%B0%8F%E4%BA%8C%E4%B9%97%E6%B3%95)では最小二乗法は次のように説明されています。
>最小二乗法は、測定で得られた数値の組を、適当なモデルから想定される1次関数、対数曲線など特定の関数を用いて近似するときに、想定する関数が測定値に対してよい近似となるように、残差の二乗和を最小とするような係数を決定する方法、あるいはそのような方法によって近似を行うことである。
>

# 実行

>使用したツール: spyder  
>使用言語 : python ver3.7
>
>上記のツール、言語はAnacondaというパッケージ管理ソフトで一括ダウンロード可能です。Anacondaのインストールに関しては[【入門編】便利なPython Anacondaをインストールから使い方まで徹底解説！](https://www.creativevillage.ne.jp/72837)を参考にしました。

最急降下法と最小二乗法より以下のような理論式になります。
{{<figure src="./理論式 .png" title="理論式">}}

[udemy 機械学習コース](https://www.udemy.com/course/machine-learning-3algo/)を参考にしたのでソースコードは載せられませんが上記の理論式を繰り返し、a,bそれぞれに最急降下法を用いて最適化することで[冒頭](#はじめに)に述べたような直線を引けます。

また各点の座標は行列を用いて下記のように定義しました。
{{<figure src="./行列.png" title="行列">}}

# おわりに

ここでは簡単な最急降下法について取り扱いましたが数学やプログラミングを学んでいくことで画像認識や[unity](https://unity3d.com/jp/machine-learning)で物体の動きの最適化など、できることが増えていきます。興味がある方はぜひ大学の授業を活かして勉強してみてください。
