// import {
//   cart,
//   removeCartProduct,
//   updateCartQuantity,
//   calculateCartQuantity,
//   updateQuantity,
// } from "../data/cart.js";
// import { products } from "../data/products.js";
// import { formatCurrency } from "./utils/money.js";

// let cartProductHtml = "";

// cart.forEach((cartItem) => {
//   let productId = cartItem.productId;

//   let matchingCartItem;

//   products.forEach((product) => {
//     if (productId === product.id) {
//       matchingCartItem = product;
//     }
//   });

//   cartProductHtml += `<div class="cart-item-container js-cart-product-${
//     matchingCartItem.id
//   }">
//               <div class="delivery-date">
//                 Delivery date: Wednesday, June 15
//               </div>

//               <div class="cart-item-details-grid">
//                 <img class="product-image"
//                   src="${matchingCartItem.image}">

//                 <div class="cart-item-details">
//                   <div class="product-name">
//                     ${matchingCartItem.name}
//                   </div>
//                   <div class="product-price">
//                     ${formatCurrency(matchingCartItem.priceCents)}
//                   </div>
//                   <div class="product-quantity">
//                     <span>
//                       Quantity: <span class="quantity-label">${
//                         cartItem.quantity
//                       }</span>
//                     </span>
//                     <span class="update-quantity-link link-primary js-update-link" data-update-id='${
//                       matchingCartItem.id
//                     }'>
//                       Update
//                     </span>
//                     <input class="quantity-input">
//                     <span class="save-quantity-link link-primary" data-save-id='${
//                       matchingCartItem.id
//                     }'>save</span>
//                     <span class="delete-quantity-link link-primary js-delete-link " data-delete-id='${
//                       matchingCartItem.id
//                     }'>
//                       Delete
//                     </span>
//                   </div>
//                 </div>

//                 <div class="delivery-options">
//                   <div class="delivery-options-title">
//                     Choose a delivery option:
//                   </div>

//                   <div class="delivery-option">
//                     <input type="radio" class="delivery-option-input"
//                       name="${matchingCartItem.id}">
//                     <div>
//                       <div class="delivery-option-date">
//                         Tuesday, June 21
//                       </div>
//                       <div class="delivery-option-price">
//                         FREE Shipping
//                       </div>
//                     </div>
//                   </div>
//                   <div class="delivery-option">
//                     <input type="radio" checked class="delivery-option-input"
//                       name="${matchingCartItem.id}">
//                     <div>
//                       <div class="delivery-option-date">
//                         Wednesday, June 15
//                       </div>
//                       <div class="delivery-option-price">
//                         $4.99 - Shipping
//                       </div>
//                     </div>
//                   </div>
//                   <div class="delivery-option">
//                     <input type="radio" class="delivery-option-input"
//                       name="${matchingCartItem.id}">
//                     <div>
//                       <div class="delivery-option-date">
//                         Monday, June 13
//                       </div>
//                       <div class="delivery-option-price">
//                         $9.99 - Shipping
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>`;
// });

// document.querySelector(".js-order-cart-summary").innerHTML = cartProductHtml;

// document.querySelectorAll(".js-delete-link").forEach((lin) => {
//   lin.addEventListener("click", () => {
//     const productId = lin.dataset.deleteId;
//     removeCartProduct(productId);
//     const container = document.querySelector(`.js-cart-product-${productId}`);
//     container.remove();

//     document.querySelector(".js-checkout-heading").innerHTML = `
//     ${updateCartQuantity()}items`;
//   });
// });
// document.querySelector(".js-checkout-heading").innerHTML = `
//   ${updateCartQuantity()}items`;

// calculateCartQuantity(); //to load the quantity
// document.querySelectorAll(".js-update-link").forEach((update) => {
//   update.addEventListener("click", () => {
//     const productId = update.dataset.updateId;
//     console.log("Product ID:", productId); // Debugging output

//     const cartItemContainer = document.querySelector(".cart-item-container");

//     if (cartItemContainer) {
//       cartItemContainer.classList.add("is-ending-quantity");
//     } else {
//       console.error("Element with class .cart-item-container not found");
//     }
//   });
// });

// document.querySelectorAll(".save-quantity-link").forEach((save) => {
//   save.addEventListener("click", () => {
//     let productId = save.dataset.saveId;
//     console.log(productId);
//     document
//       .querySelector(".cart-item-container")
//       .classList.remove("is-ending-quantity");
//     let quantity_value = document.querySelectorAll(".quantity-input").value;
//     console.log(quantity_value);
//     updateQuantity(productId, quantity_value);
//   });
// });

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
                    <span class="update-quantity-link link-primary js-update-link" data-update-id='${
                      matchingCartItem.id
                    }'>
                      Update
                    </span>
                    <input class="quantity-input js-quantity-input" style="display:none;">
                    <span class="save-quantity-link link-primary js-save-link" data-save-id='${
                      matchingCartItem.id
                    }' style="display:none;">save</span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-delete-id='${
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
    console.log("Product ID:", productId); // Debugging output

    const cartItemContainer = document.querySelector(
      `.js-cart-product-${productId}`
    );
    const quantityInput = cartItemContainer.querySelector(".js-quantity-input");
    const saveLink = cartItemContainer.querySelector(".js-save-link");

    if (cartItemContainer) {
      cartItemContainer.classList.add("is-ending-quantity");
      quantityInput.style.display = "inline";
      saveLink.style.display = "inline";
    } else {
      console.error("Element with class .cart-item-container not found");
    }
  });
});

document.querySelectorAll(".js-save-link").forEach((save) => {
  save.addEventListener("click", () => {
    const productId = save.dataset.saveId;
    console.log("Product ID:", productId); // Debugging output

    const cartItemContainer = document.querySelector(
      `.js-cart-product-${productId}`
    );
    const quantityInput = cartItemContainer.querySelector(".js-quantity-input");

    const quantityValue = quantityInput.value;
    console.log("Quantity Value:", quantityValue); // Debugging output
    updateQuantity(productId, quantityValue);
  });
});
