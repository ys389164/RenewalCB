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


function submit() {
  submitBtn.addEventListener("click", (e) => {
    if (!valCheck()) {
      e.preventDefault();
    }
    else { alert('제출되었습니다.'); }

  })
}
submit();

function valCheck() {
  // name
  if (!userName.value) {
    alert(`${userName.title}의 값이 없습니다.`);
    userName.focus();
    return false;
  }
  // tell
  if (selectTell.value === '선택') {
    alert(`${selectTell.title}의 값이 없습니다.`);
    selectTell.focus();
    return false;
  }
  if (!tell2.value) {
    alert(`${tell2.title}의 값이 없습니다.`);
    tell2.focus();
    return false;
  }
  if (!tell3.value) {
    alert(`${tell3.title}의 값이 없습니다.`);
    tell3.focus();
    return false;
  }
  // email
  if (!addrNumber.value) {
    alert(`${addrNumber.title}의 값이 없습니다.`);
    addrNumber.focus();
    return false;
  }
  if (!addrDetail.value) {
    alert(`${addrDetail.title}의 값이 없습니다.`);
    addrDetail.focus();
    return false;
  }
  // 개설 희망 지역
  if (area1.value === '시/도') {
    alert(`${area1.title}의 값이 없습니다.`);
    area1.focus();
    return false;
  }

  if (area1.value === '세종특별자치시') { }
  else if (area2.value === '구/군') {

    alert(`${area2.title}의 값이 없습니다.`);
    area2.focus();
    return false;
  }
  //  보유점포 유무
  if (!haveStore.checked && !nonHave.checked) {
    alert(`${haveStore.title}의 값이 없습니다.`);
    haveStore.focus();
    return false;
  }

  if (haveStore.checked) {
    if (!havingAddrN.value) {
      alert(`${havingAddrN.title}의 값이 없습니다.`);
      havingAddrN.focus();
      return false;
    }

    if (!havingAddrD.value) {
      alert(`${havingAddrD.title}의 값이 없습니다.`);
      havingAddrD.focus();
      return false;
    }
  }

  if (!funds.value) {
    alert(`${funds.title}의 값이 없습니다.`);
    funds.focus();
    return false;
  }

  // 동의
  if (!utilizationTerms.checked) {
    alert(`${utilizationTerms.title}에 동의하지 않았습니다.`);
    utilizationTerms.focus();
    return false;
  }

  return true;

}
