// DOM ELEMENTS
var startCard = document.querySelector('#starting-card');
var questionCard = document.querySelector('#question-card')
var endCard = document.querySelector('#ending-card')
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
            endQuiz()
            currentQues = 0;
        }
        console.log(timeLeft)
        timeScore.innerHTML = timeLeft
    }, 1000)
}


function start() {
    console.log(questions)
    startCard.style.display = 'none'
    startTimer()
    quizQuestions()
}

function quizQuestions() {
    questionCard.innerHTML = ''

    var titleText = document.createElement("h2")
    titleText.textContent = questions[currentQues].title
    questionCard.append(titleText)

    var answerOne = document.createElement("button")
    answerOne.classList.add("btn-danger", "btn", "btnA1")
    answerOne.textContent = questions[currentQues].choices[0]
    questionCard.append(answerOne)

    var answerTwo = document.createElement("button")
    answerTwo.classList.add("btn-danger", "btn", "btnA2")
    answerTwo.textContent = questions[currentQues].choices[1]
    questionCard.append(answerTwo)

    var answerThree = document.createElement("button")
    answerThree.classList.add("btn-danger", "btn", "btnA3")
    answerThree.textContent = questions[currentQues].choices[2]
    questionCard.append(answerThree)

    var answerThree = document.createElement("button")
    answerThree.classList.add("btn-danger", "btn", "btnA4")
    answerThree.textContent = questions[currentQues].choices[3]
    questionCard.append(answerThree)

    document.querySelector(".btnA1").addEventListener("click", checkAnswer)
    document.querySelector(".btnA2").addEventListener("click", checkAnswer)
    document.querySelector(".btnA3").addEventListener("click", checkAnswer)
    document.querySelector(".btnA4").addEventListener("click", checkAnswer)
}

startButtonEl.addEventListener("click", start)

function checkAnswer() {
    var selectedAnser = this.textContent
    var correctAnswer = questions[currentQues].answer
    if (selectedAnser === correctAnswer) {
        console.log('correct')
    } else {
        timeLeft -= 10
    }
    currentQues += 1
    quizQuestions();
}

function endQuiz() {
    questionCard.style.display = 'none'
}