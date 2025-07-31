let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let RegExp = /\d{4}:\w{2}\d{1}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}:\d{4}/gi;
console.log(RegExp.test(ip));
