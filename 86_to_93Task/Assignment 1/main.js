/*
we can choose query selctor 4 times only
we can use query selector all 4 times
*/
let first = document.getElementById("elzero").innerText;
let second = document.getElementsByClassName("element")[0].innerText;
let third = document.getElementsByName("js")[0].innerText;
let fourth = document.getElementsByTagName("div")[0].innerText;
// using queryselector 4 methods
let fifth = document.querySelector("#elzero").innerHTML;
let sixth = document.querySelector(".element").innerText;
let seventh = document.querySelector("[name=js]").innerText;
let eight = document.querySelector("div").innerText;

// using queryselectorAll 4 methods
let nine = document.querySelectorAll("#elzero")[0].innerHTML;
let ten = document.querySelectorAll(".element")[0].innerText;
let eleven = document.querySelectorAll("[name=js]")[0].innerText;
let twelve = document.querySelectorAll("div")[0].innerText;

let thirteen = document.body.children.item(0).innerText;
let fourteen = document.body.childNodes[1].innerText;
let fifteen =
  document.body.children[document.body.children.length - 2].innerText;

console.log(first);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
console.log(sixth);
console.log(seventh);
console.log(eight);
console.log(nine);
console.log(ten);
console.log(eleven);
console.log(twelve);
console.log(thirteen);
console.log(fourteen);
console.log(fifteen);
