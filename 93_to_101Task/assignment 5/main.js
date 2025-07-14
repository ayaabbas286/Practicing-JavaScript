let firstEle = document.querySelector("div");
let sectEle = document.querySelector("span");
let thirdtEle = document.querySelector("p");
let fourthEle = document.querySelector("article");
let fifthEle = document.querySelector("section");

document.addEventListener("click", (e) => {
  let TagNameToTarget = e.target.tagName.toLowerCase();
  console.log(TagNameToTarget);
  
});
