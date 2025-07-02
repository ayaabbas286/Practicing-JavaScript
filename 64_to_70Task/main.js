console.log("=========== Task 1 ==+========");
function namePattern(zName) {}
namePattern("Aya abbas");
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let splitedName = zName.split(" ");
    return `${splitedName[0]} ${splitedName[1][0].toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    return `${zAge.slice(0, 2)}`;
  }
  function countryTwoLetters(zCountry) {
    return `${zCountry.slice(0, 2).toUpperCase()}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(
      zAge
    )}, You Live In ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "korea"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
console.log("=========== Task 2 ==+========");
let itsMe = () => `Iam an arrow Function`;
console.log(itsMe()); // Iam an arrow Function

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

console.log("=========== Task 3 ==+========");
function checkerr(zName) {
  return (status) => {
    return (salary) => {
      return status === "Available"
        ? `${zName}, My Salary Is ${salary}`
        : `Iam Not Avaialble`;
    };
  };
}

console.log(checkerr("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checkerr("Ahmed")("Not Available")()); // Iam Not Avaialble

let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;
console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
console.log(checker("Ahmed")("Not Available")()); // Iam Not Avaialble

console.log("=========== Task 3 ==+========");
function specialMix(...data) {
  let result = 0;
  let Founded = false;
  for (i = 0; i < data.length; i++) {
    let DataNumbers = parseInt(data[i]);
    if (!isNaN(DataNumbers)) {
      result += DataNumbers;
      Founded = true;
    }
  }
  return Founded ? result : `All Is Strings`;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings

