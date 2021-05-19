$("#slider-carousel").owlCarousel({
  loop: true,
  margin: 0,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
  },
});
$(".product-new").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  navText: [
    "<img src='../assets/img/arrow-1.png'>",
    "<img src='../assets/img/arrow-2.png'>",
  ],
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  },
});
