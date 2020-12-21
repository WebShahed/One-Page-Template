
$(document).ready(function(){
// SLIDER AREA 
$('.slider-active').owlCarousel({
loop:true,
margin:10,
autoplay:true,
autoplayTimeout:4000,
nav:true,
animateOut: 'slideOutDown',
animateIn: 'flipInX',
smartSpeed:950,
responsive:{
  0:{
    items:1
  },
  600:{
    items:1
  },
  1000:{
    items:1
  }
}
});
/*
Testimonial Crousel
============================*/  
  $(".all-testimonial").owlCarousel({
    autoplay: true, 
    pagination:false,
    nav:false, 
    dots:true, 
    items :1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        768:{
            items:1
        },              
        992:{
            items:2
        },              
        1000:{
            items:2
        }
    }           
  });               
})(jQuery);