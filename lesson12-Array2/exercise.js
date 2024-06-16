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

let interval = 0;
function msg_add() {
  setTimeout(() => {
    document.title = `(${(interval += 1)})new message`;
  }, 1000);
  document.title = "exercise";
}
function msg_remove() {
  if (interval < 1) {
    interval += 0;
    alert("no more message to remove");
  } else {
    setTimeout(function timeout1() {
      document.title = `(${(interval -= 1)})new message`;
    }, 1000);
  }
  document.title = "exercise";
}
