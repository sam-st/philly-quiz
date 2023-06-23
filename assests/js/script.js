var startButton = document.getElementById("start");
var questionBox = document.getElementById("question-box");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var timeEl = document.querySelector(".time");

var secondsLeft = 60;



startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    questionBox.classList.remove("hide");
    timeEl.textContent = "Time remaining: " + secondsLeft;
    countdown();
    getQuestion();
}

function countdown() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time remaining: " + secondsLeft;

        if (secondsLeft <= 0) {
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            //TODO: 
        }

    }, 1000);
}

var questionIndex = 0;
function getQuestion() {
    questionEl.textContent = questions[questionIndex].question;
    if (questionIndex >= questions.length) {
        gameOver();
    }
    var answers = questions[questionIndex].answers

    //TODO: clear the buttons and iterate the questions array?
    answersEl.innerHTML = "";

    for (i = 0; i < answers.length; i++) {
        var answerButton = document.createElement("button");
        answerButton.classList.add("button");
        answerButton.textContent = answers[i].ans;
        answersEl.append(answerButton);
        (function (choice) {
            answerButton.addEventListener("click", function () {
                handleChoice(choice);
                questionIndex++;
                getQuestion();
            });
        })(answers[i]); //had to look this one up: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
    }
}

function handleChoice(choice) {
    //TODO: see if the choice is correct
    if (choice.correct) {
        console.log("chose correctly")
    }
    else {
        secondsLeft = secondsLeft - 10;
        console.log("something else happened");
    }

    
}

function gameOver(){
    
}

//make an array that stores objects for each question and answer
var questions = [
    {//object for question 1
        question: "Where is Philadelphia?",
        answers: [
            { ans: "Pennsylvania", correct: true },
            { ans: "New York", correct: false },
            { ans: "New Jersey", correct: false },
            { ans: "Ohio", correct: false }
        ]
    },

    {//object for question 2
        question: "What food is often associated with Philadelphia?",
        answers: [
            { ans: "Burgers", correct: false },
            { ans: "Fries", correct: false },
            { ans: "Tacos", correct: false },
            { ans: "Cheesesteaks", correct: true }
        ]
    },

    {//object for question 3 
        question: "What famous bell is kept in Philadelphia?",
        answers: [
            { ans: "Legendary Bell", correct: false },
            { ans: "Likable Bell", correct: false },
            { ans: "Liberty Bell", correct: true },
            { ans: "Loyalty Bell", correct: false }
        ]
    },

    {//object for question 4
        question: "Who was a very notable historic Philadelphia Resident?",
        answers: [
            { ans: "George Washington", correct: false },
            { ans: "Abe Lincoln", correct: false },
            { ans: "Ben Franklin", correct: true },
            { ans: "John Adams", correct: false }
        ]
    },

    {//object for question 5
        question: "What attraction was ther first of its kind in America?",
        answers: [
            { ans: "Philadelphia Art Museum", correct: false },
            { ans: "Philadelphia Zoo", correct: true },
            { ans: "Fairmount Park", correct: false },
            { ans: "Disney World", correct: false }
        ]
    },
]
//start game -----------
//start a countdown -----------
//have an array with objects (questions and answers)----------------
//create buttons with the answers on them -----------
//check to see if user answer is correct -----
//if wrong, subtract time -------



//when all questions answered, or time runs out time = score
//store score in local storage
//display highscores