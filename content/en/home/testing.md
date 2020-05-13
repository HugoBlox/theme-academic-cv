+++
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 2  # Order that this section will appear.

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["20px", "0", "20px", "0"]

+++

## Testing

#### From the 1120 tests conducted:
* 24 came back positive
* 822 came back negative
* 274 are pending

<script type="text/javascript">
  google.charts.load('current', {'packages':['sankey']});
  google.charts.setOnLoadCallback(drawSankey);

  function drawSankey() {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'From');
    data.addColumn('string', 'To');
    data.addColumn('number', '');
    data.addRows([
      [ 'Tests', 'Negative', 822 ],
      [ 'Tests', 'Positive', 24 ],
      [ 'Tests', 'Pending', 274 ],
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

##### Timor-Leste makes more tests per 1,000 people than Indonesia, but less that the Philippines or Vietnam.
<script>
google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBarColors);

function drawBarColors() {
      var data = google.visualization.arrayToDataTable([
        ['Country', 'Tests per 1,000 people', { role: "style" } ],
        ['Timor-Leste', 0.70, 'green'],
        ['Indonesia', 0.35, ''],
        ['Philippines', 1.25, ''],
        ['Vietnam', 2.68, ''],
        ['Australia', 20.34, ''],
      ]);

      var options = {
        title: 'Tests per 1,000 people',
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
