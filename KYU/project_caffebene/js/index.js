// document.querySelector('.button2').addEventListener('click', function(){
//     document.querySelector('.container').style.transform = 'translate(-100vw)';
// });

$(function(){
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        navigation: true,
        navifationPosition: 'right'
    });
    document.querySelector('.button2').addEventListener('click', function(){
        document.querySelector('.container').style.transform = 'translate(-100vw)';
    });
    document.querySelector('.button3').addEventListener('click', function(){
        document.querySelector('.container').style.transform = 'translate(-200vw)';
    });
});