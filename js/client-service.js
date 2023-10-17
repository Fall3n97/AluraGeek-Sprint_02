const login = () => 
    fetch(`http://localhost:3000/users`).then((respuesta) => 
    respuesta.json());

const productListSW = () =>
    fetch(`http://localhost:3000/starwars`).then((respuesta) =>
    respuesta.json());

const productListConsoles = () =>
    fetch(`http://localhost:3000/consoles`).then((respuesta) =>
    respuesta.json());

const productListOthers = () =>
    fetch(`http://localhost:3000/various`).then((respuesta) =>
    respuesta.json());

export const clientServices = {
    login,
    productListSW,
    productListConsoles,
    productListOthers,
};