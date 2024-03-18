// 1번 버튼을 클릭했을 때
document.getElementById('button1').addEventListener('click', function() {
    // 현재 페이지 URL 가져오기
    var currentUrl = window.location.href;

    // URL에서 쿼리 매개변수 추출
    var url = new URL(currentUrl);
    var searchParams = new URLSearchParams(url.search);

    // pg 쿼리 매개변수 변경
    searchParams.set('pg', '1');

    // 변경된 쿼리 매개변수가 있는 새 URL 생성
    url.search = searchParams.toString();

    // 새 URL로 이동
    window.location.href = url.toString();
});

// 2번 버튼을 클릭했을 때
document.getElementById('button2').addEventListener('click', function() {
    // 현재 페이지 URL 가져오기
    var currentUrl = window.location.href;

    // URL에서 쿼리 매개변수 추출
    var url = new URL(currentUrl);
    var searchParams = new URLSearchParams(url.search);

    // pg 쿼리 매개변수 변경
    searchParams.set('pg', '2');

    // 변경된 쿼리 매개변수가 있는 새 URL 생성
    url.search = searchParams.toString();

    // 새 URL로 이동
    window.location.href = url.toString();
});


// 읽는 법
// 현재 페이지의 URL을 가져옴
var currentUrl = window.location.href;

// URL에서 쿼리 매개변수를 추출하여 객체로 반환
function getQueryParams(url) {
    var queryParams = {};
    var urlParts = url.split('?');
    if (urlParts.length > 1) {
        var queryString = urlParts[1];
        var pairs = queryString.split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            queryParams[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
        }
    }
    return queryParams;
}

// pg 매개변수 값 얻기
var queryParams = getQueryParams(currentUrl);
var pgValue = queryParams['pg'];
