import {
  cart,
  removeCartProduct,
  updateCartQuantity,
  calculateCartQuantity,
  updateQuantity,
  updateDeliveryOption,
} from "../../data/cart.js";
import { products, getproducts } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import { deliveryOptions, getdeliveryOption } from "../../data/deliverydate.js";
import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";
import { renderPaymentSummary } from "./paymentSummary.js";

const today = dayjs();
const deliverydays = today.add(7, "days");
// console.log(deliverydays.format("dddd , MMMM d"));

export function renderOrderSummary() {
  let cartProductHtml = "";

  cart.forEach((cartItem) => {
    let productId = cartItem.productId;
    const deliveryOptions = getdeliveryOption(cartItem.deliveryOptionId || 1); // Default to ID 1 if undefined

    const matchingCartItem = getproducts(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    let deliveryOption = getdeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliverydays = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliverydays.format("dddd , MMMM D");

    cartProductHtml += `<div class="cart-item-container js-cart-item-container js-cart-product-${
      matchingCartItem.id
    } "<div class="order-summary js-order-cart-summary">
                <div class="delivery-date">
                  Delivery date: ${dateString}
                </div>
  
                <div class="cart-item-details-grid">
                  <img class="product-image" src="${matchingCartItem.image}">
  
                  <div class="cart-item-details">
                    <div class="product-name">
                      ${matchingCartItem.name}
                    </div>
                    <div class="product-price">
                      $${formatCurrency(matchingCartItem.priceCents)}
                    </div>
                    <div class="product-quantity js-product-quantity-${
                      matchingCartItem.id
                    }">
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
                      <span class="delete-quantity-link link-primary js-delete-link js-delete-cart-${
                        matchingCartItem.id
                      }" data-delete-id="${matchingCartItem.id}">
                        Delete
                      </span>
                    </div>
                  </div>
  
                  <div class="delivery-options">
                    <div class="delivery-options-title">
                      Choose a delivery option:
                    </div>
                       ${deliveryOPtionHTML(matchingCartItem, cartItem)}
                     </div>
                 </div>
              </div>
              `;
  });
  function deliveryOPtionHTML(matchingCartItem, cartItem) {
    let deliveryHTML = "";
    deliveryOptions.forEach((deliveryOption) => {
      const today = dayjs();
      const deliverydays = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliverydays.format("dddd , MMMM D");

      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : formatCurrency(deliveryOption.priceCents);

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;
      // console.log(deliveryOption.id, cartItem.deliveryOptionId);

      deliveryHTML += `<div class="delivery-option js-delivery-option"data-product-id="${
        matchingCartItem.id
      }" data-delivery-option-id="${deliveryOption.id}">
                      <input type="radio" ${isChecked ? "checked" : ""}
                      class="delivery-option-input" name="${
                        matchingCartItem.id
                      }"/>
                      <div>
                        <div class="delivery-option-date">
                          ${dateString}
                        </div>
                        <div class="delivery-option-price">
                          $${priceString} - Shipping
                        </div>
                      </div>
                    </div>`;
    });
    return deliveryHTML;
  }
  // renderPaymentSummary();
  document.querySelector(".js-order-cart-summary").innerHTML = cartProductHtml;

  document.querySelectorAll(".js-delete-link").forEach((link) => {
    link.addEventListener("click", () => {
      const productId = link.dataset.deleteId;
      removeCartProduct(productId);
      const container = document.querySelector(`.js-cart-product-${productId}`);
      container.remove();

      document.querySelector(".js-checkout-heading").innerHTML = `
        ${updateCartQuantity()} items`;

      renderPaymentSummary();
    });
  });

  document.querySelector(".js-checkout-heading").innerHTML = `
  ${updateCartQuantity()} items`;

  console.log(updateCartQuantity());

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
        cartItemContainer.querySelector(`.js-update-link`).style.display =
          "none";
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
        cartItemContainer.querySelector(`.quantity-input`).style.display =
          "none";
        cartItemContainer.querySelector(`.save-quantity-link`).style.display =
          "none";
        cartItemContainer.querySelector(`.js-update-link`).style.display =
          "initial";

        document.querySelector(".js-checkout-heading").innerHTML = `
          ${updateCartQuantity()} items`;

        renderPaymentSummary();
      } else {
        console.error(`Quantity input for product ${productId} is not valid.`);
      }
    });
  });

  document.querySelectorAll(".js-delivery-option").forEach((element) => {
    element.addEventListener("click", () => {
      const { productId, deliveryOptionId } = element.dataset;
      document.querySelector(".js-checkout-heading").innerHTML = `
          ${updateCartQuantity()} items`;
      updateDeliveryOption(productId, deliveryOptionId);
      renderOrderSummary();
      renderPaymentSummary();
    });
  });
}

// renderOrderSummary();
