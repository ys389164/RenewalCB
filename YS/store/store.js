const pagination =document.querySelector('.pagination .pagingNumWrap');
callJSON('./store_info.json',pagination)
let jsonArr;
window.addEventListener('load',()=>{
    pageBtnEvt(1)
})

// 버튼 호출
const setPagenation = (str,arr=jsonArr) => {
    if(str === 'next'){
        nextBtnEvt(arr)
        return;
    }
    prevBtnEvt(arr);
}

// 다음버튼
const nextBtnEvt = (arr) => {
    const maxLength = Math.ceil(arr.length/5)
    const firstTagVal = Number(pagination.children[0].dataset.value)

    if(firstTagVal < maxLength-5){
        pagination.innerHTML = ''
        let paging = ''
        for(let x=0; x<5; x++ ){
            if(firstTagVal+5+x <= maxLength)
            paging+= `<div class="page-item" data-value="${firstTagVal+5+x}"><a class="page-link active" href="#" onclick="pageBtnEvt(${firstTagVal+5+x})">${firstTagVal+5+x}</a></div>`
        }
        pagination.innerHTML=paging;
    }
}

// 이전버튼
const prevBtnEvt = (arr) => {
    const firstTagVal = Number(pagination.children[0].dataset.value)

    if(firstTagVal > 1){
        pagination.innerHTML = ''
        let paging = ''
        for(let x=0; x<5; x++ ){
            paging+= `<div class="page-item" data-value="${firstTagVal-5+x}"><a class="page-link active" href="#" onclick="pageBtnEvt(${firstTagVal-5+x})">${firstTagVal-5+x}</a></div>`
        }
        pagination.innerHTML=paging;
    }
}

// 페이지네이션 버튼 이벤트
const pageBtnEvt = (num, arr=jsonArr) => {
    const map_wrapPlacesList = document.querySelector('.map_wrap #placesList');
    map_wrapPlacesList.innerHTML='';
    let mapList_li_Tag = ''

    for(let x=0; x<5; x++){
        console.log(arr);
        mapList_li_Tag += `
        <li onclick="storeDetailinfo('${arr[num*5+x-5].store_name}')">
            <div class="listItemWrap">
                <div class="itemTitle">
                    ${arr[num*5+x-5].store_name}
                </div>
                <div class="telNum">
                    ${arr[num*5+x-5].phone}
                </div>
                <div class="address">
                    ${arr[num*5+x-5].address}
                </div>
            </div>
        </li>`
    }
    map_wrapPlacesList.innerHTML=mapList_li_Tag;
};

// 매장 자세히보기
const storeDetailinfo = (storeName) => {
    ps.keywordSearch(`카페베네 ${storeName}`, placesSearchCB);
}

// 매장 리스트
const searchStoreList = () => {
    const keyword = document.getElementById('keyword');
    const newJsonArr = jsonArr.filter(item => { return item.store_name.includes(keyword.value) });

    ps.keywordSearch(`카페베네 ${keyword.value}`, placesSearchCB);
    setStoreList(newJsonArr)
    setStorePagenation(newJsonArr)
}

// 매장 검색시 리스트 새로만들기
const setStoreList = (arr) => {
    const map_wrapPlacesList = document.querySelector('.map_wrap #placesList');
    map_wrapPlacesList.innerHTML='';
    
    let mapList_li_Tag = ''
    for(let x=0; x<arr.length; x++){
        mapList_li_Tag += `
            <li onclick="storeDetailinfo('${arr[x].store_name}')">
                <div class="listItemWrap">
                    <div class="itemTitle">
                        ${arr[x].store_name}
                    </div>
                    <div class="telNum">
                        ${arr[x].phone}
                    </div>
                    <div class="address">
                        ${arr[x].address}
                    </div>
                </div>
            </li>
        `
    }
    map_wrapPlacesList.innerHTML=mapList_li_Tag;
}

// 매장 검색시 페이지네이션 새로 만들기
const setStorePagenation = (arr) => {
    pagination.innerHTML = ''

    if(arr.length<5){
        document.querySelector('.prevEvt').classList.add('hidden')
        document.querySelector('.nextEvt').classList.add('hidden')
    }
    if(arr.length>=5){
        document.querySelector('.prevEvt').classList.remove('hidden')
        document.querySelector('.nextEvt').classList.remove('hidden')
    }
    
    if(arr.length > 5){
        for(let x=0; x<5; x++){
            pagination.innerHTML+=`<div class="page-item" data-value="${x+1}"><a class="page-link" href="#" onclick="pageBtnEvt(${x+1})">${x+1}</a></div>`
        }
        return;
    }
    for(let x=0; x<arr.length; x++){
        console.log(arr);
        pagination.innerHTML+=`<div class="page-item" data-value="${x+1}"><a class="page-link" href="#" onclick="pageBtnEvt(${x+1},${arr})">${x+1}</a></div>`
    }
}