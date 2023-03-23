+++
# Any elements can be added in the body: https://sourcethemes.com/academic/docs/writing-markdown-latex/

widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 37  # Order that this section will appear.

title = "Data"
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "2"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DeepSkyBlue"
  # gradient_end = "SkyBlue"
  
  # Background image.
  #image = "headers/bubbles-wide.jpg"  # Name of image in `static/img/`.
  #image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  #image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  #image_position = "center"  # Options include `left`, `center` (default), or `right`.
  #image_parallax = true  # Use a fun parallax-like fixed background effect? true/false

  # Text color (true=light or false=dark).
  # text_color_light = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  # padding = ["0px", "0", "30px", "0"]

[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++
<!-- I {{< icon name="heart" pack="fas" padding_left="0" padding_right="0" >}} Open Data & Reproducible Research. -->

### Samoan Passage
Mooring and shipboard data from the [Samoan Passage project]({{< ref "/project/samoan-passage" >}}).

[{{< icon name="github" pack="fab" padding_left="1" >}} data repository](https://github.com/gunnarvoet/sp-data-archive)

### PISTON
Mooring data from [PISTON]({{< ref "/project/piston" >}}). 

[{{< icon name="github" pack="fab" padding_left="1" >}} data repository](https://github.com/gunnarvoet/piston-mooring-data) | [{{< icon name="github" pack="fab" padding_left="1" >}} processing code](https://github.com/gunnarvoet/piston-proc)

PISTON data have also been archived to the [CAMP2EX_PISTON data repository](https://www-air.larc.nasa.gov/cgi-bin/ArcView/camp2ex?MOORING=1) hosted by NASA.
