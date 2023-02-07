import NavigationBar from "./components/navigation-bar/navigation-bar.js";
const navigationItems = [
  { url: "/hello-world-page", title: "Hello World Page" },
  { url: "/cool-girl-page", title: "Cool Girl Page" },
];

const navigationBar = new NavigationBar();
navigationBar.render(navigationItems);

const url = window.location.pathname;

if (url === "/hello-world-page") {
  import("HelloWorldApp/HelloWorldPage").then((HelloWorldPageModule) => {
    const HelloWorldPage = HelloWorldPageModule.default;
    const helloWorldPage = new HelloWorldPage();
    helloWorldPage.render();
  });
} else if (url === "/cool-girl-page") {
  import("CoolGirlApp/CoolGirlPage").then((CoolPageModule) => {
    const CoolGirlPage = CoolPageModule.default;
    const coolGirlPage = new CoolGirlPage();
    coolGirlPage.render();
  });
}
