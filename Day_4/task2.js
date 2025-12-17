// Task 3.1 - TextCase - Dont consider
// Output
// Case 1
// Please enter your fav 🍧?: vanilla
// Yes, we have vanilla in stock

// Case 2
// Please enter your fav 🍧?: strawberry
// We ran out of strawberry

var stock1 = "vanilla";
var stock2 = "chocolate";
var stock3 = "butterscotch";
var stock4 = "cotton candy";

var stocks = prompt("Please enter your fav ice cream?");

if (stock1 == stocks) {
  console.log("Yes, we have vennila");
} else if (stock2 == stocks) {
  console.log("Yes we have choclate");
} else if (stock3 == stocks) {
  console.log("Yes we have butter scotch");
} else if (stock4 == stocks) {
  console.log("Yes we have cotton candy");
} else {
  console.log("Out of stock");
}
