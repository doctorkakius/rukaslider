$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:false,
    dots:true,
    autoplay:true,
    autoplayTimeout:1000,
    freeDrag:true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:5
        }
    }
})