/* Reset buttons */
let firstResetBtn = document.getElementById("resetButton");
let score = document.getElementById("firstScore");
firstResetBtn.addEventListener("click", function () {
  score.innerText = 0;
});

let secondResetBtn = document.getElementById("resetButton2");
let score2 = document.getElementById("secondScore");
secondResetBtn.addEventListener("click", function () {
  score2.innerText = 0;
});
/*Reset buttons end */

/*First functions */
function increaseButton() {
  let increaseScore = document.getElementById("firstScore");
  let count = increaseScore.innerHTML;
  count++;
  document.getElementById("firstScore").innerHTML = count;
}
function decreaseButton() {
  let decreaseScore = document.getElementById("firstScore");
  let count = decreaseScore.innerHTML;
  count--;
  document.getElementById("firstScore").innerHTML = count;
  if (count < 0) {
    document.getElementById("firstScore").innerHTML = 0;
  }
}
function setScoreButton() {
  let score = document.getElementById("firstScore");
  let promtWord = score.innerHTML;
  promtWord = prompt("Gol sayısını belirle");
  if (promtWord != Number(promtWord)) {
    alert("Sadece numara giriniz");
  } else if (promtWord == "") {
    alert("Bir değer giriniz");
  } else {
    document.getElementById("firstScore").innerHTML = promtWord;
  }
}
/* first functions end */
function editTeamName() {
  let teamName = document.getElementById("firstTeamName");
  let teamPromtName = teamName.innerHTML;
  teamPromtName = prompt("Takım ismi giriniz...");
  if (teamPromtName == Number(teamPromtName)) {
    alert("Numara girmeyiniz");
  } else if (teamPromtName == undefined) {
    alert("Bir değer giriniz");
  } else {
    document.getElementById("firstTeamName").innerHTML = teamPromtName;
  }
}

/* second functions */

function increaseButton2() {
  let increaseScore = document.getElementById("secondScore");
  let count = increaseScore.innerHTML;
  count++;
  document.getElementById("secondScore").innerHTML = count;
}
function decreaseButton2() {
  let decreaseScore = document.getElementById("secondScore");
  let count = decreaseScore.innerHTML;
  count--;
  document.getElementById("secondScore").innerHTML = count;
  if (count < 0) {
    document.getElementById("secondScore").innerHTML = 0;
  }
}
function setScoreButton2() {
  let score = document.getElementById("secondScore");
  let promtWord = score.innerHTML;
  promtWord = prompt("Gol sayısını belirle");
  if (promtWord != Number(promtWord)) {
    alert("Sadece numara giriniz");
  } else if (promtWord == "") {
    alert("Bir değer giriniz");
  } else {
    document.getElementById("secondScore").innerHTML = promtWord;
  }
}
function editTeamName2() {
  let teamName = document.getElementById("secondTeamName");
  let teamPromtName = teamName.innerHTML;
  teamPromtName = prompt("Takım ismini belirle");
  if (teamPromtName == Number(teamPromtName)) {
    alert("Numara girmeyiniz");
  } else if (teamPromtName == undefined) {
    alert("Bir değer giriniz");
  } else {
    document.getElementById("secondTeamName").innerHTML = teamPromtName;
  }
}
/*second functions end */
