console.log("========== Task 1 ==========");
function sayHello(theName, theGender) {
  if (theGender === "Male") {
    console.log(`Hello Mr ${theName}`);
  } else if (theGender === "Female") {
    console.log(`Hello Miss ${theName}`);
  } else console.log(`Hello ${theName}`);
}
// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"

console.log("========== Task 2 ==========");
function calculate(firstNum, secondNum, operation) {
  if (operation === "add") {
    console.log(firstNum + secondNum);
  } else if (operation === "subtract") {
    console.log(firstNum - secondNum);
  } else if (operation === "multiply") {
    console.log(firstNum * secondNum);
  } else if (secondNum === undefined) {
    console.log(`Second Number Not Found`);
  } else console.log(firstNum + secondNum);
}
// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600

console.log("========== Task 3 ==========");
function ageInTime(theAge) {
  let Ageyear = theAge;
  let AgeMonth = theAge * 12;
  let AgeWeek = AgeMonth * 4;
  let AgeDay = theAge * 365;
  let AgeHour = AgeDay * 24;
  let AgeMinutes = AgeHour * 60;
  let AgeSeconds = AgeMinutes * 60;

  if (theAge < 100 && theAge > 10) {
    console.log(`Your Age Is ${Ageyear} Years`);
    console.log(`Your Age Is ${AgeMonth} Months`);
    console.log(`Your Age Is ${AgeWeek} Weeks`);
    console.log(`Your Age Is ${AgeDay} Days`);
    console.log(`Your Age Is ${AgeHour} Hours`);
    console.log(`Your Age Is ${AgeMinutes} Minutes`);
    console.log(`Your Age Is ${AgeSeconds} Seconds`);
  } else console.log(`Sorry, Your Age Out Of Range`);
}

// Needed Output
ageInTime(110); // Sorry, Your Age Out Of Range
ageInTime(38); // Months Example => 456 Months
console.log("========== Task 4 ==========");

function checkStatus(a, b, c) {
  let MyArray = [a, b, c];
  let _Name = MyArray.find((e) => typeof e === "string");
  let _Age = MyArray.find((e) => typeof e === "number");
  let _hire = MyArray.find((e) => typeof e === "boolean");
  if (_hire)
    console.log(
      `Hello ${_Name}, Your Age Is ${_Age}, You Are Available For Hire`
    );
  else
    console.log(
      `Hello ${_Name}, Your Age Is ${_Age}, You Are Not Available For Hire`
    );
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

console.log("========== Task 5 ==========");
function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (let i = startYear; i <= endYear; i++) {
    document.write(`<option value = ${i}>${i}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);

console.log("========== Task 6 ==========");
function multiply(...numbers) {
  let result = 1;
  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === "number") {
      result *= parseInt(numbers[i]);
    }
  }
  console.log(result);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
