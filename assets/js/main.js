$('.banner .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 4000,
  responsive: {
      0: {
          items: 3
      },
      600: {
          items: 6
      },
      1000: {
          items: 6
      }
  }
})

$('.tabs .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  fluidSpeed: true,
  smartSpeed: 400,
  responsiveRefreshRate: 100,
  autoplayTimeout: 3000,
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
