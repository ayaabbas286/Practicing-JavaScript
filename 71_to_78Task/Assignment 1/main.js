let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

// Elzero
let newMix = [];
let newArray = mix.map((e) =>
  isNaN(e) ? e : ""
).reduce((acc, curr)=> `${acc}${curr}`) 
console.log(newArray);
