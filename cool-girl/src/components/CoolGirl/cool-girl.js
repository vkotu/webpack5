import coolGirl from "./too-cool.jpg";
import altText from "./alttext.txt";
import "./cool-girl.scss";

class CoolGirl {
  render() {
    const img = document.createElement("img");
    img.alt = altText;
    img.width = 300;
    img.src = coolGirl;
    img.classList.add("cool-girl");
    const body = document.querySelector("body");
    body.appendChild(img);
  }
}
export default CoolGirl;
