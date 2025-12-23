// 1 .function declaration

function add(a, b) {
  return a + b;
}
console.log(add(3, 5));

// 2 .function expression\

const add1 = function (a, b) {
  return a + b;
};

console.log(add1(3, 4)); //7
console.add(typeof add); //function

// 3.Arrow function  -- we dont know to function required

const add2 = (a, b) => {
  return a + b;
};

// only the function

console.log(add2(3, 4)); //4

// 5.Anonymous function + function expression

const result = [1, 2, 3].map(function (n) {
  return n * 2;
});

const result1 = [1, 2, 3].map((n) => {
  return n * 2;
});

//Anonymous function + arrow function

const result2 = [1, 2, 3].map((n) => n * 2);
