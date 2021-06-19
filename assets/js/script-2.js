var scoreDisplayEl = document.getElementById("score-display");
var deleteScoreEl = document.getElementById("delete-score");
var backBtnEL = document.getElementById("back-btn");
var scoreLink = document.getElementById("score-link");

var getData = function () {
    //var namePlayer = localStorage.getItem("playerName")
     var palyerStat =JSON.parse(localStorage.getItem("highscore"))
    //var score = localStorage.getItem("score")
    if (namePlayer === null || score === null) {
      return;
    }
    for (var i = 0; palyerStat.length; i++){
      palyerStat[i]
      var scoreEl= document.createElement("p");
      scoreEl.textContent = palyerStat[i].playerName + ": " + palyerStat[i].score;
      scoreDisplayEl.append(scoreEl);
      console.log()
    }
    console.log("This button works")
    console.log(namePlayer)
    console.log(score)
    console.log(palyerStat)
};
getData();

var reSet = function () {
  location.reload();
};

var removeScore = function () {
  localStorage.clear();
};

deleteScoreEl.addEventListener("click", removeScore);
backBtnEL.addEventListener("click", reSet);
