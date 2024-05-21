let arr = [1, 2, 3, 45, 6];
arr[arr.length - 1] = 30;
console.log(arr);

function swaping() {
  let first = arr[0]; //1
  let last = arr[arr.length - 1]; //5
  arr[0] = last;
  arr[arr.length - 1] = first;
  console.log(arr);
}
swaping();
new_arr = [];
for (i = 5; i >= 0; i--) {
  new_arr.push(i + 1);
}
console.log(new_arr);

let a = 5;
while (a >= 0) {
  console.log(a);
  a--;
}
new_one = [1, 5, 4, 6];
function addOne() {
  for (i = 0; (i = new_one.length - 1); i++) {
    console.log(i + 1);
  }
}
addOne();
