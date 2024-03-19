function fetchDataFromJSON(url, pageNumber, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
              const data = JSON.parse(xhr.responseText);
              const filteredData = data.filter(item => item.page === pageNumber);
              callback(null, filteredData);
          } else {
              callback(xhr.statusText, null);
          }
      }
  };
  xhr.send();
}

function createQuestionElement(question) {
  const li = document.createElement("li");
  const button = document.createElement("button");
  const qIcon = document.createElement("div");
  const qTextContainer = document.createElement("div");
  const qText = document.createElement("p");

  qIcon.textContent = "Q";
  qIcon.className = "qIcon";
  qText.textContent = question;
  qText.className = "qText";

  qTextContainer.appendChild(qText);
  button.appendChild(qIcon);
  button.appendChild(qTextContainer);
  li.appendChild(button);

  return li;
}

function createAnswerElement(answer) {
  const answerElement = document.createElement("div");
  const aIcon = document.createElement("div");
  const aTextContainer = document.createElement("div");
  const aText = document.createElement("p");

  aIcon.textContent = "A";
  aIcon.className = "aIcon";
  aText.innerHTML = answer;
  aText.className = "aText";

  answerElement.className = "answer";
  aTextContainer.appendChild(aText);
  answerElement.appendChild(aIcon);
  answerElement.appendChild(aTextContainer);

  return answerElement;
}

// 클릭 이벤트
function toggleAnswerVisibility(button) {
  const parentButtons = button.parentElement.parentElement.querySelectorAll('button.on');
  parentButtons.forEach(function(parentButton) {
      parentButton.classList.remove('on');
      const parentAnswerElement = parentButton.parentElement.querySelector('.answer');
      parentAnswerElement.style.display = 'none';
  });

  button.classList.toggle('on');
  const answerElement = button.parentElement.querySelector('.answer');
  if (button.classList.contains('on')) {
      answerElement.style.display = 'flex';
  } else {
      answerElement.style.display = 'none';
  }
}




function addQuestionsAndAnswersToDOM(data) {
  const qaList = document.getElementById("qaList");

  data.forEach(function (item) {
      const questionElement = createQuestionElement(item.Q);
      const answerElement = createAnswerElement(item.A);

      questionElement.appendChild(answerElement);
      qaList.appendChild(questionElement);

      questionElement.querySelector("button").addEventListener("click", function () {
          toggleAnswerVisibility(this);
      });
  });
}

// main
window.onload = function () {
  const jsonFilePath = "qna.json";
  const pageNumber = parseInt(new URLSearchParams(window.location.search).get('pg')) || 1;

  fetchDataFromJSON(jsonFilePath, pageNumber, function (error, data) {
      if (error) {
          console.error("Error fetching data:", error);
      } else {
          addQuestionsAndAnswersToDOM(data);
      }
  });
};
