let inputs = document.querySelectorAll("input");
let selectOpt = document.querySelector("select");

inputs.forEach((e) =>
  e.addEventListener("blur", () => {
    window.sessionStorage.setItem(`input-${e.id}`, e.value);
  })
);

selectOpt.addEventListener("change", (e) => {
  window.sessionStorage.setItem("Country", e.target.value);
});

window.onload = () => {
  inputs.forEach((e) => {
    let savedData = window.sessionStorage.getItem(`input-${e.id}`);
    if (savedData) {
      e.value = savedData;
    }
  });
  let countrysaved = window.sessionStorage.getItem(`Country`);
  if (countrysaved) {
    selectOpt.value = countrysaved;
  }
};
