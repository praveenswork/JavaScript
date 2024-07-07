class Cart {
  cartItem;
  #storageKey;
  constructor(storageKey) {
    this.cartItem = [];
    this.timeout = {};
    this.#storageKey = storageKey;
  }

  loadFromStorage() {
    this.cartItem = JSON.parse(localStorage.getItem(this.#storageKey));

    if (!this.cartItem) {
      this.cartItem = [
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
  }

  addCartMessage(productId) {
    let added_msg = document.querySelector(`.js-added-message-${productId}`);

    added_msg.classList.add("added-message");

    if (this.timeout[productId]) {
      clearTimeout(this.timeout[productId]);
    }

    this.timeout[productId] = setTimeout(() => {
      added_msg.classList.remove("added-message");
    }, 2000);
  }

  saveToStorage() {
    localStorage.setItem(this.storageKey, JSON.stringify(this.cartItem));
  }

  selectQuantity(productId) {
    let matchingItem;
    let selectedElement = document.querySelector(
      `.js-quantity-selector-${productId}`
    );
    let selected_quantity = Number(selectedElement ? selectedElement.value : 1);

    this.cartItem.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      matchingItem.quantity += selected_quantity;
    } else {
      this.cartItem.push({
        productId,
        quantity: selected_quantity,
        deliveyOptionId: "1",
      });
    }

    this.saveToStorage();
  }

  updateCartQuantity() {
    let cartQuantity = 0;
    this.cartItem.forEach((quantity) => {
      cartQuantity += quantity.quantity;
    });
    return cartQuantity;
  }
  removeCartProduct(productId) {
    let newCart = [];
    this.cartItem.forEach((cartItem) => {
      if (cartItem.productId !== productId) {
        newCart.push(cartItem);
        // console.log(cart);
      }
    });
    this.cartItem = newCart; //newcart overwrite this cart = cart
    saveToStorage();
  }
  calculateCartQuantity() {
    document.querySelectorAll(".update-quantity-link ").forEach((update) => {
      update.addEventListener("click", () => {});
    });
  }

  updateQuantity(productId, newQuantity) {
    this.cartItem.forEach((item) => {
      if (item.productId === productId) {
        item.quantity = Number(newQuantity);
      }
      return item.quantity;
    });
    this.saveToStorage();
  }

  updateDeliveryOption(productId, deliveryOptionId) {
    let matchingItem;

    this.cartItem.forEach((item) => {
      if (item.productId === productId) {
        matchingItem = item;
      }
    });
    matchingItem.deliveryOptionId = deliveryOptionId;
    this.saveToStorage();
  }
}

const cart = new Cart("cart-oop");
const cartBusiness = new Cart("business-cart");

cart.loadFromStorage();
cartBusiness.loadFromStorage();

cart.selectQuantity("83d4ca15-0f35-48f5-b7a3-1ea210004f2e");

console.log(cart);
console.log(cartBusiness);
