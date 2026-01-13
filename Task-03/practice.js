// 1. Use template literals to create a greeting message. Learn the power of string interpolation!

// Expected Output
// Hello, Alice!
// Hello, Bob!

// const newUser = (name) => {
//   return `Hello ${name}`;
// };
// console.log(newUser("Bob"));
// console.log(newUser("Alice"));

//code
// const newUser = (name) => {
//   return `Hello ${name}`;
// };

// console.log(newUser("surya"));
// console.log(newUser("jacob"));

//2. Write a function that takes a user object and returns a message indicating their activity status using template literals and ternary operator.

// Expected Output
// Jane is currently active
// John is currently inactive
// Alice is currently inactive

//code

// const user1 = { name: "Jane", active: true };
// const user2 = { name: "John", active: false };
// const user3 = { name: "Alice", active: null };

// const getUserStatus = ({ name, active }) => {
//   return `${name} is currently ${active ? "active" : "inactive"}`;
// };

// console.log(getUserStatus(user1));
// console.log(getUserStatus(user2));
// console.log(getUserStatus(user3));

// 3.Extract properties from an object using destructuring assignment.

// Expected Output
// Alice is 30 years old

// const userName = { name: "surya", age: "25", city: "vellore" };

// const getUserName = (userName) => {
//   const { name, age } = userName;
//   return `${name} is ${age} old`;
// };
// console.log(getUserName(userName));

// 4 .Extract elements from an array using destructuring assignment.

// Expected Output
// First: red, Second: green

// const colors = ["red", "green", "blue", "yellow"];
// const coordinates = [10, 20];

// const extractElements = (colors) => {
//   const [surya, rio] = colors;
//   return `First:${surya}, Second:${rio}`;
// };
// console.log(extractElements(colors));

// 5. Use the spread operator to combine arrays and copy objects.

// Expected Output
// ["apple","banana","carrot","broccoli"]

// const fruits = ["apple", "banana"];
// const vegetables = ["carrot", "broccoli"];

// const getAllFruits = (fruits, vegetables) => {
//   const box = [...fruits, ...vegetables];
//   return box;
// };
// console.log(getAllFruits(fruits, vegetables));

// // 6. Write a function that extracts the user's name and theme, providing default values if they are missing using destructuring with default values.

// // Expected Output
// // Eve prefers the dark theme
// // Adam prefers the light theme

// const userProfile = {
//   id: 1,
//   name: "Eve",
//   settings: {
//     theme: "dark",
//   },
// };

// const getDefaultValue = { id: 2, name: "surya", settings: { theme: "light" } };

// const getUser = (profile) => {
//   const { name, settings: { theme }} = profile;
//   return `${name} prefers the ${theme} theme`;
// };
// console.log(getUser(userProfile));
// console.log(getUser(getDefaultValue));

//7. Create a basic arrow function that adds two numbers. This is your first step into ES6!

// Expected Output
// 8
// 17

// const add = (a, b) => a + b;

// console.log(add(2, 5));

// using object destructuring extract name and city
// expected output surya is 26 years old living in vellore
// rio is 27 years old living in london

// const userProfile = {
//   id: 12,
//   name: "surya",
//   person: { age: "26", city: "vellore" },
// };

// const getDefaultValue = { name: "rio", person: { age: "27", city: "london" } };

// const getUser = (profile) => {
//   const {
//     name,
//     person: { age, city },
//   } = profile;
//   return `${name} is ${age} old,live in ${city}`;
// };
// console.log(getUser(getDefaultValue));
// console.log(getUser(userProfile));

// 8.Write a function that merges two arrays of movies into one using the spread operator and provides a default value for the second array.

// Expected Output
// [{"id":1,"title":"Baahubali","genre":"Action"},{"id":2,"title":"Arjun Reddy","genre":"Drama"},{"id":3,"title":"Jersey","genre":"Sports"},{"id":4,"title":"Eega","genre":"Fantasy"}]
// [{"id":1,"title":"Baahubali","genre":"Action"},{"id":2,"title":"Arjun Reddy","genre":"Drama"}]

// const movies = [
//   { id: 1, title: "Baahubali", genre: "Action" },
//   { id: 2, title: "Arjun Reddy", genre: "Drama" },
// ];

// const moreMovies = [
//   { id: 3, title: "Jersey", genre: "Sports" },
//   { id: 4, title: "Eega", genre: "Fantasy" },
// ];

// const merge1 = (movies, moreMovies = []) => {
//   return [...movies, ...moreMovies];
// };
// console.log(merge1(movies, moreMovies));
// console.log(merge1(movies));

// 9. Write a function that accepts any number of movie objects and returns an array of their titles using the rest operator.

// Expected Output
// ["Baahubali","Arjun Reddy","Jersey"]
// ["Baahubali","Arjun Reddy"]

// const movie1 = { id: 1, title: "Baahubali", genre: "Action" };
// const movie2 = { id: 2, title: "Arjun Reddy", genre: "Drama" };
// const movie3 = { id: 3, title: "Jersey", genre: "Sports" };

// const getMovieTitle = (...movies) => {
//   return movies.map((name) => name.title);
// };

// console.log(JSON.stringify(getMovieTitle(movie1, movie2, movie3)));
// console.log(JSON.stringify(getMovieTitle(movie1, movie2)));

// 10. Safely access object properties that might not exist using optional chaining.

// Expected Output
// 25
// undefined
// undefined

// const user1 = { name: "Alice", age: 25 };
// const user2 = { name: "Bob" };
// const user3 = null;

// const getUserAge = (name) => {
//   return name?.age;
// };

// console.log(getUserAge(user1));
// console.log(getUserAge(user2));
// console.log(getUserAge(user3));

//11. Provide default values for null or undefined using the nullish coalescing operator..

// Expected Output
// dark
// light
// light
// light

// const settings1 = { theme: "dark" };
// const settings2 = { theme: null };
// const settings3 = { theme: undefined };
// const settings4 = {};

// // const getTheme = (name) => {
// //   return name.theme ?? "Light";
// // };

// const getTheme = (...name) => {
//   return name.map((name1) => name1?.theme ?? "light");
// };

// console.log(getTheme(settings1));
// console.log(getTheme(settings2));
// console.log(getTheme(settings3));
// console.log(getTheme(settings4));

//12. Implement the getUserAge function to extract the user's age or provide a default message if it's not available using optional chaining and nullish coalescing.

// Expected Output
// Age not provided
// 25
// Age not provided

// const userData = {
//   user: {
//     profile: {
//       name: "Alice",
//       age: null,
//     },
//   },
// };

// const userAge = { user: { profile: { age: 25 } } };
// const userProfile = { user: {} };

// const getUserAge = (detail) => {
//   return detail?.user?.profile?.age ?? "Age not provided";
// };

// console.log(getUserAge(userData));
// console.log(getUserAge(userAge));
// console.log(getUserAge(userProfile));

// 13. Calculate the total price of all products in your cart using arrow functions and array methods.

// Expected Output
// 2200

// const products = [
//   { id: 1, name: "Laptop", price: 1000 },
//   { id: 2, name: "Phone", price: 500 },
//   { id: 3, name: "Tablet", price: 700 },
// ];

// const getTotalPrice = (products) =>
//   products.reduce((total, product) => total + product.price, 0);

// console.log(getTotalPrice(products));

// 14. Transform an array of numbers by doubling each value using the map method.

// Expected Output
// [2,4,6,8,10]

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = (number) => {
//   return number.map((number1) => number1 * 2);
// };

// console.log(JSON.stringify(doubleNumbers(numbers)));

// 15.Write a function that returns the name of a user's first friend using nested destructuring and array methods.

// Expected Output
// Bob
// Eve
// User not found
// Deepak has no friends 🥲

// const users = [
//   { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
//   { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
//   { id: 4, name: "Deepak", friends: [] },
// ];

// const getFirstFriendName = (users, userId) => {
//   const friend = users.find((friendName) => friendName.id === userId);
//   if (!friend) return `User not found`;
//   const { name, friends } = friend;
//   if (!friends.length) return `${name} has no friends`;
//   const [{ name: firstFriendName }] = friends;
//   return firstFriendName;
// };

// console.log(getFirstFriendName(users, 1));
// console.log(getFirstFriendName(users, 2));
// console.log(getFirstFriendName(users, 3));
// console.log(getFirstFriendName(users, 4));

//16. Filter an array to keep only even numbers using the filter method.

// Expected Output
// [2,4,6,8,10]

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const getEvenNumbers = (numbers) => {
//   return numbers.filter((num) => num % 2 == 0);
// };

// console.log(JSON.stringify(getEvenNumbers(numbers)));

//17. Sum all numbers in an array using the reduce method.

// Expected Output
// 15

// const numbers = [1, 2, 3, 4, 5];

// const sumNumbers = (numbers) => {
//   return numbers.reduce((acc, num) => acc + num, 0);
// };

// console.log(sumNumbers(numbers));

// 18.Write a function that generates a summary string for the top scorer using template literals and array methods.

// Expected Output
// Charlie is the top scorer with a score of 92

const scores = [
  { name: "Alice", score: 90 },
  { name: "Bob", score: 85 },
  { name: "Charlie", score: 92 },
  { name: "Diana", score: 88 },
];

const getTopScorer = (scores) => {
  const topscore = scores.reduce((acc, curr) =>
    curr.score > acc.score ? curr : acc
  );
  return `${topscore.name} is the top scorer with a score of ${topscore.score}`;
};

console.log(getTopScorer(scores));

console.log(getTopScorer(scores));
