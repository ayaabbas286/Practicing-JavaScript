console.log("===== Task 1 =====");
let _start = 10;
let _end = 100;
let exclude = 40;

for (let i = _start; i <= _end; i++) {
  if (i == exclude) {
    continue;
  }
  console.log(i);
}
console.log("===== Task 2 =====");

let start = 10;
let end = 0;
let stop = 3;
for (let i = start; i > end; i--) {
  if (i == stop) {
    console.log(`${end}${i}`);
    break;
  }
  if (i < start) {
    console.log(`${end}${i}`);
  } else console.log(i);
}
console.log("===== Task 3 =====");
let start_ = 1;
let end_ = 6;
let breaker = 2;

for (let i = start_; i <= end_; i++) {
  console.log(i);
  console.log(`--${breaker}`);
  console.log(`--` + breaker * breaker);
}
console.log("===== Task 4 =====");
let index = 10;
let jump = 2;

for (let i = index; i > jump; ) {
  console.log(i);
  i -= jump;
}
console.log("===== Task 5 =====");
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let counter = +true;
for (let i = counter; i < friends.length; i++)
  if (friends[i].startsWith(letter.toUpperCase())) {
    continue;
  } else console.log(`${counter++} => ` + friends[i]);

console.log("===== Task 6 =====");
let start_letter = 0;
let swappedName = "elZerO";
let res = [];
for (i = start_letter; i < swappedName.length; i++) {
  swappedName[i] === swappedName[i].toLowerCase()
    ? res.push(swappedName[i].toUpperCase())
    : res.push(swappedName[i].toLowerCase());
}
FinalRes = res.join("");
console.log(FinalRes);

//"ELzERo"
console.log("===== Task 7 =====");
let start_7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
let numerone = +true;
for (let i = start_7; i < mix.length; i++) {
  if (typeof mix[i] === "number") {
    if (mix[i] == numerone) {
      continue;
    }
    console.log(mix[i]);
  }
}
// Output
2;
3;
4;
