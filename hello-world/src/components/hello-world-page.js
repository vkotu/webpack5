import helloWorldButton from "../components/hello-world-button/hello-world-button.js";
import Heading from "../components/Heading/heading.js";
class HelloWorldPage {
  render() {
    const heading = new Heading();
    heading.render("Hello-World");

    const helloWorldBtn = new helloWorldButton();
    helloWorldBtn.render();
  }
}

export default HelloWorldPage;
