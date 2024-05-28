document.querySelector(".toogle").addEventListener("click", function () {
  let element = document.querySelector(".toogle");
  if (element.classList.contains("is-toogle")) {
    element.classList.remove("is-toogle");
  } else {
    element.classList.add("is-toogle");
  }
});

document.querySelector(".mode_btn").addEventListener("click", function () {
  let is_on = document.querySelector(".mode_btn");
  if (is_on.classList.contains("is-mode-on")) {
    is_on.classList.remove("is-mode-on");
  } else {
    is_on.classList.add("is-mode-on");
  }
});
