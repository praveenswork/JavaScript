function clicked() {
  let touch = (document.querySelector("#btn2").innerHTML = "9b done");
}

function heads() {
  document.querySelector("#change").innerHTML = "You choose : Heads";
}
function tails() {
  document.querySelector("#change").innerHTML = "You choose : Tails";
}

function submit() {
  const name_value = document.querySelector(".input_value").value;
  document.querySelector("#name_in_text").innerHTML = `welcome ${name_value}`;
}

function entry(event) {
  if (event.key == "Enter") {
    submit();
  }
}

function keyup(event) {
  const new_text = document.querySelector("#input_text").value;
  document.querySelector("#new_p").innerHTML = new_text;
}
