// DOM ELEMENTS
var startCard = document.querySelector('#starting-card');
var questionCard = document.querySelector('#question-card')
var timeScore = document.getElementById('timer');
var startButtonEl = document.querySelector("#start");

// Global Variables
var timeLeft = 60;
var currentQues = 4

function startTimer() {
    timeSet = setInterval(function () {
        timeLeft -= 1
        if (timeLeft <= 0) {
            clearInterval(timeSet);
            startCard.style.display = 'block'
        } 
        console.log(timeLeft)
        timeScore.innerHTML = timeLeft
    }, 1000)
}

var start = function () {
    console.log(questions)
    startCard.style.display = 'none'
    startTimer()
    quizQuestions()
}

function quizQuestions() {
    questionCard.innerHTML

    var titleText = document.createElement("h2")
    titleText.textContent = questions[currentQues].title
    questionCard.append(titleText)

    var answerOne = document.createElement("button")
    answerOne.classList.add("btn-danger","btn", "btnA1")
    answerOne.textContent = questions[currentQues].choices[0]
    questionCard.append(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.classList.add("btn-danger","btn", "btnA2")
    answerTwo.textContent = questions[currentQues].choices[1]
    questionCard.append(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.classList.add("btn-danger","btn", "btnA3")
    answerThree.textContent = questions[currentQues].choices[2]
    questionCard.append(answerThree)

    var answerThree = document.createElement("button")
    answerThree.classList.add("btn-danger","btn", "btnA4")
    answerThree.textContent = questions[currentQues].choices[3]
    questionCard.append(answerThree)
}


startButtonEl.addEventListener("click", start)