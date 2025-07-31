// Task 1
console.log("========= Task 1 ==========");

let num = 110; // "009"

if (num < 10) {
  console.log(`00${num}`);
} else if (num >= 10 && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(num);
}

// Task 2
console.log("========= Task 2 ==========");

let num1 = 9;
let str = "9";
let str2 = "20";
if (num1 === +str) {
  console.log(`${num1} Is The Same Value As ${str}`);
}
if (num1 == str && typeof num1 !== typeof str) {
  console.log(`${num1} Is The Same Value As ${str} But not The Same Type
`);
}
if (num1 !== str2 && typeof num1 !== typeof str2) {
  console.log(`${num1} Is Not The Same Value Or The Same Type As ${str2} `);
}
if (num1 !== str2 && typeof num1 === typeof +str2) {
  console.log(`${num1} Is The Same type As ${str2} But not The Same Value
  `);
}
// Output
("{num1} Is The Same Value As {str}");
("{num1} Is The Same Value As {str} But Not The Same Type");
("{num1} Is Not The Same Value Or The Same Type As {str2}");
("{str} Is The Same Type As {str2} But Not The Same Value");
//Task 3
console.log("========= Task 3 ==========");

let num_1 = 10;
let num2 = 30;
let num3 = "30";
if (num3 > num_1 && typeof num3 !== typeof num2){
    console.log(`${num3} Is Larger Than ${num_1} And Type string Not The Same Type As number`)
}else if (num3 > num_1 && num3 == num2 && typeof num3 != typeof num2 ){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}else if (num3 != num_1 && typeof num3 != typeof num_1 && typeof num3 != typeof num2 ){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
  // Needed Output
  "30 Is Larger Than 10 And Type string Not The Same Type As number";
("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number");
("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}");

console.log("========= Task 4 ==========");

// Edit What You Want Here

let _num1 = 20;
let _num2 = 1;
let _num3 = 20;
let _num4 = 60;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (_num1 > _num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (_num1 > _num2 && _num1 < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (_num1 > _num2 && _num1 === _num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((_num1 + _num2) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((_num1 + _num3) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((_num1 + _num2 + _num3) < _num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (_num4 - (_num1 + _num3) + _num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}