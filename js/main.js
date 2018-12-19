(function ($) {
"use strict";

$('#mobile-menu').meanmenu({
	meanScreenWidth: "767",
	meanMenuContainer: '.main-menu'
});



$('.video-popup').magnificPopup({
  type: 'iframe'
  // other options
});


 $(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        navigation:false,
        navigationText:["",""],
        slideSpeed:1000,
        singleItem:true,
        autoPlay:true
    });
});

})(jQuery);