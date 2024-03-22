      let menus=[];
      let links;
      let upperMenu;
      let upLists;

      //메뉴바에 적용되는 함수
      function menuBar(){
        //카테고리 리스트에 마우스를 올리면 글씨가 변한다
        for(j=0;j<5;j++){//녹색, 상단 카테고리 글씨 변화
        menus[j]=document.getElementById("menu"+j);
        links=menus[j].children;
        for(i=0;i<links.length;i++){
          if(links[i].nodeType===1){
            links[i].addEventListener("mouseover",over);
            links[i].addEventListener("mouseout",out);
          }
        }
        };

        upperMenu=document.getElementById("topMenu");//하단 카테고리 글씨 변화
        upLists=upperMenu.children;
        for(i=0;i<upLists.length;i++){
          if(upLists[i].nodeType===1){
            upLists[i].addEventListener("mouseover", here);
            upLists[i].addEventListener("mouseout", bye);
          }
        };

      //아코디언 함수
      let upper=document.getElementById('topMenu');
      let lists=document.getElementById('listsCollection');
      upper.addEventListener("mouseover", open);
      upper.addEventListener("mouseout", fold);
      lists.addEventListener("mouseover", opencontinue);
      lists.addEventListener("mouseout", fold);
      

    };//여기까지가 menuBar 함수. 
    //아래는 menuBar에 들어가는 짧은 함수들.

      //이 두 개는 상위 카테고리 글씨 색 바꾸는 함수
      function here(){
        this.style.color="lightcyan";
      };
      function bye(){
        this.style.color="black";
      };

      //이 두 개가 하위 카테고리 글씨 색 바꾸는 함수
      function over(){
        this.style.color="teal";
        this.style.textDecoration="underline";
      };
      function out(){
        this.style.color="black";
        this.style.textDecoration="none";
      };

      //리스트 상자가 열렸다 닫히게 한다.
      function open(){ //열림
        let listbox=document.getElementById("listsCollection");
        
        listbox.style.display="block";
        listbox.style.height=listbox.scrollHeight+"px";
        listbox.style.transition="height 300ms ease-in-out";
        };
      function opencontinue(){//하위 카테고리 리스트 위에 있을 때는 열린 상태로 유지.
        let listbox=document.getElementById("listsCollection");
        
        listbox.style.display="block";
        listbox.style.height=listbox.scrollHeight+"px";
        listbox.style.removeProperty("transition");
      }
      function fold(){//범위를 벗어나면 닫힘.
        let listbox=document.getElementById("listsCollection");

        listbox.style.display="none";
        listbox.style.height=listbox.scrollHeight+"px";
        listbox.style.transition="height 300ms ease-in-out";
        };

