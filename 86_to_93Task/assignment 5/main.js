let AllImages = document.getElementsByTagName("img");
for (i = 0; i < AllImages.length; i++) {
if(AllImages[i].hasAttribute("alt")){
AllImages[i].setAttribute("alt", "old")
}else {
AllImages[i].setAttribute("alt", "Elzero New")
}}
