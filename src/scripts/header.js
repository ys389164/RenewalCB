let menus = [];
let links;
let upperMenu;
let upLists;

function menuBar() {
  //마우스를 갖다 대면 최상단 카테고리(녹색 바) 글씨 색을 바꾸는 함수.
  upperMenu = document.getElementById("topMenu");//h2 ul을 가리킨다.
  upLists = upperMenu.children;//li들이다
  for (let i = 0; i < upLists.length; i++) {//li의 개수만큼 반복
    if (upLists[i].nodeType === 1) {
      upLists[i].addEventListener("mouseover", topChange);
      upLists[i].addEventListener("mouseout", topOriginal);
    }
  };

  //아코디언 함수
  let upper = document.getElementById('topMenu');
  let lists = document.getElementById('listsCollection');
  upper.addEventListener("mouseover", upperOpen);
  upper.addEventListener("mouseout", fold);
  lists.addEventListener("mouseover", opencontinue);
  lists.addEventListener("mouseout", fold);


};//여기까지가 menuBar 함수. 



//이 두개는 최상단 카테고리 글씨 색 바꾸는 함수
function topChange() {
  this.style.color = "lightcyan";
};
function topOriginal() {
  this.style.color = "black";
};

//아코디언 함수+내려가 있는 리스트 박스에 마우스가 머무는 동안은 사라지지 않게 하는 함수.
function upperOpen() {
  let listbox = document.getElementById("listsCollection");

  listbox.style.display = "block";

  listbox.style.height = listbox.scrollHeight + "px";
  listbox.style.transition = "height 300ms ease-in-out";
};
function opencontinue() {
  let listbox = document.getElementById("listsCollection");

  listbox.style.display = "block";

  listbox.style.height = listbox.scrollHeight + "px";
  listbox.style.removeProperty("transition");
}
function fold() {
  let listbox = document.getElementById("listsCollection");

  listbox.style.display = "none";

  listbox.style.height = listbox.scrollHeight + "px";
  listbox.style.transition = "height 300ms ease-in-out";
};

window.addEventListener('load', (e)=>{
  menuBar();
})