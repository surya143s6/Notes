// const orders = [
//   { id: 1, dishName: "Burger", category: "Fast Food", chef: "John Doe", ratings: [5, 4, 5] },
//   { id: 2, dishName: "Pizza", category: "Italian", chef: "Jane Smith", ratings: [4, 3, 5] },
//   { id: 3, dishName: "Sushi", category: "Japanese", chef: "Tom Brown", ratings: [5, 5, 4] },
//   { id: 4, dishName: "Salad", category: "Healthy", chef: "Alice Green", ratings: [3, 4, 5] },
//   { id: 5, dishName: "Pasta", category: "Italian", chef: "Gowtam Tinnanuri", ratings: [4, 4, 5] }
// ];

// const { get } = require("https");

// const moreOrders = [
//   { id: 6, dishName: "Tacos", category: "Mexican", chef: "Carlos Ruiz", ratings: [4, 5, 4] },
//   { id: 7, dishName: "Ramen", category: "Japanese", chef: "Yuki Tanaka", ratings: [5, 4, 5] }
// ];

// const getHighRatedDishes=(baseOrders, extraOrders = [])

// console.log(getHighRatedDishes(orders));
// // Burger, Sushi, Pasta

// console.log(getHighRatedDishes(orders, moreOrders));
// // Burger, Sushi, Pasta, Tacos, Ramen

// console.log(getHighRatedDishes([], moreOrders));
// // Tacos, Ramen

const movies = [
  { id: 1, title: "Baahubali", ratings: [8, 9, 10] },
  { id: 2, title: "Arjun Reddy", ratings: [9, 8, 9] },
  { id: 3, title: "Mahanati", ratings: [10, 9, 8] },
  { id: 4, title: "Eega", ratings: [7, 8, 9] },
  { id: 5, title: "Jersey", ratings: [9, 9, 8] },
];

// Write a function that finds highest rating for each movie
const getMoviesWithHighestRatings = (movies) => {
  return movies.map(({ title, ratings }) => ({
    title,
    highestRating: Math.max(...ratings),
  }));
};

console.log(JSON.stringify(getMoviesWithHighestRatings(movies)));

