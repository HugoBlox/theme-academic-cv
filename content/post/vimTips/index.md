+++
title = "Vim tips - templates"
date = 2019-04-27
draft = false

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

In this short vim tutorial, we will discover how to use vim templates and autocommands in order to speed up our work flow. If you find yourself repeating many times some actions or file structures, vim autocommands has you covered. 

# Autocommands

From the vim `:h au` wiki:

> `:au[tocmd] [group] {event} {pat} [nested] {cmd}`

Add `{cmd}` to the list of commands that Vim will execute automatically on `{event}` for a file matching `{pat}`

This means that vim has some events, (like opening a new file) that you can configure for it to perform a certain command `{cmd}` on a specific file `{pat}`. It discriminates between files based on the pattern. So, if you want to create a `.c` file `Main()` structure when you create a file called `main.c`, the autocommand you would have to create would be: 

> `autocmd BufNewFile main.c 0r ~/.vim/templateMain.c`

Let's break down this command:

1. **:autocmd**: You are telling Vim you want to use it's autocommand feature to do something
1. **BufNewFile**: This is the specific event that you want to execute the command `{cmd}` at
1. **main.c**: This is the pattern that vim will compare against when creating a new file. If it meets the pattern, it will execute the command on the event. If it does not meet the patter, it will not execute the command.
1. **0r**: Read the file following this command at the beginning of this file's first line (it is part of the command you are executing on the event)
1. **~/.vim/templateMain.c**: Is the file you are going to read. It will have the specific c code to enter into the newly created main.c file.

As you can see, this proves itself very powerful if you want to be consistent, say with creating issues on a agile project.

This by it's own is a huge productivity boost. Imagine, now, every time you have to create a new issue, you already have it's structure created. This is for what I use it.

## We can go one step further. 
Enter: the `<leader>` key and a specific string of text, like `<++>` to search for.

If you haven't guessed yet, we are going to create specific marks in the template so that when we press the `<leader>` key twice, we automatically navigate there.

# Navigation with guides
We can create our own commands with the `<leader>` key. We are going to create a command that when pressed, will look for a predefined string, like `<++>`. We will look for this string inside the document when we press the `<leader>` key twice, delete the string and enter insert mode, to continue editing.

To do this, we will have to write the following commands in our init.vim file:

> `map <leader><leader> <Esc>/<++><Enter>"_c4l`

This command will create a custom command when the `<leader>` key is pressed twice. It will press the escape key (`<Esc>`), to get into normal mode, it will then search for the string `<++>` (/`<++><Enter>`) then it will write to register `_` (the black whole register (It's like the trash register)) (`"_`) the result of the `c4l` command. Which is: change 4 letters (`<++>`) and enter insert mode (because c command stands for change)

The next two commands do practically the same, although one is for insert mode and the other is for visual mode.

> `inoremap <leader><leader> <Esc>/<++><Enter>"_c4l`
> `vnoremap <leader><leader> <Esc>/<++><Enter>"_c4l`

This means, given a file that contains the `<++>` string, if we press the `<leader>` register twice, it will take us to the mark (`<++>`), delete it and enter insert mode. This is perfect to navigate between sections of a template or any structured piece of text.

# Conclusion

Vim is a very complete text editor that can do anything you ask of it but it's most useful features vary between users. These two features are, in my opinion the reason I use Vim instead of another text editor. To figure out your most useful features, you should be constantly looking for a problem or anything you could automate or improve in some way or another. 
