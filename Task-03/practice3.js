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

const getDishNamesByIds = (orders, ...ids) =>
  `Selected Dishes: ${ids
    .map(
      (id) =>
        orders.find((order) => order.id === id)?.dishName ?? "Unknown Dish"
    )
    .join(", ")}`;

console.log(getDishNamesByIds(orders, 1, 3, 5));
// Selected Dishes: Burger, Sushi, Pasta

console.log(getDishNamesByIds(orders, 1, 6));
// Selected Dishes: Burger, Unknown Dish

console.log(getDishNamesByIds(orders, 5, 1));
// Selected Dishes: Pasta, Burger

console.log(getDishNamesByIds(orders, 3, 3, 999));
// Selected Dishes: Sushi, Sushi, Unknown Dish
