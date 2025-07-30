let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let RegExp = /Os\d*O\b/gi;
// Output
// ['Os10O', 'OsO', 'Os100O']
console.log(specialNames.match(RegExp));
