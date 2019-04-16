// if (someting) {
//   do something
// } else {
//   do something else
// }

const id = 100;

// //Equal To
// if (id == 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// //Not equal to
// if (id != 101) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// // Equal to value and type
// if (id === 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

// // Equal to value and type
// if (id !== 100) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

//Test if undefined
// if (typeof id !== "undefined") {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log("NO ID");
// }

// GREATER OR LESS THAN
// if (id >= 200) {
//   console.log("CORRECT");
// } else {
//   console.log("INCORRECT");
// }

//IF Else
const color = "yellow";

// if (color === "red") {
//   console.log("Color is red");
// } else if (color === "blue") {
//   console.log("Color is blue");
// } else {
//   console.log("Color is not red or blue");
// }

//Logical Operations

const name = "Steve";
const age = 70;

//AND &&
if (age > 0 && age < 12) {
  console.log(`${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is and adult`);
}

// OR ||
if (age < 16 || age > 65) {
  console.log(`${name} cannot run in race`);
} else {
  console.log(`${name} is registered for the race`);
}

//TERNARY Operator
console.log(id === 100 ? "Correct" : "Incorrect");

//without curly brackets

if (id === 100) console.log("Correct");
else console.log("Incorrect");
