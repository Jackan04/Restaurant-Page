import "./styles.css";
import { renderHomePage } from "./home.js";
import { renderMenuPage } from "./menu.js";
import { renderAboutPage } from "./about.js";

function initializePage(){
    const content = document.querySelector("#content");
    const nav = document.querySelector("nav");
    content.innerHTML = "";
    renderHomePage()

    nav.addEventListener("click", (event) =>{
        const targetID = event.target.id;
        content.innerHTML = "";
        if(targetID === "btn-nav-home"){
            renderHomePage();
        }else if(targetID === "btn-nav-menu"){
            renderMenuPage();
        }
        else if(targetID === "btn-nav-about"){
            renderAboutPage();
        }
    })
}




initializePage();