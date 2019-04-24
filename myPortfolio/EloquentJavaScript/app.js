// Looping Triangle
for (let line = "#"; line.length < 8; line += "#") {
  //console.log(line);
}

// Fizz Buzz
for (let number = 1; number <= 100; number += 1) {
  let output = "";
  if (number % 3 == 0) output += "Fizz";
  if (number % 5 == 0) output += "Buzz";
  //console.log(output || number);
}

// Chessboard
let size = 8;
let board = "";

for (let y = 0; y < size; y++) {
  for (let x = 0; x < size; x++) {
    if ((x + y) % 2 == 0) {
      board += " ";
    } else {
      board += "#";
    }
  }
  board += "\n";
}

console.log(board);
