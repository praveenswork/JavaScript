let calculation = "";

document.querySelector("#answer").innerHTML = calculation;

function reset() {
  document.querySelector("#answer").innerHTML = calculation = 0;
}

function clearLast() {
  calculation = calculation.slice(0, -1);
  document.querySelector("#answer").innerHTML = calculation;
}
