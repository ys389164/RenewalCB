//test.js

// $(document).ready(function() {
//   // 클래스가 "scroll_on"인 모든 요소를 선택합니다.
//   const $counters = $(".scroll_on");
  
//   // 노출 비율(%)과 애니메이션 반복 여부(true/false)를 설정합니다.
//   const exposurePercentage = 100; // ex) 스크롤 했을 때 $counters 컨텐츠가 화면에 100% 노출되면 숫자가 올라갑니다.
//   const loop = true; // 애니메이션 반복 여부를 설정합니다. (true로 설정할 경우, 요소가 화면에서 사라질 때 다시 숨겨집니다.)

//   // 윈도우의 스크롤 이벤트를 모니터링합니다.
//   $(window).on('scroll', function() {
//       // 각 "scroll_on" 클래스를 가진 요소에 대해 반복합니다.
//       $counters.each(function() {
//           const $el = $(this);
  
//           // 요소의 위치 정보를 가져옵니다.
//           const rect = $el[0].getBoundingClientRect();
//           const winHeight = window.innerHeight; // 현재 브라우저 창의 높이
//           const contentHeight = rect.bottom - rect.top; // 요소의 높이
          
//           // 요소가 화면에 특정 비율만큼 노출될 때 처리합니다.
//           if (rect.top <= winHeight - (contentHeight * exposurePercentage / 100) && rect.bottom >= (contentHeight * exposurePercentage / 100)) {
//               $el.addClass('active');
//           }
//           // 요소가 화면에서 완전히 사라졌을 때 처리합니다.
//           if (loop && (rect.bottom <= 0 || rect.top >= window.innerHeight)) {
//               $el.removeClass('active');
//           }
//       });
//   }).scroll();
// });



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
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Swiper.use(['swiper', 'effect-flip']);
// // newMenuSwiper 클래스를 가진 스와이퍼 컨테이너에 대한 Swiper 인스턴스 생성
// var swiper4 = new Swiper(".newMenuSwiper", {
//   loop: true,
//   effect: "flip",
//   grabCursor: true,
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

var swiper5 = new Swiper(".newMenuSwiper", {
  effect: "flip",
  grabCursor: false,
  allowTouchMove: false,
  // pagination: {
  //     el: ".swiper-pagination",
  // },
  // navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  // },
  loop: true,
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
});

var swiper6 = new Swiper(".newMenuSwiper2", {
  effect: "flip",
  grabCursor: false,
  allowTouchMove: false,
  // pagination: {
  //     el: ".swiper-pagination",
  // },
  // navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  // },
  loop: true,
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
});

// var swiper5 = new Swiper(".newMenuSwiper", {
//   effect: "coverflow",
//   grabCursor: false,
//   centeredSlides: true,
//   slidesPerView: "auto",
//   coverflowEffect: {
//     rotate: 50,
//     stretch: 0,
//     depth: 100,
//     modifier: 1,
//     slideShadows: true,
//   },
//   loop: true,
//   autoplay: {
//       delay: 5000,
//       disableOnInteraction: false,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
// });

function redirectToMenuPage(url) {
  window.location.href = url;
}



let observer = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "show 2s ease-out";
    }
    else{
      s.target.style.animation = "hide 2s ease-out";
    }
  })
})
let slide = document.querySelector(".text1");
observer.observe(slide);

let observer2 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "show2 2s ease-out";
    }
    else{
      s.target.style.animation = "hide2 2s ease-out";
    }
  })
})
let slide2 = document.querySelector(".text2");
observer2.observe(slide2);

let imgObserver = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "imgShow 2s";
    }
    else{
      s.target.style.animation = "imgHide 2s";
    }
  })
})
let imgSlide = document.querySelector("#menu_banner");
imgObserver.observe(imgSlide);

let imgObserver2 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "imgShow 2s";
    }
    else{
      s.target.style.animation = "imgHide 2s";
    }
  })
})
let imgSlide2 = document.querySelector(".newMenuSwiper");
imgObserver2.observe(imgSlide2);

let imgObserver3 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "imgShow 2s";
    }
    else{
      s.target.style.animation = "imgHide 2s";
    }
  })
})
let imgSlide3 = document.querySelector(".newMenuSwiper2");
imgObserver3.observe(imgSlide3);

let imgObserver4 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "imgShow 2s";
    }
    else{
      s.target.style.animation = "imgHide 2s";
    }
  })
})
let imgSlide4 = document.querySelector("#startup_section");
imgObserver4.observe(imgSlide4);

let observer3 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "show3 2s ease-out";
    }
    else{
      s.target.style.animation = "hide3 2s ease-out";
    }
  })
})
let slide3 = document.querySelector(".text3");
observer3.observe(slide3);

let observer4 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "show4 2s ease-out";
    }
    else{
      s.target.style.animation = "hide4 2s ease-out";
    }
  })
})
let slide4 = document.querySelector(".text4");
observer4.observe(slide4);

let observer5 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "show5 2s ease-out";
    }
    else{
      s.target.style.animation = "hide5 2s ease-out";
    }
  })
})
let slide5 = document.querySelector("#text5");
observer5.observe(slide5);

let observer6 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "show6 2s ease-out";
    }
    else{
      s.target.style.animation = "hide6 2s ease-out";
    }
  })
})
let slide6 = document.querySelector("#text4_title");
let slide6_2 = document.querySelector("#text4_content");
observer6.observe(slide6);
observer6.observe(slide6_2);

let observer7 = new IntersectionObserver((e)=>{
  e.forEach((s)=>{
    if(s.isIntersecting){
      s.target.style.animation = "show7 2s ease-out";
    }
    else{
      s.target.style.animation = "hide7 2s ease-out";
    }
  })
})
let slide7 = document.querySelector("#text5_title");
let slide7_2 = document.querySelector("#text5_content");
observer7.observe(slide7);
observer7.observe(slide7_2);