+++
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 3  # Order that this section will appear.

[design]
  columns = "1"

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["20px", "0", "20px", "0"]

[advanced]
 # Custom CSS. 
 css_style = ""
 
 # CSS class.
 css_class = ""
+++

## Oinsá Timor-Leste kompara ho nasaun seluk?

Timor-Leste nia kazu konfirmadu por milliaun menus se kompara ho Indonesia no Filipina.

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
        ['Country', 'Kazu konfirmadu por milliaun'],
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

<style>
#compare-map {
    max-width: 800px;
}
</style>
