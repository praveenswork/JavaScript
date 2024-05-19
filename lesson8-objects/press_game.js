let temp_score = 0;
let score = JSON.parse(localStorage.getItem("points"));
if (score === null) {
  score = {
    pressed: 0,
  };
}
localStorage.removeItem();

function reset() {
  alert("current score reseted");
  document.getElementById(
    "presses"
  ).innerHTML = `CurrentScore : ${(temp_score = 0)}`;
}
function dlt() {
  alert(" high score deleted");
  score.pressed = 0;
  document.getElementById(
    "highscore"
  ).innerHTML = `Highscore : ${score.pressed}`;
}
function add() {
  alert("score added");
  score.pressed += 1;

  document.getElementById(
    "highscore"
  ).innerHTML = `Highscore : ${score.pressed}`;
  document.getElementById(
    "presses"
  ).innerHTML = `CurrentScore : ${(temp_score += 1)}`;

  localStorage.setItem("points", JSON.stringify(score));
}

localStorage.removeItem(score);
