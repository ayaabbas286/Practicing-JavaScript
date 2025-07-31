let dateNow = new Date();
let birthday = new Date("31 march 1998");
let MyAge = dateNow - birthday;
let seconds = MyAge / 1000;
let Minutes = seconds / 60;
let hours = Minutes / 60;
let days = hours / 24;
let Months = days / 30;
let years = Months / 12;

console.log(years);

// Needed Output

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"
