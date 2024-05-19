//8a
const product = {
  basketball: 2095,
};
//8b
console.log((product.basketball += 500));
//8c
product["delivery-time"] = "3days";

console.log(product);

//8d
let product1 = {
  name1: "bat",
  price1: 2000,
};
let product2 = {
  name2: "bat",
  price2: 2500,
};
const { name2, price2 } = product2; //destructing object

const { name1, price1 } = product1; //destructing object

function comparePrice(p1, p2) {
  if (product1 < product2) {
    console.log(`${name1} is less expensive ${price1}`);
  } else {
    console.log(`${name2} is less expensive ${price2}`);
  }
}
comparePrice(product1, product2);

//8e
function isSameProduct(p1, p2) {
  if (p1.price1 === p2.price2) {
    return true;
  } else {
    return false;
  }
}
console.log(isSameProduct(product1, product2));

//8f

console.log("GOOD MORNING".toLowerCase());
test = "repeat";
console.log(test.repeat(2));
