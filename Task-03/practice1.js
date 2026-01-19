const orders = [
  {
    id: 1,
    dishName: "Burger",
    category: "Fast Food",
    chef: "John Doe",
    ratings: [5, 4, 5],
  },
  {
    id: 2,
    dishName: "Pizza",
    category: "Italian",
    chef: "Jane Smith",
    ratings: [4, 3, 5],
  },
  {
    id: 3,
    dishName: "Sushi",
    category: "Japanese",
    chef: "Tom Brown",
    ratings: [5, 5, 4],
  },
  {
    id: 4,
    dishName: "Salad",
    category: "Healthy",
    chef: "Alice Green",
    ratings: [3, 4, 5],
  },
  {
    id: 5,
    dishName: "Pasta",
    category: "Italian",
    chef: "Gowtam Tinnanuri",
    ratings: [4, 4, 5],
  },
];

const moreOrders = [
  {
    id: 6,
    dishName: "Tacos",
    category: "Mexican",
    chef: "Carlos Ruiz",
    ratings: [4, 5, 4],
  },
  {
    id: 7,
    dishName: "Ramen",
    category: "Japanese",
    chef: "Yuki Tanaka",
    ratings: [5, 4, 5],
  },
];

function listOrders1(...orderItems) {
  return orderItems
    .map((order) => {
      return ` ${order?.dishName ?? "Unknown Dish"} (${
        order?.category ?? "Unknown Category"
      })`;
    })
    .join(",");
}

function listOrders2(...orderItems) {
  return orderItems
    .map(
      (order) =>
        ` ${order?.dishName ?? "Unknown Dish"} (${
          order?.category ?? "Unknown Category"
        })`
    )
    .join(",");
}

const listOrders3 = (...orderItems) => {
  return orderItems
    .map(
      (order) =>
        ` ${order?.dishName ?? "Unknown Dish"} (${
          order?.category ?? "Unknown Category"
        })`
    )
    .join(",");
};

const listOrders = (...orderItems) =>
  orderItems
    .map(
      (order) =>
        ` ${order?.dishName ?? "Unknown Dish"} (${
          order?.category ?? "Unknown Category"
        })`
    )
    .join(",");

    // function definition : It collects all arguments passed to the function into an array
    //.map() goes through each order object in the array

// console.log(listOrders(...orders));
// Burger (Fast Food), Pizza (Italian), Sushi (Japanese), Salad (Healthy), Pasta (Italian)

console.log(listOrders(orders[0], orders[1], orders[111]));
// Burger (Fast Food), Pizza (Italian), Unknown Dish (Unknown Category)
