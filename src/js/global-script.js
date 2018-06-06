// Если на проекте jQuery
$( document ).ready(function() {

  $("#gallery").unitegallery({
    gallery_theme: "grid",
    gallery_width:"100%",
    theme_panel_position: "right",
    theme_hide_panel_under_width: 992,
    tile_enable_border:true,
    thumb_width:165,
    thumb_height:133
  });

  // area-slider
  var rangeSliderArea = document.getElementById('area-slider');
  var rangeSliderAreaStartInput = document.getElementById('area-slider-start');
  var rangeSliderAreaEndInput = document.getElementById('area-slider-end');
  noUiSlider.create(rangeSliderArea, {
    start: [rangeSliderAreaStartInput.value, rangeSliderAreaEndInput.value],
    connect: true,
    step: 1,
    start: [20, 90],
    range: {
      'min': 0,
      'max': 110
    }
  });
  rangeSliderArea.noUiSlider.on('update', function( values, handle ) {
    var value = values[handle];
    if ( handle ) {
      rangeSliderAreaEndInput.value = Math.round(value);
    } else {
      rangeSliderAreaStartInput.value = Math.round(value);
    }
  });
  rangeSliderAreaEndInput.addEventListener('change', function(){
    rangeSliderArea.noUiSlider.set([null, this.value]);
  });
  rangeSliderAreaStartInput.addEventListener('change', function(){
    rangeSliderArea.noUiSlider.set([this.value, null]);
  });

  // cost-slider
  var rangeSliderCost = document.getElementById('cost-slider');
  var rangeSliderCostStartInput = document.getElementById('cost-slider-start');
  var rangeSliderCostEndInput = document.getElementById('cost-slider-end');
  noUiSlider.create(rangeSliderCost, {
    start: [rangeSliderCostStartInput.value, rangeSliderCostEndInput.value],
    connect: true,
    step: 1,
    start: [20, 90],
    range: {
      'min': 0,
      'max': 110
    }
  });
  rangeSliderCost.noUiSlider.on('update', function( values, handle ) {
    var value = values[handle];
    if ( handle ) {
      rangeSliderCostEndInput.value = Math.round(value);
    } else {
      rangeSliderCostStartInput.value = Math.round(value);
    }
  });
  rangeSliderCostEndInput.addEventListener('change', function(){
    rangeSliderCost.noUiSlider.set([null, this.value]);
  });
  rangeSliderCostStartInput.addEventListener('change', function(){
    rangeSliderCost.noUiSlider.set([this.value, null]);
  });

});

// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
