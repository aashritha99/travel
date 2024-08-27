//swiper
var swiper = new Swiper(".mySwiper ", {
    spaceBetween: 30,
    centeredSlides: true,
  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });