
var App = (function () {
    'use strict';
    
    App.mapsVector = function( ){
  
      var color1 = App.color.primary;
      var color2 = App.color.success;
      var color3 = App.color.danger;
      var color4 = App.color.warning;
      var color5 = App.color.success;
      var color6 = App.color.primary;
      var color7 = tinycolor( App.color.grey ).lighten( 5 ).toString();
      var color8 = App.color.danger;
  
      //Maps
      $('#china-map').vectorMap({
        map: 'cn_merc',
        backgroundColor: 'transparent',
        regionStyle: {
          initial: {
            fill: color1,
          },
          hover: {
            "fill-opacity": 0.8
          }
        }
      });
    };

  
    return App;
  })(App || {});
  
