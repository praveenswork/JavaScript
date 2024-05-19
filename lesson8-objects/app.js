let computer = 0;
let user = 0;
let choice = ["rock🪨", "paper📃", "scissor✂️"];

let score = JSON.parse(localStorage.getItem("score"));

if (score === null) {
  score = {
    wins: 0,
    ties: 0,
    loss: 0,
  };
}
function clicked() {
  let computer = Math.floor(Math.random() * 3);
  let c_data = choice[computer];
  let u_data = choice[user];
  // console.log(c_data);
  // console.log(u_data);

  if (user > computer) {
    score.wins += 1;
    alert(`  you choose ${u_data} \n computer choose ${c_data} \n you win😁\n`);
    // document.getElementById(score).innerHTML = score + 1;
  } else if (computer > user || user < computer) {
    score.loss += 1;
    alert(`  you choose ${u_data} \n computer choose ${c_data} \n you lose😢`);
  } else if (user === computer) {
    score.ties += 1;
    alert(` you choose ${u_data} \n computer choose ${c_data} \n Draw😒`);
  } else {
    alert("enter correct input");
  }
  document.getElementById(
    "score"
  ).innerHTML = `wins : ${score.wins}\nloss : ${score.loss}\nties : ${score.ties}`;

  //   console.log(typeof JSON);

  //   const praveen = {
  //     name: "praveen",
  //     fun: () => {
  //       console.log("Called");
  //     },
  //   };

  localStorage.setItem("score", JSON.stringify(score));
}
