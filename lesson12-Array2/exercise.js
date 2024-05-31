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
