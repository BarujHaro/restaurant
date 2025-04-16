import "./style/styles.css";
import { home } from "./home.js";
import { menu } from "./menu.js";
import { about } from "./about.js";

function tabs(){
    const homeBt = document.getElementById('homeb');
    const menuBt = document.getElementById('menub');
    const aboutBt = document.getElementById('aboutb');
    homeBt.addEventListener("click", home);
    menuBt.addEventListener("click", menu);
    aboutBt.addEventListener("click", about);
}

home();
tabs();