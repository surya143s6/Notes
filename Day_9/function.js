function sayHello() {
  return function () {
    console.log("Hello! ❤️");
  };
}

// method 1
// const result = sayHello();
// result();

// method 2

sayHello()();
