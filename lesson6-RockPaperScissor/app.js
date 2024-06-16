let hour = 16; //6a
let user_name = "Praveen"; //6c
let cartQuantity = 0; //6k

if (hour >= 6 && hour <= 12) {
  console.log(`Good morning ${user_name}`);
} else if (hour >= 13 && hour <= 15) {
  console.log(`Good afternoon ${user_name}`);
} else if (hour >= 16 && hour <= 19) {
  console.log(`Good evening ${user_name}`); //6b
} else {
  console.log(`Good night ${user_name}`);
}

//6d
isHoliday = false; //6e
let age = 66;
if ((age <= 6 || age >= 65) && !isHoliday) {
  console.log("Discount ");
} else {
  console.log("Not discount");
}

//6f
let rand = Math.random(); //6h
let head_tails = rand < 0.5 ? "heads" : "tails"; //6i
console.log(head_tails);
// 6j
let = guess = "heads";
let ternary = guess === head_tails ? true : false;
console.log(ternary);

//6j
function over() {
  if (cartQuantity >= 10) {
    alert("Cart is full dont update"); //6k
    cartQuantity = 10;
  }
}
function no_quantity() {
  if (cartQuantity <= 0) {
    alert("not enough items to reduce"); //6l
    cartQuantity = 0;
  }
}
