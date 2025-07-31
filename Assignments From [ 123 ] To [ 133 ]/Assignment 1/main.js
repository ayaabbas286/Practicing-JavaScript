// Needed Output
// Set(3) {10, 20, 2}
let setOfNumbers = new Set().add(10);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log(setOfNumbers.size - 1);
