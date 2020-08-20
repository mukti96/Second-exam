(function ($) {
 "use strict";

    /*================
        Preloader js
    ==================*/
	setTimeout(function(){
		$('.loader-bg').fadeToggle();
	}, 2000);


    $('.drawer').drawer();
    
    /*================
        Ripples js
    ==================*/
	$('.header-area').ripples({
    resolution: 512,
    dropRadius: 15,
    perturbance: 0.01,
	});

    /*======================
        Sticky Header JS
    =======================*/
    $(window).scroll(function(){
        var sticky = $('.sticky'), 
            scroll = $(window).scrollTop();

        if (scroll < 100) sticky.removeClass('fixed');
        else sticky.addClass('fixed').animate({
            scrollTop: 0
        }, 3000);
    });

    /*=============
        Isotop
    ==============*/
    var $grid = $('.grid').isotope({
    });
    $('.portfolio-button').on( 'click', 'ul li a', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    /*====================
        Magnific Popup
    =====================*/
    $('.expand-img').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }

    });

    /*=======================
        Portfolio button
    ========================*/
    $('.portfolio-button ul li a').click(function(){
         $('.portfolio-button ul li a').removeClass('active');
         $(this).addClass('active');
         event.preventDefault();
    });

    /*==================
        Counter Up
    ===================*/
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    /*==================
        owlCarousel
    ===================*/
    $(".client-owl-carousel").owlCarousel({
        items: 3,
        loop: true,
        dots: true,
        autoplay: true,
        margin: 20,
        responsiveClass: true,
        responsive: { 
        0:{
            items: 1
        },
        480:{
            items: 1
        },
        600:{
            items: 2
        },
        1000:{
            items: 3
        },
        1200:{
            items: 3
        }

        }
    });

    /*============= 
        Scroll-up 
    ===============*/
       var web  = $(".scroll-up");
        $(window).scroll(function(){        
            if($(this).scrollTop() > 300){
                web.addClass("weblift");
            }else{
                web.removeClass("weblift");
            }       
        });
        
        web.on('click',function(){
            $("html, body").animate({scrollTop:0}, 2000)
        });

})(jQuery);