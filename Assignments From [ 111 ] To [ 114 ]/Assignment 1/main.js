let Fontfamily = document.querySelector("#fonts");
let FontColor = document.querySelector("#colors");
let FontSize = document.querySelector("#fonts-size");
let targetContent = document.querySelector(".target");

window.onload = () => {
  let savedFontFamily = window.localStorage.getItem("font-family");
  let savedFontColor = window.localStorage.getItem("FontColor");
  let savedFontSize = window.localStorage.getItem("FontSize");

  if (window.localStorage.getItem("font-family")) {
    // font family

    targetContent.style.fontFamily = savedFontFamily;
    Fontfamily.value = savedFontFamily;
  }
  if (window.localStorage.getItem("FontColor")) {
    targetContent.style.color = savedFontColor;
    FontColor.value = savedFontColor;
  }
  if (window.localStorage.getItem("FontSize")) {
    // font size

    targetContent.style.FontSize = savedFontSize;
    FontSize.value = savedFontSize;
  }

  // font family
};

// changing the font family

Fontfamily.addEventListener("change", (e) => {
  targetContent.style.fontFamily = e.target.value;
  window.localStorage.setItem("font-family", e.target.value);
});

// changing the font color

FontColor.addEventListener("change", (e) => {
  targetContent.style.color = e.target.value;
  window.localStorage.setItem("FontColor", e.target.value);
});

// changing the font size

FontSize.addEventListener("change", (e) => {
  targetContent.style.fontSize = `${e.target.value}px`;
  window.localStorage.setItem("FontSize", size);
});
