function about(){

    const content = document.getElementById('content');
    content.innerHTML = '';
   
    const divAbout = document.createElement("div");
    divAbout.className = "divAbout"; 

    const divTitle = document.createElement("div");

    const title = document.createElement("h1");
    title.textContent = "About";
    divTitle.appendChild(title);
    divTitle.className = "titleAbout"; 
    divAbout.appendChild(divTitle);

    const divText = document.createElement("div");
    divText.className = "textAbout"; 
    divAbout.appendChild(divText);

    const cont = document.createElement("p");
    cont.textContent = "Welcome to Baruj's restaurant";
    divText.appendChild(cont);
    
    const cont2 = document.createElement("p");
    cont2.textContent = "Immerse yourself in the authentic American experience at our restaurant. Enjoy our juicy burgers made with premium beef, artisan pizzas with a wide variety of toppings, and classic sides like fries and onion rings. The perfect place for a get-together with friends or a family dinner!";
    divText.appendChild(cont2);
 
    content.appendChild(divAbout);
   

}
export {about};