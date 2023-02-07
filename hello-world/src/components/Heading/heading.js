import "./heading.scss";
class Heading {
  render(name) {
    const h1 = document.createElement("h1");
    const body = document.querySelector("body");
    h1.innerHTML = `Webpack is awesome, this is  ${name} page`;
    body.appendChild(h1);
  }
}

export default Heading;
