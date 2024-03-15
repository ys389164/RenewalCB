// document.querySelector('.button2').addEventListener('click', function(){
//     document.querySelector('.container').style.transform = 'translate(-100vw)';
// });

$(function(){
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        // navigation: true,
        // navifationPosition: 'right'
    });
    // document.querySelector('.button1').addEventListener('click', function(){
    //     document.querySelector('.container').style.transform = 'translate(0vw)';
    // });
    // document.querySelector('.button2').addEventListener('click', function(){
    //     document.querySelector('.container').style.transform = 'translate(-100vw)';
    // });
    // document.querySelector('.button3').addEventListener('click', function(){
    //     document.querySelector('.container').style.transform = 'translate(-200vw)';
    // });

    const mySwiper = new Swiper('.swiper-container', {
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
});