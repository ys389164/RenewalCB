$(function(){
    const checkboxes = $('#select_food input[type="radio"]');
    const menuItems = $('.menu_items');
    const menuEmpty = $('.menu_items_empty');

    checkboxes.on('change', function() {
        const selectedCoffees = checkboxes.filter(':checked').map(function() {
            return this.value;
        }).get();
        
        // 선택된 커피 유형에 해당하는 메뉴 아이템 보이기
        menuItems.hide().each(function() {
            const menuItemTypes = $(this).data('type').split(' ');
            if (selectedCoffees.every(coffee => menuItemTypes.includes(coffee))) {
                $(this).show();
            }
        });

        // 빈 메뉴 항목 보이거나 숨기기
        const emptyMenuCount = Math.max(4 - selectedCoffees.length, 0); // 보여져야 할 빈 메뉴 항목의 개수 계산
        menuEmpty.hide(); // 모든 빈 메뉴 항목 숨기기
        menuEmpty.slice(0, emptyMenuCount).show(); // 선택된 유형의 메뉴 개수에 맞게 빈 메뉴 항목 보이기
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