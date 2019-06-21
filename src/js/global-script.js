// Если на проекте jQuery
$( document ).ready(function() {

    $("#header-slider").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed:1000,
      autoplayTimeout:5000,
      nav: false,
      dots: false,
      loop: true,
      center: false
    });

    //toggle menu
  	$('#catalog-menu-toggler').click(function (event) {
  		$('catalog-menu').removeClass('catalog-menu--open');
  		$('.catalog-menu').toggleClass('catalog-menu--open');

  		event.stopPropagation();
  	});
  	//toggle menu end
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
