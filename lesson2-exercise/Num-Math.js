//2a order
soup = 10;
burger = 8;
icecream = 5;

console.log(soup * 1 + burger * 3 + icecream * 1);

//2b for three frnds
console.log((soup * 1 + burger * 3 + icecream * 1) / 3);

//2c total purchace
toasters = 18.5;
shirts = 7.5;

console.log(toasters + shirts);

//2d 10% tax
console.log(Math.round(toasters + shirts * 0.1));

//2e 20% tax
console.log(toasters + shirts) * 0.2;

//2f total items

basketball = 21.93;
total_items = toasters + basketball + shirts;
shipping = 4.99;
console.log(total_items);

//2g total before tax
total_before_tax = total_items + shipping;
console.log(total_before_tax);

//2h tax for total items in 2g
console.log(5292 / 100);

//2i remove toaster from cart

new_total = total_items - toasters;
console.log(new_total);

//2j round floor
console.log(Math.floor(2.8));

//2k round ceil
console.log(Math.ceil(2.2));

//celcius to farenheit

//formula for f => (c * 9/5) + 32
//formula for c => f - 32 * 5/9
//2l
console.log((25 * 9) / 5 + 32);
//2m
console.log(((86 - 32) * 5) / 9);
//2n
console.log((-5 * 9) / 5 + 32);

//finished exersice 2
