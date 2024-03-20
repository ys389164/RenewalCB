$(function(){
    var mainSwiper = new Swiper('.swiper0', {
        direction: 'vertical',
        // speed: 1000,
        mousewheel: true,
        // scrollbar: hide
    });

    var mySwiper = new Swiper('.swiper1', {
        direction: 'horizontal', // 수평 방향 슬라이드
        loop: true, // 무한 루프
        autoplay: {
            delay: 3000 // 자동 재생 딜레이 시간 (ms)
        },
        speed: 500, // 슬라이드 애니메이션 속도 (ms)
        
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
    });

    var mySwiper_2 = new Swiper('.swiper2', {
        direction: 'horizontal', // 수평 방향 슬라이드
        loop: true, // 무한 루프
        autoplay: {
            delay: 3000 // 자동 재생 딜레이 시간 (ms)
        },
        speed: 1000, // 슬라이드 애니메이션 속도 (ms)
        
        // navigation: {
        //     nextEl: '.swiper-button-next',
        //     prevEl: '.swiper-button-prev',
        // }
    });

});