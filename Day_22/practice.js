async function task1() {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
  );
  const population1 = await response.json();
  const pop1 = population1
    .filter((population2) => population2.population > 1_00_00_000)
    .toSorted((a, b) => b.population - a.population)
    .map((getHighestPopulation) => getHighestPopulation.name.common);
  console.log(pop1);
}

task1();

// async function task1() {
//   const population1 = await fetch(
//     "https://restcountries.com/v3.1/all?fields=name,flags,region,population,capital",
//   ).then((response) => response.json());
//   const pop1 = population1
//     .filter((population2) => population2.population > 1_00_00_000)
//     .toSorted((a, b) => b.population - a.population)
//     .map((getHighestPopulation) => getHighestPopulation.name.common);
//   console.log(pop1);
// }

// task1();

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
