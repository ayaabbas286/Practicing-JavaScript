
// Task 1 
/// Replace ? With Arithmetic Operators
console.log(((10 * 20 * 15 * 3 * 190) % 10) * 400); // 0
let num = 3;

// Task 2
// Solution One
console.log(num + num); // 6
// Solution Two
console.log((num * num * num) / num - num); // 6
// Soultion Three
console.log(++num + true + true); // 6
// Soultion Four
console.log(++num + true); // 6
// Solution Five
console.log(++num); // 6
// Solution Six
console.log(++num - true); // 6

//Task 3
let _num = "10";

// Solution One
console.log(+_num + +_num); // 20
// Solution Two
console.log(Number(_num) + Number(_num)); // 20
// Solution Three
console.log(++_num + ++_num - (true + true + true)); // 20
// Solution Four
console.log(_num + --num + (true + true)); // 20

//Task 4
let points = 10;

// Write Your Code Here
console.log(++points + (true + true)); // 13
// Write Your Code Here
console.log(--points - (true + true)); // 8;

//number challenge

let a = "-100";
let b = "20";
let c = 30;
let d = true;
console.log(-b * +a); // 2000  100 /20  30 1
console.log(++b * ++d + -a + ++c); // 173
