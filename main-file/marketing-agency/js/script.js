if ($(window).width() < 1020) {}

$(window).on("load", function () {

    "use strict";

/* ===================================
    Loading Timeout
 ====================================== */
$('.side-menu').removeClass('hidden');

    setTimeout(function () {
        $('.preloader').fadeOut();
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

/* ===================================
       Navbar Full
====================================== */
if ($("#sidemenu_toggle").length) {
    $("#sidemenu_toggle").on("click", function () {
        $(".side-menu").removeClass("side-menu-opacity");
        $(".pushwrap").toggleClass("active");
        $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
    }), $("#close_side_menu").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active");
        setTimeout(function () {
            $(".side-menu").addClass("side-menu-opacity");
        }, 500);
    });
}
/* ===================================
       Scroll to appear 
   ====================================== */
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 0
    });
});

$(".scroll1").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top + 100
    });
});

/* ===================================
        Counter
====================================== */
$('.count').each(function () {
    $(this).appear(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
});

/* ===================================
       Testimonial-Carousel
====================================== */
$('.testimonial-carousel').owlCarousel({
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
       WOW Animation
======================================*/

new WOW().init();