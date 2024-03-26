const userName = document.getElementById('name');
const selectTell = document.getElementById('tell1');
const tell2 = document.getElementById('tell2');
const tell3 = document.getElementById('tell3');
const UserEmail = document.getElementById('email1');
const inputEmail = document.getElementById("email2");
const selectEmail = document.getElementById("email3");
const area1 = document.getElementById('area1');
const area2 = document.getElementById('area2');
const storeSize = document.getElementsByName('size');
const utilizationTerms = document.getElementById('agree');
const submitBtn = document.getElementById("submit");
let regionInfo;

// select tag의 email value 받아오기
selectEmail.addEventListener("change", () => {
  let selectedValue = selectEmail.value;
  inputEmail.innerHTML = "";
  inputEmail.value = selectedValue;
});

// 제출 버튼 이벤트
submitBtn.addEventListener("click", (e) => {
  if (valCheck()) {
    alert('제출되었습니다.');
    return;
  }
})

// json 받아오기
function fetchDataFromJSONAndCreateDOM() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./region.json", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      regionInfo = JSON.parse(xhr.responseText);
      changeArea();
    }
  };
}

// 지역 변경시 세부 지역 변경
function changeArea() {
  area1.addEventListener("change", function () {
    updateSecondSelect(area1.value);
  });
}

function updateSecondSelect(selectedValue) {
  area2.innerHTML = "";
  let selectedRegion = regionInfo.find((e) => e.city === selectedValue);
  if (selectedRegion && Array.isArray(selectedRegion.sub)) {
    selectedRegion.sub.forEach(function (subRegion) {
      area2.innerHTML += `<option value= '${subRegion}'>${subRegion}</option>`;
    });
  }
}

fetchDataFromJSONAndCreateDOM();

// 유효성 검사
function valCheck() {
  // name
  if (!userName.value) {
    alert('이름을 입력해주세요.');
    userName.focus();
    return false;
  }
  // tell
  if (selectTell.value === '선택') {
    alert('연락처를 입력해주세요.');
    selectTell.focus();
    return false;
  }
  if (!tell2.value) {
    alert('연락처를 입력해주세요.');
    tell2.focus();
    return false;
  }
  if (!tell3.value) {
    alert('연락처를 입력해주세요.');
    tell3.focus();
    return false;
  }
  // email
  if (!UserEmail.value) {
    alert('이메일을 입력해주세요.');
    UserEmail.focus();
    return false;
  }
  if (!inputEmail.value) {
    alert('이메일을 입력해주세요.');
    inputEmail.focus();
    return false;
  }
  // 개설 희망 지역
  if (area1.value === '시/도') {
    alert('개설 희망 지역(시/도)를 선택해주세요.');
    area1.focus();
    return false;
  }


  if (area2.value === '구/군') {
    alert('개설 희망 지역(구/군)을 선택해주세요.');
    area2.focus();
    return false;
  }

  // 매장 크기 
  let Size = Object.values(storeSize).some(item => { return item.checked });
  if (!Size) {
    alert('매장크기를 선택해주세요.');
    return false;
  }

  // 동의
  if (!utilizationTerms.checked) {
    alert('개인정보 약관에 동의하셔야 신청이 가능합니다.');
    utilizationTerms.focus();
    return false;
  }

  return true;
}