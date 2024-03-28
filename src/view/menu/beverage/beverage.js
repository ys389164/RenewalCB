$(function(){
    const checkboxes = $('#select_beverage input[type="radio"]');
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
});