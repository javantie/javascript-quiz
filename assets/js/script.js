var startButtonEL = document.getElementById("start-btn");
var ContainerEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-btn");
var introEl = document.getElementById("intro");
var shuffledQuestions = "";
var currentQuestionIndex = 0;
var endGameEl = document.getElementById("end-game");
var score;
var finalScoreEl = document.getElementById("final-score");
var answerPopUpEl = document.getElementById("ans-popup");
var timerEl = document.getElementById("countdown");
var timeUpEl = document.getElementById("time-up");
var playerName = document.getElementById("name-of-player");
var submitButtonEl = document.getElementById("submit-btn");
var playerStatsEl = document.getElementById("player-stats");
var scoreDataEl = document.getElementById("scoredata");
var goBackButtonEl = document.getElementById("return-btn");
var clearScoreButtonEl = document.getElementById("clear-score");

//Array with list of questions for game.
var questions = [
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: [
      { text: "Storing numbers, dates, or other values ", correct: true },
      { text: "Varying randomly", correct: false },
      { text: "Causing high-school algebra flashback", correct: false },
      { text: "None of the above", correct: false },
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
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: [
      { text: "_first_and_last_names", correct: false },
      { text: "FirstAndLast", correct: false },
      { text: "None of the above", correct: false },
      { text: " 2names", correct: true },
    ],
  },
  {
    question: " Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: " <js>", correct: false },
      { text: "<scripting>", correct: false },
      { text: " <javascript>", correct: false },
      { text: "  <script>", correct: true },
    ],
  },
  {
    question:
      " Which of the following is not considered a JavaScript operator?",
    answers: [
      { text: " new", correct: false },
      { text: "this", correct: true },
      { text: " delete", correct: false },
      { text: "   typeof", correct: false },
    ],
  },
  {
    question:
      "  Using _______ statement is how you test for a specific condition",
    answers: [
      { text: "Select", correct: false },
      { text: "Switch", correct: false },
      { text: "If", correct: true },
      { text: "For", correct: false },
    ],
  },
  {
    question: "What is the correct JavaScript syntax to write Hello 'World'",
    answers: [
      { text: " System.out.println 'Hello World'", correct: false },
      { text: "Swi println 'Hello World'", correct: false },
      { text: " response.write 'Hello World'", correct: false },
      { text: "document.write 'Hello World'", correct: true },
    ],
  },
];

//Funtion to start game
var startGame = function () {
  console.log("Started Game");
  startButtonEL.classList.add("hide");
  introEl.classList.add("hide");
  ContainerEl.classList.remove("hide");
  questionEl.textContent = questions[currentQuestionIndex].question;
  createAnswerBtn();
  countDown();
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
  //Verification statemant to check if selected answer is true.
  if (this.getAttribute("id") === "true") {
    //console.log("Correct!");
    answerPopUpEl.classList.remove("hide");
    answerPopUpEl.textContent = "Correct! ✔️";
    //score = score + 10;
  } else {
    //console.log("Incorrect!");
    answerPopUpEl.classList.remove("hide");
    answerPopUpEl.textContent = "Wrong! ❌";
    timeLeft = timeLeft - 15;
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

var timeLeft = questions.length * 15;
var timeInterval;

var countDown = function () {
  timeInterval = setInterval(function () {
    if (timeLeft > 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else if (timeLeft === 1) {
      timerEl.textContent = "Time: " + timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = "Time: 0";
      alert("Time is up!");
      clearInterval(timeInterval);
      endGame();
    }
  }, 1000);
};

//Code for the end of the game
var endGame = function () {
  score = timeLeft;
  clearInterval(timeInterval);
  console.log(timeLeft);
  ContainerEl.classList.add("hide");
  endGameEl.classList.remove("hide");
  finalScoreEl.innerHTML = "Your Final Score is " + score;
};

var showHighScore = function () {
  endGameEl.classList.add("hide");
  playerStatsEl.classList.remove("hide");
  var PlayerName = localStorage.getItem("playerName");
  var score = localStorage.getItem("score");
  if (PlayerName === null || score === null) {
    return;
  }
  scoreDataEl.textContent = PlayerName + ": " + " " + score + " points!";
};


var saveData = function (event) {
  event.preventDefault();
  var playerName = document.getElementById("name-of-player").value;
  var highScore= JSON.parse(localStorage.getItem("highscore")) || [];
  var newScore = {
    playerName: playerName,
    score: score
  };

  if (playerName === "") {
    alert("Name cannot be blank");
  } else {
    // Save email and password to localStorage using `setItem()`
    highScore.push(newScore);
    console.log(highScore)
    localStorage.setItem("highscore", JSON.stringify(highScore))
     localStorage.setItem("playerName", playerName);
    localStorage.setItem("score", score);
    showHighScore();
  }
};

//Function to reset the game
var reStart = function () {
  location.reload();
};

//Event Listeners
submitButtonEl.addEventListener("click", saveData);
startButtonEL.addEventListener("click", startGame);
goBackButtonEl.addEventListener("click", reStart);
