var startButtonEL = document.getElementById("start-btn");
var nextButtonEl = document.getElementById("next-btn");
var ContainerEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-btn");
var introEl = document.getElementById("intro");
var shuffledQuestions = "";
var currentQuestionIndex = 0;
var endGameEl = document.getElementById("end-game");
var score = 0;
var finalScoreEl = document.getElementById("final-score");
var answerPopUpEl = document.getElementById("ans-popup");
var timerEl = document.getElementById("countdown");
var timeUpEl = document.getElementById ("time-up");

//Array with list of questions for game.
var questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { text: "A Computer Language? ", correct: true },
      { text: "A funny name of apples", correct: false },
      { text: "An advance alien language", correct: false },
      { text: "A computer name", correct: false },
    ],
  },
  {
    question:
      "Which of the following is correct about features of JavaScript??",
    answers: [
      {
        text: "JavaScrip is a complementary to and intergrated with HTML",
        correct: false,
      },
      { text: "JavaScript is open and cross-platform.", correct: false },
      { text: "Both A and B.", correct: true },
      { text: "All of the above.", correct: false },
    ],
  },
  {
    question:
      "Which built-in method calls a function for each element in the array?",
    answers: [
      { text: "while() ", correct: false },
      { text: "loop()", correct: false },
      { text: "forEach()", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following function of String object returns the calling string value converted to lower case?",
    answers: [
      { text: "toLocaleLowerCase()", correct: false },
      { text: "toLowerCase()", correct: true },
      { text: "toString()", correct: false },
      { text: "substring()", correct: false },
    ],
  },
  {
    question:
      "Which of the following function of Array object returns a string representing the array and its elements?",
    answers: [
      { text: "toSource() ", correct: false },
      { text: "sort()", correct: false },
      { text: "splice()", correct: false },
      { text: "toString()", correct: true },
    ],
  },
];

//Funtion to start game
var startGame = function () {
  console.log("Started Game");
  startButtonEL.classList.add("hide");
  introEl.classList.add("hide");
  ContainerEl.classList.remove("hide");
  //nextButtonEl.classList.remove("hide");
  questionEl.textContent = questions[currentQuestionIndex].question;
  createAnswerBtn();
  //countDown();
};

//Funtion to create answer button on each new question.
var createAnswerBtn = function () {
  //clears inner HTML on each button.
  answerButtonEl.innerHTML = "";
  //For loop to run thorugh each array for each answer and create corresponding buttons for each.
  for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    var thisButton = document.createElement("BUTTON");
    thisButton.classList.add("btn");
    thisButton.textContent = questions[currentQuestionIndex].answers[i].text;
    if (questions[currentQuestionIndex].answers[i].correct) {
      thisButton.setAttribute("id", "true");
    }
    thisButton.addEventListener("click", showNextQuestion);
    answerButtonEl.append(thisButton);
  }
};

//Function to show the next question
var showNextQuestion = function () {
  console.log(this.getAttribute("id"));
  //Verification statemant to check if selected answer is true.
  if (this.getAttribute("id") === "true") {
    console.log("Correct!");
    answerPopUpEl.classList.remove("hide");
    answerPopUpEl.textContent = "Correct!";
    score = score + 10;
  } else {
    console.log("Incorrect!");
    answerPopUpEl.classList.remove("hide");
    answerPopUpEl.textContent = "Wrong!";
  }
  //Increment question index
  currentQuestionIndex++;
  //Statement to check if we are on the last question
  if (currentQuestionIndex < questions.length) {
    questionEl.textContent = questions[currentQuestionIndex].question;
    createAnswerBtn();
  } else {
    endGame();
  }
};

var countDown = function(){
  var timeLeft = 25;
  console.log(timeLeft)

  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } else {
      timerEl.textContent = '0';
      clearInterval(timeInterval);
      alert("Time is up!")
      endGame();
    }
  }, 1000);
}

//Code for the end of the game
var endGame = function () {
  console.log("end game!");
  ContainerEl.classList.add("hide");
  endGameEl.classList.remove("hide");
  //finalScoreEl.textContent += score;
  finalScoreEl.innerHTML = "Your Final Score is " + score;
  var resetButton = document.createElement("button");
  resetButton.setAttribute("class", "start-btn-btn");
  resetButton.textContent = "Restart";
  endGameEl.appendChild(resetButton);
  //resetButton.addEventListener("click", resetGame)
};


// var resetGame = function(){
// endGameEl.classList.add("hide")
// answerPopUpEl.classList.add("hide")
// startGame();

// }




//Event Listener for click to start game
startButtonEL.addEventListener("click", startGame,);
