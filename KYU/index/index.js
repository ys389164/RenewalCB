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
  
  var swiper = new Swiper(".mySwiper3", {
    effect: "fade",
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  function redirectToMenuPage(url) {
      window.location.href = url;
  }