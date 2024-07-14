import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import "../data/cart_OOP.js";            practice oop
// import "../data/cart_class.js";          practice class
// import "../data/car.js"; car obj         practice object
// import "../backend/practice_backend.js";  practice backend
import { backend } from "../app.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

backend();
loadProductsFetch();
async function loadPage() {
  try {
    await loadProductsFetch();

    loadCart();

    renderOrderSummary();
    renderPaymentSummary();
  } catch {
    console.log("error occure");
  }
}
loadPage();

// Promise.all([
//   loadProductsFetch(),
//   new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   }),
// ]).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
//   console.log("promise end");
// });

// promise callbaks
// new Promise((resolve) => {
//   loadProducts(() => {
//     console.log("resolved");
//     resolve();
//   });
// }).then(() => {
//   new Promise(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//     console.log("solved");
//   });
// });

// normal callbacks
// loadProducts(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });
