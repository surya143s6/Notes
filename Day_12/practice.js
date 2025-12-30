// const Alphabets = ["A", "B", "C", "D"];

// const newAlphabets = Alphabets.toSpliced(1, 3);

// console.log(newAlphabets);
// console.log(Alphabets);

// const arr = [1, 7, 3, 10, 5];
// const arr1 = arr.reduce((acc, curr) => acc > curr ? acc : curr);
// return arr1
// const arr1 = arr.reduce.apply((acc,curr) => acc+ )

const arr = [1, 7, 3, 50, 5];

const arr1 = arr.reduce((acc, curr) => (acc > curr ? acc : curr));

console.log(arr1);
