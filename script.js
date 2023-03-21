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
            {answer:'Bob', correct: false},
            {answer: 'Jonathan', correct: true},
            {answer: 'Jim', correct: false},
            {answer: 'James', correct: false}
        ]
    },
     {
         question: "Whats color is the sky?",
         options: [
             {answer:'Green', correct: false},
             {answer: 'Blue', correct: true},
             {answer: 'Purple', correct: false},
             {answer: 'Yellow', correct: false}
         ]
     },
     {
         question: "What state number is Arizona?",
         options: [
             {answer:'15', correct: false},
             {answer: '48', correct: true},
             {answer: '37', correct: false},
             {answer: '1', correct: false}
         ]
     },
     {
         question: "How much does the average house cost?",
         options: [
             {answer:'300k', correct: false},
             {answer: 'Too much!', correct: true},
             {answer: '200k', correct: false},
             {answer: '700k', correct: false}
         ]
     },
     {
         question: "What is the meaning of life?",
         options: [
             {answer:'Who knows?', correct: false},
             {answer: '42', correct: true},
             {answer: 'Happiness', correct: false},
             {answer: 'Success', correct: false}
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
    //let questionText = currentQuestion.question;
    let options = currentQuestion.options;
    for(i = 0; i < options.length; i++) {
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
            questionNumber++;
           
            getQuestion(); 
        })
        //append button element to answers list
        answersEl.append(buttonEl)
    }
}

/*function currentQuestion() {
    questionEl.textContent = questions[questionNumber].question;
    let currentQuestion = questions[questionNumber]
    console.log(currentQuestion);
    let options = currentQuestion.options;
    for(i = 0; i < options.length; i++) {
        //create button element
        
        //add text to button element
        answersEl.innerText = options[i].answer
       
       
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
            
            questionNumber++;
           
            getQuestion(); 
        })
        //append button element to answers list
        
    }
}*/


//I need to check the value of the correct answer
//If correct, add points to score and move to next question.
//If incorrect, subtract time from time and move to next question.