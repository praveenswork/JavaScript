import { cart, selectQuantity, loadFromStorage } from "../../data/cart.js";

describe("Test Suit : Cart Products", () => {
  it("product added to cart", () => {
    spyOn(localStorage, "getItem").and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();
    // console.log(localStorage.getItem("cart"));

    selectQuantity("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    // console.log(cart.length);
  });
});
