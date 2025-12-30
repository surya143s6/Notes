const csk1 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    win: 5,
    loss: 11,
  },
};

console.log(csk1.stats.win);

const csk2 = {
  captain: "MSD",
  color: "yellow",
  stats: {
    // win: 5,
    loss: 11,
  },
};

console.log(csk2.stats.win); // undefined

const x = {};
console.log(x.a); // undefined

const csk3 = {
  captain: "MSD",
  color: "yellow",
};

// console.log(csk3.stats.win); // Cannot read properties of undefined (reading 'win')

const csk4 = null;

// console.log(csk4.stats.win);
// Cannot read properties of null

// All cases we want the win
// Case 1: 5   Case 2,3 & 4 : 'Data not found'

function getWinStat(team) {
  return team?.stats?.win ?? "Data Not Found";
}

console.log(getWinStat(csk1)); // 5
console.log(getWinStat(csk2)); // 'Data not found'
console.log(getWinStat(csk3)); // 'Data not found'
console.log(getWinStat(csk4)); // 'Data not found'

//if(!team && team.stats && team.stats.win){
//return team.stats.win
//}
//return "Data Not Found";
