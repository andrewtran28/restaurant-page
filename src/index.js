console.log("This is index.js!");

import "./styles.css";
import logo from "./img/logo.jpg";

import { homeTab } from "./home-tab.js";
import { menuTab } from "./menu-tab.js";
import { aboutTab } from "./about-tab.js";

const header = document.getElementById("logo");
const logoImage = document.createElement("img");
logoImage.src = logo;
logoImage.setAttribute("width", "100px");
logoImage.setAttribute("alt", "Logo image of the restaurant");
header.appendChild(logoImage);

const tab_home = document.getElementById("home-tab");
const tab_menu = document.getElementById("menu-tab");
const tab_about = document.getElementById("about-tab");
const content = document.getElementById("content");

export { content, tab_home, tab_menu, tab_about };

tab_home.addEventListener("click", homeTab);
tab_menu.addEventListener("click", menuTab);
tab_about.addEventListener("click", aboutTab);

homeTab();