// 3a create my name is
a = "My name is ";
// 3b create name
b = "Praveen";
// 3c concatanation of a and b
console.log(a.concat(b));
// 3d
cofee = 599;
bagel = 295;
tot = (cofee + bagel) / 100;
console.log("$" + tot);

//3e template string and interpolition
template = `$${tot}`;
console.log(template);

interpolit = "$" + (cofee + bagel) / 100;
console.log(interpolit);

//3f pop the 3e using alert

//alert(template); //done in console;

//3g total cost + $total

total_cost = `Total cost $${tot}`;
console.log(total_cost);

//3h interpolition in 3g

intpolit = "Total cost $" + tot;
console.log(intpolit);

//3i use alert to pop a anser //done in console

//alert (`${total_cost}`)

//3j  add thank you in pop up
//alert (`${total_cost} \n Thank You come again!`)

//3k create line
items_4 = "$" + 57.88;
console.log(items_4);
//3l
shipping = "Shipping & handling: $" + 9.98;
console.log(shipping);
//3m
total_bef_tax = "Beforetax: $" + 67.86;
console.log(total_bef_tax);
//3n
estimate_tax = "Estimated tax : $" + 6789 / 100;
console.log(estimate_tax);
