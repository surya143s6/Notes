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

fetch(
  "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
)
  .then((response) => response.json())
  .then((population1) =>
    population1
      .filter((population2) => population2.population > 1_00_00_000)
      .toSorted((a, b) => b.population - a.population)
      .map((getHighestPopulation) => getHighestPopulation.name.common),
  )
  .then((pop1) => console.log(pop1));
