import "./navigation-bar.scss";

class NavigationBar {
  render(nagivationItems) {
    const liItems = nagivationItems.map((navItem) => {
      return `<li>
                <a href="${navItem.url}">${navItem.title}</a>
            </li>`;
    });
    const ul = document.createElement("ul");
    ul.innerHTML = liItems.join("");
    ul.classList.add("navigation-bar");
    document.querySelector("body").appendChild(ul);
  }
}

export default NavigationBar;
