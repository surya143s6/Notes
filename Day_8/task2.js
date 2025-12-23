//  Task 2.2
// const mergeInventory = (shelf = [], delivery = []) => [...shelf, ...delivery];

// const shelf = undefined;
// const delivery = ["🍫", "🍇"];

// console.log(mergeInventory(shelf, delivery));

// Task 3

// printPattern("🐳", 3);

// function printpattern(emoji, noOfrows) {
//   for (let s = 1; s <= noOfrows; s++) {
//     console.log(emoji.repeat(s));
//   }
// }

// printpattern("🐳", 3);

// Task 4

function printpattern(emoji = "❤️", noOfrows = 5) {
  for (let s = 1; s <= noOfrows; s++) {
    console.log(emoji.repeat(s));
  }
}
printpattern();
