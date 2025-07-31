let myString = "EElllzzzzzzzeroo";
let newString = myString.split("").filter((e, i, arr) => e !== arr[i - 1]).join("");
// Elzero
console.log(newString);
