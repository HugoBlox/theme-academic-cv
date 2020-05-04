+++
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 3  # Order that this section will appear.

title = "Testing"
subtitle = "As of May 1, 2020, Timor-Leste has made 671 tests. That's more tests per 1,000 people than Indonesia, but less that the Philippines or Vietnam."

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"
  
  # Background gradient.
  # gradient_start = "DarkGreen"
  # gradient_end = "ForestGreen"
  
  # Background image.
  # image = "image.jpg"  # Name of image in `static/img/`.
  # image_darken = 0.6  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  # image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  # image_position = "center"  # Options include `left`, `center` (default), or `right`.
  # image_parallax = true  # Use a fun parallax-like fixed background effect? true/false
  
  # Text color (true=light or false=dark).
  # text_color_light = true

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["20px", "0", "20px", "0"]

[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++

<script>
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Tests per 1,000 people', { role: "style" } ],
        ['Timor-Leste', 0.52, 'green'],
        ['Indonesia', 0.23, ''],
        ['Philippines', 0.69, ''],
        ['Vietnam', 2.20, ''],
        ['Australia', 20.34, ''],
      ]);

      var options = {
        title: 'Tests per 1,000 people',
        chartArea: {width: '50%'},
        colors: ['green'],
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById('testing-div'));
      chart.draw(data, options);
    }
</script>
<div id="testing-div"></div>

#### From the 688 tests conducted:
* 24 came back positive
* 533 came back negative
* 131 are pending
