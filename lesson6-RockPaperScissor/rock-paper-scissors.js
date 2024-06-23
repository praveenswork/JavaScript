let user = 0;
let choice = ["rock✊", "paper🖐️", "scissor✌️"];

let score = JSON.parse(localStorage.getItem("scoreboard"));
if (score === null) {
  score = {
    win: 0,
    lose: 0,
    draw: 0,
  };
}

function clicked() {
  let computer = Math.floor(Math.random() * 3);
  let c_data = choice[computer];
  let u_data = choice[user];

  if (user === computer) {
    score.draw += 1;
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n Draw😒`;
  } else if (
    (user === 0 && computer === 2) ||
    (user === 1 && computer === 0) ||
    (user === 2 && computer === 1)
  ) {
    score.win += 1;
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n you win😁`;
  } else {
    score.lose += 1;
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n you lose😢`;
  }

  document.querySelector(
    ".score"
  ).innerHTML = `Win:${score.win}  ,  Lose:${score.lose}  ,  Draw:${score.draw}`;
  json_score = JSON.stringify(score);
  localStorage.setItem("scoreboard", json_score);
  console.log(json_score);
}

function reset() {
  score.win = 0;
  score.lose = 0;
  score.draw = 0;
  localStorage.setItem("scoreboard", JSON.stringify(score));
  document.querySelector(
    ".score"
  ).innerHTML = `Win:${score.win}  ,  Lose:${score.lose}  ,  Draw:${score.draw}`;
}

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    let confirmReset = prompt(
      "You want to reset score, yes or no"
    ).toLowerCase();
    if (confirmReset === "yes") {
      reset();
    } else {
      alert("invalid input from you");
    }
  } else if (event.key === "r") {
    user = 0;
    clicked();
  } else if (event.key === "p") {
    user = 1;
    clicked();
  } else if (event.key === "s") {
    user = 2;
    clicked();
  }
});
