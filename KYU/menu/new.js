$(function(){
    $(".nutrient_info").hide();
    
    $(".menu_items").click(function() {
        $(".info").not($(this).find(".info")).fadeOut();
        $(this).find(".info").fadeToggle();
        $(".nutrient_info").fadeOut();
    });

    $(".menu_nutrient").click(function(event) {
        event.stopPropagation(); // 이벤트 전파 방지
        const nutrientInfo = $(this).closest(".menu_items").find(".nutrient_info");
        nutrientInfo.fadeToggle();
        $(this).find(".nutrient_info").fadeToggle();
    });

    $(document).on("click", function(event){
        if (!$(event.target).closest('.menu_items').length) {
            $(".info").fadeOut();
            $(".nutrient_info").fadeOut(); // 영양 성분 정보도 숨기기
        }        
    });    
});

