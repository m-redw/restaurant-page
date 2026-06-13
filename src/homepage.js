import {tempImage, content, docCreate, sectionCreate} from './page.js';

function createHeader() {
    const header = docCreate('h1');
    header.textContent = "Ed's Eggs"
    content.appendChild(header);
}

function createIntro() {
    const section = sectionCreate('intro');

    const image = docCreate('img');
    image.src = tempImage;
    image.style.width = '240px';
    image.style.height = '135px';

    const crack = docCreate('em');
    const youUp = docCreate('span');
    const p = docCreate('p');

    p.textContent = `Hey, I'm Ed and I love me some eggs!
                This restaurant has egg dishes galore!
                From just quail eggs to omurice, the variety
                of egg dishes may `;
    crack.textContent = 'crack';
    youUp.textContent = ' you up!'

    p.appendChild(crack);
    p.appendChild(youUp);

    section.appendChild(image);
    section.appendChild(p);
    content.appendChild(section);
}

function createOpen() {
    const section = sectionCreate('open');

    const h2 = docCreate('h2');
    h2.textContent = 'Open'

    const pDays = docCreate('p');
    const pHours = docCreate('p');
    pDays.textContent = 'Mon - Thur';
    pHours.textContent = '8am - 8pm';

    section.appendChild(h2);
    section.appendChild(pDays);
    section.appendChild(pHours);
    content.appendChild(section)
}

function createLocation() {
    const section = sectionCreate('location');

    const h2 = docCreate('h2');
    h2.textContent = 'Location'

    const pLocation = docCreate('p');
    pLocation.textContent = '399 Egg St, Crackissipi, Yolkica';

    section.appendChild(h2);
    section.appendChild(pLocation);
    content.appendChild(section)
}

export function loadHomepage() {
    createHeader();
    createIntro();
    createOpen();
    createLocation();
}
