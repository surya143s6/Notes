const chefOrders = [
  { id: 1, chef: "John Doe", dishName: "Burger", ratings: [5, 4, 5] },
  { id: 2, chef: "John Doe", dishName: "Fries", ratings: [4, 4] },
  { id: 3, chef: "Jane Smith", dishName: "Pizza", ratings: [4, 3, 5] },
  { id: 4, chef: "Jane Smith", dishName: "Gelato", ratings: [5, 5, 4, 4] },
  { id: 5, chef: "Tom Brown", dishName: "Sushi", ratings: [5, 5, 4] }
];

const getTotalRatingsForChefs=(orderList) =>{
    
}


console.log(getTotalRatingsForChefs(chefOrders));
// { "John Doe": 5, "Jane Smith": 7, "Tom Brown": 3 }
