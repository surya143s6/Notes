const books = [
  { title: "Infinite Jest", rating: 4.5, genre: "Fiction" },
  { title: "The Catcher in the Rye", rating: 3.9, genre: "Fiction" },
  { title: "Sapiens", rating: 4.9, genre: "History" },
  { title: "A Brief History of Time", rating: 4.8, genre: "Science" },
  { title: "Clean Code", rating: 4.7, genre: "Technology" },
];

function getTiltles(books) {
  let new2 = [];
  for (let book of books) {
    if (genre == "fiction") {
      new2.push(book.title.genre);
    }
  }
  return new2;
}

console.log(getTitles(books));
