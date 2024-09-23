
import { tab_home, tab_menu, tab_about, content } from "./index.js";
import restaurantImage from "./img/restaurant.jpg";

export function homeTab() {
    const header = document.createElement("h1");
    const description = document.createElement("p");
    const imageHome = document.createElement("img");

    tab_home.setAttribute("class", "active");
    tab_menu.removeAttribute("class", "active");
    tab_about.removeAttribute("class", "active");

    content.innerHTML = "";
    header.textContent = "Welcome to the best restaurant in the world!";
    description.setAttribute("class", "description");
    description.textContent = "Our restaurant is rated #1 in the world! We serve a large variety of cuisines and dishes ranging from edible to non-edible foods. Come visit us for a delicious experience that involves sitting down in a chair and being served food that we cook in the kitchen. Please note at this time that we do not take any reservations unless you reserve in advance. End message. How was that? Was that good? Wait, is it still recording my message? How do I stop it from recording my voice. Stop. Okay Siri stop recording me! No, I don't want to share this message with my mother!";
    imageHome.src = restaurantImage;
    imageHome.setAttribute("class", "image");
    imageHome.setAttribute("width", "1100px");
    imageHome.setAttribute("alt", "Image of the restaurant front");
    
    content.appendChild(header);
    content.appendChild(imageHome);
    content.appendChild(description);

}

