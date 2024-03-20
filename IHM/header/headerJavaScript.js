let menus=[];//배열 쓰기 전에 반드시 초기화 먼저
      let links;//menus, links는 하위 리스트 색 바꾸기
      let upperMenu;
      let upLists;//upperMenu, upLists는 상위 카테고리 색 바꾸기

      function innerPage(){
        for(j=0;j<5;j++){
        menus[j]=document.getElementById("menu"+j);
        links=menus[j].children;
        for(i=0;i<links.length;i++){
          if(links[i].nodeType===1){
            links[i].addEventListener("mouseover",over);
            links[i].addEventListener("mouseout",out);
          }//조건문. 자식요소가 html 태그가 맞다면 이벤트 함수 적용
        }//반복문. menu[i]의 자식요소(li)들에게 일괄적으로 적용
        };//반복문. menu0부터 menu4까지 반복문으로 정의.

        upperMenu=document.getElementById("topMenu");//h2 ul을 가리킨다.
        upLists=upperMenu.children;//li들이다
        for(i=0;i<upLists.length;i++){//li의 개수만큼 반복
          if(upLists[i].nodeType===1){
            upLists[i].addEventListener("mouseover", here);
            upLists[i].addEventListener("mouseout", bye);
          }
        };
      };//여기까지가 innerPage 함수. 

      function over(){
        this.style.color="teal";
        this.style.textDecoration="underline";
      };
      function out(){
        this.style.color="black";
        this.style.textDecoration="none";
      };//여기까지, 이 두개가 하위 리스트 색 바꾸는 함수

      function here(){
        this.style.color="lightcyan";
      };
      function bye(){
        this.style.color="black";
      };//이 나머지 두개는 상위 카테고리 글씨 색 바꾸는 함수

