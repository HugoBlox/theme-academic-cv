+++
# Projects widget.
widget = "projects"  # Do not modify this line!
active = true  # Activate this widget? true/false

title = "Projects"
subtitle = ""

# Order that this section will appear in.
weight = 50

# Content.
# Display content from the following folder.
# For example, `folder = "project"` displays content from `content/project/`.
# Optional external URL for project (replaces project detail page).
[content]
  # Page type to display. E.g. post, talk, or publication.
  page_type = "project"
  
  # Choose how much pages you would like to display (0 = all pages)
  count = 5
  
  # Choose how many pages you would like to offset by
  offset = 0

  # Page order. Descending (desc) or ascending (asc) date.
  order = "desc"
  
[[project]]
  title = 'test'
  external_link = "[http://example.org](http://example.org/)"

# View.
#   1 = List
#   3 = Card
#   5 = Showcase
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
# [[filter]]
#   name = "All"
#   tag = "*"
#
# [[filter]]
#   name = "Deep Learning"
#   tag = "Deep Learning"
#
# [[filter]]
#   name = "Other"
#   tag = "Demo"

+++

