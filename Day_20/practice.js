// https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital

// Task 1.1
// Get all countries common name
// Output ['China', 'India', .... 250 countries]

// fetch(
//   "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
// )
//   .then((response) => response.json())
//   .then((result) => result.map((result1) => result1.name.common))
//   .then((value) => console.log(value));

//   ask 1.2 🌍
// Print names of countries with a population of more than 10,000,000 (1 crore). Sort them in descending order of population.
// Output Format:

// ["India", "China", "Russia", ...]

// fetch(
//   "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
// )
//   .then((response) => response.json())
//   .then((population1) =>
//     population1
//       .filter((population2) => population2.population > 1_00_00_000)
//       .toSorted((a, b) => b.population - a.population)
//       .map((getHighestPopulation) => getHighestPopulation.name.common),
//   )
//   .then((pop1) => console.log(pop1));

// Task 1.3 📊
// Print countries with a population of more than 10,000,000.

// Output Format:

// 01. India - 150000000
// 02. China - 120000000
// 03. Russia - 80000000
// ..
// 10. Austraila - 300000
// ...
// function task3() {
//   fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
//   )
//     .then((response) => response.json())
//     .then((populations) =>
//       populations
//         .toSorted((a, b) => b.population - a.population)
//         .map(
//           (country, index) =>
//             `${String(index + 1).padStart(2, "0")}. ${country.name.common} - ${country.population} `,
//         )
//         .slice(0, 10)
//         .join("\n"),
//     )
//     .then((result) => console.log(result));
// }

// task3();

// Task 1.4 🔟
// Get the top 10 most populated countries in descending order.

// Output Format:

// 1. India - 150000000
// 2. China - 120000000
// ...
//

function task4() {
  fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  )
    .then((response) => response.json())
    .then((populations) =>
      populations
        .filter((topPopulation) => topPopulation.population > 10_000_000)
        .toSorted((a, b) => b.population - a.population)
        .map(
          (country, index) =>
            `${String(index + 1).padStart(2, "0")}. ${country.name.common} - ${country.population} `,
        )
        .slice(0, 10)
        .join("\n"),
    )
    .then((result) => console.log(result));
}

task4();

// Task 1.5 📋
// Display the Top 10 most populated countries on the screen as a list.


