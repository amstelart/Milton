// Если на проекте jQuery
$( document ).ready(function() {

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


  // range slider
  // var rangeSliderArea = document.getElementById('area-slider');
  // var rangeSliderCost = document.getElementById('cost-slider');
  //
  // noUiSlider.create(rangeSliderArea, {
  //   start: [70, 110],
  //   connect: true,
  //   step: 10,
  //   range: {
  //     'min': 0,
  //     'max': 110
  //   }
  // });
  //
  // noUiSlider.create(rangeSliderCost, {
  //   start: [70, 100],
  //   connect: true,
  //   step: 10,
  //   range: {
  //     'min': 0,
  //     'max': 110
  //   }
  // });

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
