//Front Screen Disappear On Click
let questionEl = document.getElementById("header");
let answersEl = document.getElementById("answers");
let questionNumber;
let start = document.getElementById("start");
let score = 0;

start.addEventListener("click", startquiz);

function startquiz() {
  hide();
  questionNumber = 0;
  getQuestion();
  timer();
}

function hide() {
  document.getElementById("startingpage").style.visibility = "hidden";
}

let questions = [
  {
    question: "Whats my name?",
    options: [
      { answer: "Bob", correct: false },
      { answer: "Jonathan", correct: true },
      { answer: "Jim", correct: false },
      { answer: "James", correct: false },
    ],
  },
  {
    question: "Whats color is the sky?",
    options: [
      { answer: "Green", correct: false },
      { answer: "Blue", correct: true },
      { answer: "Purple", correct: false },
      { answer: "Yellow", correct: false },
    ],
  },
  {
    question: "What state number is Arizona?",
    options: [
      { answer: "15", correct: false },
      { answer: "48", correct: true },
      { answer: "37", correct: false },
      { answer: "1", correct: false },
    ],
  },
  {
    question: "How much does the average house cost?",
    options: [
      { answer: "300k", correct: false },
      { answer: "Too much!", correct: true },
      { answer: "200k", correct: false },
      { answer: "700k", correct: false },
    ],
  },
  {
    question: "What is the meaning of life?",
    options: [
      { answer: "Who knows?", correct: false },
      { answer: "42", correct: true },
      { answer: "Happiness", correct: false },
      { answer: "Success", correct: false },
    ],
  },
];



function getQuestion() {
  renderQuestion();
}

function renderQuestion() {
  let currentQuestion = questions[questionNumber];
  questionEl.textContent = currentQuestion.question;

  //let questionText = currentQuestion.question;
  let options = currentQuestion.options;
  answersEl.innerHTML = "";
  for (i = 0; i < options.length; i++) {
    //create button element
    let buttonEl = document.createElement("button");

    //add text to button element
    buttonEl.textContent = options[i].answer;
    buttonEl.setAttribute("data-index", i);
    buttonEl.classList.add("button");
    answersEl.append(buttonEl);
  }
}

let timerEl = document.getElementById('timer')
let timeLeft = 60;
function timer() {
  

  let timeInvertval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      clearInterval(timeInvertval);
    }
  }, 1000);
}

answersEl.addEventListener("click", function (e) {
  const element = e.target;

  if (!element.matches("button")) return;
  let currentQuestion = questions[questionNumber];
  const index = element.dataset.index;
  console.log(index);
  const correct = currentQuestion.options[index].correct;

  console.log(correct);

  if (correct) {
    score = score + 10;
    console.log("correct");
  } else {
    console.log("wrong");
    timeLeft = timeLeft - 10;
  }
  questionNumber++;
  console.log(score);
  getQuestion();
});

