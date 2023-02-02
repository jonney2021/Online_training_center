
  $(".owl-carousel").owlCarousel({
    // loop infinitely
    loop:true,
    autoplay:true,
    // stop autoplay on mouseover
    autoplayHoverPause:true,
    // autoplay interval
    autoplayTimeout:5000,
    smartSpeed:1000,
    responsive: {
      0: {
          items: 1
      },
      992: {
          items: 3
      }
    }
  });

