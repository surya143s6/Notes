const chefOrders = [
  { id: 1, chef: "John Doe", dishName: "Burger", ratings: [5, 4, 5] },
  { id: 2, chef: "John Doe", dishName: "Fries", ratings: [4, 4] },
  { id: 3, chef: "Jane Smith", dishName: "Pizza", ratings: [4, 3, 5] },
  { id: 4, chef: "Jane Smith", dishName: "Gelato", ratings: [5, 5, 4, 4] },
  { id: 5, chef: "Tom Brown", dishName: "Sushi", ratings: [5, 5, 4] },
];

const getTotalRatingsForChefs = (orderList) => {
  return orderList.reduce((acc, curr) => {
    acc[curr.chef] = (acc[curr.chef] || 0) + curr.ratings.length;
    return acc;
  }, {});
};

const getTotalRatingsForChefs1 = (orderList) => {
  return orderList.reduce((acc, curr) => {
    acc[curr.chef] = acc[curr.chef]
      ? acc[curr.chef] + curr.ratings.length
      : curr.ratings.length;
    return acc;
  }, {});
};

console.log(getTotalRatingsForChefs(chefOrders));
// { "John Doe": 5, "Jane Smith": 7, "Tom Brown": 3 }

let x = {};

x["Jack"] = 5;

x["Jack"] = x["Jack"] ? x["Jack"] + 10 : 10;

console.log(x);
