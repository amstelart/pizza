// Если на проекте jQuery
$( document ).ready(function() {

    $("#header-slider").owlCarousel({
      items: 1,
      autoplay: true,
      smartSpeed:1000,
      autoplayTimeout:5000,
      animateOut: 'fadeOut',
      touchDrag: false,
      mouseDrag: false,
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

    // toggle basket
    $(".card__toggle").click(function(e) {
      e.preventDefault();
      $(this).find(".item").toggleClass('item--active');
    });

    var fixNav = 500;
  	$(window).scroll(function() {
  		var scroll = $(this).scrollTop();
  		if ( scroll >= fixNav ) {
  				$('.catalog-menu').addClass('catalog-menu--sticky');
  			}
  			else {
  					$('.catalog-menu').removeClass('catalog-menu--sticky');
  			}
  	});
  	//animate header end

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
