const swiper = new Swiper('.js-slide-fullwidth', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  effects:"fade",

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }, pagination: {
    el: ".swiper-pagination",
    clickable:true
  }

});

const featured = new Swiper('.js-slide-featured', {
  // Optional parameters
  loop: true,
  slidesPerView: 4,
  effects: "fade",
  spaceBetween:40,

  // Navigation arrows
  pagination: {
    el: ".swiper-pagination",
    clickable:true
  }

});
