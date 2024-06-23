import { cart, removeCartProduct } from "../data/cart.js";
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
                <img class="product-image"
                  src="${matchingCartItem.image}">

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
                    <span class="update-quantity-link link-primary">
                      Update
                    </span>
                    <span class="delete-quantity-link link-primary js-link-delete " data-delete-id='${
                      matchingCartItem.id
                    }'>
                      Delete
                    </span>
                  </div>
                </div>

                <div class="delivery-options">
                  <div class="delivery-options-title">
                    Choose a delivery option:
                  </div>

                  <div class="delivery-option">
                    <input type="radio" class="delivery-option-input"
                      name="${matchingCartItem.id}">
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
                    <input type="radio" checked class="delivery-option-input"
                      name="${matchingCartItem.id}">
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
                    <input type="radio" class="delivery-option-input"
                      name="${matchingCartItem.id}">
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

document.querySelectorAll(".delete-quantity-link").forEach((lin) => {
  lin.addEventListener("click", () => {
    const productId = lin.dataset.deleteId;
    removeCartProduct(productId);
    const container = document.querySelector(`.js-cart-product-${productId}`);
    console.log(container);
    container.remove();
  });
});
