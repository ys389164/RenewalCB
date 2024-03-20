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

function changeEmail() {
  selectEmail.addEventListener("change", function () {
    let selectedValue = selectEmail.value;
    inputEmail.innerHTML = "";
    inputEmail.value = selectedValue;
  });
}
changeEmail();

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
  if (!UserEmail.value) {
    alert(`${UserEmail.title}의 값이 없습니다.`);
    UserEmail.focus();
    return false;
  }
  if (!inputEmail.value) {
    alert(`${inputEmail.title}의 값이 없습니다.`);
    inputEmail.focus();
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
  // 매장 크기
  let Size = false;
  storeSize.forEach(function (e) {
    if (e.checked) {
      Size = true;
    }
  });
  if (!Size) {
    alert(`${storeSize[0].title}가 입력되지 않았습니다.`);
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
