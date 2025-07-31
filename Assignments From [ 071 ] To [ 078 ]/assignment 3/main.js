let myArray = ["E", "l", "z", ["e", "r"], "o"];
let newArray = myArray.reduce((acc, curr) => {
  return acc + (Array.isArray(curr) ? curr.join("") : curr);
}, "");
// Elzero
console.log(newArray); // Elzero