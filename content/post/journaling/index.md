---
# Documentation: https://sourcethemes.com/academic/docs/managing-content/

title: "Journaling"
subtitle: ""
summary: ""
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
Last year, the confinement from Covid-19 demanded a routine change for most of us. Working from home reduced our social interactions and leisure routines. I have spent most of my free time at home reading, playing PlayStation or board games, and going through my IMDB watchlist. By the end of the year, I felt that I was mostly [consuming information](https://medium.com/swlh/consumer-vs-producer-a-change-in-mindset-that-will-change-your-life-11cf8092e3e6) and not producing any. A significant change from the previous year, when I was completing my Ph.D. thesis. Such thought sparked a will to write more again. My approach was twofold. First, I've begun to journal daily, which is the subject of this post. Second, I've decided to blog infrequently about things I find interesting and useful for others. This article is the first step in that direction.


I recently took an interest in the concept of journaling. Multiple studies have shown evidence of its positive impact on improving one's mental health. [TODO-REFS]. Even  [filesystems to do it](https://en.wikipedia.org/wiki/Journaling_file_system).

I wanted to be able to set yearly and monthly goals which I could quickly revisit, so I've created some aliases to make it easier to open specific entries. Using the [fish shell](https://fishshell.com/), they look like this:

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

The `jrnl_create_or_edit` function checks if there is an entry for a given date, creating it based on the template file if it doesn't exist. It then opens that day for edition.

```markdown
day++
# Journal
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

# Daily highlights
* Things that went well
* Things that didn't
```

This article was inspired by [21st Century Journaling for Developers](https://medium.com/@mntlmaxi/21st-century-journaling-for-developers-f3a1c2a8eb4e).


[How to Conduct an Annual Life Review That Will Catapult You into the New Year
](https://schlaf.medium.com/how-to-conduct-an-annual-life-review-that-will-catapult-you-into-the-new-year-d5aaffebac1f)
