function CreatePopup() {
  let PopUp = document.createElement("div");
  let heading = document.createElement("h2");
  let subheading = document.createElement("p");
  let closeBtn = document.createElement("button");
  let overlay = document.createElement("div")

  PopUp.className = "popup";
  heading.className = "heading";
  subheading.className = "subheading";
  closeBtn.className = "close";
  overlay.className = "overlay"

  heading.innerText = "Welcome";
  subheading.innerText = "Welcome to Zero Webschool";
  closeBtn.innerText = "X";

  PopUp.appendChild(heading);
  PopUp.appendChild(subheading);
  PopUp.appendChild(closeBtn);
    document.body.appendChild(overlay);
  document.body.appendChild(PopUp);

  //close popup

  closeBtn.onclick = function () {
    PopUp.remove();
    overlay.remove();
  };
}
//end of popup creation

window.onload = function () {
  setTimeout(CreatePopup, 1000);
};
