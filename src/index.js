import "./index.css";
import {loadHomepage} from "./homepage.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";

function clearContent() {
    const content = document.querySelector('#content');

    while (content.firstChild) {
        content.firstChild.remove();
    }
}

const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', ()=>{
    clearContent();
    loadHomepage();
});

const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', ()=>{
    clearContent();
    loadMenu();
});

const aboutButton = document.querySelector('.about');
aboutButton.addEventListener('click', ()=>{
    clearContent();
    loadAbout();
});

loadHomepage();