let nums = [2, 12, 11, 5, 10, 1, 99];
let newNums = nums.reduce(
  (acc, curr) => (curr % 2 === 0 ? acc * curr : acc + curr),
  1
);
console.log(newNums);

// 500
