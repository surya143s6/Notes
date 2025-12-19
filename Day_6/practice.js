const student = {
  name1: "Abishek",
  age: 25,
  address: {
    city: "Trichy",
    state: "Tn",
  },
  hobbies: ["cricket", "football", "carrom"],
};

// const { name1 } = student;
// console.log(name1);

// const { address } = student;
// const { city } = address;
// console.log(city);

// const { hobbies } = student;
// console.log();

// const { name1 } = student;
// console.log(name);
// const { city } = address;
// console.log(city);

// const {
//   name1,
//   address: { city },
//   hobbies: [, h2],
// } = student;

// console.log(name1, city, h2);

//case:1 city is trichy
//case:2 city is na

const student1 = {
  address: {
    //city: "tirichy",
  },
};

const {
  address: { city = "n/a" },
} = student1;

console.log(city);
