// document.querySelector('.button2').addEventListener('click', function(){
//     document.querySelector('.container').style.transform = 'translate(-100vw)';
// });

$(function(){
    // $('#fullpage').fullpage({
    //     autoScrolling: true,
    //     scrollHorizontally: true,
    //     // navigation: true,
    //     // navifationPosition: 'right'
    // });


    // document.querySelector('.button1').addEventListener('click', function(){
    //     document.querySelector('.container').style.transform = 'translate(0vw)';
    // });
    // document.querySelector('.button2').addEventListener('click', function(){
    //     document.querySelector('.container').style.transform = 'translate(-100vw)';
    // });
    // document.querySelector('.button3').addEventListener('click', function(){
    //     document.querySelector('.container').style.transform = 'translate(-200vw)';
    // });

    var mHtml = $("html");
    var page = 1;


    mHtml.animate({scrollTop : 0},10);

    $(window).on("wheel", function(e) {
        if(mHtml.is(":animated")) return;
        if(e.originalEvent.deltaY > 0) {
            if(page == 4) return;
            page++;
        } else if(e.originalEvent.deltaY < 0) {
            if(page == 1) return;
            page--;
        }
        var posTop =(page-1) * $(window).height();
        mHtml.animate({scrollTop : posTop});
    })


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

    const mySwiper_2 = new Swiper('.swiper-wrapper_2', {
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