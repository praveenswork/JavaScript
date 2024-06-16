let computer = 0;
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

  // console.log(c_data);
  // console.log(u_data);

  if (user > computer) {
    score.win += 1;
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n you win😁`;

    // document.getElementById(score).innerHTML = score + 1;
  } else if (computer > user || user < computer) {
    score.lose += 1;
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n you lose😢`;
  } else if (user === computer) {
    score.draw += 1;
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n Draw😒`;
  } else {
    alert("enter correct input");
  }
  document.querySelector(
    ".score"
  ).innerHTML = `Win:${score.win}  ,  Lose:${score.lose}  ,  Draw:${score.draw}`;
  json_score = JSON.stringify(score);
  localStorage.setItem("scoreboard", json_score);
  console.log(json_score);
}

function reset() {
  document.querySelector(
    ".score"
  ).innerHTML = `Win:${(score.win = 0)}  ,  Lose:${(score.lose = 0)}  ,  Draw:${(score.draw = 0)}`;
}

let new_value = document.body.addEventListener("keydown", (event) => {
  if (event.key === "Backspace") {
    let confirm = prompt("You want to reset score, yes or no").toLowerCase();
    if (confirm === "yes") {
      reset();
    } else {
      alert("invalid input from you");
    }
    // reset();
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
