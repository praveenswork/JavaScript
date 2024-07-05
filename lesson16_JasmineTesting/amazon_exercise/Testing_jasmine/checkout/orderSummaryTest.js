import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";

describe("Test Suit : check order summary", () => {
  it("test passed successfully ", () => {
    document.querySelector(
      ".js-test-summary"
    ).innerHTML = `<div class="js-order-cart-summary"></div>
    <div class="js-checkout-heading"></div>`;

    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

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
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2");
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain("Quantity: 3");
    document.querySelector(".js-test-summary").innerHTML = "";
  });

  it("remove a product", () => {
    spyOn(localStorage, "setItem");

    document.querySelector(
      ".js-test-summary"
    ).innerHTML = `<div class="js-order-cart-summary"></div>
     <div class="js-checkout-heading"></div>
     <div class="js-payment-summary"></div>`;

    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

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
    document.querySelector(`.js-delete-cart-${productId1}`).click();
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      1
    );
    expect(document.querySelector(`.js-cart-product-${productId1}`)).toEqual(
      null
    );
    expect(
      document.querySelector(`.js-cart-product-${productId2}`)
    ).not.toEqual(null);

    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);

    document.querySelector(".js-test-summary").innerHTML = "";
  });
});
