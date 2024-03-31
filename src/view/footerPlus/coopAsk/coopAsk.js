let select = document.getElementById('kindsQ');
let comp = document.getElementById('company');
let mailOne = document.getElementById('email1');
let mailTwo = document.getElementById('email2');
let mailThree = document.getElementById('email3');
let firstTitle = document.getElementById('title');
let secondContent = document.getElementById('content');
let letter = document.getElementById('userType');
let password = document.getElementById('sixNum');
let Check = password.textContent;//임의로 나온 숫자
let complete = document.getElementById('submitBtn');
let DIYBtn = document.getElementById('fileBtn');//원래 input file. 여기 이름이 표시됨
let DIYInput =  document.getElementById('fileSearch');
let DIYText = document.getElementById('fileName');//여기에 표시하고 싶다.

//회사명, 이메일, 제목, 내용 중 하나라도 입력하지 않으면 경고창 나오는 함수.
complete.addEventListener("click", (e) => {
    if (askCheck()) {
        console.log(1);
        alert("등록이 완료되었습니다.");
        return;
    }
    e.preventDefault();
});

//셀렉트로 메일 형식 선택하면 텍스트에 입력되고 메일로 간주되는 함수
mailThree.addEventListener("change", () => {
    let selectedValue = mailThree.value;
    mailTwo.innerHTML = "";
    mailTwo.value = selectedValue;
});



//자동등록방지용 숫자. 무작위 숫자 6개 출력.
document.addEventListener('DOMContentLoaded', function () {
    function finalCheck() {
        let codeNumbers = [];
        for (i = 0; i < 6; i++) {
            let code = Math.floor(Math.random() * 9 + 1);
            codeNumbers.push(code);
        }
        return codeNumbers.join('');
    }
    let sixNum = document.getElementById('sixNum');
    let Check = finalCheck();
    sixNum.textContent = Check;
});



//#fileRoute 안에 내가 선택한 파일 경로가 출력된다.
DIYInput.addEventListener("change", function () {
    let filefile = DIYInput.value;
    DIYText.textContent = filefile;
});



function askCheck() {
    // 유효성 검사
    if (select.value === "선택") {
        alert('어떤 일로 문의하셨는지 선택해주세요');
        return false;
    }
    if (!comp.value) {
        alert('회사명을 입력해 주세요.');
        return false;
    }
    if (!mailOne.value) {
        alert('이메일을 입력해 주세요.');
        return false;
    }
    if (!mailTwo.value) {
        alert('이메일을 입력해 주세요.');
        return false;
    }
    if (!firstTitle.value) {
        alert('제목을 입력해 주세요.');
        return false;
    }
    if (!secondContent.value) {
        alert('내용을 입력해 주세요.');
        return false;
    }
    if (letter.value === "") {
        alert('자동등록방지 번호를 입력해 주세요');
        return false;
    }
    if (letter.value !== Check) {
        alert('번호가 틀렸습니다.');
        return false;
    }
    return true;
}