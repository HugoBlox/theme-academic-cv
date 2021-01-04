---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Journaling"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-01-02T20:04:31Z
lastmod: 2021-01-02T20:04:31Z
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

---

<style>.hljs {white-space: pre-wrap;}</style>


Last year, the confinement from Covid-19 demanded a routine change for most of us. Working from home reduced our social interactions and leisure routines. As an alternative, I've spend most of my free time reading, playing PlayStation and board games, and going through my IMDB watchlist. By the end of the year, I was feeling that I was mostly [consuming information, and not producing any](https://medium.com/swlh/consumer-vs-producer-a-change-in-mindset-that-will-change-your-life-11cf8092e3e6). A major change from the previous year, when I was completing my PhD thesis. Such tought sparked a will to write more again.


I've been reading about journaling, and the positive impact it has on mental health.  . , which has proven results in terms of improving one's mental health.

Even good [filesystems do it](https://en.wikipedia.org/wiki/Journaling_file_system)

I wanted to be able to set yearly and monthly goals which I could quickly revisit, so I've created some aliases to make it easier to open specific entries. Using [fish](), they look like this:

```
function jrnl_create_or_edit
  set -l entry_size (jrnl -on $argv | wc -l)
  if test $entry_size -eq 1
    cat ~/.config/jrnl/template.md | read -z template
    jrnl "$argv: $template"
  end
  jrnl --edit -1 -on $argv
end
alias jd='jrnl_create_or_edit (date +\'%Y-%m-%d\')'
alias jy='jrnl_create_or_edit (date -v-1d +\'%Y-%m-%d\')'
alias jmm='jrnl_create_or_edit (date +\'%Y-%m-1\')'
alias jyy='jrnl_create_or_edit (date +\'%Y-1-1\')'
```

The `jrnl_create_or_edit` function cheks if there is an entry for a given date, creating it based on the template file if it doesn't exist. It then opens that day for edition.

```markdown
day++
# Journal
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

# Daily highlights
* Things that went well
* Things that didn't
```

This article was greatly inspired by [21st Century Journaling for Developers](https://medium.com/@mntlmaxi/21st-century-journaling-for-developers-f3a1c2a8eb4e)
