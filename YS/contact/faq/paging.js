let qaInfo;

function onClickEvt(e) {
    e.classList.toggle('on');
}

function fetchDataFromJSON() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", './qna.json', true);
    xhr.send();
    xhr.onload = () => {
        qaInfo = JSON.parse(xhr.response);
        createDOM(1);
    }
}

fetchDataFromJSON()

function createDOM(e){
    let filterInfo = qaInfo.filter((item) => {return item.page === e});

    const qaList = document.getElementById('qaList');

    qaList.innerHTML='';

    filterInfo.forEach(item => {
        qaList.innerHTML +=`
        <li>
        <button type="button" onclick="onClickEvt(this)">
          <div class="qIcon">Q</div>
          <div>
            <p class="qText">
              ${item.Q}
            </p>
          </div>
        </button>
        <div class="answer">
          <div class="answerWrap">
            <div class="aIcon">A</div>
            <div>
              <div class="aText">
                ${item.A}
              </div>
            </div>
          </div>
        </div>
        </li>`
    });

    const aTag = document.createElement('a');
    aTag.setAttribute('href', '#');
    aTag.click();
}

