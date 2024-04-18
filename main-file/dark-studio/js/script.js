// if ($(window).width() < 1020) {}
$(window).on("load", function () {

    "use strict";
    /* ===================================
            Loading Timeout
     ====================================== */

    $('.side-menu').removeClass('hidden');

    setTimeout(function(){
        $('.loader-bg').fadeToggle();

    }, 1000);
});

/* ===================================
        Header appear
====================================== */

jQuery(function ($) {

    "use strict";

    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 260) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

});
/* ===================================
     Nav Scroll
====================================== */
$(".scroll").on("click", function(event){
    event.preventDefault();
    $('html,body').animate({
        scrollTop: $(this.hash).offset().top - 0}, 1000);
});


/* =====================================
     broad navbar offset
 ====================================== */

$(".broad .nav-menu .nav-link").on("click", function (event) {
    event.preventDefault();
    off_set= 65;
    if(screen.width > 768){
        off_set = 140;
    }
    $("html,body").animate({
        scrollTop: $(this.hash).offset().top - off_set}, 100);
});

/* =====================================
     About Active
===================================== */
$('.about-media').on('mouseenter' , function(){
    $('.about-media').removeClass('active');
    $(this).addClass('active');
}).on('mouseleave' , function(){
    $('.about-media').removeClass('active');
    $('.about-media.selected').addClass('active');
});

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
/* ===================================
     Side Menu Open & Close
====================================== */
function  my_click() {

    $('#my_tog').on("click", function () {
        $(".side_nav").addClass("expand_nav");
        $("#my_tog").addClass("close_nav");
        $("#my_tog").attr("id","close_nav");
        $(".overlay-body").addClass("show_body_overlay");
    });

    $('#close_nav').on("click", function () {
        $("#close_nav").removeClass("close_nav");
        $(".side_nav").removeClass("expand_nav");
        $("#my_tog").removeClass("close_nav");
        $("#close_nav").attr("id","my_tog");
        $(".overlay-body").removeClass("show_body_overlay");
    });
}

$('.side-nav-menu .nav-menu li a').on("click", function () {
    $(".side_nav").removeClass("expand_nav");
    $("#close_nav").removeClass("close_nav");
    $(".side_nav").removeClass("expand_nav");
    $("#my_tog").removeClass("close_nav");
    $("#close_nav").attr("id","my_tog");
});

/* ===================================
    Broad Nav
====================================== */
$('.my_nav_tog').click(function() {
    $('.broad').addClass('broad-nav');
    $('.broad').css({ opacity: "1" });
    $('.head-nav').hide();
});

$('.btn-close').click(function() {
    $('.broad').css({ opacity: "0" });
    setTimeout(function() {$('.broad').removeClass('broad-nav')},100);
});

$('.broad ul li a').click(function () {
    $('.broad').css({ opacity: "0" });
    setTimeout(function() {$('.broad').removeClass('broad-nav')},100);
});

/* ===================================
    Fixed Broad Nav-Bar
 ====================================== */
$(window).on('scroll', function () {

    if($(window).width() <= 767){
        if ($(this).scrollTop() > 300) {
            $('#home').addClass('fixed-top')
            $('#home').addClass('fix-top')
            $('#pagepiling').addClass('margin-manage');
        }
        else {
            $('#home').removeClass('fixed-top')
            $('#home').removeClass('fix-top')
            $('#pagepiling').removeClass('margin-manage');
        }
    }else {
        $('#home').removeClass('fixed-top')
        $('#home').removeClass('fix-top')
    }
});

$('.overlay-body').on('click', function(e) {
    $("#close_nav").removeClass("close_nav");
    $(".side_nav").removeClass("expand_nav");
    $("#my_tog").removeClass("close_nav");
    $("#close_nav").attr("id","my_tog");
    $(".overlay-body").removeClass('show_body_overlay');
});

/* ===================================
    Active Links
====================================== */
$(function() {
    $('.side-nav-menu .nav-menu li a').click( function() {
        $(this).parent().siblings().children().removeClass('active');
        $(this).addClass('active');
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
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
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


/* =====================================
       Portfolio Filter
   ====================================== */

// isotope
$('.gallery').isotope({
    // options
    itemSelector: '.items'
});

var $gallery = $('.gallery').isotope({
    // options
});

// filter items on button click
$('.filtering').on('click', 'span', function () {

    var filterValue = $(this).attr('data-filter');

    $gallery.isotope({filter: filterValue});

});

$('.filtering').on('click', 'span', function () {

    $(this).addClass('active').siblings().removeClass('active');

});

setTimeout(function (){
    $('.filtering .active').click();
}, 1500)


/* ===================================
  Fancy Box
  ====================================== */
$('[data-fancybox]').fancybox({
    protect: true,
    animationEffect: "fade",
    hash: null,
});

/* ===================================
    Testimonial
====================================== */

var owl5 = $('.owl-testimonial');
owl5.owlCarousel({
    items:1,
    dots:true,
    loop:true,
    autoplay: false,
    responsiveClass: true,
    center:true,
    responsive: {
        0: {
            items: 1,

        },
        760: {
            items: 1,

        },
        1000: {
            items: 3,
        }
    }
});