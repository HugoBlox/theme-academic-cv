+++
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 2  # Order that this section will appear.

title = "Teste"
subtitle = ""

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

#### Husi teste hamutuk 922:
* Positivu 24 (kazu konfirmadu)
* Negativu 781
* Hein rezultadu 117

<script type="text/javascript">
  google.charts.load('current', {'packages':['sankey']});
  google.charts.setOnLoadCallback(drawSankey);

  function drawSankey() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', '');
    data.addRows([
      [ 'Teste', 'Negativu', 781 ],
      [ 'Teste', 'Positivu', 24 ],
      [ 'Teste', 'Hein rezultadu', 117 ],
    ]);

    var colors = ['#a6cee3', '#b2df8a', '#fb9a99', '#fdbf6f',
                  '#cab2d6', '#ffff99', '#1f78b4', '#33a02c'];

    var options = {
      chartArea: {width: '50%'},
      sankey: {
        node: {
          colors: colors
        },
        link: {
          colorMode: 'gradient',
          colors: colors
        }
      }

    };

    // Instantiates and draws our chart, passing in some options.
    var chart = new google.visualization.Sankey(document.getElementById('test-sankey'));
    chart.draw(data, options);
  }
</script>
<div id="test-sankey"></div>

##### Timor-Leste halo teste por 1,000 barak liu fali Indonesia, maibé menus se kompara ho Filipina no Vietnam.
<script>
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Nasaun', 'Teste por 1,000', { role: "style" } ],
        ['Timor-Leste', 0.70, 'green'],
        ['Indonesia', 0.35, ''],
        ['Philippines', 1.25, ''],
        ['Vietnam', 2.68, ''],
        ['Australia', 20.34, ''],
      ]);

      var options = {
        title: 'Teste por 1,000',
        colors: ['green'],
        legend: { position: "none" },
      };
      var chart = new google.visualization.BarChart(document.getElementById('testing-div'));
      chart.draw(data, options);
    }
</script>
<div id="testing-div"></div>

<style>
#test-sankey, #testing-div {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
}
</style>
