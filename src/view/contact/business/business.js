const userName = document.getElementById('name');
const selectTell = document.getElementById('tell1');
const tell2 = document.getElementById('tell2');
const tell3 = document.getElementById('tell3');
const addrNumber = document.getElementById('addCode');
const addrDetail = document.getElementById("addSub");
const area1 = document.getElementById('area1');
const area2 = document.getElementById('area2');
// 보유 점포 유무
const haveStore = document.getElementById('have')
const nonHave = document.getElementById('nonHave');
// 보유 점포 주소
const havingAddrN = document.getElementById('haddCode');
const havingAddrD = document.getElementById('haddSub');
const funds = document.getElementById('money');
const utilizationTerms = document.getElementById('agree');
const submitBtn = document.getElementById("submit");
let regionInfo;

// submit button click event
submitBtn.addEventListener("click", (e) => {
  if (valCheck()) {
    alert('제출되었습니다.');
    return;
  }
  else{
    e.preventDefault();
  }
})

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
  if (!addrNumber.value) {
    alert('주소를 입력해주세요.');
    addrNumber.focus();
    return false;
  }
  if (!addrDetail.value) {
    alert('주소를 입력해주세요.');
    addrDetail.focus();
    return false;
  }
  // 개설 희망 지역
  if (area1.value === '시/도') {
    alert('창업 예정지역(시/도)을 선택해주세요');
    area1.focus();
    return false;
  }

  if (area1.value === '세종특별자치시') { }
  else if (area2.value === '구/군') {

    alert('창업 예정지역(구/군)을 선택해주세요');
    area2.focus();
    return false;
  }

  //  보유점포 유무
  if (!haveStore.checked && !nonHave.checked) {
    alert('보유점포의 유/무를 선택해주세요.');
    haveStore.focus();
    return false;
  }

  if (haveStore.checked) {
    if (!havingAddrN.value) {
      alert('보유점포의 주소를 입력해주세요.');
      havingAddrN.focus();
      return false;
    }

    if (!havingAddrD.value) {
      alert('보유점포의 상세주소를 입력해주세요.');
      havingAddrD.focus();
      return false;
    }
  }

  if (!funds.value) {
    alert('창업보유자금을 입력해주세요');
    funds.focus();
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

// 주소 찾기
function searchAddstr(str) {
  new daum.Postcode({
    oncomplete: function (data) {
      let addr = "";
      let extraAddr = "";

      if (data.userSelectedType === "R") {
        // 사용자가 도로명 주소를 선택했을 경우
        addr = data.roadAddress;
      } else {
        // 사용자가 지번 주소를 선택했을 경우(J)
        addr = data.jibunAddress;
      }

      // 사용자가 선택한 주소가 도로명 타입일때 참고항목을 조합한다.
      if (data.userSelectedType === "R") {
        // 법정동명이 있을 경우 추가한다. (법정리는 제외)
        // 법정동의 경우 마지막 문자가 "동/로/가"로 끝난다.
        if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
          extraAddr += data.bname;
        }
        // 건물명이 있고, 공동주택일 경우 추가한다.
        if (data.buildingName !== "" && data.apartment === "Y") {
          extraAddr +=
            extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
        }
        // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
        if (extraAddr !== "") {
          extraAddr = " (" + extraAddr + ")";
        }
      }

      // 우편번호와 주소 정보를 해당 필드에 넣는다.
      let fulAdd = addr + extraAddr;
      if (str === '보유점포') {
        document.getElementById("haddCode").value = data.zonecode;
        document.getElementById("haddMain").value = fulAdd;
        return;
      }
      document.getElementById("addCode").value = data.zonecode;
      document.getElementById("addMain").value = fulAdd;
    },
  }).open();
}

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

// 지역 변경시 변동되는 세부 지역 이벤트
function changeArea() {
  area1.addEventListener("change", function () {
    updateSecondSelect(area1.value);
  });
}

function updateSecondSelect(selectedValue) {
  area2.innerHTML = "";

  // 선택된 지역 정보 가져오기
  let selectedRegion = regionInfo.find((e) => e.city === selectedValue);

  // 선택된 지역의 하위 지역 정보가 있는 경우에만 옵션 추가
  if (selectedRegion && Array.isArray(selectedRegion.sub)) {
    selectedRegion.sub.forEach(function (subRegion) {
      area2.innerHTML += `<option value= '${subRegion}'>${subRegion}</option>`;
    });
  }
}

window.onload = () => {
  fetchDataFromJSONAndCreateDOM();
}