+++
# Slider widget.
widget = "slider"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
title = "Software, Tools, Resources"
# Order that this section will appear in.
weight = 25

# Slide interval.
# Use `false` to disable animation or enter a time in ms, e.g. `5000` (5s).
interval = false

# Slides.
# Duplicate an `[[item]]` block to add more slides.
[[item]]
  title = "TDR Targets 6"
  content = "Chemogenomics database: drug discovery for neglected diseases"
  align = "center"

  # Overlay / Image
  overlay_color = "#ddd"
  overlay_img = "tdrtargets-logo-v6-260x260.jpg"
  overlay_filter = 0.5

  # Call to action
  cta_label = "Search/Browse"
  cta_url = "https://tdrtargets.org"
  cta_icon_pack = "fas"
  cta_icon = "book-open"

#[[item]]
#  title = "TcSNP"
#  content = "A database of genetic variation in Trypanosoma cruzi"
#  align = "center"  # Choose `center`, `left`, or `right`.
#
#  # Overlay a color or image (optional).
#  #   Deactivate an option by commenting out the line, prefixing it with `#`.
#  overlay_color = "#3366FF"  # An HTML color value.
#  #overlay_img = "headers/bubbles-wide.jpg"  # Image path relative to your `static/img/` folder.
#  overlay_filter = 0.5  # Darken the image. Value in range 0-1.
#
#  # Call to action button (optional).
#  #   Activate the button by specifying a URL and button label below.
#  #   Deactivate by commenting out parameters, prefixing lines with `#`.
#  cta_label = "Visit the TcSNP web page"
#  cta_url = "http://snps.tcruzi.org"
#  cta_icon_pack = "fas"
#  cta_icon = "globe"

[[item]]
  title = "Aprank"
  content = "A tool for genome-wide antigenicity predictions"
  align = "left"

  overlay_color = "#555"  # An HTML color value.
  overlay_img = "aprank-v1.png"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.5  # Darken the image. Value in range 0-1.

  # Call to action
  cta_label = "Preprint"
  cta_url = "publication/2021-ricci-aprank-biorxiv/"
  cta_icon_pack = "ai"
  cta_icon = "biorxiv"

[[item]]
  title = "ChagasTope"
  content = "An Atlas of Chagas Disease Antigens and Epitopes"
  align = "right"

  overlay_color = "#333"  # An HTML color value.
  overlay_img = "chagastope.png"  # Image path relative to your `static/img/` folder.
  overlay_filter = 0.7  # Darken the image. Value in range 0-1.

  # Call to action 
  cta_label = "Upcoming"
  cta_url = "https://chagastope.org"
  cta_icon_pack = "fas"
  cta_icon = "clock"
+++
