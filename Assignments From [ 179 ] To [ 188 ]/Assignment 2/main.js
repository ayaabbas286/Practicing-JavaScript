fetch("Data.json")
  .then((res) => {
    console.log(res);
    let myData = res.json();
    console.log(myData);
    return myData;
  })
  .then((res) => {
    res.length = 5;
    console.log(res);
    let Div = document.querySelector(".container");
    let content = "";
    for (let i = 0; i < res.length; i++) {
      content += `<div>
        <h3>${res[i].title}</h3>
        <p>${res[i].description}</p>
      </div>`;
    }
    Div.innerHTML = content;
  });
