let computer = 0;
let user = 0;
let choice = ["rock✊", "paper🖐️", "scissor✌️"];
let score = 0;

function clicked() {
  let computer = Math.floor(Math.random() * 3);
  let c_data = choice[computer];
  let u_data = choice[user];

  // console.log(c_data);
  // console.log(u_data);

  if (user > computer) {
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n you win😁`;

    // document.getElementById(score).innerHTML = score + 1;
  } else if (computer > user || user < computer) {
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n you lose😢`;
  } else if (user === computer) {
    document.querySelector(
      "#score"
    ).innerHTML = `  you  ${u_data} \n computer  ${c_data} \n Draw😒`;
  } else {
    alert("enter correct input");
  }
}
