let menuInfo;

// json호출
(function callJson() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET','../contentsList.json',true);
    xhr.send();
    xhr.onload=()=>{
        const saveDataList = JSON.parse(xhr.response);

        // 쿼리스트링 값 뽑아내기
        const params = new URLSearchParams(location.search);
        const paramsSeq = params.get('seq');

        // 해당 쿼리스트링 이용해서 json에서 일치하는 값만 뽑아오기
        for(let x=0; x<saveDataList.length; x++){
            if(saveDataList[x].seq === paramsSeq){
                return menuInfo = saveDataList[x]
            }
        }


    }
})()

// 데이터 바인딩
const dataBinding = () => {
    // 제목 바인딩
    const title = document.querySelector('.title');
    const dateTag = document.querySelector('.date');
    const path = document.querySelector('.path');
    path.innerHTML = `<p><a href="../contents.html">home</a> &gt; <a href="../contents.html">Contents</a> &gt; ${menuInfo.tab}</p>`
    dateTag.innerHTML = menuInfo.date
    title.innerHTML = menuInfo.title

    // 컨텐츠 바인딩
    bindingTypeOne();
}

// 스타일 타입 1
const bindingTypeOne = () => {
    const contents = document.querySelector('.contents');
    for(let x=0; x<menuInfo.imgUrl.length; x++){
        contents.innerHTML += menuInfo.imgUrl[x]
        contents.innerHTML += menuInfo.contents[x] || ''
    }
}

window.onload=()=>{
    setTimeout(()=>{
        dataBinding();
    }, 10);
}