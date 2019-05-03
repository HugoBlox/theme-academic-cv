+++
title = "Vim tips - grep"
date = 2019-04-27
draft = true

tags = ["Nvim", "Vim", "Development"]
categories = ["vim"]

[image]
  # Caption (optional)
  caption = "Vim front page"

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = "Center"
  preview_only = true
+++

In this post we will discover how searching in vim works.

From the vim help pages:

> Vim has two ways to find matches for a pattern: Internal and external.  The
advantage of the internal grep is that it works on all systems and uses the
powerful Vim search patterns.  An external grep program can be used when the
Vim grep does not do what you want.

As the vim manual page states, there are two main ways to find matches in vim. First, let's take a look at Vim's internal grep:

# Vimgrep

#### `:vim[grep][!] /{pattern}/[g][j] {file} ...`

So, let's break down this command:

1. **`vim[grep][!]`**: Is the command we will use to start the search among files. Note the '[]'.
They are indicating those parts are optional.
In this case, the same program will be executed upon calling `vim` or `vimgrep`.
The next part, `[!]` tells us, there is a special modifier, `!` wich, if used, won't show any results of the search in the current buffer.
Instead, they will be stored in a special buffer in linked form.
This can be opened with: `copen`.
2. **`/{pattern}/`**: Vimgrep will search every file in `{file}` for the `{pattern}`.
Note that `{pattern}` may be surrounded by XXX
Although it is common to surround  `{pattern}` with `/` for clartiy.
3. **`[g][j]`**: Both of these options are optional.
If the `g` is present in the command, every match is added to the list.
If the `g` is absent, each line is added only once. If the `j` is present, only the quickfix list is updated.
If the `j` is absent, Vim will jump to the first match.
4. **`{file}`**: The files that Vim is going to search for the `{pattern}`.
5. **`...`**: A reference that other files can be added to the command.

Apart from this command, vimgrep, there are other commands that perform slightly similar commands.
Other vimgrep commands, for example, are:

#### `:lv[imgrep][!]`
Same as ":vimgrep", except the location list for the current window is used instead of the quickfix list.

#### `:vimgrepa[dd][!]`
Just like ":vimgrep", but instead of making a new list of errors the matches are appended to the current list.

#### `:lvimgrepa[dd][!]`
Same as ":vimgrepadd", except the location list for the current window is used instead of the quickfix list.

Now we have the internal grep in Vim covered, let's take a look at the external vim grep interface.

# grep

This is the default interface to the external vim grep command.

Just like with vimgrep, there are several options for grep. We will cover them all:

1. `:gr[ep][!] [arguments]`: This commnad interfaces the GNU/Linux grep command.
2. `:lgr[ep][!] [arguments]`: Just like grep, but uses the location list (Open the list with lopen) instead of the quickfix list
3. `:grepa[dd][!] [arguments]`: Just like grep, but instead of making a new list of errors (searches), the matches are appended to the current list.
4. `:lgrepa[dd][!] [arguments]`: Exactly the same as grepadd, except the location list for the current window is used instead of the quickfix list.
