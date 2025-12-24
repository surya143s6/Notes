const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];
// const title = [];
// // Clue: Array method - push()
// function getTitles(books) {
//   for (let i = 0; i < books.length; i++) {
//     title.push(books[i].title);
//   }
//   return title;
// }

// console.log(getTitles(books));

//2.method

function getTitles(books) {
  let new1 = [];
  for (let { title } of books) {
    new1.push(title);
  }
  return new1;
}
console.log(getTitles(books));
