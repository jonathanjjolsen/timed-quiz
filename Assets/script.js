//Declared variables and DOM elements
let questionEl = document.getElementById("header");
let answersEl = document.getElementById("answers");
let questionNumber;
let start = document.getElementById("start");
let score = 0;

//Start Quiz Logic
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

//Object to hold questions and answers
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


//Function to continue populating new questions and answers
function getQuestion() {
  renderQuestion();
  console.log(questionNumber) 
}

function renderQuestion() {
  let currentQuestion = questions[questionNumber];
  questionEl.textContent = currentQuestion.question;
  let options = currentQuestion.options;
  answersEl.innerHTML = "";
  for (i = 0; i < options.length; i++) {
    //Create button element
    let buttonEl = document.createElement("button");

    //Add text to button element
    buttonEl.textContent = options[i].answer;
    buttonEl.setAttribute("data-index", i);
    buttonEl.classList.add("button");
    //Add new buttons to page
    answersEl.append(buttonEl);
  }
}

//Logic for Quiz Timer
let timerEl = document.getElementById('timer')
let timeLeft = 45;
function timer() {
  

  let timeInvertval = setInterval(function () {
    if (timeLeft < 0 || questionNumber > questions.length - 1) {
      timerEl.textContent = "";
      clearInterval(timeInvertval);
      displayScore();
    } else if (timeLeft > -1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    }
  }, 1000);
}

answersEl.addEventListener("click", function (e) {
  const element = e.target;

  if (!element.matches("button")) return;
  let currentQuestion = questions[questionNumber];
  const index = element.dataset.index;
  const correct = currentQuestion.options[index].correct;
  
  //Logic to determine if points are added or time is subtracted
  if (correct) {
    score = score + 10;
  } else {
    timeLeft = timeLeft - 10;
  }
  questionNumber++;
  if(questionNumber > questions.length-1) {
    displayScore();
  }else{
    getQuestion();
  }
});


let userScore = document.getElementById("userScore")

//Function to display window of score recieved and take input for initials
function displayScore() {
  document.getElementById("submit").style.visibility = "visible";
  userScore.textContent = "Your final score is " + score + ".";
  let submitBtn = document.getElementById('submitBtn');
  let user = document.getElementById('initials');
  let finalScore = score;

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let initialsValue = user.value;
  console.log(initialsValue)
  let scores ={
    score: finalScore,
    name: initialsValue,
  }

  
  localStorage.setItem('highScores', JSON.stringify(scores));
  moveToScores();
  

  function moveToScores() {
    window.location.href="highscores.html";
  }

})
}


