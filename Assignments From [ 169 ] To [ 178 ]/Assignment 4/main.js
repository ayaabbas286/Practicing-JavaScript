let _Date1 = new Date("1998-03-31T00:00:00Z");
_Date1.setHours(0);
let _Date2 = new Date("03-31-1998");
let _Date3 = new Date(1998, 2, 31);
console.log(_Date1);
console.log(_Date2);
console.log(_Date3);

// ouput

// Tue Mar 31 1998 00:00:00 GMT+0200 (Eastern European Standard Time)
// Tue Mar 31 1998 00:00:00 GMT+0200 (Eastern European Standard Time)
// Tue Mar 31 1998 00:00:00 GMT+0200 (Eastern European Standard Time)
