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
