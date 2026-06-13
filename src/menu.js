import {tempImage, content, docCreate, sectionCreate} from './page.js';

class Food {
    constructor(name, desc, price) {
        this.name = name;
        this.desc = desc;
        this.price = `$${price}`;
    }
}

function createHeader() {
    const h1 = docCreate('h1');
    h1.textContent = 'Menu';
    content.appendChild(h1);
}

function createItem(name, desc, price, container) {
    const h3 = docCreate('h3');
    h3.textContent = name;

    const pDesc = docCreate('p');
    pDesc.classList.add('description');
    pDesc.textContent = desc;

    const image = docCreate('img');
    image.src = tempImage;
    image.style.width = '160px';
    image.style.height = '90px';

    const pPrice = docCreate('p');
    pPrice.classList.add('price');
    pPrice.textContent = price;

    container.appendChild(h3);
    container.appendChild(pDesc);
    container.appendChild(image);
    container.appendChild(pPrice);
}

function createMenu(sectionName, foodArr) {
    const section = sectionCreate('menu-section');

    const h2 = docCreate('h2');
    h2.textContent = sectionName;
    
    const menuContainer = docCreate('div');
    menuContainer.classList.add('menu-container');

    for (let item of foodArr) {
        console.log(item)
        const menuItem = docCreate('div')
        menuItem.classList.add('menu-item');
        createItem(item.name, item.desc, item.price, menuItem);
        menuContainer.appendChild(menuItem);
    }

    section.appendChild(h2);
    section.appendChild(menuContainer);
    content.appendChild(section);
}

const crackedEgg = new Food('Cracked Egg', 'Literally just a cracked egg...', '3');
const yolk = new Food('Yolk', 'Just the cracked egg with only yolk.', '1.50')
const eggWhites = new Food('Egg Whites', 'Just the cracked egg with only egg whites.', '1.50')
const beverages = [crackedEgg, yolk, eggWhites];

const eggSalad = new Food('Egg Salad', 'For when you on that diet.', '3');
const singularEgg = new Food('Singular Egg', 'As name suggests!', '2.99');
const hardboiledEgg = new Food('Hard Boiled Egg', 'Yolk inside WILL be creamy!', '4');
const sideDishes = [eggSalad, singularEgg, hardboiledEgg];

const omelette = new Food('Omelette', 'Cheesy with ham inside! Also comes with a ketchup heart!', '9');
const omuRice = new Food('Omurice', 'So sugoi desu! An omellete over fried rice! Obviously comes with the ketchup heart!', '12');
const shakshuka = new Food('Shakshuka', 'Eggs fried in tomato paste. Comes with 2 slices of toasted bread.', '14');
const friedEggs = new Food('Fried Eggs', 'As name suggests.', '5');
const spinachQuiche = new Food('Spinanch Quiche', 'Kinda like a pizza, but without the pizza... Just eggs and spinach in a pie.', '13');
const chiliEggs = new Food('Chili Fried Eggs', 'Eggs fried with chili, served over hot rice.', '9');
const mainDishes = [omelette, omuRice, shakshuka, friedEggs, spinachQuiche, chiliEggs];

const flan = new Food('Flan', 'A classic French dessert. A creamy, silky custard, with caramel on the top. Oui Oui.', '6');
const custard = new Food('Custard', 'Just the custard... With berries!', '5.50');
const eggTart = new Food('Egg Tart', 'An eggy pastry. It has a bread-like crust with a sweet custard filling!', '4.50');
const desserts = [flan, custard, eggTart];



export function loadMenu() {
    createHeader();

    createMenu('Beverages', beverages);
    createMenu('Side Dishes', sideDishes);
    createMenu('Main Dishes', mainDishes);
    createMenu('Desserts', desserts);
}