---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Truck Quiz"
subtitle: ""
summary: "春休みの間に作ったゲームの紹介"
authors: ["juris710"]
tags: ["Unity"]
categories: ["作品紹介"]
date: 2020-04-28T15:07:58+09:00
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
Unityについて勉強するため春休みの間に作成した、"Truck Quiz"を紹介します。

# ゲームの説明  

某有名クイズ番組のクイズを模したゲームです。
2択問題が5問出題されます。間違えてた時点でゲームオーバーです。
キーボード操作、タッチ操作の両方に対応しています。

{{<unity src="https://juris710.github.io/TruckQuizSample/">}}

# 工夫した点  

- クイズの問題やゲーム設定をJSONファイルで管理
- 画像のアスペクト比を維持するように
- 解答の取り消し、問題の差し替え機能実装
- ゲーム内の文章ほぼ全てにフリガナを付ける（フリガナ表示・非表示切り替え可能）
- 問題の解説に文章だけでなく選択肢の画像も利用できるように

# 実装の概説  

{{<collapsable "Unityに詳しい人向け">}}
"Truck Quiz"を主に動かしているのは`StateMachineBehaviour`です。`StateMachineBehaviour`について軽く説明すると、アニメーションの開始時、終了時、Update時(MonoBehaviourのUpdate関数同様、アニメーションの再生中定期的に呼ばれる)に任意の処理を挟むことのできるクラスです。  
トロッコとUIで2つのAnimatorがあり、「選択肢を選んだアニメーション」が終了したら「トロッコが曲がるアニメーション」を開始する、みたいな処理をGameManagerクラス内で実装しています。
{{</collapsable>}}

# 改良予定  

{{<collapsable "Unityに詳しい人向け">}}

## AssetBundleを使用した画像管理  

現状Resourceクラスで問題の画像を管理していますが、公式が「Resourceクラスは使うな」と言っているので、AssetBundleへの切替を検討しています

## Unityバージョンのアップグレード  

現在使用しているUnityのバージョンは2018ですが、2018ではpreview版である`Input System`を使用したいため、2019へのアップグレードを検討しています。

## デザイン面の改善

UIデザインの改善を検討しています。
{{</collapsable>}}
