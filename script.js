//Front Screen Disappear On Click
let questionEl = document.getElementById('header');
let choiceEl = document.getElementById('button');
let questionNumber;
let start = document.getElementById('start');
let score;


start.addEventListener('click', startquiz);

function startquiz() {
    hide();
    questionNumber = 0;
    getQuestion();
}

function hide() {
    document.getElementById('startingpage').style.visibility = 'hidden';
}

let questions = [
    {
        question: "Whats my name?",
        options: [
            {answer:'Bob', correct: false},
            {answer: 'Jonathan', correct: true},
            {answer: 'Jim', correct: false},
            {answer: 'Ashley', correct: false}
        ]
    },
     {
         question: "Whats the sky?",
         options: [
             {answer:'Bob', correct: false},
             {answer: 'Jonathan', correct: true},
             {answer: 'Jim', correct: false},
             {answer: 'Ashley', correct: false}
         ]
     },
     {
         question: "Whats the rain?",
         options: [
             {answer:'Bob', correct: false},
             {answer: 'Jonathan', correct: true},
             {answer: 'Jim', correct: false},
             {answer: 'Ashley', correct: false}
         ]
     },
     {
         question: "Whats my computer?",
         options: [
             {answer:'Bob', correct: false},
             {answer: 'Jonathan', correct: true},
             {answer: 'Jim', correct: false},
             {answer: 'Ashley', correct: false}
         ]
     },
     {
         question: "Whats the point of life?",
         options: [
             {answer:'Bob', correct: false},
             {answer: 'Jonathan', correct: true},
             {answer: 'Jim', correct: false},
             {answer: 'Ashley', correct: false}
         ]
     },
    
]

function getQuestion() {
    currentQuestion([questionNumber]);
    
}

function currentQuestion() {
    questionEl.textContent = questions[questionNumber].question;
}

function userClick() {

}


//I need to check the value of the correct answer
//If correct, add points to score and move to next question.
//If incorrect, subtract time from time and move to next question.