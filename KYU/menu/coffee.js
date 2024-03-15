$(function(){
    $(".menu_items").click(function() {
        var info = $(this).find(".info");
        if (info.is(":visible")) {
            info.fadeOut();
        } else {
            $(".info").fadeOut(); // 이미 열려 있는 정보가 있다면 모두 닫음
            info.fadeIn();
        }
    });
    $(".info").click(function() {
        var info = $(this).find(".info");
        if (info.is(":visible")) {
            info.fadeOut();
        } else {
            $(".info").fadeOut(); // 이미 열려 있는 정보가 있다면 모두 닫음
            info.fadeIn();
        }
    });
    
    $(".menu_items .info").click(function(e) {
        e.stopPropagation(); // 이미지 클릭으로 이벤트 전파 방지
    });

    // $(".menu_nutrient").click(function() {
    //     var nutrient = $(this).find(".nutrient_info");
    //     if (nutrient.is(":visible")) {
    //         nutrient.fadeOut();
    //     } else {
    //         $(".info").fadeOut(); // 이미 열려 있는 정보가 있다면 모두 닫음
    //         nutrient.fadeIn();
    //     }
    // });


});