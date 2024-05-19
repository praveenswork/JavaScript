// function press(){}

// const press = () => {
//   alert("pressed");
// };

function greet(name) {
  if (!name) {
    console.log("Hi there");
  } else {
    console.log(`Hello ${name}`);
  }
}
greet();

// degree f to c

function convertToFahrenheit(c) {
  //6d
  let f = c * (9 / 5) + 32;
  console.log(`${f} F`);
}
convertToFahrenheit(25);

function convertToCelsius(f) {
  //6e
  let c = ((f - 32) * 9) / 5;

  console.log(`${c} C`);
}
convertToCelsius(86);

function convertTemprature(degree, unit) {
  //6f
  if (unit === "f") {
    convertToCelsius(`${degree} `);
  } else if (unit === "c") {
    convertToFahrenheit(`${degree} `);
  }
}
convertTemprature(25, "c");

//6g
function convertLength(len, from, to) {
  if (from === "miles" && to === "km") {
    km = len * 1.6;
    console.log(`${km}km`);
  } else if (to === "miles" && from === "km") {
    mile = len / 1.6;
    console.log(`${mile} mile `);
  } else if (from === "km" && to === "ft") {
    km_ft = len * 3281;
    console.log(`${km_ft} ft `);
  } else if (from === "miles" && to === "ft") {
    mile_ft = len * 5280;
    console.log(`${mile_ft} ft`);
  } else if (from === "ft" && to === "km") {
    ft_km = len / 3281;
    console.log(`${ft_km} km`);
  } else if (from === "ft" && to === "miles") {
    mile_ft = len / 5280;
    console.log(`${mile_ft} mile `);
  } else {
    console.log(len, from);
    console.log("check your input ,its invalid");
  }
}

convertLength(32, "ft", "ft");
