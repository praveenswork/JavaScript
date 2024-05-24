let str1 = ["hello", "world", "search", "good", "search"];
let err = ["not", "found"];

for (i = 0; i <= str1.length - 1; i++) {
  if (str1[i] === "search") {
    console.log(str1.indexOf(str1[i]));
    break;
  }
}
let color = ["green", "red", "blue", "yellow"];

function findIndex(arr, word) {
  for (j = 0; j <= arr.length - 1; j++) {
    if (color[j] === word) {
      console.log(color.indexOf(color[j]));
      break;
    }
  }
}

findIndex(color, "yellow");

let food_arr = ["egg", "apple", "egg", "orange", "egg", "banana"];
let eggs = [];
function removeEgg(foods) {
  for (i = 0; i < foods.length; i++) {
    if (foods[i] === "egg") {
      continue;
    } else {
      console.log(foods.indexOf("egg"));
      console.log(foods[i]);
    }
  }
  console.log(foods.reverse());
  console.log(foods.lastIndexOf("egg"));
}

removeEgg(food_arr);
