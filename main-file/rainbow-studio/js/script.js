// if ($(window).width() < 1020) {}

$(window).on("load", function () {

    "use strict";

    /* ===================================
        Loading Timeout
     ====================================== */
    $('.side-menu').removeClass('hidden');

    setTimeout(function () {
        $('.loader-bg').fadeOut();
    }, 1000);
});

//*********************SMOOTH SCROLL*****************************//

$("a.pagescroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top
    }, 1200);
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
    }), $(".side-nav .navbar-nav .nav-link").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    }), $("#btn_sideNavClose").on("click", function () {
        $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
    });
}

/* ===================================
     WOW Animation
 ====================================== */
if ($(window).width() > 991) {
    var wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 0,
        mobile: false,
        live: true
    });
    new WOW().init();
}

$('.navbar-simple .navbar-nav a').each(function () {
    var count = $(this).children('[data-count]');
    $(this).mouseenter(function() {

        if(count.data('count')>3) {
            count.prop('Counter', 0).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function (now) {
                    count.text(Math.ceil(now));
                }
            });
        }else{
            count.prop('Counter', 5).animate({
                Counter: count.data('count')
            }, {
                duration: 800,
                easing: 'swing',
                step: function (now) {
                    count.text(Math.ceil(now));
                }
            });
        }
    });
});

/* ===================================
       Header appear
   ====================================== */
jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        } else {
            $('header').removeClass('header-appear');
        }
    });
});

/* ===================================
        Nav Scroll
====================================== */
$(".scroll").on("click", function (event) {
    event.preventDefault();
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - 80
    });
});

/* ===================================
     arrow appear and scroll to top
 ====================================== */

$(window).on('scroll', function () {
    if ($(this).scrollTop() > 500) {
        $('.scroll-top-arrow').fadeIn('slow');
    }else {
        $('.scroll-top-arrow').fadeOut('slow');
    }
});

//Click event to scroll to top
$(document).on('click', '.scroll-top-arrow', function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});

$(document).on('click', '.home', function () {
    $('html, body').animate({scrollTop: 0}, 800);
    return false;
});
/* =====================================
          circular bars
  ====================================== */

$(".circular-wrap").appear(function () {
    $(".circle").circleProgress({
        size: 210,
        lineCap: "round",
        fill: {
            gradient: ["#ff53ac", "#ff7f7f", "#fecd30"]
        },
    });
});


$(".circular-wrap.dark").appear(function () {
    $('.myskill').circleProgress({
        lineCap: "round",
        size: 200,
    });
});
/* ===================================
  Owl Carousel
 ====================================== */

//Testimonial Slider

$('.team-carousel').owlCarousel({
    loop: true,
    smartSpeed: 500,
    responsiveClass: true,
    nav:false,
    dots:false,
    autoplay: true,
    margin:30,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    responsive: {
        0: {
            items: 1,
            margin: 30,
        },
        480: {
            items: 1,
        },
        992: {
            items: 2,
        }
    }
});

$('#team-next').click(function() {
    var owl = $('.team-carousel');
    owl.owlCarousel();
    owl.trigger('next.owl.carousel');
});
$('#team-prev').click(function() {
    var owl = $('.team-carousel');
    owl.owlCarousel();
    owl.trigger('prev.owl.carousel', [300]);
});

/* ===================================
          Cube Portfolio Initializing
   ======================================*/
$('#js-grid-mosaic').cubeportfolio({
    filters: '#js-filters-mosaic',
    layoutMode: 'grid',
    sortByDimension: true,
    mediaQueries: [{
        width: 1500,
        cols: 2,
    }, {
        width: 1100,
        cols: 2,
    }, {
        width: 768,
        cols: 1,
    }, {
        width: 480,
        cols: 1,
        options: {
            gapHorizontal: 60
        }
    }],
    defaultFilter: '*',
    animationType: 'fadeOut',
    gapHorizontal: 50,
    gapVertical: 50,
    gridAdjustment: 'responsive',
    caption: 'zoom',

    // lightbox
    lightboxDelegate: '.cbp-lightbox',
    lightboxGallery: true,
    lightboxTitleSrc: 'data-title',
    lightboxCounter: '<div class="cbp-popup-lightbox-counter">{{current}} of {{total}}</div>',

    plugins: {
        loadMore: {
            element: "#js-loadMore-lightbox-gallery",
            action: "click",
            loadItems: 5,
        }
    }

})
    .on('initComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");

            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");

            }
        });
    })
    .on('onAfterLoadMore.cbp', function () {
        // your functionality
        var $this = $(this);
        $("#js-loadMore-lightbox-gallery a").addClass("d-none");
        $("#js-loadMore-lightbox-gallery").addClass("active-outer");
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            console.log();
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    })
    .on('filterComplete.cbp', function () {
        // your functionality
        var $this = $(this);
        if ($(".cbp-filter-item-active").attr("data-filter") === "*") {
            $("#js-loadMore-lightbox-gallery").addClass("active");
            $("#js-loadMore-lightbox-gallery").removeClass("d-none");
        } else {
            $("#js-loadMore-lightbox-gallery").removeClass("active");
            $("#js-loadMore-lightbox-gallery").addClass("d-none");
        }
        $this.find(".cbp-wrapper").find(".cbp-item:not(.cbp-item-off)").each(function (index) {
            $(this).removeClass("even");
            var val = index + 1;
            if ($(this).css('left') !== "0px") {
                $(this).addClass("even");
            }
        });
    });


/* ===================================
           testimonial
     ====================================== */

$('.testimonial-box').owlCarousel({

    loop: true,
    margin: 20,
    slideSpeed: 5000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 8000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        },
    }

});
/* =====================================
                    sponsers  carousel
        ====================================== */

$('.sponser-tags').owlCarousel({

    loop: true,
    margin: 20,
    slideSpeed: 5000,
    slideTransition: 'linear',
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 10000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 4
        },
        1000: {
            items: 6
        },
    }

});