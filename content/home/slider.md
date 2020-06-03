+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 25  # Order that this section will appear.

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = false

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
height = "400px"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = " "
  content = " "
  align = "right"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
  overlay_color = "#7289DA"  # An HTML color value.
  overlay_img = "headers/Discord-Slider.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0  # Darken the image. Value in range 0-1.

  # Call to action button (optional).
  #   Activate the button by specifying a URL and button label below.
  #   Deactivate by commenting out parameters, prefixing lines with `#`.
  cta_label = "CHAT WITH US"
  cta_url = "http://bit.ly/ACMW-discord"
  cta_icon_pack = "fab"
  cta_icon = "discord"

[[item]]
  title = "Left"
  content = "I am left aligned :smile:"
  align = "left"

  overlay_color = "#555"  # An HTML color value.
  overlay_img = ""  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.

[[item]]
  title = "Right"
  content = "I am right aligned :smile:"
  align = "right"

  overlay_color = "#333"  # An HTML color value.
  overlay_img = ""  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.
+++
