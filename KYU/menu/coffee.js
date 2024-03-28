$(function(){
    const checkboxes = $('#select_coffee input[type="checkbox"]');
    const menuItems = $('.menu_items');
    const menuEmpty = $('.menu_items_empty');

    checkboxes.on('change', function() {
        if ($(this).prop('id') === 'all') { // '전체' 체크박스가 선택된 경우
            if ($(this).prop('checked')) {
                checkboxes.not($(this)).prop('checked', false); // 다른 체크박스 해제
                menuItems.show(); // 모든 메뉴 항목 표시
                menuEmpty.hide();
            }
        }
        else if ($(this).prop('id') === 'espresso') { // '에스프레소' 체크박스가 선택된 경우
            if ($(this).prop('checked')) {
                checkboxes.not($(this)).prop('checked', false); // 다른 체크박스 해제

                // 선택된 커피 유형에 해당하는 메뉴 아이템 보이기
                const selectedCoffees = checkboxes.filter(':checked').map(function() {
                    return this.value;
                }).get();
                
                menuItems.hide().each(function() {
                    const menuItemTypes = $(this).data('type').split(' ');
                    if (selectedCoffees.every(coffee => menuItemTypes.includes(coffee))) {
                        $(this).show();
                    }
                });
        
                // 빈 메뉴 항목 보이거나 숨기기
                const emptyMenuCount = Math.max(4 - selectedCoffees.length, 0);
                menuEmpty.hide();
                menuEmpty.slice(0, emptyMenuCount).show();
            }
        }
        else { 
            if ($(this).prop('checked')) {
                $('#all').prop('checked', false);
                $('#espresso').prop('checked', false);
            }
            
            // 선택된 커피 유형에 해당하는 메뉴 아이템 보이기
            const selectedCoffees = checkboxes.filter(':checked').map(function() {
                return this.value;
            }).get();
            
            menuItems.hide().each(function() {
                const menuItemTypes = $(this).data('type').split(' ');
                if (selectedCoffees.every(coffee => menuItemTypes.includes(coffee))) {
                    $(this).show();
                }
            });
    
            // 빈 메뉴 항목 보이거나 숨기기
            const emptyMenuCount = Math.max(4 - selectedCoffees.length, 0);
            menuEmpty.hide();
            menuEmpty.slice(0, emptyMenuCount).show();
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
            $(".nutrient_info").fadeOut();
        }        
    });    
});

