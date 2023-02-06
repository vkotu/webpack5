import coolGirl from "./too-cool.jpg";
import altText from "./altText.txt";

function addImage() {
  const img = document.createElement("img");
  img.alt = altText;
  img.width = 300;
  img.src = coolGirl;
  const body = document.querySelector("body");
  body.appendChild(img);
}
export default addImage;
