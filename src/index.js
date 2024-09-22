console.log("This is index.js!");

import {homeTab} from "./home-tab.js";

const tab_home = document.querySelector(".home-tab");
homeTab();

tab_home.addEventListener("click", () =>{
    content.innerHTML ="";
    homeTab();
});

