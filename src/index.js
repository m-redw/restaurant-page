import "./index.css";
import {loadHomepage} from "./homepage.js";

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

loadHomepage();