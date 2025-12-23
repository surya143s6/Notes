// Task 1.1

//  Task 2.2

//  Task 2.1
const introduceWizard = ({ title = "Master", name, wand: { core } }) =>
  `🪄 ${title} ${name} wields a wand with ${core}.`;

const wizard = {
  name: "Merlin",
  title: "Archmage",
  wand: { core: "Phoenix Feather" },
};

console.log(introduceWizard(wizard));
