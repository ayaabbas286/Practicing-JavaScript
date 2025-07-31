let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

// Needed Output
let UniqNames = [...new Set(myFriends)].sort();
// (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']
console.log(UniqNames);
