import { clientServices } from "./client-service.js";

console.log(clientServices);
const createNewItem = (name,price,image) => {

    const line = document.createElement("li");
    line.classList.add('article-link');
    const content = `
        <a href="/screens/item.html">
        <img src="${image}" alt="${name}"/>
        </a>
        <div class="article-link-text">
        <h5>${name}</h5>
        <strong>$${price}</strong>
        <a href="#">Ver Producto</a>
        </div>
    `;
    line.innerHTML = content;
    return line;
};

const itemSW = document.querySelector("[data-itemsSW]");
const itemConsoles = document.querySelector("[data-itemsConsoles]");
const itemOthers = document.querySelector("[data-itemsOthers]");

clientServices.productListSW().then((data) => {
    data.forEach(({name,price,image}) => {
        console.log(name,price,image);
        const newItem = createNewItem(name,price,image);
        itemSW.appendChild(newItem);
    });
}).catch((error) => alert("Ocurrio un Error", error));

clientServices.productListConsoles().then((data) => {
    data.forEach(({name,price,image}) => {
        console.log(name,price,image);
        const newItem = createNewItem(name,price,image);
        itemConsoles.appendChild(newItem);
    });
}).catch((error) => alert("Ocurrio un Error", error));

clientServices.productListOthers().then((data) => {
    data.forEach(({name,price,image}) => {
        console.log(name,price,image);
        const newItem = createNewItem(name,price,image);
        itemOthers.appendChild(newItem);
    });
}).catch((error) => alert("Ocurrio un Error", error));