//Front Screen Disappear On Click
let questionNumber


function startquiz() {
    document.getElementById('start').addEventListener("click", hide);
    getQuestion()
}

function hide() {
    document.getElementById('startingpage').style.visibility = 'hidden';
}

function getQuestion() {

}

function userChoice() {

}

const questions = [
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