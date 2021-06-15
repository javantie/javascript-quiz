var startButtonEL = document.getElementById("start-btn");
var nextButtonEl = document.getElementById("next-btn");
var ContainerEl = document.getElementById("container");
var questionEl = document.getElementById("question");
var answerButtonEl = document.getElementById("answer-btn");
var introEl = document.getElementById("intro");
var shuffledQuestions = "";
var currentQuestionIndex = 0;

var questions = [
  {
    question: "What is JavaScript?",
    answers: [
      { text: "A Computer Language? ", correct: true },
      { text: "A funny name of apples", correct: false },
      { text: "An advance alien language", correct: false },
      { text: "A computer name", correct: false },
    ],
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
    question:
      "Which built-in method calls a function for each element in the array?",
    answers: [
      { text: "while() ", correct: false },
      { text: "loop()", correct: false },
      { text: "forEach()", correct: true },
      { text: "None of the above", correct: false },
    ],
    question:
      "Which of the following function of String object returns the calling string value converted to lower case?",
    answers: [
      { text: "toLocaleLowerCase()", correct: false },
      { text: "toLowerCase()", correct: true },
      { text: "toString()", correct: false },
      { text: "substring()", correct: false },
    ],
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
  nextButtonEl.classList.remove("hide");
  questionEl.textContent = questions[currentQuestionIndex].question;
  createAnswerBtn();
};



//Funtion to create answer button on each new question.
var createAnswerBtn = function () {
  //clears inner HTML on each button.
  answerButtonEl.innerHTML = "";
  //For loop to run thorugh each answer for each question and create corrisponding buttons
  for (var i = 0; i < questions[currentQuestionIndex].answers.length; i++) {
    var thisButton = document.createElement("BUTTON");
    thisButton.classList.add("btn");
    thisButton.textContent = questions[currentQuestionIndex].answers[i].text;
    answerButtonEl.append(thisButton);
  }
};

var showNextQuestion = function (question) {};

var selectAnswer = function () {};
//Event Listener for click to start game
startButtonEL.addEventListener("click", startGame);
