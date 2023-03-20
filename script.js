//Front Screen Disappear On Click
let questionEl = document.getElementById('header');
let answersEl = document.getElementById('answers');
let questionNumber;
let start = document.getElementById('start');
let score = 0;


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
            {answer:'this', correct: false},
            {answer: 'Jonathan', correct: true},
            {answer: 'Jim', correct: false},
            {answer: 'Ashley', correct: false}
        ]
    },
     {
         question: "Whats the sky?",
         options: [
             {answer:'', correct: false},
             {answer: 'Jonathan', correct: true},
             {answer: 'Jim', correct: false},
             {answer: 'Ashley', correct: false}
         ]
     },
     {
         question: "Whats the rain?",
         options: [
             {answer:'this', correct: false},
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
/*console.log(questions[0].options[0].answer)*/
function getQuestion() {
    currentQuestion();
    
}

function currentQuestion() {
    questionEl.textContent = questions[questionNumber].question;
    let currentQuestion = questions[questionNumber]
    console.log(currentQuestion);
    let questionText = currentQuestion.question;
    let options = currentQuestion.options;
    for(i=0; i<options.length; i++) {
        //create button element
        let buttonEl = document.createElement('button')

        //add text to button element
        buttonEl.textContent = options[i].answer
        let correct = options[i].correct
        //add event listener to button element
        buttonEl.addEventListener('click', function(){
            console.log(correct)
            if(correct) {
                score = score + 10
                console.log("correct")
            }else {
                console.log("wrong")
            }
            
        })
        //append button element to answers list
        answersEl.append(buttonEl)
    }
}

function userClick() {

}

function buttons() {
    
}

//I need to check the value of the correct answer
//If correct, add points to score and move to next question.
//If incorrect, subtract time from time and move to next question.