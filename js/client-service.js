const login = () => 
    fetch(`http://localhost:3000/users`).then((respuesta) => 
    respuesta.json());

export const clientServices = {
    login
};