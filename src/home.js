import restaurantImgSrc from "./images/restaurant.jpg";

function home(){

    const content = document.getElementById('content');
    content.innerHTML = '';

    const divHome = document.createElement("div");
    divHome.className = "homeCont"; 

    const divTitle = document.createElement("div");
    divTitle.className = "homeTitle"; 

    const title = document.createElement("h1");
    title.textContent = "Baruj's Restaurant";
    divTitle.appendChild(title);

    const divText = document.createElement("div");
    divText.className = "homeText";

    const cont0 = document.createElement("h2");
    cont0.textContent = "Dive into the real cusine";
    divText.appendChild(cont0);

    const cont = document.createElement("p");
    cont.textContent = "At The Gourmet Spot, we offer exquisite dining experiences with fresh ingredients and world-class chefs. Come taste the difference!";
    divText.appendChild(cont);

    const restaurantImg = document.createElement("img");
    restaurantImg.src = restaurantImgSrc;
    restaurantImg.alt = "Restaurant";
    restaurantImg.className = "restImg";

    divHome.appendChild(divTitle);
    divHome.appendChild(divText);
    divHome.appendChild(restaurantImg);
    content.appendChild(divHome);

}
export {home};