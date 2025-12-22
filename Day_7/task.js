// function sum(a, b, ...arr) {
//   console.log(arr);
//   return a + b;
// }

// console.log(1, 2);
// console.log(1, 2, 3);
// console.log(1, 2, 3, 4);

// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));

// function moodReport(new1 = "😊", new2 = "evening") {
//   return `feeling ${new1} this ${new2}`;
// }
// console.log(moodReport());
// console.log(moodReport("😎", "afternoon ☀️"));

// task 1.2
// function checkAgeCategory(age = 18) {
//   if (age >= 60) {
//     return "Senior";
//   } else if (age < 18) {
//     return "minor";
//   } else {
//     return "adult";
//   }
// }

// console.log(checkAgeCategory());
// console.log(checkAgeCategory(12));
// console.log(checkAgeCategory(65));

//task 1.3

// const wizard = { name: "Merlin", title: "Archmage", wand: { core: "Phoenix Feather" } };
// console.log(introduceWizard(wizard));

// const coordinates = [[1, 2], , [5, 6]]; // Hole at index 1
// const [[x1, y1], [x2 = 1, y2 = 1] = [], [x3, y3]] = coordinates;

// console.log(x1, y1); // Outputs: 1 2
// console.log(x2, y2); // Outputs: 0 0 (default values applied)
// console.log(x3, y3); // Outputs: 5 6
