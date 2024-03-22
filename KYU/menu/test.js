//test.js
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  direction: "horizontal",
  effect: "fade",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".mySwiper3", {
  effect: "fade",
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

Swiper.use(['swiper', 'effect-flip']);
// newMenuSwiper 클래스를 가진 스와이퍼 컨테이너에 대한 Swiper 인스턴스 생성
var swiper4 = new Swiper(".newMenuSwiper", {
  loop: true,
  effect: "flip",
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function redirectToMenuPage(url) {
  window.location.href = url;
}