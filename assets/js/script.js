// DOM ELEMENTS
var startCard = document.querySelector('#starting-card');
var questionCard = document.querySelector('#question-card')
var timeScore = document.getElementById('timer');
var startButtonEl = document.querySelector("#start");

// Global Variables
var timeLeft = 60;
var currentQues = 0


function startTimer() {
    timeSet = setInterval(function () {
        timeLeft -= 1
        if (timeLeft <= 0) {
            clearInterval(timeSet);
        }
        console.log(timeLeft)
    }, 1000)
}
// startTimer()

var start = function () {
    console.log(questions)
    startCard.style.display = 'none'
    startTimer()
}




startButtonEl.addEventListener("click", start)