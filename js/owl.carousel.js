$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 15,
  nav: true,
  dot: false,
  mouseDrag: false,
  touchDrag: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    992: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});
