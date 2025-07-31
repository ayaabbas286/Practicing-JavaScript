let TodayDate = new Date();
TodayDate.setMonth(7, -31);
console.log(TodayDate);

let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
console.log(`"Previous Month Is ${
  monthNames[TodayDate.getMonth()]
} And Last Day Is ${TodayDate.getDate()}"
`);

// Needed Output

// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
