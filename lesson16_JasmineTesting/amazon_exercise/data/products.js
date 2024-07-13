import { formatCurrency } from "../scripts/utils/money.js";

export function getproducts(productId) {
  let matchingCartItem;
  products.forEach((product) => {
    if (productId === product.id) {
      matchingCartItem = product;
    }
  });
  return matchingCartItem;
}

class Products {
  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.stars = productDetails.stars;
    this.count = productDetails.count;
    this.priceCents = productDetails.priceCents;
  }
  getStartUrl() {
    return `images/ratings/rating-${this.rating.stars * 10}.png`;
  }
  getPrice() {
    return `$${formatCurrency(this.priceCents)}`;
  }
  extraInfoHTML() {
    return "";
  }
}

class Clothing extends Products {
  sizeChartLink;
  constructor(productDetails) {
    super(productDetails);
    this.sizeChartLink = productDetails.sizeChartLink;
  }
  extraInfoHTML() {
    return `
    <a href="${this.sizeChartLink}" target="_blank">
      Size chart
    </a>
  `;
  }
}

const newquest = new Clothing({
  id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
  image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
  name: "Adults Plain Cotton T-Shirt - 2 Pack",
  rating: {
    stars: 4.5,
    count: 56,
  },
  priceCents: 799,
  keywords: ["tshirts", "apparel", "mens"],
  type: "clothing",
  sizeChartLink: "images/clothing-size-chart.png",
});

// console.log(newquest.sizeChartLink);

export let products = [];

export function loadProducts(fun) {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", () => {
    products = JSON.parse(xhr.response).map((productDetails) => {
      if (productDetails.type === "clothing") {
        return new Clothing(productDetails);
      }
      // if (productDetails.keywords)
      return new Products(productDetails);
    });
    // console.log("load Products");
    fun();
  });

  xhr.open("GET", "https://supersimplebackend.dev/products");
  xhr.send();
}
loadProducts();
