export let deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];

export function getdeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });
  return deliveryOption || deliveryOptions[0];
}

// export function calculateDeliveryDate(deliveryDays, deliveryOptionId) {
//   if (deliveryDays === "Sunday" || deliveryDays === "Saturday") {
//     getdeliveryOption(deliveryOptionId);
//   }
// }
