let start = performance.now();

for (let i = 1; i < 100000; i++) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(i));
  document.body.appendChild(div);
}
let end = performance.now();
let duration = (end - start).toFixed();
console.log(`"Loop Took ${duration} Milliseconds."
`);
