if ($(window).width() < 1020) {}

$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */


    $('.side-menu').removeClass('hidden');


    setTimeout(function () {
        $(".loader").fadeOut("slow");
    }, 1000);


});



/* ===================================
       Fixed Navbar 
   ====================================== */
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});


$(window).on('scroll', function () {
    if ($(this).scrollTop() > 220) { 
        $('header').addClass('header-appear');
    } else {
        $('header').removeClass('header-appear');
    }
});


/* ===================================
       Navbar Scroll
   ====================================== */
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80
    });
});


/* ===================================
       Side Menu
   ====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
    }), $(".side-nav .navbar-nav").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}
/* ===================================
       Work-Carousel
  ====================================== */
$('.work-carousel').owlCarousel({
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    dots: false,
    mouseDrag: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

/* ===================================
       Testimonial-Carousel
  ====================================== */
$('.rveiews-carousel').owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

/* ===================================
       Clients-Carousel
  ====================================== */
$('.clients-owl').owlCarousel({
    loop: true,
    margin: 60,
    autoplay: true,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
})

/* ===================================
    WOW
======================================*/

new WOW().init();

/* =====================================
         circular bars
 ====================================== */


$(".circular-wrap").appear(function () {
    $(".circle-1").circleProgress({
        size: 210,
        lineCap: "round",
        fill: {
            gradient: ["#fa2851", "#350d82"]
        },
    });
});


/* ===================================
    Carousel icons
======================================*/
   
var owl = $('.work-carousel');
owl.owlCarousel();
// Go to the next item
$('.customNextBtn').click(function () {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn').click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel');
});