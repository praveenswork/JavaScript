import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

const today = dayjs();

let days = today.add(5, "days");
console.log(days.format("MMMM  D "));
console.log(today.add(1, "month").format("MMMM  D "));
console.log(today.subtract(1, "month").format("MMMM  D "));
console.log(today.format("dddd  D "));

function isWeekendDate(date) {
  if (date === "Sunday" || date === "Saturday") {
    return "is weekend";
  } else {
    return "not a weekend";
  }
}
let weekenddays = today.add(4, "days");

console.log(isWeekendDate(weekenddays.format("dddd")));

// let dateHTML = document.querySelector(".user-date");

// document.querySelector(".user-output").innerHTML = dateHTML;
