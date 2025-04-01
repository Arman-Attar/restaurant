import "./styles.css";
import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";

const buttons = document.querySelectorAll(".nav-button");
const content = document.getElementById("content");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    content.innerText = "";
    let target = e.target.innerText;
    if (target === "Home") renderHomePage();
    if (target === "Menu") renderMenuPage();
    if (target === "Contact") renderContactPage();
  });
});

renderHomePage();
