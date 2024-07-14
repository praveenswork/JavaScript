import { cart, updateCartQuantity } from "../../data/cart.js";
import { getproducts } from "../../data/products.js";
import { getdeliveryOption } from "../../data/deliverydate.js";
import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach((cartItem) => {
    const product = getproducts(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;
    // console.log(product);
    // console.log(cartItem.quantity);
    // console.log(product.priceCents / 100);

    const deliveryOption = getdeliveryOption(cartItem.deliveryOptionId);
    shippingPriceCents += deliveryOption.priceCents;
  });
  const taxBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = taxBeforeTaxCents * 0.1;
  const totalCents = taxBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `<div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (${updateCartQuantity()}):</div>
            <div class="payment-summary-money">$${formatCurrency(
              productPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(
              shippingPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(
              taxBeforeTaxCents
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(
              taxCents
            )}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(
              totalCents
            )}</div>
          </div>

          <button class="place-order-button button-primary js-order-place">
            Place your order
          </button>`;

  document.querySelector(".js-payment-summary").innerHTML = paymentSummaryHTML;

  document
    .querySelector(`.js-order-place`)
    .addEventListener("click", async () => {
      try {
        const response = await fetch("https://supersimplebackend.dev/orders", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            cart: cart,
          }),
        });
        const orders = await response.json();
        console.log(orders);
      } catch (error) {
        console.log("unexpected occurs");
      }

      window.location.href = "orders.html";
    });
}
