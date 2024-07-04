import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";

describe("Test Suit : check order summary", () => {
  it("test passed successfully ", () => {
    document.querySelector(
      ".js-test-summary"
    ).innerHTML = `<div class="js-order-cart-summary"></div>`;

    // spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
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
      ]);
    });
    loadFromStorage();
    renderOrderSummary();
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      2
    );
  });
});
