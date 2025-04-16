import lasaSrc from "./images/lasa.PNG";
import pastaSrc from "./images/pasta.PNG";
import burgerSrc from "./images/burger.jpg";
import pizzaSrc from "./images/pizza.PNG";

function menu(){

    const content = document.getElementById('content');
    content.innerHTML = '';

    const divMenu = document.createElement("div");
    divMenu.className = "menuCont"; 

    const divTitle = document.createElement("div");
    divTitle.className = "titleMenu"; 
    const title = document.createElement("h1");
    title.textContent = "Menu";
    divTitle.appendChild(title);

    divMenu.appendChild(divTitle);

    const foods = [
        { name: "Pizza", price: "20 $", imgSrc: pizzaSrc },
        { name: "Hamburger", price: "15 $", imgSrc: burgerSrc },
        { name: "Pasta", price: "17 $", imgSrc: pastaSrc },
        { name: "Lasagna", price: "21 $", imgSrc: lasaSrc }
    ];

    const menuItems = document.createElement("div");
    menuItems.className = "menuItems";

    foods.forEach(food => {
        const foodItem = document.createElement("div");
        foodItem.className = "foodItem";

        const foodImg = document.createElement("img");
        foodImg.src = food.imgSrc;
        foodImg.alt = food.name;
        foodImg.className = "foodImg";

        const foodDes = document.createElement("p");
        foodDes.textContent = `${food.name} ............ ${food.price}`;
        foodItem.appendChild(foodImg);
        foodItem.appendChild(foodDes);

        menuItems.appendChild(foodItem);

    });

    divMenu.appendChild(menuItems);
    content.appendChild(divMenu);

}
export {menu};