var startButton = document.getElementById("start");
var questionBox = document.getElementById("question-box");

startButton.addEventListener("click", startGame);

function startGame(){
console.log("game start");
startButton.classList.add("hide");
questionBox.classList.remove("hide");
}

//start game 
//start a countdown
//have an array with objects (questions and answers)
//create buttons with the answers on them
//check to see if user answer is correct
//if wrong, subtract time
//when all questions answered, or time runs out time = score
//store score in local storage
//display highscores