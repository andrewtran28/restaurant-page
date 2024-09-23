import { tab_home, tab_menu, tab_about, content } from "./index.js";
import aboutImage from "./img/chef-about.jpg";

export function aboutTab() {
    const header = document.createElement("h1");
    const description = document.createElement("p");
    const imageAbout = document.createElement("img");

    tab_home.removeAttribute("class", "active");
    tab_menu.removeAttribute("class", "active");
    tab_about.setAttribute("class", "active");

    content.innerHTML = "";
    header.textContent = "Who we are...";
    description.setAttribute("class", "description");
    description.textContent = "Who we are? Well I think my biggest weakness is that I'm a bad listener. This restaurant was established in 2024. The image above is a stock photo of a chef at a different restaurant. We actually don't cook any of our foods in-house The food is just bought from other restaurants, re-heated in the microwave (including our ice cream), set out to cool in the fridge, then finally served at the wrong dinner table.";
    imageAbout.src = aboutImage;
    imageAbout.setAttribute("width", "800px");
    imageAbout.setAttribute("alt", "Image of the restaurant front");
    imageAbout.setAttribute("class", "image");
    
    content.appendChild(header);
    content.appendChild(imageAbout);
    content.appendChild(description);

}

