const storing = JSON.parse(localStorage.getItem("store1"));

if (storing === null) {
  storing = {
    win: 0,
    loss: 0,
  };
}

let json_file = JSON.stringify(storing);
console.log(json_file);

let parse = JSON.parse();
console.log(parse);

function clicked() {
  localStorage.setItem("store1", JSON.stringify(storing));
  storing.win += 1;
  alert("clicked");
  document.getElementById("s").innerHTML;
}

// const obj1 = {
//   n: 1,
//   m: 2,
// };

// let { n, m } = obj1;
// console.log(n);
