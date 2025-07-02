let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

// [-1, -10, 10, 20, -5, -3]
let numFFiltered = numsAndStrings
  .filter(function (e) {
    return (!isNaN(parseInt(e))) ? e : "";
  })
  .map(function (e) {
    return -e;
  });
console.log(numFFiltered);
// [-1, -10, 10, 20, -5, -3]
