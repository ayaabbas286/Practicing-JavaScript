//Task 1

// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10 * 10 * 10 * 10 * 10); // 100000
console.log(10 ** 5); // 100000
console.log(100000.0); // 100000
console.log(1e5); // 100000
console.log(+"100000"); // 100000
console.log(parseInt("100000 aya")); // 100000
console.log(Math.ceil(99999.9)); // 100000
console.log(Math.floor(100000.8)); // 100000
console.log(Math.trunc(100000.55)); // 100000
console.log(Math.max(100, 1444, 100000)); // 100000

//Task2
console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

//Task3
console.log(Math.round(Math.log10(Number.MAX_SAFE_INTEGER))); // 16

//Task 4
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

//Task 5
let num = 10;
console.log(Number.isInteger(num) + Number.isInteger(num)); // 2

//task 6
let flt = 10.4;
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Number.parseInt(flt)); // 10

//task 7
console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4
