let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
let MyNewMap = new Map(Object.entries(myInfo));
console.log(MyNewMap);
console.log(MyNewMap.size);
console.log(MyNewMap.has("role"));

// Needed Output
// Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
// 3
// true
