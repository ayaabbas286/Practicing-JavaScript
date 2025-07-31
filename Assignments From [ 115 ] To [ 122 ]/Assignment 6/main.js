let chosen = 2;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
let {
  title,
  age,
  available,
  skills: [, lastSkill],
} = myFriends[chosen - 1];

// If chosen === 1

console.log(title);
console.log(age);
console.log(available ? "Available" : "Not Available");
console.log(lastSkill);
