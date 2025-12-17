// var num = 10;
// var num = 20;

// console.log(num);

// let salary = 10000;
//let salary = 5100;

// const y1 = [200, 300];
// const y2 = [800, 900];
// const y3 = [1000, ...y1, 9000, ...y2]; //[200,300,800,900]

// console.log(y3);

// const book = {
//   name: "Harry Potter II: Chamber of secrets",
//   author: "J.K.Rowling",
// };

// const details = {
//   year: 2002,
//   price: 1200,
// };

// const merge = {
//   ...book,
//   ...details,
// };

// console.log(merge);

const details = {
  authorAge: 45,
  year: 2002,
  price: 1200,
};

const book = {
  name: "Harry Potter II: Chamber of secrets",
  author: "J.K.Rowling",
  authorAge: 55,
};

const fullDetails = {
  ...book,
  ...details,
};

console.log(fullDetails);
