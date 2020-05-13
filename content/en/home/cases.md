+++
widget = "blank"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 1  # Order that this section will appear.

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

[design.spacing]
  # Customize the section spacing. Order is top, right, bottom, left.
  padding = ["20px", "0", "20px", "0"]

+++

# Timor-Leste Ministry of Health covid-19 Dashboard

*Data last updated on 13 May 2020.*

## Total and daily confirmed COVID-19 cases

Timor-Leste has 24 confirmed cases, 23 of which already recovered, and 0 of which passed away.

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script type="text/javascript">

  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
      var data = google.visualization.arrayToDataTable([
            ['Day', 'Total Cases', 'New Cases', 'Total Recovered'],
            ["Mar 21, 2020",1,1, 0],
            ["Mar 22, 2020",1,0, 0],
            ["Mar 23, 2020",1,0, 0],
            ["Mar 24, 2020",1,0, 0],
            ["Mar 25, 2020",1,0, 0],
            ["Mar 26, 2020",1,0, 0],
            ["Mar 27, 2020",1,0, 0],
            ["Mar 28, 2020",1,0, 0],
            ["Mar 29, 2020",1,0, 0],
            ["Mar 30, 2020",1,0, 0],
            ["Mar 31, 2020",1,0, 0],
            ["Apr 1, 2020",1,0, 0],
            ["Apr 2, 2020",1,0, 0],
            ["Apr 3, 2020",1,0, 0],
            ["Apr 4, 2020",1,0, 0],
            ["Apr 5, 2020",1,0, 0],
            ["Apr 6, 2020",1,0, 0],
            ["Apr 7, 2020",1,0, 0],
            ["Apr 8, 2020",1,0, 0],
            ["Apr 9, 2020",2,1, 1],
            ["Apr 10, 2020",2,0, 1],
            ["Apr 11, 2020",2,0, 1],
            ["Apr 12, 2020",2,0, 1],
            ["Apr 13, 2020",4,2, 1],
            ["Apr 14, 2020",6,2, 1],
            ["Apr 15, 2020",6,0, 1],
            ["Apr 16, 2020",18,12, 1],
            ["Apr 17, 2020",18,0, 1],
            ["Apr 18, 2020",18,0, 1],
            ["Apr 19, 2020",19,1, 1],
            ["Apr 20, 2020",22,3, 1],
            ["Apr 21, 2020",23,1, 1],
            ["Apr 22, 2020",23,0, 1],
            ["Apr 23, 2020",23,0, 1],
            ["Apr 24, 2020",24,1, 2],
            ["Apr 25, 2020",24,0, 6],
            ["Apr 26, 2020",24,0, 6],
            ["Apr 27, 2020",24,0, 6],
            ["Apr 28, 2020",24,0, 6],
            ["Apr 29, 2020",24,0, 6],
            ["Apr 30, 2020",24,0, 16],
            ["May 1, 2020",24,0, 16],
            ["May 2, 2020",24,0, 20],
            ["May 3, 2020",24,0, 20],
            ["May 4, 2020",24,0, 20],
            ["May 5, 2020",24,0, 20],
            ["May 6, 2020",24,0, 21],
            ["May 7, 2020",24,0, 21],
            ["May 8, 2020",24,0, 21],
            ["May 9, 2020",24,0, 21],
            ["May 10, 2020",24,0, 22],
            ["May 11, 2020",24,0, 22],
            ["May 12, 2020",24,0, 22],
            ["May 13, 2020",24,0, 23],
      ]);

      var options = {
         title: '',
         curveType: 'none',
         legend: { position: 'bottom' },
         chartArea: {width: '95%', height: '80%', top: 5},
         hAxis: {showTextEvery: 10},
         annotations: { style: 'line' },
         focusTarget: 'category',
         height: 430,
         pointSize: 3,
         seriesType: 'bars',
         series: {0: {type: 'line', color: '#ff4242'}, 1: {color: '#ff4242'}, 2: {type: 'line', color: 'blue'}}
      };

      var chart = new google.visualization.ComboChart(document.getElementById('cases-chart'));

      chart.draw(data, options);
  }
</script>
<div class="chart" id="cases-chart"></div>

