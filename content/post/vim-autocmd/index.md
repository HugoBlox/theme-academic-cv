+++
title = "Vim Autocmd"
date = 2019-01-05T14:23:48+01:00
draft = true

# For example, use `tags = []` for no tags, or the form `tags = ["A Tag", "Another Tag"]` for one or more tags.
tags = []
categories = []

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
[image]
  # Caption (optional)
  caption = ""

  # Focal point (optional)
  # Options: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight
  focal_point = ""
+++

# Vim Autocommands

Directly from Vim manuals:

> An autocommand is a command that is executed automatically in response to some
  event, such as a file being read or written or a buffer change.

So basically, they allow you to perform a certain action when a file changes. For example, imagine you want to "live-compile" a .tex file automatically, you could perform a compilation job on the .swp file directly. This way, the compilation will happen as soon as yow write the unsaved buffer, instead of compiling as soon as you save the buffer.

# General form

The general form of the Autocommand is:

`:autocmd [group] {events} {file_pattern} [nested] {command}`

Where:

* `autocmd`
  * is the command
* `[group]` 
  * is an optional parameter used in managing and calling the commands. It allows you to join several commands under a single purpose, for example: group "cprograms" will contain autocommands relative to c programs.
* `{events}`
  * Are the situations in which the commands can be executed. For example BufferReadPost, after a new file is being edited.
* `{file_pattern}` 
  * A list of comma separated file patterns in which the autocommand will be executed. You can also discriminate between directories. 
* `[nested]`
  * Provides the ability to allow multiple hooks to execute on one same file
* `{command}` 
  * 
