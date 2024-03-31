let upBtn;
let myScroll;

let pageHeight;
let windowHeight;
let userPercent;

//누르면 맨 위로 올라가게 하는 함수
function goUp(){
let a=document.documentElement.scrollLeft;
window.scrollTo(a,0);
};

//4분의 1 쯤 스크롤을 내렸을 때 아이콘이 나타나는 함수
function revealUp(){
upBtn=document.getElementById('goUp');
if(percentage()>=25){
  upBtn.style.display="block";
  upBtn.style.transitionTimingFunction="ease-in-out";
  }else{
  upBtn.style.display="none";
  }
};

//revealUp 함수 안에 들어가는 함수. 현재 위치를 %로 바꾼다.
function percentage(){
  pageHeight=document.documentElement.scrollHeight;
  windowHeight=document.documentElement.clientHeight;
  myScroll=document.documentElement.scrollTop;
  userPercent=myScroll/(pageHeight-windowHeight)*100;
  return userPercent;
};

window.addEventListener("scroll", revealUp);