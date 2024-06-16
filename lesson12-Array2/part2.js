// arrow function
let multiply = (num1, num2) => num1 * num2;
console.log(multiply(2, 15));

//coutPositive
let arr1 = [1, -2, 3, -3, -32];

//filter
// let newarr = arr.filter((val) => {
//   return val > 0;
// });

// // console.log(newarr);

let CountPositive = (arr) => {
  let count = 0;
  arr.forEach((num) => {
    if (num > 0) {
      count++;
    }
  });
  return count;
};
console.log(CountPositive(arr1));

//map function
numbers = [24, 3, 2, 1];
let addNumber = (num) => num.map((val) => val + 1);
console.log(addNumber(numbers));

//removeEggUsing filter()
foods = ["egg", "egg", "egg", "apple", "banana", "egg", "egg"];

let removeEgg = (food) => {
  let count = 0;

  return food.filter((value) => {
    if (value === "egg" && count < 2) {
      count++;
      return false;
    }
    return true;
  });
};
console.log(removeEgg(foods));
