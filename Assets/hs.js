
//JS file for the highscores page
let retrieve = localStorage.getItem('highScores')
let scores = JSON.parse(retrieve);

let scoresList = document.getElementById('list');

//Logs scores to the screen
scoresList.textContent += scores.name + " - ";
scoresList.textContent += scores.score;


console.log(scores.length)
console.log(scores)


let backBtn = document.getElementById('backBtn')
let clearBtn = document.getElementById('clearBtn')

//Button to return to main quiz page
backBtn.addEventListener('click', e => {
    window.location.href="index.html";
})
//Button to clear the local storage
clearBtn.addEventListener('click', e => {
    localStorage.clear();
})

/*saveScores();

  function saveScores(){
    let scoreHistory = JSON.parse(localStorage.getItem('highscores'));
    scoreHistory.push(scores);
    localStorage.setItem('highScores', JSON.stringify(scoreHistory));
    }*/