// Task one
let numberOne = 10;
let numberTwo = 20;
// Ouput
console.log(numberOne + "" + numberTwo); // Normal Concatenate => 1020
console.log(typeof (numberOne + "" + numberTwo)); // Normal Concatenate => String
console.log(`${numberOne}${numberTwo}`); // Template Literals Way => 1020
console.log(typeof(`${numberOne}${numberTwo}`)); // Template Literals Way => String

console.log(numberTwo + "\n" + numberOne);/*
  Normal Concatenate
  20
  10
*/

console.log(`${numberTwo}
${numberOne}`);/*
  Template Literals Way
  20
  10
*/

// Task two
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object

// Task three
console.log("\` I'm In \n \\\\ \n Love \\\\ \"\"\" \'\'\' \n \+\+ with \+\+ \n \\\"\"\"\\\"\"\"\n \"\"JavaScript\"\"\`\`")
// `I'm In
// \\
// Love \\ """ '''
// ++ With ++
// \"""\"""
// ""JavaScript""``

// Task Four

let a = 21;
let b = 20;

console.log("Write Your Code Here"); // _21_2021_2021_2021_20_
console.log(`_ ${a}_${b}${a}_${b}${a}_${b}${a}_${b}`)