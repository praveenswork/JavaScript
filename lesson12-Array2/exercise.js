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
let timeout;

function added() {
  const message_element = document.getElementById("added-msg");
  message_element.innerHTML = "Added";
  clearTimeout(timeout);

  timeout = setTimeout(function () {
    message_element.innerHTML = "";
  }, 2000);
}

// function timeout() {
//   document.getElementById("added-msg").innerHTML = "";
// }
