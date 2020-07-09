---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "スライドの書き方"
summary: "スライドの書き方紹介"
authors: ["juris710"]
tags: []
categories: []
date: 2020-05-17T17:58:10+09:00
slides:
  # Choose a theme from https://github.com/hakimel/reveal.js#theming
  theme: black
  # Choose a code highlighting style (if highlighting enabled in `params.toml`)
  #   Light style: github. Dark style: dracula (default).
  highlight_style: dracula
---

# スライド機能

Markdown記法＋αでスライドを作成することができます。

---

## 操作方法

- 次のスライド: `Right Arrow` または `Space`
- 前のスライド: `Left Arrow`
- 最初のスライド: `Home`
- 最後のスライド: `End`
- 一覧表示: `Esc`
- スピーカーノート: `S`
- フルスクリーン: `F`
- ズーム: `Alt + Click`

---

## シンタックスハイライト機能

インラインコード:`print("Hello, World!")`

```c
#include<stdio.h>
int main(void){
  printf("Hello, World!");
  return 0;
}
```

---

## 数式表示

インライン表示:$ F=G\frac{Mm}{r^2} $

$$
F=G\frac{Mm}{r^2}
$$

+++

## 縦スクロール

補足情報など

---

## Fragments

後からコンテンツを表示します

```md
{{%/* fragment */%}} One {{%/* /fragment */%}}
{{%/* fragment */%}} **Two** {{%/* /fragment */%}}
{{%/* fragment */%}} Three {{%/* /fragment */%}}
```

`Right Arrow`か`Space`を押すと現れます

{{% fragment %}} One {{% /fragment %}}
{{% fragment %}} **Two** {{% /fragment %}}
{{% fragment %}} Three {{% /fragment %}}

+++

### Fragments補足

A fragment can accept two optional parameters:

- `class`: use a custom style (requires definition in custom CSS)
- `weight`: sets the order in which a fragment appears

---

## スピーカーノート

スピーカーノートを追加できます

```md
{{%/* speaker_note */%}}
- スピーカーだけが見れるメモです
- `S`を押さないとみれません
{{%/* /speaker_note */%}}
```

`S`を押すとスピーカーノートを見れます

{{% speaker_note %}}

- スピーカーだけが見れるメモです
- `S`を押さないとみれません

{{% /speaker_note %}}

---

{{< slide background-image="/img/hero.jpg" >}}

## スライドのカスタマイズ

```md
{{</* slide background-image="/img/画像名" */>}}
```

```md
{{</* slide background-color="#0000FF" */>}}
```

```md
{{</* slide class="my-style" */>}}
```

---

## Themes

- black: Black background, white text, blue links (default)
- white: White background, black text, blue links
- league: Gray background, white text, blue links
- beige: Beige background, dark text, brown links
- sky: Blue background, thin dark text, blue links

+++

- night: Black background, thick white text, orange links
- serif: Cappuccino background, gray text, brown links
- simple: White background, black text, blue links
- solarized: Cream-colored background, dark green text, blue links
