export let cart = JSON.parse(localStorage.getItem("cart"));

if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: "3",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 3,
      deliveryOptionId: "2",
    },
  ];
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
      deliveyOptionId: "1",
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
  cart.forEach((item) => {
    if (item.productId === productId) {
      item.quantity = Number(newQuantity);
    }
    return item.quantity;
  });
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  let matchingItem;

  cart.forEach((item) => {
    if (item.productId === productId) {
      matchingItem = item;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId;
  saveToStorage();
}
