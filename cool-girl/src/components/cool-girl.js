// import React from "react";
import Heading from "../components/Heading/heading";
import CoolGirl from "../components/CoolGirl/cool-girl";

class CoolGirlClass {
  render() {
    const heading = new Heading();
    heading.render("Cool girl");
    const coolGirl = new CoolGirl();
    coolGirl.render();
    import("ImageCaptionApp/ImageCaption").then((ImageCaptionModule) => {
      const ImageCaption = ImageCaptionModule.default;
      const imageCaption = new ImageCaption();
      imageCaption.render("This Girl is so cool");
    });
  }
}

export default CoolGirlClass;
