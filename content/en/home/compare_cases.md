+++
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 2  # Order that this section will appear.

title = "How does Timor compare?"
subtitle = "Timor has less confirmed cases per million than Indonesia or the Philippines"

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

<script type="text/javascript">
  google.charts.load('current', {
    'packages':['geochart'],
    // Note: you will need to get a mapsApiKey for your project.
    // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
    'mapsApiKey': 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY'
  });
  google.charts.setOnLoadCallback(drawRegionsMap);

  function drawRegionsMap() {
    var data = google.visualization.arrayToDataTable([
        ['Country', 'Confirmed cases per million'],
        ["Cambodia", 7.297099803570447],
        ["Indonesia", 33.25489757244768],
        ["Laos", 2.61148426319583],
        ["Malaysia", 179.81833898648824],
        ["Myanmar", 2.6833404294822363],
        ["Philippines", 70.97027739778265],
        ["Thailand", 42.09170381113874],
        ["TL", 18.203303596214322],
        ["Vietnam", 2.7738229967863823],
    ]);

    var options = {
        region: '035',
        chartArea: {width: '95%', height: '80%', top: 5},
        colorAxis: {colors: ['red']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('compare-map'));

    chart.draw(data, options);
  }
</script>
<div id="compare-map"></div>
