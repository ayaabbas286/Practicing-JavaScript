console.log("===== Task 1 =====");
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;
// Method 1
let myFriends_updated = myFriends;
myFriends_updated.pop();
console.log(myFriends_updated); // ["Ahmed", "Elham", "Osama"];
// Method 2

console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

console.log("===== Task 2 =====");

let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift();
friends.pop();
console.log(friends); // ["Eman", "Osama"]

console.log("===== Task 3 =====");
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
finalArr = finalArr.concat(arrOne, arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]

console.log("===== Task 4 =====");

let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2).toUpperCase()); // ZERO

console.log("===== Task 5 =====");

let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions

Founded = haystack.includes(needle);
if (Founded) {
  console.log("Founded From solution 1 ");
}
Founded = haystack.indexOf(needle);
if (Founded !== -1) {
  console.log("Founded From solution 2 ");
}
Founded = haystack.lastIndexOf(needle);
if (Founded !== -1) {
  console.log("Founded From solution 3 ");
}

console.log("===== Task 6 =====");

let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs = allArrs.concat(arr1, arr2).sort().join("").toLowerCase();
allArrs=allArrs.substring(4)
console.log(allArrs); // fxy
