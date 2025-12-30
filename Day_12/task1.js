// const arr = [1, 7, 3, 50, 5];

// const arr1 = arr.reduce((acc, curr) => (acc > curr ? acc : curr));

// console.log(arr1);

const scores = [
  {
    marks: 32,
    name: "Yvette Merritt",
  },
  {
    marks: 57,
    name: "Lillian Ellis",
  },
  {
    marks: 22,
    name: "Mccall Carter",
  },
  {
    marks: 21,
    name: "Pate Collier",
  },
  {
    marks: 91,
    name: "Debra Beard",
  },
  {
    marks: 75,
    name: "Nettie Hancock",
  },
  {
    marks: 20,
    name: "Hatfield Hodge",
  },
];

const highestMark = scores.reduce((acc, curr) =>
  acc.marks > curr.marks ? acc : curr
);

console.log(highestMark.name);
