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
new_one = [1, 5, 4, 6, 9];
function addOne() {
  for (i = 0; i <= new_one.length - 1; i++) {
    console.log(i + 1);
  }
}
addOne();

function addNum(arr, num) {
  for (i = 0; i <= arr.length; i++) {
    console.log(i + num);
  }
}
addNum([1, 2, 3], 3);

n = [1, 2, 34, 45, 0, -1, -34];
new_n = [];
function positive(nums) {
  for (i = 0; i <= nums.length - 1; i++) {
    if (n[i] > 0) {
      new_n.push(n[i]);
    }
  }
  console.log(new_n);
}
positive(n);

//adding 2 array
arr1 = [1, 2, 34];
arr2 = [3, 2, 1];
new_array = [];
function add2arr(a1, a2) {
  for (i = 0; i <= a1.length - 1; i++) {
    console.log(arr1[i] + arr2[i]);
  }
}
add2arr(arr1, arr2);
