jQuery( function( $ ){
	$(document).ready(function() {
			 $('.hero-slider').slick({
			  slidesToShow: 1,
			  slidesToScroll: 1,
  			  autoplay: true,
  			  autoplaySpeed: 4000,
			  arrows: false,
			  fade: true,
			  asNavFor: '.hero-nav'
			});
			$('.hero-nav').slick({
			  slidesToShow: 3,
			  slidesToScroll: 1,
  			  autoplay: true,
  			  autoplaySpeed: 4000,
			  asNavFor: '.hero-slider',
			  dots: false,
			  centerMode: true,
			  vertical: true,
			  focusOnSelect: true
			});
	});	  
});
