let CounterDiv = document.createElement("button");
CounterDiv.innerText = 10;
CounterDiv.classList.add("counter");
document.body.appendChild(CounterDiv);
function CountDown() {
  CounterDiv.innerText -= 1;
  if (CounterDiv.innerText === "0") {
    clearInterval(Counter);
    CounterDiv.innerText = "Start";
  }
}
let Counter = setInterval(CountDown, 1000);
CounterDiv.onclick = () => {
  if (CounterDiv.innerText === "Start") {
    window.open(
      "https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/",
      "blank"
    );
  }
};
