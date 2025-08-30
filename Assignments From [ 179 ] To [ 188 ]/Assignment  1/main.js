let myApiFun = (ApiLink) => {
  return new Promise((res, rej) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = () => {
      if (myRequest.status === 200 && myRequest.readyState === 4) {
        res(JSON.parse(myRequest.responseText));
      } else {
        rej(Error("No Data Found"));
      }
    };
    myRequest.open("GET", ApiLink);
    myRequest.send();
  });
};
myApiFun("Data.json")
  .then((Data) => {
    Data.length = 5;
    let content = "";
    let Div = document.querySelector(".container");
    for (let i = 0; i < Data.length; i++) {
      content += `<div> <h3>${Data[i].title}</h3>
    <p>${Data[i].description}</p>
   </div>`;
    }
    Div.innerHTML = content;
  })
  .catch((err) => console.error(err));
