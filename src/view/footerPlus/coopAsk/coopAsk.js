//회사명, 이메일, 제목, 내용 중 하나라도 입력하지 않으면 경고창 나오는 함수.
document.addEventListener('DOMContentLoaded', function(){
    let complete=document.getElementById('submitBtn');

complete.addEventListener("click", (e)=>{
    if(askCheck()){
        alert("등록이 완료되었습니다.");
        return;
    }
});

function askCheck(){
    let select=document.getElementById('strawberry');
    let comp=document.getElementById('company');
    let mailOne=document.getElementById('email1');
    let mailTwo=document.getElementById('email2');
    let firstTitle=document.getElementById('title');
    let secondContent=document.getElementById('content');

    let letter=document.getElementById('userType');
    let writtenCode=letter.value;//내가 입력한 숫자
    let password=document.getElementById('sixNum');
    let Check=password.textContent;//임의로 나온 숫자

    if(select.value==="none"){
        alert('어떤 일로 문의하셨는지 선택해주세요');
        return false;
    }
    if(!comp.value){
        alert('회사명을 입력해 주세요.');   
        return false;
    }
    if(!mailOne.value){
        alert('이메일을 입력해 주세요.');   
        return false;
    }
    if(!mailTwo.value){
        alert('이메일을 입력해 주세요.');   
        return false;
    }
    if(!firstTitle.value){
        alert('제목을 입력해 주세요.'); 
        return false;
    }
    if(!secondContent.value){
        alert('내용을 입력해 주세요.'); 
        return false;
    }
    if(writtenCode===""){
        alert('자동등록방지 번호를 입력해 주세요');
        return false;
    }else if(writtenCode.length<6||writtenCode!==Check){
        alert('번호가 틀렸습니다.');
        return false;
    }
    return true;
};  
        });

//자동등록방지용 숫자. 무작위 숫자 6개 출력.
document.addEventListener('DOMContentLoaded', function(){
    function finalCheck(){
        let codeNumbers=[];
    for(i=0;i<6;i++){
        let code=Math.floor(Math.random()*9+1);
        codeNumbers.push(code);
    }
    return codeNumbers.join('');
    }
        let sixNum=document.getElementById('sixNum');
        let Check=finalCheck();
        sixNum.textContent=Check;
    });

//셀렉트로 메일 형식 선택하면 텍스트에 입력되고 메일로 간주되는 함수(미완)

document.addEventListener('DOMContentLoaded', function(){
    let mailSpace=document.getElementById('email2');//이메일이 표시되는 부분
    let mailSelect=document.getElementById('emailChoose');//셀렉트
mailSelect.addEventListener("change",function(){
    mailSpace.textContent=mailSelect.value;
    mailSpace.value=mailSelect.value;
})
   
    });




    
//#fileRoute 안에 내가 선택한 파일 경로가 출력된다.
function DIYfileBtn(){
    let DIYBtn=document.getElementById('fileBtn');//원래 input file. 여기 이름이 표시됨
    let DIYText=document.getElementById('fileName');//여기에 표시하고 싶다.

    DIYBtn.addEventListener("change",function(){
        let filefile=DIYBtn.files[0].name;
        DIYText.textContent=filefile;
    });
    }
    document.addEventListener('DOMContentLoaded', function(){
        DIYfileBtn();
    });