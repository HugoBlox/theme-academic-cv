+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = 10000

# Slide height (optional).
# E.g. `500px` for 500 pixels or `calc(100vh - 70px)` for full screen.
#height = "800px"
height = "calc(100vh - 70px)"

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "Research"
  content = "My interests in physical oceanography include dense overflows and hydraulics, internal waves,  turbulent mixing, and the impacts of these small-scale processes on the large-scale ocean circulation."
  align = "left"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
  # overlay_color = "#666"  # An HTML color value.
  overlay_img = "cruise-rr1607/revelle_blue.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.4  # Darken the image. Value in range 0-1.

  # Call to action button (optional).
  #   Activate the button by specifying a URL and button label below.
  #   Deactivate by commenting out parameters, prefixing lines with `#`.
  # cta_label = "test"
  # cta_url = "www.mod.ucsd.edu"
  # cta_icon_pack = "fas"
  # cta_icon = "graduation-cap"

[[item]]
  title = "Observations"
  content = "My research is mostly based on sea-going observations.<br> I design experiments using a variety of moored and shipboard instrumentation and lead research cruises."
  align = "left"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
  # overlay_color = "#666"  # An HTML color value.
  overlay_img = "cruise-rr1607/mooring_deployment.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.4  # Darken the image. Value in range 0-1.

[[item]]
  title = "Mooring Design & Operations"
  content = "I design, deploy and recover oceanographic moorings to collect time series of ocean velocity, hydrography and turbulence."
  align = "left"  # Choose `center`, `left`, or `right`.

  # Overlay a color or image (optional).
  #   Deactivate an option by commenting out the line, prefixing it with `#`.
  # overlay_color = "#666"  # An HTML color value.
  overlay_img = "cruise-piston-2018/buoy-deploy.jpg"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.6  # Darken the image. Value in range 0-1.

+++
