// Main
$(document).ready(function() {
    // Phần Slider
    $('.home-slider .owl-carousel').owlCarousel({
        items: 1,
        nav: false,
        dots: true,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
    });
    // Phần Clients
    $('.home-clients .owl-carousel').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-chevron-left"></i>', '<i class="fa fa-chevron-right"></i>'],
        responsive: {
            // breakpoint from 480 up
            480: {
                items: 2,
            },
            // breakpoint from 768 up
            768: {
                items: 4,
            },
            // breakpoint from 992 up
            992: {
                items: 6,
            }
        }
    });
    // Phần Logo
    $(".logo").hover(function() {
        $(this).addClass("swing")
    }, function() {
        $(this).removeClass("swing")
    });
    // Nút Nav
    $(".navbar-toggler.animated").click(function() {
        $(this).toggleClass("tada")
    });
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() <= 20) {
    //         $('header').css('opacity', '0.8')
    //         $('header').css('box-shadow', 'initial')
    //     } else {
    //         $('header').css('opacity', '1')
    //         $('header').css('box-shadow', '0 0px 5px black')
    //     }
    // });
});