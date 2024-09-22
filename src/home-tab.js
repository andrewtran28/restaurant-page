
import restaurantImage from "./img/restaurant.jpg";

export const homeTab = (() => {
    const content = document.querySelector("#content");
    const header = document.createElement("h1");
    const description = document.createElement("p");
    const image = document.createElement("img");

    
    header.textContent = "This is the best restaurant!";
    description.textContent = "Our restaurant is rated #1 in the world! We serve a large variety of cuisines and dishes.";
    image.src = restaurantImage;
    image.setAttribute("width", "500px");
    image.setAttribute("alt", "Image of the restaurant front");
    
    content.appendChild(header);
    content.appendChild(description);
    content.appendChild(image);

})();

