let computer = 0;
let user = 0;
let choice = ["", "rock🪨", "paper📃", "scissor✂️"];
let score = 0;

function clicked() {
  let computer = Math.round(Math.random() * 2 + 1);
  let c_data = choice[computer];
  let u_data = choice[user];
  // console.log(c_data);
  // console.log(u_data);

  if (user > computer) {
    alert(`  you choose ${u_data} \n computer choose ${c_data} \n you win😁`);
    // document.getElementById(score).innerHTML = score + 1;
  } else if (computer > user || user < computer) {
    alert(`  you choose ${u_data} \n computer choose ${c_data} \n you lose😢`);
  } else if (user === computer) {
    alert(` you choose ${u_data} \n computer choose ${c_data} \n Draw😒`);
  } else {
    alert("enter correct input");
  }
}
