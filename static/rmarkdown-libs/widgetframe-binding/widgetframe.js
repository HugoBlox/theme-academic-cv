HTMLWidgets.widget({

  name: 'widgetframe',

  type: 'output',

  factory: function(el, width, height) {

    return {

      renderValue: function(x) {
         HTMLWidgets.pymParent =  new pym.Parent(el.id, x.url, x.options || {});
      },

      resize: function(width, height) {

      }

    };
  }
});