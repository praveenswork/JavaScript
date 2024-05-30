document.querySelector(".toogle").addEventListener("click", function () {
  let element = document.querySelector(".toogle");
  if (element.classList.contains("is-toogle")) {
    element.classList.remove("is-toogle");
  } else {
    element.classList.add("is-toogle");
  }
});

document.querySelectorAll(".mode_btn").forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("is-mode-on");
  });
});

function toggle_btns(buttonID) {
  const buttons = document.querySelectorAll(".button-toogle");
  buttons.forEach((button) => {
    button.classList.remove("active");
    button.classList.add("inactive");
  });

  const activebutton = document.getElementById(buttonID);
  activebutton.classList.remove("inactive");
  activebutton.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".button-toogle");
  buttons.forEach((button) => button.classList.add("inactive"));
});
