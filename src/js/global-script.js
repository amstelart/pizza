// Если на проекте jQuery
$( document ).ready(function() {
    $("#header-slider").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed:1000,
      autoplayTimeout:2000,
      nav: false,
      dots: false,
      loop: false,
      center: false
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
