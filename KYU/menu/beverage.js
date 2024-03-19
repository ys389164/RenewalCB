$(function(){
    const checkboxes = $('#select_beverage input[type="checkbox"]');
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