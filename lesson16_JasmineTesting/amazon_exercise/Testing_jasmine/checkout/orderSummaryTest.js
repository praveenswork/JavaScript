import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart, removeCartProduct } from "../../data/cart.js";

describe("Test Suit : check order summary", () => {
  const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
  const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

  // this function name is HOOK ==> beforeEach ()hook
  beforeEach(() => {
    //this function is check the all code and support each codes before
    document.querySelector(
      ".js-test-summary"
    ).innerHTML = `<div class="js-order-cart-summary"></div>
    <div class="js-checkout-heading"></div>
    <div class="js-payment-summary"></div>`;

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
  });

  afterEach(() => {
    // this func check after each functions
    document.querySelector(".js-test-summary").innerHTML = "";
  });
  it("test passed successfully ", () => {
    expect(document.querySelectorAll(".js-cart-item-container").length).toEqual(
      2
    );
    expect(
      document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain("Quantity: 2");
    expect(
      document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain("Quantity: 3");
    // document.querySelector(".js-test-summary").innerHTML = "";
  });

  it("remove a product", () => {
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
  });
  it("name checking for products", () => {
    expect(document.querySelector(`.product-name`).innerText).toEqual(
      "Black and Gray Athletic Cotton Socks - 6 Pairs"
    );
    expect(document.querySelector(`.product-price`).innerText).toEqual(
      "$10.90"
    );
  });
});

describe("Test Suit : To remove the product ", () => {
  beforeEach(() => {
    spyOn(localStorage, "setItem");
  });

  it("no errors with this function", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();
    removeCartProduct("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([])
    );
  });
  it("works if does not exist", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
      loadFromStorage();

      removeCartProduct("does-not-exist");
      expect(cart.length).toEqual(1);
      expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
      expect(cart[0].quantity).toEqual("1");
      expect(localStorage.setItem).toHaveBeenCalledTimes(1);
      expect(loadFromStorage.setItem).toHaveBeenCalledWith(
        "cart",
        JSON.stringify([
          {
            productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
            quantity: 1,
            deliveryOptionId: "1",
          },
        ])
      );
    });
  });
});
