var App = (function () {
	'use strict';

	App.chartsSparklines = function( ){


			//Top tile widgets
	    var color1 = App.color.primary;
	    var color2 = App.color.warning;
	    var color3 = App.color.success;
	    var color4 = App.color.danger;

	    $('#spark1').sparkline('html', { 
	      width: '85',
	      height: '35',
	      lineColor: color1,
	      highlightSpotColor: color1,
	      highlightLineColor: color1,
	      fillColor: false,
	      spotColor: false,
	      minSpotColor: false,
	      maxSpotColor: false,
	      lineWidth: 1.15
	    });

	    $("#spark2").sparkline('html', { 
	      type: 'bar', 
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color2 
	    });

	    $('#spark3').sparkline('html', { 
	      type: 'discrete', 
	      width: '85',
	      height: '35',
	      lineHeight: 20,
	      lineColor: color3,
	      xwidth: 18 
	    });

	    $('#spark4').sparkline('html', { 
	      width: '85',
	      height: '35',
	      lineColor: color4,
	      highlightSpotColor: color4,
	      highlightLineColor: color4,
	      fillColor: false,
	      spotColor: false,
	      minSpotColor: false,
	      maxSpotColor: false,
	      lineWidth: 1.15
	    });

	    $('#spark-trv-ytd').sparkline([20, 18, 12, 28, 6, 10, 19, 7, 2, 15, 17, 13],{
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color1
	    });

	    $('#spark-trv-wtd').sparkline([12, 5, 10, 20, 8, 1, 9, 22, 23, 28, 18, 3], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color2
	    });

	    $('#spark-trv-rank').sparkline([19, 1, 28, 5, 16, 21, 29, 27, 26, 6, 3, 20], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color3
	    });

	    $('#spark-sp-ytd').sparkline([10, 3, 1, 26, 17, 12, 8, 29, 5, 6, 27, 19], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color1
	    });

	    $('#spark-sp-wtd').sparkline([2, 8, 21, 9, 19, 13, 12, 5, 15, 18, 1, 20], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color2
	    });

	    $('#spark-sp-rank').sparkline([8, 22, 20, 10, 21, 6, 26, 28, 4, 11, 24, 16], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color3
	    });

	    $('#spark-wp-ytd').sparkline([26, 5, 17, 7, 9, 21, 18, 15, 1, 2, 28, 8], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color1
	    });

	    $('#spark-wp-wtd').sparkline([16, 29, 21, 13, 4, 27, 14, 1, 12, 28, 24, 15], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color2
	    });

	    $('#spark-wp-rank').sparkline([4, 16, 29, 9, 3, 7, 11, 6, 13, 18, 26, 22], {
	      type: 'bar',
	      width: '85',
	      height: '35',
	      barWidth: 3,
	      barSpacing: 3,
	      chartRangeMin: 0,
	      barColor: color3
	    });

		//Change default charts color (Read the official docs for more info)
		//This change the default sparkline colors, but you can change them individually to each chart
		var color1Src = tinycolor( App.color.primary );
		var color2Src = tinycolor( App.color.danger );
		var color3Src = tinycolor( App.color.warning );
		var color4Src = tinycolor( App.color.success );
		var color1 = color1Src.toString();
		var color2 = color2Src.toString();
		var color3 = color3Src.toString();
		var color4 = color4Src.toString();
		$.fn.sparkline.defaults.common.lineColor = color1;
		$.fn.sparkline.defaults.common.fillColor = color1Src.setAlpha(.3).toString();

		$.fn.sparkline.defaults.line.spotColor = color1;
		$.fn.sparkline.defaults.line.minSpotColor = color1;
		$.fn.sparkline.defaults.line.maxSpotColor = color1;
		$.fn.sparkline.defaults.line.highlightSpotColor = color1;
		$.fn.sparkline.defaults.line.highlightLineColor = color1;

		$.fn.sparkline.defaults.bar.barColor = color1;
		$.fn.sparkline.defaults.bar.negBarColor = color2;
		$.fn.sparkline.defaults.bar.stackedBarColor[0] = color1;
		$.fn.sparkline.defaults.bar.stackedBarColor[1] = color2;

		$.fn.sparkline.defaults.tristate.posBarColor = color1;
		$.fn.sparkline.defaults.tristate.negBarColor = color2;

		$.fn.sparkline.defaults.discrete.thresholdColor = color2;

		$.fn.sparkline.defaults.bullet.targetColor = color1;
		$.fn.sparkline.defaults.bullet.performanceColor = color2;
		$.fn.sparkline.defaults.bullet.rangeColors[0] = color2Src.setAlpha(.2).toString();
		$.fn.sparkline.defaults.bullet.rangeColors[1] = color2Src.setAlpha(.50).toString();
		$.fn.sparkline.defaults.bullet.rangeColors[2] = color2Src.setAlpha(.45).toString();

		$.fn.sparkline.defaults.pie.sliceColors[0] = color1;
		$.fn.sparkline.defaults.pie.sliceColors[1] = color2;
		$.fn.sparkline.defaults.pie.sliceColors[2] = color3;

		$.fn.sparkline.defaults.box.medianColor = color1;
		$.fn.sparkline.defaults.box.boxFillColor = color2Src.setAlpha(.5).toString();
		$.fn.sparkline.defaults.box.boxLineColor = color1;
		$.fn.sparkline.defaults.box.whiskerColor = color4;

		// Bar + line composite charts
		$(".compositebar").sparkline('html', { type: 'bar', barColor: color2 });
		$(".compositebar").sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7], { composite: true, fillColor: false });

 		// Line charts taking their values from the tag
    $('.sparklinebasic').sparkline();

    // Customized line chart
    $('.linecustom').sparkline('html', {height: '1.5em', width: '8em', lineColor: color3, fillColor: color3Src.setAlpha(.4).toString(), minSpotColor: false, maxSpotColor: false, spotColor: color4, spotRadius: 3});

    // Bar charts using inline values
    $('.sparkbar').sparkline('html', {type: 'bar'});

    // Tri-state charts using inline values
    $('.sparktristate').sparkline('html', {type: 'tristate'});

    // Composite line charts, the second using values supplied via javascript
    $('.compositeline').sparkline('html', { fillColor: false, changeRangeMin: 0, chartRangeMax: 10 });
    $('.compositeline').sparkline([4,1,5,7,9,9,8,7,6,6,4,7,8,4,3,2,2,5,6,7], { composite: true, fillColor: false, lineColor: color2, changeRangeMin: 0, chartRangeMax: 10 });

    // Line charts with normal range marker
    $('.normalline').sparkline('html', { fillColor: false, normalRangeMin: -1, normalRangeMax: 8 });

    // Discrete charts
    $('.discrete1').sparkline('html', { type: 'discrete', xwidth: 18 });
    $('.discrete2').sparkline('html', { type: 'discrete', thresholdValue: 4 });

    // Bullet charts
    $('.sparkbullet').sparkline('html', { type: 'bullet' });

    // Pie charts
    $('.sparkpie').sparkline('html', { type: 'pie', height: '1.0em' });

    // Box plots
    $('.sparkboxplot').sparkline('html', { type: 'box'});

	};

	return App;
})(App || {});
