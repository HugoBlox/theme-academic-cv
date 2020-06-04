+++
widget = "people"  # Use the People widget
headless = true  # This file represents a page section.

# ... Put Your Section Options Here (title etc.) ...

[content]
  # Choose which groups/teams of users to display.
  #   Edit `user_groups` in each user's profile to add them to one or more of these groups.
  user_groups = ["Officers","Committees",]

[design]
  # Show user's social networking links? (true/false)
  show_social = false

  # Show user's interests? (true/false)
  show_interests = true

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.
  
  # Background color.
  # color = "navy"
  
  # Background gradient.
  #gradient_start = "hsla(231, 15%, 16%, 1)"
  #gradient_end = "#340069"
  
  # Background image.
  # image = "background.jpg"  # Name of image in `static/img/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.

  # Text color (true=light or false=dark).
  text_color_light = false
  
[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++