//header scroll
let header = document.querySelector('header');

window.addEventListener('scroll',()=> {
header.classList.toggle('shadow',window.scrollY>0);
});

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