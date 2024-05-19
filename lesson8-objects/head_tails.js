let head = 1;
let tail = 2;

let points = JSON.parse(localStorage.getItem("scoreBoard"));
console.log(points);

if (points === null) {
  points = {
    head: 0,
    tail: 0,
  };
}

function PlayGame(guess) {
  let toss = Math.ceil(Math.random() * 2);
  console.log(toss);
  if (head === toss) {
    alert("Head wins");
    points.head += 1;
    document.getElementById("wins").innerHTML = `Heads : ${points.head}`;
  } else {
    alert("Tail wins");
    points.tail += 1;
    document.getElementById("loss").innerHTML = `Tails : ${points.tail}`;
  }
  let json_score = JSON.stringify(points);
  localStorage.setItem("scoreBoard", json_score);
}

function reset() {
  points.head = 0;
  points.tail = 0;
  document.getElementById("wins").innerHTML = `Heads : ${points.head}`;
  document.getElementById("loss").innerHTML = `Tails : ${points.tail}`;
}
