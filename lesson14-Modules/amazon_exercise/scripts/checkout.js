import {
  cart,
  removeCartProduct,
  updateCartQuantity,
  calculateCartQuantity,
  updateQuantity,
} from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

let cartProductHtml = "";

cart.forEach((cartItem) => {
  let productId = cartItem.productId;
  let matchingCartItem;

  products.forEach((product) => {
    if (productId === product.id) {
      matchingCartItem = product;
    }
  });

  cartProductHtml += `<div class="cart-item-container js-cart-product-${
    matchingCartItem.id
  }">
              <div class="delivery-date">
                Delivery date: Wednesday, June 15
              </div>

              <div class="cart-item-details-grid">
                <img class="product-image" src="${matchingCartItem.image}">

                <div class="cart-item-details">
                  <div class="product-name">
                    ${matchingCartItem.name}
                  </div>
                  <div class="product-price">
                    ${formatCurrency(matchingCartItem.priceCents)}
                  </div>
                  <div class="product-quantity">
                    <span>
                      Quantity: <span class="quantity-label">${
                        cartItem.quantity
                      }</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-update-id="${
                      matchingCartItem.id
                    }">
                      Update
                    </span>
                    <input class="quantity-input js-quantity-input-${
                      matchingCartItem.id
                    }" type="number" min="1" value="${
    cartItem.quantity
  }" style="display: none;">
                    <span class="save-quantity-link link-primary" data-save-id="${
                      matchingCartItem.id
                    }" style="display: none;">Save</span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-delete-id="${
                      matchingCartItem.id
                    }">
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>

                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="${
                      matchingCartItem.id
                    }">
                    <div>
                      <div class="delivery-option-date">
                        Tuesday, June 21
                      </div>
                      <div class="delivery-option-price">
                        FREE Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" checked class="delivery-option-input" name="${
                      matchingCartItem.id
                    }">
                    <div>
                      <div class="delivery-option-date">
                        Wednesday, June 15
                      </div>
                      <div class="delivery-option-price">
                        $4.99 - Shipping
                      </div>
                    </div>
                  </div>
                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input" name="${
                      matchingCartItem.id
                    }">
                    <div>
                      <div class="delivery-option-date">
                        Monday, June 13
                      </div>
                      <div class="delivery-option-price">
                        $9.99 - Shipping
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
});

document.querySelector(".js-order-cart-summary").innerHTML = cartProductHtml;

document.querySelectorAll(".js-delete-link").forEach((link) => {
  link.addEventListener("click", () => {
    const productId = link.dataset.deleteId;
    removeCartProduct(productId);
    const container = document.querySelector(`.js-cart-product-${productId}`);
    container.remove();

    document.querySelector(".js-checkout-heading").innerHTML = `
      ${updateCartQuantity()} items`;
  });
});

document.querySelector(".js-checkout-heading").innerHTML = `
  ${updateCartQuantity()} items`;

calculateCartQuantity();

document.querySelectorAll(".js-update-link").forEach((update) => {
  update.addEventListener("click", () => {
    const productId = update.dataset.updateId;
    const cartItemContainer = document.querySelector(
      `.js-cart-product-${productId}`
    );

    if (cartItemContainer) {
      cartItemContainer.classList.add("is-editing-quantity");
      cartItemContainer.querySelector(`.quantity-input`).style.display =
        "initial";
      cartItemContainer.querySelector(`.save-quantity-link`).style.display =
        "initial";
      cartItemContainer.querySelector(`.js-update-link`).style.display = "none";
    } else {
      console.error(
        `Element with class .js-cart-product-${productId} not found`
      );
    }
  });
});
document.querySelectorAll(".save-quantity-link").forEach((save) => {
  save.addEventListener("click", () => {
    const productId = save.dataset.saveId;
    const cartItemContainer = document.querySelector(
      `.js-cart-product-${productId}`
    );
    const quantityInput = cartItemContainer.querySelector(
      `.js-quantity-input-${productId}`
    ).value;
    if (quantityInput) {
      updateQuantity(productId, parseInt(quantityInput, 10));
      cartItemContainer.querySelector(".quantity-label").innerHTML =
        quantityInput;
      cartItemContainer.classList.remove("is-editing-quantity");
      // saveCartToLocalStorage();
      cartItemContainer.querySelector(`.quantity-input`).style.display = "none";
      cartItemContainer.querySelector(`.save-quantity-link`).style.display =
        "none";
      cartItemContainer.querySelector(`.js-update-link`).style.display =
        "initial";

      document.querySelector(".js-checkout-heading").innerHTML = `
        ${updateCartQuantity()} items`;
    } else {
      console.error(`Quantity input for product ${productId} is not valid.`);
    }
  });
});
