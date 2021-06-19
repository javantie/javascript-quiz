var scoreDisplayEl = document.getElementById("score-display")
var deleteScoreEl = document.getElementById("delete-score")
var backBtnEL= document.getElementById("back-btn")
var scoreLink = document.getElementById("score-link")

var namePlayer = localStorage.getItem("playerName")
var score = localStorage.getItem("score")


var getData = function () {
    var namePlayer = localStorage.getItem("playerName")
    var score = localStorage.getItem("score")
    if (namePlayer === null || score === null) {
      return;
    }
    scoreDisplayEl.textContent = namePlayer + ": " + " " + score;
    console.log("This button works")
    console.log(namePlayer)
    console.log(score)
};
getData();
var reSet = function () {
    location.reload();
};
var removeScore = function () {
    localStorage.clear();
  };


deleteScoreEl.addEventListener("click", removeScore)
backBtnEL.addEventListener("click", reSet)
