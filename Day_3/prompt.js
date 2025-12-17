//var fullname = prompt("What is your name?");

//console.log(fullname);
//console.log(fullname + " welcome to bcs");

var noofpersons = prompt("How many members travel:");

if (noofpersons <= 2) {
  console.log("bike");
} else if (noofpersons <= 4) {
  console.log("auto");
} else if (noofpersons <= 5) {
  console.log("car");
} else {
  console.log("bus");
}
