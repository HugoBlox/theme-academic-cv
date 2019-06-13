HTMLWidgets.widget({

  name: 'metricsgraphics',
  type: 'output',

  initialize: function(el, width, height) { return {  }; },

  renderValue: function(el, params, instance) {
    // save params for reference from resize method
    instance.params = params;
    // draw the graphic
    this.drawGraphic(el, params, el.offsetWidth, el.offsetHeight);
  },

  drawGraphic: function(el, params, width, height) {

    // remove existing children
    while (el.firstChild)
      el.removeChild(el.firstChild);

    dbg = params;

    wide = null;

    if (params.geom == "hist") {

      if (params.binned === false) {
         wide = params.data;
      }

    } else {

      wide = HTMLWidgets.dataframeToD3(params.data);

      if (params.multi_line !== null) {

        tmp = [];
        tmp.push(HTMLWidgets.dataframeToD3(params.data));

        n = params.multi_line.length ;

        for (var i=0; i<n; i++) {
          tmp.push(HTMLWidgets.dataframeToD3(params.data)) ;
        }

        wide = tmp ;

      }
    }

    var sheet_element = document.createElement('style');
    document.head.appendChild(sheet_element) ;
    var sheet = sheet_element.sheet;
    if (params.forCSS !== null) {
      if (typeof(params.forCSS) === "string") {
        params.forCSS = [ params.forCSS ] ;
      }
      params.forCSS.map(function(v) {
        v = v.replace("{{ID}}", '#'+el.id+' ');
        sheet.insertRule(v, sheet.cssRules.length);
      });
    }

    var xax_format = mjs_plain;

    if (params.xax_format == "date") {

      xax_format = mjs_date ;

      if (params.multi_line === null) {
        if (params.orig_posix) {
          for (var i=0; i<wide.length; i++) {
            wide[i][params.x_accessor] = Date(wide[i][params.x_accessor] );
            console.log("====> ", Date(wide[i][params.x_accessor]));
            console.log("====> ", wide[i][params.x_accessor]);
          }
        } else {
          MG.convert.date(wide, params.x_accessor);
        }
      } else {
        for (var i=0; i<wide.length; i++) {
          wide[i] = MG.convert.date(wide[i], params.x_accessor);
        }
      }

      if (params.markers !== null) {
        for (var i=0; i<params.markers.length; i++) {
          params.markers[i][params.x_accessor] =
            d3.time.format("%Y-%m-%d").parse(params.markers[i][params.x_accessor]);
        }
      }

      if (params.regions !== null) {
        for (var i=0; i<params.regions.length; i++) {
          params.regions[i][params.x_accessor][0] =
            d3.time.format("%Y-%m-%d").parse(params.regions[i][params.x_accessor][0]);
          params.regions[i][params.x_accessor][1] =
            d3.time.format("%Y-%m-%d").parse(params.regions[i][params.x_accessor][1]);
        }
      }

    }

    if (params.multi_line !== null) {

      for (var i=0; i<wide.length; i++) {
        if (i>0) {
          for (var j=0; j<wide[i].length; j++) {
            delete wide[i][j][params.y_accessor];
          }
          for (var j=0; j<wide[i].length; j++) {
            wide[i][j][params.y_accessor] = wide[i][j][params.multi_line[i-1]];
          }
        }
      }

    }

    if (params.xax_format == "comma") xax_format = mjs_comma ;

    dbg = params;

    if (params.geom == "bar") {

        MG.data_graphic({

            data: wide,

            x_accessor: params.x_accessor,
            y_accessor: params.y_accessor,

            baseline_accessor:params.x_accessor,
            predictor_accessor:params.x_accessor,

            chart_type: 'bar',
            height: height,
            width: width,
            bottom: params.bottom,
            top: params.top,
            right: params.right,
            left: params.left,
            buffer: params.buffer,
            //target: '#bar1',
            animate_on_load: params.animate_on_load,
            x_axis: params.x_axis,
            target: '#' + el.id

        });

    } else {

      mg_params = {

          data: wide,
          target: '#' + el.id,
          xax_format: xax_format,

          x_axis: params.x_axis,
          y_axis: params.y_axis,

          aggregate_rollover: true,

          baseline_accessor: params.baseline_accessor,
          predictor_accessor: params.predictor_accessor,

          bar_margin: params.bar_margin,
          binnned: params.binned,
          bins: params.bins,

          interpolate: params.interpolate,
          decimals: params.decimals,
          format: params.format,

          color_type: params.color_type,
          color_range: params.color_range,
          point_size: params.point_size,
          size_range: params.size_range,

          markers: params.markers,
          baselines: params.baselines,

          show_rollover_text: params.show_rollover_text,

          y_scale_type: params.y_scale_type,
          y_extended_ticks: params.y_extended_ticks,
          x_extended_ticks: params.x_extended_ticks,

          chart_type: params.chart_type,
          x_accessor: params.x_accessor,
          y_accessor: params.y_accessor,
          color_accessor: params.color_accessor,
          size_accessor: params.size_accessor,

          legend: params.legend,
          legend_target: params.legend_target,

          yax_units: params.yax_units,

          color: params.color,
          colors: params.colors,

          regions: params.regions,

          show_confidence_band: params.show_confidence_band,
          show_secondary_x_label: params.show_secondary_x_label,

          linked: params.linked,

          height: height,
          width: width,
          bottom: params.bottom,
          top: params.top,
          right: params.right,
          left: params.left,
          buffer: params.buffer,

          area: params.area,
          animate_on_load: params.animate_on_load,
          y_rug: params.y_rug,
          x_rug: params.x_rug,

          min_x: params.min_x,
          max_x: params.max_x,
          min_y: params.min_y,
          max_y: params.max_y,

          yax_count: params.yax_count,
          xax_count: params.xax_count,

          least_squares: params.least_squares,

          x_label: params.x_label,
          y_label: params.y_label,

          title: params.title,
          description: params.description

      };

      if (typeof(params.mouseover) != "undefined") {
        mg_params.mouseover = params.mouseover;
      }

      MG.data_graphic(mg_params);

    }

  },

  resize: function(el, width, height, instance) {
    if (instance.params)
      this.drawGraphic(el, instance.params, width, height);
  }

});

mjs_comma = function(d) {
  var df =  d3.format("0,000");
  return df(d);
};

mjs_date = function(d) {
  var df = d3.time.format('%b %d');
  return df(d);
};

mjs_plain = function(d) {
 return(d.toString());
};
