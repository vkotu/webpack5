import "./hello-world-button.scss";

class helloWorldButton {
  buttonCssClass = "hello-world-button";
  render() {
    const button = document.createElement("button");
    button.innerHTML = "Hello World";
    button.classList.add(this.buttonCssClass);
    const body = document.querySelector("body");
    body.appendChild(button);
    button.onclick = () => {
      const p = document.createElement("p");
      p.innerHTML = "Hello world";
      p.classList.add("hello-world-text");
      body.appendChild(p);
    };
  }
}

export default helloWorldButton;
