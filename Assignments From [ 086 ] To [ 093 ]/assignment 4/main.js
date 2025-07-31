let OneVal = document.getElementsByClassName("one")[0];
let two = document.getElementsByClassName("two")[0];
let temp = two.title;
let secdiv = OneVal.innerHTML;

two.title = OneVal.title;
OneVal.title = temp;
OneVal.innerHTML = two.innerHTML;
two.innerHTML = `${secdiv} ${document.getElementsByTagName("div").length}`;
// twoinnerHTML = ` ${secdiv} ${document.getElementsByTagName("div").length}`);
