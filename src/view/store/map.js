window.addEventListener('load', () => {
    callJSON('./store_info.json', function(jsonResponse) {
        jsonArr = jsonResponse;
        pageBtnEvt(1);
    });
});

// Json 호출
function callJSON(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            let jsonResponse = JSON.parse(xhr.responseText)
            callback(jsonResponse);
        }
    };
    xhr.send();
}


/* ↓ 지도 API ↓ */
// 마커를 클릭하면 장소명을 표출할 인포윈도우 입니다
var infowindow = new kakao.maps.InfoWindow({zIndex:1});
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = {
        center: new kakao.maps.LatLng(37.566826, 126.9786567), // 지도의 중심좌표
        level: 4 // 지도의 확대 레벨

    };  

// 지도를 생성합니다    
var map = new kakao.maps.Map(mapContainer, mapOption); 
// 장소 검색 객체를 생성합니다
var ps = new kakao.maps.services.Places(); 
map.setMinLevel(4);
map.setMaxLevel(13);

// 키워드로 장소를 검색합니다
ps.keywordSearch('카페베네', placesSearchCB);

// 키워드 검색 완료 시 호출되는 콜백함수 입니다
function placesSearchCB (data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {
    
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        var bounds = new kakao.maps.LatLngBounds();
    
        for (var i=0; i<data.length; i++) {
            displayMarker(data[i]);    
            bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }       
    
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
    } 
}
// 지도에 마커를 표시하는 함수입니다
function displayMarker(place) {
    var imageSrc = "/assets/images/localStore/s-pin.png"; // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(55, 70); // 마커이미지의 크기입니다

    // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
    var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x) ,
        image: markerImage
    });
    

    // let Jsonplace = jsonArr[marker.idx]
    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
        
        const newIconObject = jsonArr.filter(item=>{return place.place_name.includes(item.store_name)}).map(item=>{return item.icons});
        const newIconOneArr = newIconObject.join('').split(',');
        const iconPathArr = changeIconPath(newIconOneArr)
        let iconElement = ''
        for(let x=0; x<iconPathArr.length; x++){
            iconElement += `<img src="${iconPathArr[x]}" alt="${newIconOneArr[x]}" />`
        }

        infowindow.setContent(`<div id="marker_img">
                                <h4>${place.place_name}</h4>
                                <div class="icons">${iconElement}</div>
                                <div>${place.address_name}</div>
                                <div>${place.phone}</div>
                                </div>`);
        $(function(){
            $('#marker_img').parent().css({'border':'0', 'background':'0'});
            $('#marker_img').parent().parent().css({'border':'0', 'background':'0'});
        });
        infowindow.open(map, marker);
    });
}

// Text를 경로로 바꾸기
const changeIconPath = (iconArr) => {
    const newIconArr = ["휴게","회의","흡연","주차","와이파이","배달"];
    const newIconPathArr = ["/assets/images/localStore/s-ico1.png","/assets/images/localStore/s-ico2.png","/assets/images/localStore/s-ico3.png","/assets/images/localStore/s-ico4.png","/assets/images/localStore/s-ico5.png","/assets/images/localStore/s-ico6.png"];

    const resultArr= [];
    for(let x=0; x<iconArr.length; x++){
        const savePathIdx = newIconArr.indexOf(iconArr[x]);
        resultArr.push(newIconPathArr[savePathIdx]);
    }
    
    return resultArr[0] === undefined ? [] : resultArr;
}

window.onload=()=>{
    setTimeout(()=>{
        displayMarker();
    }, 10);
}