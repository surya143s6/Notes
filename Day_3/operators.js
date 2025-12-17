console.log("operators");
// typecasting / coercion
// + --> Overloaded operator
// 1. concatenation (prefers)
// 2. Addition

console.log(5 + "3");
console.log(5 - "3");

// automatica nadantha Implicit coercian decides itself
console.log(5 + "3"); // Js itself converting

//change below
//2. explicit coercian
//converting into number
// 1. parceInt
// 2. parceFloat
// 3. Number
// 4. +

var a = 5;
var b = "3.70";

console.log(a + parseFloat(b)); //8.70

var a = 5;
var b = "3.70";

console.log(a + parseInt(b)); //8

var a = 5;
var b = "3.70";

console.log(a + Number(b));

var a = 5;
var b = "3.70";

console.log(a + +b); //8.70

// null & undefined --> Bottom values

//Declarations --> creating a variable

var p;

//Assignment

p = 10;

console.log(p); //js assigns undefined

var a = null; //avoid null

//undefined and not defined
// undefined is a value   not defined is a error
console.log(surya); //not defined --> error

var g1 = 5;
var g2 = "5";

console.log(g1 == g2);
console.log(g1 === g2);

// === checks directly
// == coercion check
