let Msg = prompt("Print Number From – To", "Example: 5-20");
let printedLoop = document.getElementById("para");
if (Msg) {
  let num = Msg.split("-");

  let num1 = parseInt(num[0]);
  let num2 = parseInt(num[1]);

  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  let output = "";
  for (let i = start; i <= end; i++) {
    output += i + "</br>";
  }
         printedLoop.innerHTML = output;
      } else {
        alert("please enter valid number");
      }


