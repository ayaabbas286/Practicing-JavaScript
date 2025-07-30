class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return ` Car Is Running Now`;
  }
  stop() {
    return ` Car Is Stopped`;
  }
}
// Needed Output

let carOne = new Car("MG", 2002, 420000);
let carTwo = new Car("BMW", 2010, 1000000);
let carThree = new Car("Nesan", 2005, 500000);

console.log(
  `Car One Name is ${carOne.n} And Model ${carOne.m} And Price Is ${carOne.p} `
);
console.log(carOne.run());

// ("Car One Name Is MG And Model Is 2022 And Price Is 420000");
// ("Car Is Running Now");
