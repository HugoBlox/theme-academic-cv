---
title: Journaling with jrnl
date: 2021-01-20
summary: On the habit of journaling with `jrnl`.
---
During 2020, the COVID-19 pandemic demanded routine changes from most of us. For me, these started in March 2020, when staying confined at home became the new normal.

Staying at home forcefully reduced social interactions and leisure routines. I couldn't be with the people I work with, friends, and family. I couldn't go to the gym. I had to adapt many routines and spent most of my free time at home reading, going through my IMDB watch list, playing games, and running nearby.

By the end of the year, I was mostly [a consumer of information](https://medium.com/swlh/consumer-vs-producer-a-change-in-mindset-that-will-change-your-life-11cf8092e3e6). A significant change from the previous year when I was writing my Ph.D. thesis. I decided to set myself some goals to ensure I kept myself sharp. One of them was to write more often. That was when the concept of journaling caught my interest.

### Journaling
Journaling is the act of recording personal thoughts and events. When done daily, it is often called a diary. While journaling, one forces himself to reflect on life on a daily basis.

The oldest reference to journaling dates back at the 2nd century, with the work from the Roman Emperor Marcus Aurelius, [Meditations](https://en.wikipedia.org/wiki/Meditations). In it, Aurelius recorded his private notes, as well as reflections on stoic philosophy.

A more recent and well known example is the one from Anne Frank, [The Diary of a Young Girl](https://en.wikipedia.org/wiki/The_Diary_of_a_Young_Girl), wrote while hiding in Amsterdam during the second world war German invasion.

Nowadays, people keep journals for the most varied reasons: track their diet, sleep, travels, reflect on their day, or coping with an hard life event. Many researchers have shown that it can provide a [positive influence in mental health](https://dailystoic.com/journaling/).

So, starting this year, I've decided to experiment with journaling.

### Journaling with jrnl
I wanted to keep track of yearly and monthly goals, a have a quick daily reflection over what I liked and disliked about my day. My penmanship is not great, so using a notebook was never considered. I wanted a solution would allow me to search my daily entries and quickly jump to the first of the month and year, where I would keep my monthly and yearly goals list, repectively.

I have found that [jrnl](https://jrnl.sh/) was a fit to my needs. After going through the documentation, I've customized it with:
```yaml
display_format: boxed
editor: nvim -c "set syntax=markdown"
journals:
  default:
    encrypt: true
    journal: /path/to/dropbox/file
timeformat: '%Y-%m-%d'
```
You can see that I have set it to use Neovim as editor, with a markdown syntax. I am keeping my journal file on Dropbox, encrypted. Finally, I've changed the date format to exclude time, as I only want to have one entry per day.

I wanted to quickly be able to create or edit an entry for today, yesterday, the first day of the month and the year. This would allow me to create my entry for today, or yesterday, as I typically write it after midnight. Also, it enabled me to read my goal-setting entries for the month and the year.

Using the [fish shell](https://fishshell.com/), I have then created a function to create or edit an entry on a given date, and four aliases using it:

```fish
function jrnl_create_or_edit
  # Check if entry exists
  set -l entry_size (jrnl -on "$argv[1]" | wc -l)
  if test $entry_size -eq 1
    jrnl "$argv[1]: $argv[2]" # Create entry if it doesn't exist
  end
  jrnl --edit -1 -on "$argv[1]" # Open entry in editor
end

alias jd="jrnl_create_or_edit (date +\"%Y-%m-%d\") (date +%A)"
alias jy="jrnl_create_or_edit (date -v-1d +\"%Y-%m-%d\") (date -v-1d +%A)"
alias jm="jrnl_create_or_edit (date +\"%Y-%m-1\")"
alias jyy="jrnl_create_or_edit (date +\"%Y-1-1\")"
```

The `jrnl_create_or_edit` function checks if there is an entry for a given date, creating it based on the template file if it doesn't exist. It then opens that entry in the editor.

### Conclusion
So far so good. My daily reflection already led me to address tasks I would otherwise probably ignore, better prepare my days, and pursue my monthly goals. Thinking about wins and (remote) interactions is also making staying at home a bit more bearable.

This configuration was inspired by [21st Century Journaling for Developers](https://medium.com/@mntlmaxi/21st-century-journaling-for-developers-f3a1c2a8eb4e).
