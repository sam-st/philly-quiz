var startButton = document.getElementById("start");
var questionBox = document.getElementById("question-box");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var timeEl = document.querySelector(".time");
var containerEl = document.querySelector(".container");
var inputBox = document.getElementById("input");
var subButton = document.getElementById("submit-button");


var secondsLeft = 30;



startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    questionBox.classList.remove("hide");
    timeEl.textContent = "Time remaining: " + secondsLeft;
    countdown();
    getQuestion();
}


var timerInterval;
function countdown() {
    timerInterval = setInterval(function () {
        secondsLeft--;

        if (secondsLeft <= 0) {
            secondsLeft = 0;
            timeEl.textContent = "Time remaining: " + secondsLeft;
            clearInterval(timerInterval);
            //end game
            gameOver();
        }
        else {
            timeEl.textContent = "Time remaining: " + secondsLeft;
        }
    }, 1000);
}

var questionIndex = 0;
function getQuestion() {
    //had a for loop originally to iterate through the questions but it wasnt waiting for a click
    if (questionIndex < questions.length) {
        questionEl.textContent = questions[questionIndex].question;

        var answers = questions[questionIndex].answers

        //clear the buttons and iterate the questions array?
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
                    if (questionIndex >= questions.length) {
                        gameOver();
                    }
                    getQuestion();
                });
            })(answers[i]); //had to look this one up: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
            
        }
    }
}

function handleChoice(choice) {
    //TODO: see if the choice is correct
    if (!choice.correct) {
        secondsLeft = secondsLeft - 10;
    }
}

function gameOver() {
    clearInterval(timerInterval);
    if(secondsLeft < 0){
        secondsLeft = 0;
    }

    //couldnt figure out how to update the countdown function after the game ended so added this line to update the text content with the actual secondsLeft
    timeEl.textContent = "Time remaining: " + secondsLeft; //might delete and change the whole screen to a different one.

    //clear screen and make new setup to display the scores
    questionBox.classList.add("hide");
    answersEl.classList.add("hide");

    //name of the score should be initials
    
    inputBox.classList.remove("hide");

    //make a submit button, store value in a variable, and clear screen on click
    subButton.classList.remove("hide");
    

    subButton.addEventListener("click", function(){
        handleSubmit(inputBox.value);
    });

    
}

function handleSubmit(initials){
    // set the score in the local storage
    localStorage.setItem(initials, secondsLeft);
    var score = localStorage.getItem(initials);

    inputBox.classList.add("hide");
    subButton.classList.add("hide");
    
    sortScores(score);
}

function sortScores(score){
    console.log(score);
    //JSON to turn the key and value into an object?
    // if its higher than the previous score store it as the highscore
    // sort the scores accordingly
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
//when all questions answered, or time runs out time = score ------

//store score in local storage
//display highscores

