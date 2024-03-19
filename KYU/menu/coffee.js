//coffee.js

$(function(){
    const checkboxes = $('#select_coffee input[type="checkbox"]');
    const menuItems = $('.menu_items');

    checkboxes.on('change', function() {
        const selectedCoffees = checkboxes.filter(':checked').map(function() {
            return this.value;
        }).get();
        
        if (selectedCoffees.length === 0) {
            menuItems.show();
        } else {
            menuItems.hide(); // 모든 메뉴 숨기기
            menuItems.each(function() {
                const menuItemTypes = $(this).data('type').split(' ');
                if (selectedCoffees.every(coffee => menuItemTypes.includes(coffee))) {
                    $(this).show(); // 선택된 모든 커피에 해당되는 메뉴만 보이기
                }
            });
        }
    });

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