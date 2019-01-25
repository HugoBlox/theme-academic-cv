+++
# Projects widget.
widget = "group"
active = true
date = 2019-01-20T00:00:00

title = "People"
subtitle = ""

# Order that this section will appear in.
weight = 6

# Content.
# Display content from the following folder.
# For example, `folder = "project"` displays content from `content/project/`.
folder = "people"

# View.
# Customize how projects are displayed.
# Legend: 0 = list, 1 = cards, 2 = showcase, 3 = people.
view = 3

# Widget layout
# Legend: 0 = two columns (default), 1 = single column
widget_layout = 0

# For Showcase view, flip alternate rows?
flip_alt_rows = false

# Filter toolbar.

# Default filter index (e.g. 0 corresponds to the first `[[filter]]` instance below).
filter_default = 0

# Add or remove as many filters (`[[filter]]` instances) as you like.
# To show all items, set `tag` to "*".
# To filter by a specific tag, set `tag` to an existing tag name.
# To remove toolbar, delete/comment all instances of `[[filter]]` below.

[[filter]]
  name = "Members"
  tag = "Members"
  
[[filter]]
  name = "Affiliated"
  tag = "Affiliated"

[[filter]]
  name = "Alumni"
  tag = "Alumni"
  
[[filter]]
  name = "All"
  tag = "*"

+++

