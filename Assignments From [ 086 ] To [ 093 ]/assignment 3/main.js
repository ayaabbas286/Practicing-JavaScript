let inputVal = document.getElementsByName("dollar")[0];
let dollarVal = document.getElementById("dollar-val");
let EgyVal = document.getElementById("eg-val");

inputVal.addEventListener("input", () => {
  dollarVal.innerText = inputVal.value;
  EgyVal.innerText = parseFloat(inputVal.value * 49.26).toFixed(2);
});
