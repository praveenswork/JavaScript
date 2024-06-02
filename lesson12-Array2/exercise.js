let add = () => {
  console.log(2 + 3);
};

function runTwice(fun) {
  fun();
  fun();
}
runTwice(add);

function change() {
  document.querySelector(".start_btn").innerHTML = "finished";
}

function added() {
  let added_msg = document.querySelector("#added_toCart").value;
  document.getElementById("added-msg").innerHTML = "Added";
  console.log(added_msg);
}

function timeout() {
  document.getElementById("added-msg").innerHTML = "";
}
