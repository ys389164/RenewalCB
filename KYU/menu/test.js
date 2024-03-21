// test.js
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
//   spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
var swiper2 = new Swiper(".mySwiper2", {
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
