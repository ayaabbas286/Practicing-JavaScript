let MyData = document.getElementById("data");
let MyRequest = new XMLHttpRequest();

MyRequest.open("GET", "articles.json");

console.log(MyRequest);

MyRequest.onreadystatechange = function () {
  let AddData = "";
  if (this.readyState === 4 && this.status === 200) {
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category = "All";
    }

    console.log(mainData);

    console.log("Data Updated");
    let updatedData = JSON.stringify(mainData);
    console.log(updatedData);
    console.log("Data Loaded in json");
    for (let i = 0; i < mainData.length; i++) {
      AddData += `<div>
    <h2>${mainData[i].address}</h2>
    <p>${i + 1}</p>
    <p>${mainData[i].Author}</p>
    <p>${mainData[i].category}</p>
  </div>`;
    }
    MyData.innerHTML = AddData;
    MyData.style.display = "flex";
    MyData.style.marginLeft = "100px";
  } else {
    console.log(this.status);
  }
};
MyRequest.send();
