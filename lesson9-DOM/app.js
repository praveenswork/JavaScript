function subscribed() {
  const sub_btn = document.querySelector("#subscribe");

  if (sub_btn.innerHTML === "Subscribe") {
    sub_btn.innerHTML = "Subscribed";
  } else {
    sub_btn.innerHTML = "Subscribe";
  }
}

function calculate() {
  const inputElement = document.querySelector(".calculate");

  let cost = Number(inputElement.value);

  if (cost < 40 && cost > 0) {
    document.querySelector(".answer").innerHTML = Math.floor(cost + 10);
  } else if (cost > 40) {
    document.querySelector(".answer").innerHTML = Math.floor(cost);
  } else {
    document.querySelector(".answer").innerHTML = "Enter a valid input";
  }
}
function handlekeys(event) {
  if (event.key === "Enter") {
    calculate();
  } else {
    console.log("Enter a valid input");
  }
}
