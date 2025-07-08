$(function() {

    'use strict';

    // loader
    $.fakeLoader({
        spinner: "spinner2",
        bgColor: "#EF2F2A"
    });

    
   // navbar on scroll
    $(window).on("scroll", function() {

        var onScroll = $(this).scrollTop();

        if( onScroll > 50) {
            $(".navbar").addClass("navbar-fixed");
        }
        else {
            $(".navbar").removeClass("navbar-fixed");
        }

    });

   
      
});