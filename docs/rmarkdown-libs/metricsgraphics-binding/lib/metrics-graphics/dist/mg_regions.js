(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['d3', 'jquery', 'MG'], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require('d3'), require('jquery'), require('MG'));
  } else {
    root.Mg_regions = factory(root.d3, root.jQuery, root.MG);
  }
}(this, function(d3, $, MG) {
function generateRegions(chart) {
  var args = chart.args;
  var svg = d3.select(args.target).select('svg');
  svg.selectAll('.mg-regions').remove();
  if (args.regions) {
    var leftBounds = args.buffer + args.left;
    var rightBounds = args.width - args.buffer - args.right;
    var gm = svg.insert('g', ':first-child')
      .attr('class', 'mg-regions');

    gm.selectAll('.mg-regions')
      .data(args.regions.filter(regionInRange(args, leftBounds, rightBounds)))
      .enter()
      .append('rect')
      .attr('class', function (d) {
        return 'mg-region ' + (d.class || "default");
      })
      .attr('x', xPositionFixed(args, 0))
      .attr('width', function (data) {
        return xPositionFixed(args, 1)(data) - xPositionFixed(args, 0)(data);
      })
      .attr('y', args.top)
      .attr('height', function () {
        return (args.height - args.bottom - args.buffer) - args.top;
      });


    gm.selectAll('.mg-regions')
      .data(args.regions.filter(regionInRange(args, leftBounds, rightBounds)))
      .enter()
      .append('text')
      .attr('class', function (d) {
        return 'mg-region-text ' + (d.class || "default");
      })
      .attr('x', function (data) {
        return xPosition(args, 0)(data) + ((xPosition(args, 1)(data) - xPosition(args, 0)(data)) / 2);
      })
      .attr('y', args.top - 8)
      .attr('text-anchor', 'middle')
      .text(function (d) {
        return d.label;
      });
    
    if(args.regions_overlap_fn === undefined) {
      preventHorizontalOverlap(gm.selectAll('.mg-region-text')[0], args);
    } else {
      args.regions_overlap_fn(gm.selectAll('.mg-region-text')[0], args);
    }
  }
}


function preventHorizontalOverlap(labels, args) {
  if (!labels || labels.length == 1) {
    return;
  }

  //see if each of our labels overlaps any of the other labels
  for (var i = 0; i < labels.length; i++) {
    //if so, nudge it up a bit, if the label it intersects hasn't already been nudged
    if (isHorizontallyOverlapping(labels[i], labels)) {
      var node = d3.select(labels[i]);
      var newY = +node.attr('y');
      if (newY + 8 == args.top) {
        newY = args.top - 16;
      }
      node.attr('y', newY);
    }
  }
}

function isHorizontallyOverlapping(element, labels) {
  var element_bbox = element.getBoundingClientRect();

  for (var i = 0; i < labels.length; i++) {
    if (labels[i] == element) {
      continue;
    }

    //check to see if this label overlaps with any of the other labels
    var sibling_bbox = labels[i].getBoundingClientRect();
    if (element_bbox.top === sibling_bbox.top &&
      !(sibling_bbox.left > element_bbox.right || sibling_bbox.right < element_bbox.left)
    ) {
      return true;
    }
  }

  return false;
}

function xPosition(args, index) {
  return function (data) {    
    return args.scales.X(data[args.x_accessor][index]);
  };
}

function xPositionFixed(args, index) {
  return function (d) {
    return xPosition(args, index)(d).toFixed(2);
  };
}

function inRange(args, data, index, leftBounds, rightBounds) {
  var pos = xPosition(args, index)(data);
  return (pos > leftBounds) && (pos < rightBounds);
}

function includesRange(args, data, leftBounds, rightBounds) {
  return xPosition(args, 0)(data) < leftBounds &&
    xPosition(args, 1)(data) > rightBounds;
}

function regionInRange(args, leftBounds, rightBounds) {
  return function (data) {
    var startInRange = inRange(args, data, 0, leftBounds, rightBounds);
    var endInRange = inRange(args, data, 1, leftBounds, rightBounds);
    var coversRange = includesRange(args, data, leftBounds, rightBounds);
    if (coversRange || (startInRange && !endInRange)) {
      data[args.x_accessor][1] = args.scales.X.invert(rightBounds);
    }
    if (coversRange || (endInRange && !startInRange)) {
      data[args.x_accessor][0] = args.scales.X.invert(leftBounds);
    }
    return startInRange || endInRange || coversRange;
  };
}

MG.add_hook('line.after_init', generateRegions);

return ;
}));
