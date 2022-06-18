$('#main-banner').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: [
        '<i class="fas fa-angle-left" aria-hidden="true"></i>',
        '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    ],
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1,
            nav: false,
        },
        600:{
            items:1,
            nav: false,
        },
        1000:{
            items:1
        }
    }
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 160) {
        $(".navbar").addClass("fixed");
    } else {
        $(".navbar").removeClass("fixed");
    }
});

$( document ).ready( function () {
    $( "#signupForm" ).validate( {
        rules: {
            password: {
                required: true,
                minlength: 5
            },
            email: {
                required: true,
                email: true
            },
        },
        messages: {
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
        },
        errorElement: "em",
    });
});