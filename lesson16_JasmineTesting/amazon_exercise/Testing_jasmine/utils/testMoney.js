import { formatCurrency } from "../../scripts/utils/money.js";

describe("Test Suit : format currency", () => {
  it("converted to cents", () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });
  it("converted with rounded", () => {
    expect(formatCurrency(2000.5)).toEqual("20.01");
  });
  it("convert with 0", () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });
  it("convert with negative", () => {
    expect(formatCurrency(-1)).toEqual("-0.01");
  });
});
