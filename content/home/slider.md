---
# An instance of the Slider widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: slider  # Use the Slider widget as this page section
weight: 70  # Position of this section on the page
active: true  # Publish this section?
headless: true  # This file represents a page section.

design:
  # Slide height is automatic unless you force a specific height (e.g. '400px')
  slide_height: '400px'
  is_fullscreen: false #true
  # Automatically transition through slides?
  loop: true
  # Duration of transition between slides (in ms)
  interval: 3000

content:
  slides:
    - title: Drawing & Painting
      content: ''
      align: right
      background:
        position: center
        brightness: 0.8
        media: aquarelle.jpg
      link:
        icon: paint-brush
        icon_pack: fas
        text: Show more
        url: ../paint/
    - title: Girl Guides
      content: ''
      align: center
      background:
        position: center
        brightness: 0.8
        media: promesses.jpg
      link:
        icon: campground
        icon_pack: fas
        text: Show more
        url: ../guides/
    - title: Reading
      content: ''
      align: right
      background:
        position: center
        brightness: 0.8
        media: aquarelle.jpg
      link:
        icon: book
        icon_pack: fas
        text: Show more
        url: ../reading/


#- icon: "your-custom-icon-name"  #  description: "90%"
---
