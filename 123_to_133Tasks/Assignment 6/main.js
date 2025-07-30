let chars1 = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars2 = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let chars3 = ["Z", "Y", "A", "D", "E", 10, 1];
let chars4 = ["A", "B", "C", "D", "E", 10, 15, 6];
let chars5 = [10, 15, 6, "A", "B", "C", "D", "E"];

function filteringArray(arr) {
  let numbersArr = arr.filter((e) => typeof e === "number").length;
  console.log(numbersArr);

  let sortedArr = arr.sort((a, b) => {
    return typeof a === "number" && typeof b === "string"
      ? -1
      : typeof a === "string" && typeof b === "number"
      ? 1
      : 0;
  });
  sortedArr.copyWithin(0, numbersArr, numbersArr * 2);
  console.log(sortedArr);
}
filteringArray(chars3);
