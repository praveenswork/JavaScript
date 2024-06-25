export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [];
}

const timeout = {};
export function addCartMessage(productId) {
  let added_msg = document.querySelector(`.js-added-message-${productId}`);

  added_msg.classList.add("added-message");

  if (timeout[productId]) {
    clearTimeout(timeout[productId]);
  }

  timeout[productId] = setTimeout(() => {
    added_msg.classList.remove("added-message");
  }, 2000);
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function selectQuantity(productId) {
  let matchingItem;
  let selected_quantity = Number(
    document.querySelector(`.js-quantity-selector-${productId}`).value
  );

  cart.forEach((item) => {
    if (item.productId === productId) {
      matchingItem = item;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += selected_quantity;
  } else {
    cart.push({
      productId,
      quantity: selected_quantity,
    });
  }
  saveToStorage();
}

export function updateCartQuantity() {
  let cartQuantity = 0;
  cart.forEach((quantity) => {
    cartQuantity += quantity.quantity;
  });
  return cartQuantity;
}

export function removeCartProduct(productId) {
  let newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
      // console.log(cart);
    }
  });
  cart = newCart; //newcart overwrite this cart = cart
  saveToStorage();
}

export function calculateCartQuantity() {
  document.querySelectorAll(".update-quantity-link ").forEach((update) => {
    update.addEventListener("click", () => {});
  });
}

export function updateQuantity(productId, newQuantity) {
  cart.quantity = newQuantity;
  console.log(newQuantity);
  saveToStorage();
}
