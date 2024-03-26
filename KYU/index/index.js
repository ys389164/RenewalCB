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
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function redirectToMenuPage(url) {
    window.location.href = url;
}

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



var swiper5 = new Swiper(".newMenuSwiper", {
  effect: "flip",
  grabCursor: false,
  allowTouchMove: false,

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

  loop: true,
  autoplay: {
      delay: 10000,
      disableOnInteraction: false,
  },
});


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

function moveToPage1() {
  var url = "../../YS/contact/contact/contact.html";
  window.location.href = url;
}

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
let slide4 = document.querySelector("#text4");
observer4.observe(slide4);

function moveToPage2() {
  var url = "../../YS/brand/B2BConsulting/b2b.html";
  window.location.href = url;
}

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