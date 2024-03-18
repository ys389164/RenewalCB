//coffee.js

$(function(){
    // function handleCoffeeChange(coffeeType) {
    //     $('.menu_items').each(function() {
    //         if ($(this).data('type') === coffeeType) {
    //             $(this).toggle($('#' + coffeeType).prop('checked'));
    //         }
    //     });
    // }

    // $('input[name="coffee"]').click(function() {
    //     handleCoffeeChange($(this).val());
    // });

    // // 이미지 클릭으로 이벤트 전파 방지
    // $('.menu_items .info').click(function(e) {
    //     e.stopPropagation();
    // });

    // const checkboxes = $('#select_coffee input[type="checkbox"]');
    // const menuItems = $('.menu_items');

    // checkboxes.on('change', function() {
    //     const selectedCoffees = checkboxes.filter(':checked').map(function() {
    //         return this.value;
    //     }).get();
        
    //     if (selectedCoffees.length === 0) {
    //         menuItems.show();
    //     } 
    //     else {
    //         menuItems.each(function() {
    //             const menuItemTypes = $(this).data('type').split(' ');
    //             $(this).toggle(selectedCoffees.every(coffee => menuItemTypes.includes(coffee)));
    //         });
    //     }
    // });

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


    $(".menu_items").click(function() {
        $(".info").not($(this).find(".info")).fadeOut();
        $(this).find(".info").fadeToggle();
    });

    $(document).on("click", function(event){
        if (!$(event.target).closest('.menu_items').length) {
            $(".info").fadeOut();
        }        
    });

    // $(".menu_items").click(function() {
    //     var info = $(this).find(".info");
    //     if (info.is(":visible")) {
    //         info.fadeOut();
    //     } else {
    //         $(".info").fadeOut(); // 이미 열려 있는 정보가 있다면 모두 닫음
    //         info.fadeIn();
    //     }
    // });
    // $(".info").click(function() {
    //     var info = $(this).find(".info");
    //     if (info.is(":visible")) {
    //         info.fadeOut();
    //     } else {
    //         $(".info").fadeOut(); // 이미 열려 있는 정보가 있다면 모두 닫음
    //         info.fadeIn();
    //     }
    // });
    
    // $(".menu_items .info").click(function(e) {
    //     e.stopPropagation(); // 이미지 클릭으로 이벤트 전파 방지
    // });

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