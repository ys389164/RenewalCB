let menuList;
let menuIdx = 0;

// json호출
(function callJson() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','./noticeList.json',true);
    xhr.send();
    xhr.onload=()=>{
        menuList= JSON.parse(xhr.response)
    }
})()

//html 태그 생성
const createContentsDOM = (filterMenuList) => {
    const pageListUlTag = document.querySelector('.pageListUlTag');

    pageListUlTag.innerHTML=""
    filterMenuList.forEach(menuItems => {
        const liTag = document.createElement('li');
        liTag.innerHTML=`
            <div class="pageItemWrap">
            ${menuItems.imgUrl[0]}
            <div class="tab">${menuItems.tab}</div>
            <div class="title">${menuItems.title}</div>
            </div>
        `
        pageListUlTag.appendChild(liTag)

        setTimeout(()=>{
            liTag.setAttribute('class','active');
            onClickEvt(liTag,menuItems);
        },0)
    })
}

// liTag 클릭시 상세페이지 이동
const onClickEvt = (ele,menuItems) => {
    ele.addEventListener('click',()=>{
        window.location.href=`./contentsInfo/contentsItem.html?seq=${menuItems.seq}`
    })
}

// 검색 이벤트
const searchValue = () => {
    const inputTag = document.getElementById('inputText');
    const selectSearch = document.getElementById('selectSearch');

    if(inputTag.value.trim()){
        if(selectSearch.value === 'title'){
            createContentsDOM(menuList.filter(item=>{ return Number(item.tabIdx) === menuIdx && item.title.includes(inputTag.value) }));
            return;
        }
        if(selectSearch.value === 'content'){
            createContentsDOM(menuList.filter(filterItem=>{ 
                return Number(filterItem.tabIdx) === menuIdx && filterItem.contents.some(someItem => {console.log(someItem);return someItem.includes(inputTag.value) })
            }));
            return;
        }        
    }
    createContentsDOM(menuList.filter(item=>{ return Number(item.tabIdx) === menuIdx }));
}

window.onload=()=>{
    setTimeout(()=>{
        onChangeMenuBtn();
    createContentsDOM(menuList.filter(item=>{ return Number(item.tabIdx) === menuIdx }))
    }, 10);
}