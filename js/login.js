import { clientServices } from "./client-service.js";

const formLogin = document.querySelector("[data-formLogin]");

formLogin.addEventListener("submit", (e) => {
    e.preventDefault();

    const emailUser = document.querySelector("[data-tipo=email]").value;
    const passUser = document.querySelector("[data-tipo=password]").value;

    clientServices.login().then((data) => {
            data.forEach(({name, email, password}) => {
    
                if(emailUser === email && passUser === password){
                    window.location.href = "../screens/new-item.html";
                }else{
                    alert("Usuario incorrecto. Verifica el email y la contraseña");
                }

            });
    }).catch((error) => alert("Ocurrio un error"));
});
