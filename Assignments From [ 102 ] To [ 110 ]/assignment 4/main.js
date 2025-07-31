let CounterDiv = document.createElement("button");
CounterDiv.innerText = 10;
CounterDiv.classList.add("counter");
document.body.appendChild(CounterDiv);
function CountDown() {
  CounterDiv.innerText -= 1;
  if (CounterDiv.innerText === "5") {
    window.location.href =
      "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/";
    if (CounterDiv.innerText === "0") {
      clearInterval(Counter);
    }
  }
}
let Counter = setInterval(CountDown, 1000);
