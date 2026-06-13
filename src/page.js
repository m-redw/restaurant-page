import tempImage from "./temp-image.png";

const content = document.querySelector('#content');

function docCreate(element) {
    return document.createElement(element);
}

function sectionCreate(className) {
    const section = docCreate('section');
    section.classList.add(className);
    return section;
} 

export {tempImage, content, docCreate, sectionCreate};