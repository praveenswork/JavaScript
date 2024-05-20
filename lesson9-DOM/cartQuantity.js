let cartQuantity = 0;

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
let total_cart = (document.querySelector("#showCart").innerHTML = cartQuantity);
