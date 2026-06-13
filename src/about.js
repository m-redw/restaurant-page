import {tempImage, content, docCreate, sectionCreate} from './page.js';

function createHeader() {
    const header = docCreate('h1');
    header.textContent = "About"
    content.appendChild(header);
}

function createIntro() {
    const section = sectionCreate('about');

    const h2 = docCreate('h2');
    h2.textContent = "Hey, I'm Ed."

    const p1 = docCreate('p');
    p1.textContent = `I've been loving eggs ever since I was a kid.
                From hard boiled to sunny-side-up, I really do
                love my eggs.`;
    
    const p2 = docCreate('p');
    p2.textContent = `I made this restaurant to share my love with them.
                If you love eggs as much as me, come try my restaurant out.`;
    
    const p3 = docCreate('p');
    p3.textContent = '(399 Egg St, Crackissipi, Yolkica)';

    section.appendChild(h2);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(p3);
    content.appendChild(section);
}

function createDisclaimer() {
    const section = sectionCreate('disclaimer');

    const h2 = docCreate('h2');
    h2.textContent = 'Disclaimer!';

    const p = docCreate('p');
    const fake = docCreate('em')
    const pRest = docCreate('span');
    p.textContent = `This is all `;
    fake.textContent = 'fake';
    pRest.textContent = `. I made this website for a fun project. 
                Sadly, no real Ed's Eggs restaurant.`
    p.appendChild(fake);
    p.appendChild(pRest);
    
                
    section.appendChild(h2);
    section.appendChild(p);
    content.appendChild(section);
}

export function loadAbout() {
    createHeader();
    createIntro();
    createDisclaimer();
}