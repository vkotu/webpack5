import helloWorldButton from "./components/hello-world-button/hello-world-button.js";
import Heading from "./components/Heading/heading.js";
// import React from "react";
// import CoolGirl from "./components/CoolGirl/cool-girl.js";
// import _ from "lodash";

const heading = new Heading();
heading.render("Hello-World");

const helloWorldBtn = new helloWorldButton();
helloWorldBtn.render();

// const cg = new CoolGirl();
// cg.render();
if (process.env.NODE_ENV === "production") {
  console.log("Prod mode");
} else if (process.env.NODE_ENV === "development") {
  console.log("dev mode");
}

// helloWorldBtn.asd();
