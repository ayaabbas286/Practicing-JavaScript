//Task 1

let userName = "Elzero";

console.log(userName[0].toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase().repeat(3)); // eee

//Task 2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.toLocaleUpperCase().includes(letterZ.toUpperCase())); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
