// Removing the paragrph from the page
let paragraphRemove = document.getElementsByTagName("p")[0];
paragraphRemove.remove();
let TargetDiv = document.getElementsByClassName("our-element")[0];

let startEle = document.createElement("div");
startEle.className = "start";
startEle.title = "Start Element";
startEle.setAttribute("data-value", "Start");
startEle.innerText = "Start";

let endEle = document.createElement("div");
endEle.className = "End";
endEle.title = "End Element";
endEle.setAttribute("data-value", "End");
endEle.innerText = "End";

TargetDiv.before(startEle);
TargetDiv.after(endEle);

