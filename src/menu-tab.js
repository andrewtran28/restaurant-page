
import { tab_home, tab_menu, tab_about, content } from "./index.js";
import menuImage from "./img/menu.jpg";

export function menuTab () {
    const header = document.createElement("h1");
    const description = document.createElement("p");
    const imageMenu = document.createElement("img");

    tab_home.removeAttribute("class", "active");
    tab_menu.setAttribute("class", "active");
    tab_about.removeAttribute("class", "active");

    content.innerHTML = "";
    header.textContent = "What we serve at our restaurant!";
    description.setAttribute("class", "description");
    description.textContent = "At the #1 rated restaurnt in the world, we serve delicious food. Please note that the image you see above is not a menu item and therefore is not served here. I actually made this at home and it was SOOO good! So good in fact I should own a restaurant and serve this. If only...";
    imageMenu.src = menuImage;
    imageMenu.setAttribute("class", "image");
    imageMenu.setAttribute("width", "800px");
    imageMenu.setAttribute("alt", "Image of a (not) menu-item");
    
    content.appendChild(header);
    content.appendChild(imageMenu);
    content.appendChild(description);

}



