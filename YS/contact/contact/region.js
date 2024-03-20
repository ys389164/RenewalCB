let regionInfo;

function fetchDataFromJSONAndCreateDOM() {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./region.json", true);
  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 200) {
      regionInfo = JSON.parse(xhr.responseText);
      createDOM();
    }
  };
}
function createDOM() {

  area1.addEventListener("change", function () {
    let selectedValue = area1.value;
    updateSecondSelect(selectedValue);
  });
}

function updateSecondSelect(selectedValue) {
    area2.innerHTML = "";

    // 선택된 지역 정보 가져오기
    let selectedRegion = regionInfo.find((e) => e.city === selectedValue);

    // 선택된 지역의 하위 지역 정보가 있는 경우에만 옵션 추가
    if (selectedRegion && Array.isArray(selectedRegion.sub)) {
      selectedRegion.sub.forEach(function (subRegion) {
        area2.innerHTML +=`<option value= '${subRegion}'>${subRegion}</option>`;
      });
    }
  }

fetchDataFromJSONAndCreateDOM();
