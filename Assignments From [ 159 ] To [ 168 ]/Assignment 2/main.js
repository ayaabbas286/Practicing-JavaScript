// Needed Output
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"

let _Date = new Date(0);
_Date.setHours(0);
_Date.setFullYear(1980);
_Date.setSeconds(1);
console.log(_Date);
