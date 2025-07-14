let numEle = document.getElementsByName("elements")[0];
let EleTxt = document.getElementsByName("texts")[0];
let selectValue = document.querySelector("form select.input");
let submitBtn = document.getElementsByName("create")[0];
let TargetRes = document.getElementsByClassName("results")[0];

document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  TargetRes.innerHTML = "";

  let num = parseInt(numEle.value);
  let txt = EleTxt.value;
  let selcVal = selectValue.value;

  for (let i = 0; i < num; i++) {
    let createdEle = document.createElement(selcVal);
    createdEle.innerText = txt;
    createdEle.className = "box";
    createdEle.title = "Element";
    createdEle.id = `id-${i + 1}`;
    createdEle.style.padding = "10px 40px";
    createdEle.style.margin = "10px";
    createdEle.style.background = "rgb(2, 112, 215)";
    createdEle.style.color = "white";
    createdEle.style.height = "50px";
    TargetRes.appendChild(createdEle);
  }
};
