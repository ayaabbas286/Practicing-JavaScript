let AddClass = document.querySelector(".classes-to-add");
let RemoveClass = document.querySelector(".classes-to-remove");
let Current = document.querySelector(".current");
let TargetDiv = document.querySelector(".classes-list div");

//adding classes in the target div
function ShowingClasses() {
  TargetDiv.innerHTML = "";
  if (Current.classList.length === 0) {
    TargetDiv.textContent = "No Classes To show";
  } else {
    let sortedClasses = Array.from(Current.classList).sort()
    for (let i = 0; i < sortedClasses.length; i++) {
      let span = document.createElement("span");
      span.innerHTML = sortedClasses[i];
      TargetDiv.appendChild(span);
    }
  }
}

//adding the event
AddClass.addEventListener("blur", () => {
  let NewClass = AddClass.value.trim();
  //split the values in the array and add it to the current div with lowercase
  if (NewClass !== "") {
    NewClass.split(" ").sort().forEach((c) => {
      if (c !== "") Current.classList.add(c.toLowerCase());
    });
    // empty the addclass input from the values that are written
    AddClass.value = "";
    ShowingClasses();
    //end of if statement
  }
});

//removing classes in the target div
RemoveClass.addEventListener("blur", () => {
  let RemovingClass = RemoveClass.value.trim();
  //split the values in the array and add it to the current div with lowercase
  if (RemovingClass !== "") {
    RemovingClass.split(" ").forEach((c) => {
      if (c !== "") Current.classList.remove(c.toLowerCase());
    });
    // empty the addclass input from the values that are written
    RemoveClass.value = "";
    ShowingClasses();
    //end of if statement
  }
});
