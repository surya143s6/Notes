const orderA = {
  dish: { name: "Burger", category: "Fast Food" },
  quantity: 2,
  price: 5,
};
const orderB = { dish: { name: "Pizza" }, quantity: 1, price: 8 }; // category missing
const orderC = { quantity: 0, price: 0 }; // 0 values are valid
const orderD = { dish: null, quantity: 3, price: null }; // dish missing, price null

// function getOrderLine(order) {
//   let name = "Unknown Dish";
//   let category = "Unknown Category";
//   let qty = 0;
//   let price = 0;

//   if (order && order.dish && order.dish.name) name = order.dish.name;
//   if (order && order.dish && order.dish.category)
//     category = order.dish.category;

//   if (order && order.quantity) qty = order.quantity; // BUG: 0 treated as missing
//   if (order && order.price) price = order.price; // BUG: 0 treated as missing, null too

//   const parts = [name + " (" + category + ")", "x" + qty, "$" + price];

//   let out = "";
//   for (let i = 0; i < parts.length; i++) out += (i ? " " : "") + parts[i];
//   return out;
// }

const getOrderLine = (order) => {
  const name = order?.dish?.name ?? "Unknown Dish";
  const category = order?.dish?.category ?? "Unknown Category";
  const qty = order?.quantity ?? 0;
  const price = order?.price ?? 0;

  return `${name} (${category}) x${qty} $${price}`;
};

console.log(getOrderLine(orderA));
console.log(getOrderLine(orderB));
console.log(getOrderLine(orderC));
console.log(getOrderLine(orderD));
console.log(getOrderLine(undefined));

// Burger (Fast Food) x2 $5
// Pizza (Unknown Category) x1 $8
// Unknown Dish (Unknown Category) x0 $0
// Unknown Dish (Unknown Category) x3 $0
// Unknown Dish (Unknown Category) x0 $0
